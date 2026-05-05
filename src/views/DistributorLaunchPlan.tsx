import { SuitabilityRiskChecklist } from '../components/SuitabilityRiskChecklist'
import type { SuitabilityChecklistState } from '../data/suitabilityChecklist'
import type { SuitabilityChecklistItemId } from '../types'

const distributorWorkflow = [
  'Distributor mapping',
  'Eligibility check',
  'NDA / confidentiality check',
  'Product due diligence',
  'Platform approval',
  'RM training',
  'Roadshow / client outreach',
  'Subscription support',
  'Salesforce tracking',
  'After-sales reporting',
] as const

interface DistributorLaunchPlanProps {
  checklistState: SuitabilityChecklistState
  onToggleChecklist: (id: SuitabilityChecklistItemId) => void
}

export function DistributorLaunchPlan({
  checklistState,
  onToggleChecklist,
}: DistributorLaunchPlanProps) {
  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-navy/10 bg-gradient-to-br from-panel to-bone/40 p-8 shadow-panel">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">Distributor Workflow</p>
        <h2 className="mt-2 font-display text-4xl text-ink">Distributor Launch Plan</h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-graphite">
          Execution view for distributor onboarding and go-to-market. This tab bridges advisory quality and platform
          execution so solutions are suitable, approved, and delivered consistently with post-sale follow-through.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <h3 className="font-display text-2xl text-ink">Workflow steps</h3>
          <ol className="space-y-3">
            {distributorWorkflow.map((step, idx) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-md border border-navy/10 bg-panel p-4 shadow-panel"
              >
                <span className="mt-0.5 rounded-full border border-copper/40 bg-copper/15 px-2 py-0.5 font-mono text-xs text-ink">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{step}</p>
                  <p className="mt-1 text-xs text-graphite">
                    {idx < 4
                      ? 'Control-heavy pre-launch step; capture evidence in meeting notes and platform docs.'
                      : idx < 8
                        ? 'Commercial execution step; align RM messaging and client suitability language.'
                        : 'Post-subscription governance and relationship maintenance.'}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <SuitabilityRiskChecklist
          state={checklistState}
          onToggle={onToggleChecklist}
          title="Suitability & Risk Checklist"
        />
      </section>
    </div>
  )
}
