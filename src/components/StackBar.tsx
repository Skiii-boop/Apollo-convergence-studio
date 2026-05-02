import type { Sleeve } from '../types'
import { sleeveColor } from '../lib/allocationModel'

export function StackBar({ sleeves, caption }: { sleeves: Sleeve[]; caption: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-mist">{caption}</p>
      <div
        className="mt-3 flex h-14 w-full overflow-hidden rounded-md border border-navy/10 shadow-inner"
        role="img"
        aria-label={`Allocation ${caption}`}
      >
        {sleeves.map((s) => (
          <div
            key={s.id}
            style={{ width: `${s.pct}%` }}
            className={`${sleeveColor(s.tone)} relative min-w-0 border-r border-white/10 transition-all duration-studio`}
            title={`${s.label}: ${s.pct}%`}
          >
            <span className="sr-only">
              {s.label} {s.pct}%
            </span>
          </div>
        ))}
      </div>
      <ul className="mt-4 space-y-2">
        {sleeves.map((s) => (
          <li key={s.id} className="flex items-center justify-between gap-3 text-xs text-graphite">
            <span className="flex items-center gap-2 min-w-0">
              <span className={`h-2 w-2 shrink-0 rounded-sm ${sleeveColor(s.tone)}`} />
              <span className="truncate">{s.label}</span>
            </span>
            <span className="shrink-0 font-mono text-[11px] text-ink">{s.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
