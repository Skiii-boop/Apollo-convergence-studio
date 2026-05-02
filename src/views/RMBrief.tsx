import { useMemo, useState } from 'react'
import { proposedSleeves } from '../lib/allocationModel'
import { clientPortrait, diagnosisBullets, thesisLine } from '../data/demoClient'
import { objectionCatalog } from '../data/objections'

interface RMBriefProps {
  liquidityBudget: number
}

export function RMBrief({ liquidityBudget }: RMBriefProps) {
  const [copied, setCopied] = useState(false)
  const text = useMemo(() => {
    const prop = proposedSleeves(liquidityBudget)
    const topSleeves = [...prop].sort((a, b) => b.pct - a.pct).slice(0, 4)
    const objections = objectionCatalog.slice(0, 3).map((o) => o.prompt)
    return [
      'RM BRIEF — INTERNAL PREP',
      '—',
      `Client snapshot: ${clientPortrait.netWorthBand}. ${clientPortrait.holdingsSummary}`,
      `Income / liquidity: ${clientPortrait.incomeTarget}; ${clientPortrait.liquidityNeed}`,
      `Risk / bias: ${clientPortrait.riskTolerance}; ${clientPortrait.objectionBias}`,
      '',
      'Portfolio diagnosis:',
      ...diagnosisBullets.map((b) => `• ${b}`),
      '',
      `Thesis bar: ${thesisLine}`,
      '',
      `Construction note (illiquidity budget slider = ${liquidityBudget.toFixed(0)}):`,
      ...topSleeves.map((s) => `• ${s.label}: ~${s.pct}%`),
      '',
      'Top objections to rehearse:',
      ...objections.map((o, i) => `${i + 1}. ${o}`),
      '',
      'Compliant risk language (examples):',
      '• Illiquidity premium is not guaranteed; marks may lag fundamentals.',
      '• Private and structured sleeves involve manager, documentation, and operational risk.',
      '• Stress scenarios include slower distributions, gates, and loss of capital.',
      '',
      'Next meeting goal:',
      'Align on liquidity ladder first, then agree on sleeve caps for ABF / private IG / secondaries vs. public IG trim.',
    ].join('\n')
  }, [liquidityBudget])

  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
      <article className="rounded-lg border border-navy/10 bg-panel p-8 font-mono text-[12px] leading-relaxed text-navy shadow-panel whitespace-pre-wrap">
        {text}
      </article>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-navy/10 bg-ivory/80 p-5">
          <p className="font-display text-xl text-ink">One-page export</p>
          <p className="mt-2 text-sm text-graphite">
            Generated from the live board state (liquidity slider) and the default objection set. Tone: internal prep
            note, not marketing collateral.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void copy()}
          className="rounded-md border border-navy bg-navy px-4 py-3 text-sm font-semibold text-ivory shadow-panel transition-opacity hover:opacity-90"
        >
          {copied ? 'Copied' : 'Copy to clipboard'}
        </button>
      </div>
    </div>
  )
}
