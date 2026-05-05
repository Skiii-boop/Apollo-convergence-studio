export type StudioView = 'home' | 'board' | 'xray' | 'objections' | 'brief' | 'distributor'

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

/** Rich objection copy for interview rehearsal */
export interface ObjectionAnswerBlock {
  short: string
  market: string
  disclosure: string
  notToSay: string
  takeaway: string
  deepDive: string
  talkTrack60s: string
  /** Paraphrased public Apollo education themes — not a quote certificate; cite Apollo materials in live meetings. */
  apolloEcho: string
}

export type SuitabilityChecklistItemId =
  | 'longTermHorizon'
  | 'illiquidityTolerance'
  | 'qualifiedInvestorStatus'
  | 'gatesRedemptionUnderstanding'
  | 'feeTolerance'
  | 'privateNavUnderstanding'
  | 'concentrationRiskReviewed'
  | 'currencyExposureReviewed'
  | 'notEmergencyLiquidityCapital'
  | 'distributorApprovalConfirmed'
