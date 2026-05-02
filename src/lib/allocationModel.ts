import type { Sleeve } from '../types'

/** t = 0 client needs max liquidity; t = 1 client can allocate more to illiquid sleeves */
function tFromLiquiditySlider(liquidityBudget0to100: number): number {
  const x = Math.min(100, Math.max(0, liquidityBudget0to100))
  return x / 100
}

export function todaySleeves(): Sleeve[] {
  return [
    { id: 'eq', label: 'Global equities', pct: 44, tone: 'equity' },
    { id: 'ig', label: 'Public IG / credit', pct: 20, tone: 'publicFi' },
    { id: 'hy', label: 'HY / EM / structured', pct: 8, tone: 'structured' },
    { id: 'mm', label: 'Cash & money markets', pct: 14, tone: 'liquidity' },
    { id: 'alts', label: 'Legacy alts / PE marks', pct: 9, tone: 'private' },
    { id: 'other', label: 'Other', pct: 5, tone: 'publicFi' },
  ]
}

export function proposedSleeves(liquidityBudget0to100: number): Sleeve[] {
  const t = tFromLiquiditySlider(liquidityBudget0to100)
  const liquidBias = 1 - t

  const equity = 36 + liquidBias * 5
  const publicIG = 14 - t * 5
  const hy = 6
  const liquidityBucket = 16 + liquidBias * 10
  const abf = 6 + t * 6
  const privateIG = 5 + t * 6
  const direct = 4 + t * 7
  const secondaries = 3 + t * 5
  const other = 6 - t * 2

  const raw = [
    { id: 'eq', label: 'Global equities (trim)', pct: equity, tone: 'equity' as const },
    { id: 'ig', label: 'Public IG (reduced overlap)', pct: publicIG, tone: 'publicFi' as const },
    { id: 'hy', label: 'Liquid structured / HY', pct: hy, tone: 'structured' as const },
    { id: 'liq', label: 'Liquidity bucket (explicit)', pct: liquidityBucket, tone: 'liquidity' as const },
    { id: 'abf', label: 'ABF sleeve', pct: abf, tone: 'private' as const },
    { id: 'pvtig', label: 'Private IG / FI replacement', pct: privateIG, tone: 'private' as const },
    { id: 'dl', label: 'Direct lending (capped)', pct: direct, tone: 'private' as const },
    { id: 'sec', label: 'Secondaries', pct: secondaries, tone: 'private' as const },
    { id: 'other', label: 'Residual / tactical', pct: Math.max(2, other), tone: 'publicFi' as const },
  ]

  const sum = raw.reduce((a, s) => a + s.pct, 0)
  const scale = 100 / sum
  return raw.map((s) => ({
    ...s,
    pct: Math.round(s.pct * scale * 10) / 10,
  }))
}

export function sleeveColor(tone: Sleeve['tone']): string {
  switch (tone) {
    case 'equity':
      return 'bg-navy/85'
    case 'publicFi':
      return 'bg-graphite/70'
    case 'liquidity':
      return 'bg-mist/80'
    case 'private':
      return 'bg-copper/90'
    case 'structured':
      return 'bg-olive/80'
    default:
      return 'bg-graphite/60'
  }
}
