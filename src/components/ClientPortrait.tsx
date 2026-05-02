import type { ClientPortrait as CP } from '../types'

const rows: { key: keyof CP; label: string }[] = [
  { key: 'netWorthBand', label: 'Net worth (investable)' },
  { key: 'holdingsSummary', label: 'Holdings snapshot' },
  { key: 'incomeTarget', label: 'Income target' },
  { key: 'liquidityNeed', label: 'Liquidity need' },
  { key: 'riskTolerance', label: 'Risk tolerance' },
  { key: 'currencyPref', label: 'Currency' },
  { key: 'objectionBias', label: 'Objection bias' },
]

export function ClientPortrait({ data }: { data: CP }) {
  return (
    <section className="flex h-full flex-col rounded-lg border border-navy/10 bg-panel p-6 shadow-panel">
      <h2 className="font-display text-2xl text-ink">Client portrait</h2>
      <p className="mt-1 text-xs text-graphite">Dense facts, not CRM clutter.</p>
      <dl className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.key} className="border-b border-navy/5 pb-4 last:border-0 last:pb-0">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-mist">{r.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-navy">{data[r.key]}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
