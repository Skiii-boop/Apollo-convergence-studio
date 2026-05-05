/** Demo-only pipeline: maps relationship stages to product families and client touchpoints. */

export interface PipelineStage {
  id: string
  title: string
  weeksFromStart: string
  focus: string
  productTypes: string[]
  trustMilestone: string
}

export const pipelineStages: PipelineStage[] = [
  {
    id: 'discover',
    title: 'Discover & listen',
    weeksFromStart: 'Week 0–1',
    focus: 'Goals, cash-flow needs, liquidity budget, and risk tolerance—before product names.',
    productTypes: ['Education only', 'Strategies overview (Credit / Equity / Real Assets)'],
    trustMilestone: 'Client feels heard; you document constraints in the portrait.',
  },
  {
    id: 'diagnose',
    title: 'Diagnose & align',
    weeksFromStart: 'Week 1–3',
    focus: 'Portfolio gaps vs. income hurdle; public/private construction—not shelf picking.',
    productTypes: ['Convergence map', 'Liquidity ladder', 'Optional: interval / evergreen fit screen'],
    trustMilestone: 'Shared problem statement (thesis bar) the client can repeat back.',
  },
  {
    id: 'solution',
    title: 'Solution design',
    weeksFromStart: 'Week 3–6',
    focus: 'Match sleeves to roles; X-Ray mechanics; semi-liquid vs. evergreen vs. closed only where suitable.',
    productTypes: ['Private credit sleeves', 'Semi-liquid ELTIFs / interval funds', 'REIT / BDC where mandate fits'],
    trustMilestone: 'Transparent tradeoffs: liquidity, marks, fees, concentration—no oversell.',
  },
  {
    id: 'decide',
    title: 'Decide & document',
    weeksFromStart: 'Week 6–10',
    focus: 'Due diligence pack, suitability notes, compliance disclosures, subscription pacing.',
    productTypes: ['Specific registered products (from 15)', 'Tax / legal referrals as needed'],
    trustMilestone: 'Client initials on what they are buying—and what they are not.',
  },
  {
    id: 'deepen',
    title: 'Serve & deepen',
    weeksFromStart: 'Quarterly+',
    focus: 'Performance vs. plan, liquidity refresh, education (Academy), objection rehearsal before volatility.',
    productTypes: ['Rebalancing', 'New sleeves', 'Family / next-gen conversations'],
    trustMilestone: 'Relationship measured in years—studio artifacts become living notes, not one-off pitches.',
  },
]

export interface ClientEvent {
  id: string
  dateLabel: string
  title: string
  type: 'client' | 'internal' | 'education'
  detail: string
  productLane?: string
}

/** Example forward timeline — replace with your CRM dates. */
export const upcomingClientEvents: ClientEvent[] = [
  {
    id: 'e1',
    dateLabel: 'May 6',
    title: 'Discovery call — Chen family office',
    type: 'client',
    detail: 'Agenda: liquidity ladder, return hurdle, skepticism on private marks. Outcome: complete portrait fields.',
    productLane: 'All',
  },
  {
    id: 'e2',
    dateLabel: 'May 9',
    title: 'Internal pre-brief with CIO desk',
    type: 'internal',
    detail: 'Align on convergence framing vs. tactical credit call; bring interval vs. evergreen comparison grid.',
    productLane: 'Credit',
  },
  {
    id: 'e3',
    dateLabel: 'May 14',
    title: 'Education session — semi-liquid & evergreen vehicles',
    type: 'education',
    detail: 'Walk through ELTIF / interval mechanics using Product X-Ray + Apollo public product pages.',
    productLane: 'Credit / Equity',
  },
  {
    id: 'e4',
    dateLabel: 'May 21',
    title: 'Proposal review with client + tax advisor',
    type: 'client',
    detail: 'RM Brief as prep; rehearse top 3 objections; agree subscription sequencing if proceeding.',
    productLane: 'Mixed',
  },
  {
    id: 'e5',
    dateLabel: 'Jun 4',
    title: 'Quarterly portfolio check-in',
    type: 'client',
    detail: 'Review gates, distributions vs. plan; refresh “why we sized this sleeve” narrative.',
    productLane: 'All',
  },
]

/** Demo allocation of pipeline effort by product family (percent = coaching time, not AUM). */
export const pipelineEffortByLane = [
  { lane: 'Credit', pct: 42, note: 'Income replacement, IG private, interval credit, BDC sleeves' },
  { lane: 'Equity', pct: 28, note: 'Secondaries, semi-liquid private markets, aligned alternatives' },
  { lane: 'Real Assets', pct: 22, note: 'REIT, interval real estate, DST / 1031 introductions' },
  { lane: 'Cross-platform', pct: 8, note: 'Retirement solutions + capital solutions coordination' },
]
