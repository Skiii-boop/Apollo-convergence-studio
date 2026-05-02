import type { ClientPortrait } from '../types'

export const thesisLine =
  'Client is overexposed to public beta, underexposed to durable income, and misaligned on liquidity budget.'

export const clientPortrait: ClientPortrait = {
  netWorthBand: 'USD 18–35M investable',
  holdingsSummary: '62% global equities · 18% IG/HY · 12% cash/MM · 8% misc.',
  incomeTarget: '4.2–4.8% cash yield on FI sleeve (post-tax aware)',
  liquidityNeed: '18–24mo living + lumpy cap calls; low tolerance for gates',
  riskTolerance: 'Moderate; prefers drawdown clarity over mark smoothness',
  currencyPref: 'USD base · partial EUR hedge on spend',
  objectionBias: 'Skeptical of private marks; prefers public transparency',
}

export const diagnosisBullets = [
  'Public beta dominates volatility budget; income is mostly rate-sensitive IG.',
  'Illiquid sleeves are under-deployed relative to stated return hurdle, but liquidity budget is tight — not a “max private” story.',
  'ABF / secondaries can add carry diversification vs. generic corporate beta without mirroring equity cycles.',
]

export const whyNowCards = [
  {
    title: 'Why public / private now',
    body: 'Convergence in wealth portfolios means sleeves are chosen for role, not bucket labels — liquid public credit for price discovery, private sleeves for structural carry where liquidity budget allows.',
  },
  {
    title: 'Why this client',
    body: 'Income gap vs. risk budget is best solved with a barbell: preserve a true liquidity stack, replace part of generic IG with differentiated cash flows, cap illiquid beta.',
  },
  {
    title: 'Why this product mix',
    body: 'ABF and secondaries add pattern diversification vs. sponsor lending alone; private IG bridges from public FI without duplicating the same corporate factor.',
  },
]
