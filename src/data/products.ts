import type { ProductId } from '../types'
import { APOLLO_IG_PRIVATE_CREDIT_STRATEGY, APOLLO_ACADEMY, APOLLO_INSIGHTS } from './apolloReferences'

export interface ApolloCitation {
  headline: string
  url: string
  excerpt: string
}

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
  /** Official Apollo wealth strategy page (hero pulled in X-Ray when set). */
  officialStrategyUrl?: string
  showApolloHero?: boolean
  apolloCitations?: ApolloCitation[]
  apolloAcademyLinks?: { label: string; url: string }[]
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
    title: 'Investment-grade private credit',
    tagline:
      'Non-traded corporate and consumer credit sized for income and diversification — Apollo frames much of the private credit universe as investment grade.',
    solves:
      'Potential step-up in spread and structural protections vs. commoditized public IG when the client can hold illiquidity and wants fixed-income replacement, not more equity beta.',
    whyNow:
      'Apollo’s public wealth narrative ties private IG to retirement income needs and to a converging public/private credit market; liquidity mechanisms (evergreens, syndication, pricing) continue to evolve.',
    whereFits:
      'Inside the fixed-income budget as a sleeve with explicit illiquidity and concentration limits — paired with a liquidity ladder, not as a cash proxy.',
    whatWrong:
      'Refinance walls, documentation drift, manager and origination dispersion, appraisal-based marks, and basis risk if overlapped uncritically with public IG factor.',
    flowSteps: [
      'Borrower / asset pool (corporate or consumer)',
      'Bilateral or platform-originated documentation',
      'Cash coupons + amortization / structural protections',
      'Investor exposure in fund or SMA form',
    ],
    portfolioRole: [
      'Can replace or complement part of generic public IG when the return hurdle is not met in liquid markets alone.',
      'Pairs with ABF / structured sleeves where the goal is pattern diversification, not stacking the same corporate factor.',
      'Should not absorb liquidity needed for cap calls, taxes, or behavioral “panic” windows.',
    ],
    firstBreak: [
      'Refinancing markets shut for weaker names or sectors',
      'EBITDA / cashflow misses vs. underwritten case',
      'Covenant pressure, amendments, and PIK creep',
      'Mark lag vs. public TRACE — client perception risk in stress',
    ],
    vsPublic: {
      win: 'Documentation and lender protections negotiated bilaterally; potential spread pickup per unit of risk in select sleeves.',
      lose: 'Secondary liquidity and continuous price discovery vs. public IG — requires governance and communication discipline.',
    },
    apolloAngle:
      'Apollo publicly emphasizes origination at scale (direct, platforms, bank partnerships) and IG private credit as a retirement-relevant, systemically diversified funding channel — use their materials for tone, always with suitability and disclosures.',
    officialStrategyUrl: APOLLO_IG_PRIVATE_CREDIT_STRATEGY,
    showApolloHero: true,
    apolloAcademyLinks: [
      { label: 'Apollo Academy — register', url: APOLLO_ACADEMY.register },
      { label: 'Learning center', url: APOLLO_ACADEMY.learningCenter },
      { label: 'Alternative Perspectives', url: APOLLO_ACADEMY.alternativePerspectives },
      { label: 'The View From Apollo (podcast)', url: APOLLO_ACADEMY.viewFromApolloPodcast },
      { label: '2026 Outlook (course)', url: APOLLO_ACADEMY.outlook2026 },
    ],
    apolloCitations: [
      {
        headline: 'Leading with Private Investment-Grade Credit (strategy page)',
        url: APOLLO_IG_PRIVATE_CREDIT_STRATEGY,
        excerpt:
          'Apollo describes private credit as a large market where a majority is investment grade, financing business growth and household prosperity; private IG is positioned as helping generate yield and retirement income as demographics strain savings.',
      },
      {
        headline: 'Demystifying the Opportunity in Investment Grade Private Credit',
        url: APOLLO_INSIGHTS.demystifyingPrivateIgDec2024,
        excerpt:
          'Apollo authors argue Private IG can offer higher spread premia, lower historical losses (as discussed in their piece), enhanced seniority and downside protection, and diversification — and that public vs. private risk assumptions are converging as issuers tap both markets.',
      },
      {
        headline: 'How Is Liquidity Evolving in Private Investment-Grade Credit?',
        url: APOLLO_INSIGHTS.liquidityPrivateIgFeb2026,
        excerpt:
          'Apollo discusses how private IG is evolving toward more standardized liquidity options — relevant when clients ask about gates, evergreen structures, and how “private” compares to public TRACE liquidity.',
      },
      {
        headline: 'Convergence: Finding Opportunity in a Converging Credit Market',
        url: APOLLO_INSIGHTS.convergenceCreditMay2026,
        excerpt:
          'Apollo frames dispersion and underwriting depth as credit markets merge — useful language when explaining why construction matters more than a binary public vs. private debate.',
      },
    ],
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
