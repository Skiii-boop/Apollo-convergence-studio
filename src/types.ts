export type StudioView = 'board' | 'xray' | 'objections' | 'brief'

export type Audience = 'client' | 'rm' | 'cio'

export type ProductId = 'abf' | 'privateIG' | 'directLending' | 'secondaries' | 'liquidStructured'

export interface Sleeve {
  id: string
  label: string
  pct: number
  tone: 'equity' | 'publicFi' | 'liquidity' | 'private' | 'structured'
}

export interface ClientPortrait {
  netWorthBand: string
  holdingsSummary: string
  incomeTarget: string
  liquidityNeed: string
  riskTolerance: string
  currencyPref: string
  objectionBias: string
}
