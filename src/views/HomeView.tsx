import type { StudioView } from '../types'
import type { SuitabilityChecklistState } from '../data/suitabilityChecklist'
import type { SuitabilityChecklistItemId } from '../types'
import { SuitabilityRiskChecklist } from '../components/SuitabilityRiskChecklist'
import { upcomingClientEvents, pipelineEffortByLane, pipelineStages } from '../data/advisoryPipeline'
import {
  apolloInvestmentProducts15,
  highlightLabels,
  type VehicleHighlight,
} from '../data/apolloInvestmentProducts15'
import {
  APOLLO_STRATEGIES_ACCORDION_DEEP_LINK,
  APOLLO_WEALTH_PRODUCTS_URL,
  APOLLO_WEALTH_STRATEGIES_URL,
  strategiesAdjacent,
  strategiesPillars,
  strategiesWhatWeDo,
} from '../data/apolloWealthStrategies'

function badgeClass(h: VehicleHighlight): string {
  if (h === 'semi-liquid' || h === 'interval-fund') return 'border-copper/40 bg-copper/15 text-ink'
  if (h === 'open-end-evergreen' || h === 'perpetual-bdc' || h === 'non-traded-reit')
    return 'border-olive/40 bg-olive/15 text-ink'
  if (h === 'closed-program') return 'border-navy/20 bg-navy/10 text-navy'
  return 'border-mist/40 bg-bone text-graphite'
}

interface HomeViewProps {
  onNavigate: (v: StudioView) => void
  checklistState: SuitabilityChecklistState
  onToggleChecklist: (id: SuitabilityChecklistItemId) => void
}

export function HomeView({ onNavigate, checklistState, onToggleChecklist }: HomeViewProps) {
  return (
    <div className="space-y-14">
      <section className="rounded-xl border border-navy/10 bg-gradient-to-br from-panel via-ivory to-bone/40 p-8 shadow-panel md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">How this studio is meant to be used</p>
        <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Solutions first. Advice second. Trust always.</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-graphite">
          This workspace is framed as a <strong className="font-semibold text-navy">relationship system</strong>, not a
          product terminal: help investors clarify needs, map Apollo-aligned construction to those needs, explain
          vehicles with discipline, and return to the same narrative quarter after quarter so confidence compounds over
          time.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(
            [
              ['Solutions', 'Translate gaps into portfolio roles—liquidity, income, diversification—before SKU.'],
              ['Advice', 'Use X-Ray, objections, and briefs to prepare honest, documented conversations.'],
              ['Trust', 'Pipeline and timeline below make expectations explicit: no surprise gates or jargon dumps.'],
            ] as const
          ).map(([t, b]) => (
            <div key={t} className="rounded-lg border border-navy/10 bg-panel/90 p-5">
              <p className="font-display text-xl text-ink">{t}</p>
              <p className="mt-2 text-sm text-graphite">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate('board')}
            className="rounded-md border border-navy bg-navy px-5 py-2.5 text-sm font-semibold text-ivory hover:opacity-90"
          >
            Open Convergence Board
          </button>
          <a
            href={APOLLO_WEALTH_PRODUCTS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:border-copper/50"
          >
            Apollo · 15 products (official)
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-mist">Apollo Wealth · Strategies</p>
            <h2 className="font-display text-3xl text-ink">Platform pillars (Credit, Equity, Real Assets)</h2>
            <p className="mt-2 max-w-3xl text-sm text-graphite">{strategiesWhatWeDo}</p>
          </div>
          <a
            href={APOLLO_STRATEGIES_ACCORDION_DEEP_LINK}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-md border border-copper/40 bg-copper/10 px-4 py-2 text-center text-xs font-semibold text-ink hover:bg-copper/20"
          >
            Open same section on apollo.com →
          </a>
        </div>
        <p className="text-xs text-mist">
          Deep link mirrors the public accordion block you referenced:{' '}
          <span className="font-mono text-[10px] break-all">{APOLLO_STRATEGIES_ACCORDION_DEEP_LINK}</span>
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {strategiesPillars.map((p) => (
            <article key={p.id} className="flex flex-col rounded-lg border border-navy/10 bg-panel p-6 shadow-panel">
              <h3 className="font-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">{p.summary}</p>
              <ul className="mt-4 space-y-2 border-t border-navy/10 pt-4">
                {p.sublinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-copper hover:text-ink">
                      {l.label} →
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={p.learnMore}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-navy underline-offset-2 hover:underline"
              >
                Learn more on Apollo
              </a>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {strategiesAdjacent.map((s) => (
            <article key={s.title} className="rounded-lg border border-navy/10 bg-navy/5 p-5">
              <h3 className="font-display text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-graphite">{s.summary}</p>
              <a href={s.href} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-copper">
                Explore →
              </a>
            </article>
          ))}
        </div>
        <a href={APOLLO_WEALTH_STRATEGIES_URL} target="_blank" rel="noreferrer" className="text-sm text-navy underline">
          Full Strategies hub on apollo.com
        </a>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-mist">Investment products (15)</p>
            <h2 className="font-display text-3xl text-ink">Registered wealth products</h2>
            <p className="mt-2 max-w-2xl text-sm text-graphite">
              Listed on Apollo’s public catalog. <strong className="text-navy">Copper</strong> tags emphasize{' '}
              <strong>semi-liquid</strong> and <strong>interval</strong> vehicles; <strong>olive</strong> tags emphasize{' '}
              <strong>open-end / evergreen</strong>, <strong>perpetual BDC</strong>, and <strong>non-traded REIT</strong>{' '}
              programs. Always confirm eligibility, docs, and firm policy with Apollo and your compliance team.
            </p>
          </div>
          <a
            href={APOLLO_WEALTH_PRODUCTS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-navy bg-navy px-4 py-2 text-sm font-semibold text-ivory"
          >
            Official product grid
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {apolloInvestmentProducts15.map((prod) => (
            <article
              key={prod.id}
              className="flex flex-col rounded-lg border border-navy/10 bg-panel p-5 shadow-panel transition-shadow hover:shadow-lift"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-sm bg-navy/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-navy">
                  {prod.lane}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                <a href={prod.href} target="_blank" rel="noreferrer" className="hover:text-copper">
                  {prod.name}
                </a>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite">{prod.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {prod.highlights.map((h) => (
                  <span
                    key={h}
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wide ${badgeClass(h)}`}
                  >
                    {highlightLabels[h]}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="font-display text-3xl text-ink">Sales pipeline — by stage & product type</h2>
          <p className="text-sm text-graphite">
            Illustrative workflow: weight your time across Credit, Equity, and Real Assets while keeping trust
            milestones visible at each stage.
          </p>
          <div className="space-y-4">
            {pipelineStages.map((s, idx) => (
              <div
                key={s.id}
                className="relative rounded-lg border border-navy/10 bg-panel p-5 pl-8 shadow-panel"
              >
                <span className="absolute left-3 top-5 font-mono text-xs text-copper">{idx + 1}</span>
                <p className="font-mono text-[10px] uppercase tracking-wider text-mist">{s.weeksFromStart}</p>
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-graphite">{s.focus}</p>
                <p className="mt-2 font-mono text-[10px] uppercase text-mist">Product types</p>
                <ul className="mt-1 list-disc pl-4 text-sm text-navy">
                  {s.productTypes.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-navy/10 pt-3 text-xs italic text-olive">
                  Trust milestone: {s.trustMilestone}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-3xl text-ink">Upcoming client & team events</h2>
          <p className="text-sm text-graphite">
            Demo timeline—replace with your CRM. Tie each touchpoint to a product lane and a studio module.
          </p>
          <ol className="relative space-y-0 border-l border-navy/15 pl-8">
            {upcomingClientEvents.map((ev) => (
              <li key={ev.id} className="pb-10 last:pb-0">
                <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-navy bg-ivory" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-copper">{ev.dateLabel}</p>
                <p className="font-display text-lg text-ink">{ev.title}</p>
                <p className="mt-1 text-xs text-mist">
                  {ev.type === 'client' ? 'Client' : ev.type === 'internal' ? 'Internal' : 'Education'}
                  {ev.productLane ? ` · Lane: ${ev.productLane}` : ''}
                </p>
                <p className="mt-2 text-sm text-graphite">{ev.detail}</p>
              </li>
            ))}
          </ol>

          <div className="rounded-lg border border-navy/10 bg-navy/5 p-5">
            <h3 className="font-display text-lg text-ink">Pipeline effort mix (demo %)</h3>
            <ul className="mt-3 space-y-3">
              {pipelineEffortByLane.map((row) => (
                <li key={row.lane}>
                  <div className="flex justify-between text-sm font-semibold text-navy">
                    <span>{row.lane}</span>
                    <span className="font-mono text-copper">{row.pct}%</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-bone">
                    <div className="h-full rounded-full bg-copper/80" style={{ width: `${row.pct}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-graphite">{row.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-lg border border-navy/10 bg-panel p-6 shadow-panel">
          <p className="font-mono text-[10px] uppercase tracking-wider text-copper">Critical control</p>
          <h2 className="mt-1 font-display text-3xl text-ink">Suitability before subscription</h2>
          <p className="mt-3 text-sm text-graphite">
            This checklist is intentionally explicit so RM, distributor, and compliance stakeholders can align before
            client onboarding. It can be reviewed in Home and reused in the Distributor Launch Plan tab.
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={() => onNavigate('distributor')}
              className="rounded-md border border-navy bg-navy px-4 py-2 text-sm font-semibold text-ivory hover:opacity-90"
            >
              Open Distributor Launch Plan
            </button>
          </div>
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
