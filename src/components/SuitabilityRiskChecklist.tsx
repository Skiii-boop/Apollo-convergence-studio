import { suitabilityChecklistItems, type SuitabilityChecklistState } from '../data/suitabilityChecklist'
import type { SuitabilityChecklistItemId } from '../types'

interface SuitabilityRiskChecklistProps {
  state: SuitabilityChecklistState
  onToggle: (id: SuitabilityChecklistItemId) => void
  title?: string
}

export function SuitabilityRiskChecklist({
  state,
  onToggle,
  title = 'Suitability & Risk Checklist',
}: SuitabilityRiskChecklistProps) {
  const checked = suitabilityChecklistItems.filter((item) => state[item.id]).length
  const total = suitabilityChecklistItems.length
  const pct = Math.round((checked / total) * 100)

  return (
    <section className="rounded-lg border border-navy/10 bg-panel p-6 shadow-panel">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-copper">Pre-trade controls</p>
          <h3 className="font-display text-2xl text-ink">{title}</h3>
        </div>
        <p className="font-mono text-xs text-mist">
          {checked}/{total} complete ({pct}%)
        </p>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-bone">
        <div className="h-full rounded-full bg-copper/80 transition-all duration-studio" style={{ width: `${pct}%` }} />
      </div>

      <ul className="mt-5 space-y-3">
        {suitabilityChecklistItems.map((item) => (
          <li key={item.id} className="rounded-md border border-navy/10 bg-ivory/50 p-3">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={state[item.id]}
                onChange={() => onToggle(item.id)}
                className="mt-1 h-4 w-4 accent-copper"
              />
              <span>
                <span className="block text-sm font-semibold text-ink">{item.label}</span>
                <span className="mt-1 block text-xs text-graphite">{item.help}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
