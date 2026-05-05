import type { SuitabilityChecklistItemId } from '../types'

export interface SuitabilityChecklistItem {
  id: SuitabilityChecklistItemId
  label: string
  help: string
}

export const suitabilityChecklistItems: SuitabilityChecklistItem[] = [
  {
    id: 'longTermHorizon',
    label: 'Long-term investment horizon?',
    help: 'Client can hold through multi-year cycles and accepts slower liquidity in private sleeves.',
  },
  {
    id: 'illiquidityTolerance',
    label: 'Illiquidity tolerance?',
    help: 'Liquidity ladder is documented and sized before adding semi-liquid/private vehicles.',
  },
  {
    id: 'qualifiedInvestorStatus',
    label: 'Qualified / professional investor status?',
    help: 'Eligibility status verified for relevant products and jurisdictions.',
  },
  {
    id: 'gatesRedemptionUnderstanding',
    label: 'Understanding of gates and redemption limits?',
    help: 'Client understands windows, notice periods, and possible suspension mechanics.',
  },
  {
    id: 'feeTolerance',
    label: 'Fee tolerance?',
    help: 'Fee stack (management, performance, platform) reviewed against expected net outcomes.',
  },
  {
    id: 'privateNavUnderstanding',
    label: 'Private market NAV valuation understanding?',
    help: 'Client understands appraisal-based marks and potential lag vs. public market pricing.',
  },
  {
    id: 'concentrationRiskReviewed',
    label: 'Concentration risk reviewed?',
    help: 'Sector/manager/vintage concentration limits reviewed and recorded.',
  },
  {
    id: 'currencyExposureReviewed',
    label: 'Currency exposure reviewed?',
    help: 'Base currency, hedging preference, and FX impact documented.',
  },
  {
    id: 'notEmergencyLiquidityCapital',
    label: 'Not emergency liquidity capital?',
    help: 'Capital allocated is not needed for near-term emergency spending.',
  },
  {
    id: 'distributorApprovalConfirmed',
    label: 'Distributor approval status confirmed?',
    help: 'Platform/distributor status confirmed before presenting specific products.',
  },
]

export type SuitabilityChecklistState = Record<SuitabilityChecklistItemId, boolean>

export function createDefaultSuitabilityChecklistState(): SuitabilityChecklistState {
  return suitabilityChecklistItems.reduce(
    (acc, item) => ({ ...acc, [item.id]: false }),
    {} as SuitabilityChecklistState
  )
}
