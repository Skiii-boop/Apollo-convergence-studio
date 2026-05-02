import { proposedSleeves, todaySleeves } from '../lib/allocationModel'
import { StackBar } from './StackBar'

interface ConvergenceEngineProps {
  liquidityBudget: number
  onLiquidityChange: (n: number) => void
}

export function ConvergenceEngine({ liquidityBudget, onLiquidityChange }: ConvergenceEngineProps) {
  const today = todaySleeves()
  const proposed = proposedSleeves(liquidityBudget)

  return (
    <section className="rounded-lg border border-navy/10 bg-panel p-6 shadow-panel">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="font-display text-2xl text-ink">Convergence engine</h2>
          <p className="mt-1 max-w-prose text-sm text-graphite">
            Today vs. proposed construction. Drag liquidity tolerance — higher means more room for illiquid sleeves in
            the proposal (after an explicit liquidity bucket).
          </p>
        </div>
        <div className="rounded-md border border-navy/10 bg-ivory/80 px-4 py-3 font-mono text-[11px] text-graphite">
          <span className="text-mist">LIQ_BUDGET</span>{' '}
          <span className="text-ink">{liquidityBudget.toFixed(0)}</span>
          <span className="text-mist"> / 100</span>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <StackBar sleeves={today} caption="Today" />
        <StackBar sleeves={proposed} caption="Proposed" />
      </div>

      <div className="mt-10">
        <label htmlFor="liq" className="font-mono text-[10px] uppercase tracking-wider text-mist">
          Illiquidity budget (slider)
        </label>
        <input
          id="liq"
          type="range"
          min={0}
          max={100}
          value={liquidityBudget}
          onChange={(e) => onLiquidityChange(Number(e.target.value))}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-bone accent-copper"
        />
        <div className="mt-2 flex justify-between font-mono text-[10px] text-mist">
          <span>Needs liquidity</span>
          <span>Can lock capital</span>
        </div>
      </div>

      <ul className="mt-8 space-y-3 border-t border-navy/10 pt-6 text-sm text-graphite">
        <li>
          <span className="font-semibold text-ink">Why not “all private”:</span> liquidity ladder and behavior through
          gates matter more than headline yield for this profile.
        </li>
        <li>
          <span className="font-semibold text-ink">Public credit role:</span> remains for price discovery and
          redeployable liquidity — convergence is construction, not replacement by slogan.
        </li>
      </ul>
    </section>
  )
}
