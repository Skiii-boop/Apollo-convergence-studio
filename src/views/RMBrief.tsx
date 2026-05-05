import { useMemo, useState } from 'react'
import type { ClientPortrait } from '../types'
import { proposedSleeves } from '../lib/allocationModel'
import { diagnosisBullets, thesisLine } from '../data/demoClient'
import { objectionCatalog } from '../data/objections'
import {
  APOLLO_ACADEMY,
  APOLLO_IG_PRIVATE_CREDIT_STRATEGY,
  APOLLO_INSIGHTS,
} from '../data/apolloReferences'

interface RMBriefProps {
  liquidityBudget: number
  portrait: ClientPortrait
}

export function RMBrief({ liquidityBudget, portrait }: RMBriefProps) {
  const [copied, setCopied] = useState(false)
  const text = useMemo(() => {
    const prop = proposedSleeves(liquidityBudget)
    const topSleeves = [...prop].sort((a, b) => b.pct - a.pct).slice(0, 6)
    const objections = objectionCatalog.map((o) => o.prompt)
    return [
      'RM BRIEF — INTERNAL PREP (interview prototype)',
      '—',
      'CLIENT SNAPSHOT',
      `Net worth: ${portrait.netWorthBand}`,
      `Holdings: ${portrait.holdingsSummary}`,
      `Income target: ${portrait.incomeTarget}`,
      `Liquidity: ${portrait.liquidityNeed}`,
      `Risk: ${portrait.riskTolerance}`,
      `Currency: ${portrait.currencyPref}`,
      `Objection bias: ${portrait.objectionBias}`,
      '',
      'PORTFOLIO DIAGNOSIS',
      ...diagnosisBullets.map((b) => `• ${b}`),
      '',
      `THESIS BAR: ${thesisLine}`,
      '',
      `CONSTRUCTION (illiquidity budget slider = ${liquidityBudget.toFixed(0)} / 100)`,
      ...topSleeves.map((s) => `• ${s.label}: ~${s.pct}%`),
      '',
      'PRODUCT RATIONALE (talking points)',
      '• Public IG remains for price discovery and redeployable liquidity — convergence is construction, not “sell public.”',
      '• Investment-grade private credit: sleeve only after liquidity ladder; pair with Apollo public framing on IG share of private markets (strategy page + insights).',
      '• ABF / secondaries: pattern and vintage diversification vs. single-factor corporate stack — size to governance comfort.',
      '',
      'APOLLO PUBLIC REFERENCES (verify URLs before meetings)',
      `• IG private credit strategy: ${APOLLO_IG_PRIVATE_CREDIT_STRATEGY}`,
      `• Demystifying Private IG: ${APOLLO_INSIGHTS.demystifyingPrivateIgDec2024}`,
      `• Liquidity in Private IG: ${APOLLO_INSIGHTS.liquidityPrivateIgFeb2026}`,
      `• Convergence credit: ${APOLLO_INSIGHTS.convergenceCreditMay2026}`,
      `• Credit cycle / platform breadth: ${APOLLO_INSIGHTS.investingAcrossCreditCycleApr2026}`,
      `• Apollo Academy — learning center: ${APOLLO_ACADEMY.learningCenter}`,
      '',
      'OBJECTIONS TO REHEARSE (full list)',
      ...objections.map((o, i) => `${i + 1}. ${o}`),
      'Expand each in Objection Simulator — use “Deeper prep” for 60–90s tracks and Apollo echo lines.',
      '',
      'COMPLIANT RISK LANGUAGE (examples — firm-approved wording supersets this)',
      '• Illiquidity premium is not guaranteed; marks may lag fundamentals; past spread pickup is not indicative of future results.',
      '• Private and structured sleeves involve manager, documentation, operational, and liquidity risk; stress includes slower distributions, gates, and loss of principal.',
      '• No single sleeve solves retirement income; suitability depends on client objectives, constraints, and full financial picture.',
      '',
      'MEETING CHECKLIST',
      '• Confirm liquidity months and cap-call calendar before any illiquidity increase.',
      '• Agree max sleeve weights for private IG, ABF, secondaries vs. public IG trim.',
      '• Book specialist follow-up if client wants document-level ABF or secondaries mechanics.',
      '',
      'NEXT MEETING GOAL',
      'Align on liquidity ladder first, then agree on sleeve caps vs. public IG trim; leave with one agreed homework: policy statement on illiquidity budget.',
    ].join('\n')
  }, [liquidityBudget, portrait])

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
            Pulls your edited client portrait, live liquidity slider, full objection list, and Apollo public reference URLs.
            Tone: internal prep — not marketing or compliance-approved disclosure language.
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
