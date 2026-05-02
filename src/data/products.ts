import type { ProductId } from '../types'

export interface ProductXRayContent {
  id: ProductId
  title: string
  tagline: string
  solves: string
  whyNow: string
  whereFits: string
  whatWrong: string
  flowSteps: string[]
  portfolioRole: string[]
  firstBreak: string[]
  vsPublic: { win: string; lose: string }
  apolloAngle: string
}

export const products: ProductXRayContent[] = [
  {
    id: 'abf',
    title: 'Asset-backed finance (ABF)',
    tagline: 'Cash flows anchored to pools, not a single corporate name.',
    solves: 'Income and diversification beyond generic IG when corporate beta is already high.',
    whyNow: 'Wealth channels are reallocating toward cash-flow diversity; ABF sits alongside sponsor lending, not instead of all public credit.',
    whereFits: 'Fixed-income replacement sleeve and volatility dampener vs. equity factor — not a cash proxy.',
    whatWrong: 'Servicing disruption, collateral drift, complexity in waterfalls, liquidity mismatch if oversold.',
    flowSteps: [
      'Originator / asset pool',
      'Structure & financing',
      'Waterfall → tranches',
      'Investor exposure',
    ],
    portfolioRole: [
      'Can replace part of generic public IG exposure where the client seeks pattern diversity.',
      'Complements direct lending; does not remove need for a liquidity stack.',
      'Should not be framed as “low risk because marks look smooth.”',
    ],
    firstBreak: [
      'Collateral performance vs. model (consumer / SME stress)',
      'Servicer quality and operational risk',
      'Refinance risk in dependent structures',
      'Rating / downgrade migration in tranches',
    ],
    vsPublic: {
      win: 'Differentiated carry and collateral pools vs. single-name IG beta.',
      lose: 'Transparency and daily price discovery vs. public TRACE markets.',
    },
    apolloAngle:
      'Apollo’s 2026 wealth narrative highlights ABF as a growth sleeve within private credit — positioned as construction, not hype.',
  },
  {
    id: 'privateIG',
    title: 'Private IG / FI replacement',
    tagline: 'Illiquid credit with covenant and documentation closer to loans than bonds.',
    solves: 'Step-up in spread and structure vs. public IG when the client can hold through cycles.',
    whyNow: 'Convergence story: private sleeves integrated into mainstream FI allocation where liquidity budget allows.',
    whereFits: 'Core carry sleeve inside the fixed-income budget; size gated by liquidity and concentration limits.',
    whatWrong: 'Refinance walls, documentation drift, manager selection, stale marks vs. public marks.',
    flowSteps: [
      'Borrower / sponsor',
      'Private loan docs & covenants',
      'Cash interest + amortization',
      'Investor loan exposure',
    ],
    portfolioRole: [
      'Replaces part of public IG when yield hurdle is not met in liquid markets.',
      'Pairs with a defined liquidity bucket for behavioral risk.',
      'Not a substitute for sovereign / rates hedging where that is the mandate.',
    ],
    firstBreak: [
      'Refinancing closure in stressed sectors',
      'EBITDA misses vs. underwritten case',
      'Covenant pressure and amendment frequency',
    ],
    vsPublic: {
      win: 'Structural pickup and lender protections vs. public bond indentures in calm markets.',
      lose: 'Secondary liquidity and mark frequency vs. public IG ETFs.',
    },
    apolloAngle:
      'Fits Apollo’s fixed-income replacement framing for wealth: sleeve role, not product shelf sorting by yield.',
  },
  {
    id: 'directLending',
    title: 'Direct lending',
    tagline: 'Senior secured cash yield — sponsor complexity and cyclicality matter.',
    solves: 'Durable income with floating-rate bias in many structures; diversifier vs. public equity beta.',
    whyNow: 'Still relevant as a sleeve, but the demo caps it when liquidity is low — avoids “all private” mis-fit.',
    whereFits: 'Income sleeve with explicit illiquidity budget; should be sized after liquidity bucket is reserved.',
    whatWrong: 'Sponsor fatigue, amendment / PIK creep, sector clustering, mark lag vs. public HY.',
    flowSteps: [
      'Sponsor-backed borrower',
      'Senior secured loan',
      'Cash pay coupon',
      'LP economics + fees',
    ],
    portfolioRole: [
      'Complements public HY only when risk budget is understood — overlap can be high.',
      'Should not absorb the entire illiquidity budget if the client has cap-call uncertainty.',
      'Works best with a CIO-level view on vintage and manager dispersion.',
    ],
    firstBreak: [
      'Interest coverage compression',
      'Refi markets shut for weaker credits',
      'Increasing amendments and covenant holidays',
    ],
    vsPublic: {
      win: 'Structural seniority and floating coupons in many deals vs. public HY beta.',
      lose: 'Granular transparency and instant liquidity vs. ETFs and mutual funds.',
    },
    apolloAngle:
      'Core Apollo credit muscle — here shown as a capped sleeve when liquidity misalignment exists.',
  },
  {
    id: 'secondaries',
    title: 'Private market secondaries',
    tagline: 'Maturity and diversification tool for private programs — not a timing bet alone.',
    solves: 'J-curve mitigation, vintage diversification, and portfolio pacing vs. primary commitments only.',
    whyNow: 'Apollo’s April 2026 framing: secondaries as a core building block in modern private portfolios.',
    whereFits: 'Satellite to primary PE/PC pacing; explicit multi-year horizon; fee and NAV mechanics must be clear.',
    whatWrong: 'NAV timing, GP behavior, leverage in some vehicles, complexity of portfolios acquired.',
    flowSteps: [
      'LP stakes / portfolios',
      'Pricing vs. NAV & terms',
      'Post-close value realization',
      'Investor pacing outcome',
    ],
    portfolioRole: [
      'Diversifies commitment pacing; not a replacement for public equities.',
      'Pairs with a clear liquidity ladder — distributions are uncertain in stress.',
      'Best when the client already accepts private program volatility.',
    ],
    firstBreak: [
      'NAV markdowns if exit markets slow',
      'Leverage at vehicle level (where present)',
      'Single-GP concentration in acquired portfolios',
    ],
    vsPublic: {
      win: 'Access to diversified private vintages and pacing vs. single-ticker public exposure.',
      lose: 'Liquidity and reporting frequency vs. public markets.',
    },
    apolloAngle:
      'Aligned with “secondaries as core allocation” — positioned here with liquidity caveats for this client.',
  },
  {
    id: 'liquidStructured',
    title: 'Liquid structured credit',
    tagline: 'Public or semi-liquid wrappers — transparency trade vs. private sleeves.',
    solves: 'Structured credit beta and carry with better marks than private while retaining complexity budget.',
    whyNow: 'Hybrid public/private solutions (e.g., bank partnerships) increasingly sit in the same construction conversation.',
    whereFits: 'Bridge sleeve when the client wants differentiation but not full illiquidity.',
    whatWrong: 'CLO tranche complexity, downgrade migration, manager dispersion, basis risk.',
    flowSteps: [
      'Collateral pool (loans / ABS)',
      'Tranching & tests',
      'Cashflow to tranches',
      'Mark-to-market exposure',
    ],
    portfolioRole: [
      'Can sit alongside trimmed public IG rather than jumping straight to max illiquidity.',
      'Useful when the client demands more frequent marks than private programs.',
      'Not a complete substitute for private sleeves if the return hurdle requires illiquidity premium.',
    ],
    firstBreak: [
      'OC/IC test breaches in CLOs',
      'Loan downgrade waves',
      'Correlation to broad HY in stress',
    ],
    vsPublic: {
      win: 'Structural tranche mechanics vs. plain vanilla corporate bond beta.',
      lose: 'Complexity and fat-tail documentation risk vs. simple IG bullets.',
    },
    apolloAngle:
      'Supports Schroders-style hybrid narrative: public/private blended FI for wealth, without abandoning transparency.',
  },
]
