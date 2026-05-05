/**
 * The 15 registered investment products listed on Apollo Wealth “Investment Products”
 * (public marketing; contact Apollo for eligibility and documents).
 */
export type StrategyLane = 'Credit' | 'Equity' | 'Real Assets'

export type VehicleHighlight =
  | 'semi-liquid'
  | 'open-end-evergreen'
  | 'perpetual-bdc'
  | 'interval-fund'
  | 'non-traded-reit'
  | 'closed-program'
  | 'contact-rep'

export interface ApolloWealthProduct {
  id: string
  name: string
  lane: StrategyLane
  /** Short description from Apollo’s public product page or listing. */
  description: string
  href: string
  highlights: VehicleHighlight[]
}

export const apolloInvestmentProducts15: ApolloWealthProduct[] = [
  {
    id: 'aligned-alternatives-e1',
    name: 'Apollo Aligned Alternatives E-1',
    lane: 'Equity',
    description:
      'Turnkey investment with no maturity date; periodic liquidity and access to Apollo’s alternative investment platform.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-aligned-alternatives-e1',
    highlights: ['semi-liquid', 'open-end-evergreen'],
  },
  {
    id: 'abcc',
    name: 'Apollo Asset Backed Credit Company',
    lane: 'Credit',
    description: 'Contact your Apollo representative for product details and eligibility.',
    href: 'https://www.apollo.com/aboutus/contact-us',
    highlights: ['contact-rep', 'closed-program'],
  },
  {
    id: 'debt-solutions-bdc',
    name: 'Apollo Debt Solutions BDC',
    lane: 'Credit',
    description:
      'Perpetual-life non-traded BDC focused on senior secured large corporate direct origination, broadly syndicated loans, and, to a lesser extent, middle market direct lending.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-debt-solutions-bdc',
    highlights: ['perpetual-bdc', 'open-end-evergreen'],
  },
  {
    id: 'diversified-credit-fund',
    name: 'Apollo Diversified Credit Fund',
    lane: 'Credit',
    description: 'Interval fund pursuing high-quality opportunities in alternative credit.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-diversified-credit-fund',
    highlights: ['interval-fund', 'semi-liquid'],
  },
  {
    id: 'diversified-real-estate-fund',
    name: 'Apollo Diversified Real Estate Fund',
    lane: 'Real Assets',
    description:
      'Interval fund investing in an actively managed portfolio of institutional private and public real estate securities.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-diversified-real-estate-fund',
    highlights: ['interval-fund', 'semi-liquid'],
  },
  {
    id: 'european-private-credit',
    name: 'Apollo European Private Credit',
    lane: 'Credit',
    description:
      'Evergreen fund with access to Apollo’s European direct lending platform; seeks attractive yields across a market cycle.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-european-private-credit',
    highlights: ['open-end-evergreen'],
  },
  {
    id: 'european-private-credit-eltif',
    name: 'Apollo European Private Credit ELTIF',
    lane: 'Credit',
    description:
      'Perpetual, semi-liquid fund seeking access to the growing European private credit opportunity set.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-european-private-credit-eltif',
    highlights: ['semi-liquid', 'open-end-evergreen'],
  },
  {
    id: 'european-real-estate-debt',
    name: 'Apollo European Real Estate Debt',
    lane: 'Real Assets',
    description:
      'Evergreen fund with access to Apollo’s European real estate credit franchise; seeks stable income from diversified European real estate loans.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-european-real-estate-debt',
    highlights: ['open-end-evergreen'],
  },
  {
    id: 'global-diversified-credit-eltif',
    name: 'Apollo Global Diversified Credit ELTIF',
    lane: 'Credit',
    description:
      'Perpetual, semi-liquid fund offering diversified exposure to global credit markets with potential for enhanced yield and risk-adjusted returns across cycles.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-global-diversified-credit-eltif',
    highlights: ['semi-liquid', 'open-end-evergreen'],
  },
  {
    id: 'global-private-markets-eltif',
    name: 'Apollo Global Private Markets ELTIF',
    lane: 'Equity',
    description:
      'Perpetual, semi-liquid fund seeking long-term capital appreciation via equity of established private companies globally—secondaries and co-investments across the Apollo platform.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-global-private-markets-eltif',
    highlights: ['semi-liquid', 'open-end-evergreen'],
  },
  {
    id: 'infrastructure-company',
    name: 'Apollo Infrastructure Company',
    lane: 'Real Assets',
    description: 'Contact your Apollo representative for product details and eligibility.',
    href: 'https://www.apollo.com/aboutus/contact-us',
    highlights: ['contact-rep', 'closed-program'],
  },
  {
    id: 'real-estate-exchange',
    name: 'Apollo Real Estate Exchange',
    lane: 'Real Assets',
    description:
      'Delaware Statutory Trust (DST) platform for tax-deferred strategies potentially utilizing IRC Sections 1031 and 721.',
    href: 'https://www.apollo.com/wealth/apollo-real-estate-exchange',
    highlights: ['closed-program'],
  },
  {
    id: 'realty-income-solutions',
    name: 'Apollo Realty Income Solutions',
    lane: 'Real Assets',
    description:
      'Perpetually offered non-traded corporation taxed as a REIT; stabilized, well-leased, income-oriented U.S. commercial real estate.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-realty-income-solutions',
    highlights: ['non-traded-reit', 'open-end-evergreen'],
  },
  {
    id: 's3-private-markets',
    name: 'Apollo S3 Private Markets Fund',
    lane: 'Equity',
    description: 'Turnkey access to a diversified portfolio of secondary investments across private markets.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-s3-private-markets-fund',
    highlights: ['closed-program', 'semi-liquid'],
  },
  {
    id: 'us-private-credit',
    name: 'Apollo U.S. Private Credit',
    lane: 'Credit',
    description:
      'Evergreen fund with access to Apollo’s global direct lending platform; seeks attractive yields across a market cycle.',
    href: 'https://www.apollo.com/wealth/strategies/products/apollo-us-private-credit',
    highlights: ['open-end-evergreen'],
  },
]

export const highlightLabels: Record<VehicleHighlight, string> = {
  'semi-liquid': 'Semi-liquid',
  'open-end-evergreen': 'Open-end / evergreen',
  'perpetual-bdc': 'Perpetual BDC',
  'interval-fund': 'Interval fund',
  'non-traded-reit': 'Non-traded REIT',
  'closed-program': 'Closed / program',
  'contact-rep': 'Contact rep',
}
