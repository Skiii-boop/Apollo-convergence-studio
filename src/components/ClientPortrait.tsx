import type { ClientPortrait as CP } from '../types'

const rows: { key: keyof CP; label: string; multiline?: boolean }[] = [
  { key: 'netWorthBand', label: 'Net worth (investable)' },
  { key: 'holdingsSummary', label: 'Holdings snapshot', multiline: true },
  { key: 'incomeTarget', label: 'Income target', multiline: true },
  { key: 'liquidityNeed', label: 'Liquidity need', multiline: true },
  { key: 'riskTolerance', label: 'Risk tolerance', multiline: true },
  { key: 'currencyPref', label: 'Currency' },
  { key: 'objectionBias', label: 'Objection bias', multiline: true },
]

interface ClientPortraitProps {
  data: CP
  onChange: (key: keyof CP, value: string) => void
  onResetExample?: () => void
}

export function ClientPortrait({ data, onChange, onResetExample }: ClientPortraitProps) {
  return (
    <section className="flex h-full flex-col rounded-lg border border-navy/10 bg-panel p-6 shadow-panel">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="font-display text-2xl text-ink">Client portrait</h2>
          <p className="mt-1 text-xs text-graphite">Editable fields — defaults are a worked example for the demo.</p>
        </div>
        {onResetExample ? (
          <button
            type="button"
            onClick={onResetExample}
            className="shrink-0 rounded-md border border-navy/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-graphite hover:border-copper/40 hover:text-ink"
          >
            Reset example
          </button>
        ) : null}
      </div>
      <dl className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.key} className="border-b border-navy/5 pb-4 last:border-0 last:pb-0">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-mist">
              <label htmlFor={`portrait-${r.key}`}>{r.label}</label>
            </dt>
            <dd className="mt-1">
              {r.multiline ? (
                <textarea
                  id={`portrait-${r.key}`}
                  value={data[r.key]}
                  onChange={(e) => onChange(r.key, e.target.value)}
                  rows={3}
                  className="w-full resize-y rounded-md border border-navy/15 bg-ivory/80 px-3 py-2 text-sm leading-relaxed text-navy shadow-inner focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30"
                />
              ) : (
                <input
                  id={`portrait-${r.key}`}
                  type="text"
                  value={data[r.key]}
                  onChange={(e) => onChange(r.key, e.target.value)}
                  className="w-full rounded-md border border-navy/15 bg-ivory/80 px-3 py-2 text-sm text-navy shadow-inner focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30"
                />
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
