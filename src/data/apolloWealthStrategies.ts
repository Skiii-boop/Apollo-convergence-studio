/** Mirrors public copy on Apollo Wealth “Strategies” — deep link targets the on-page accordion item. */

export const APOLLO_WEALTH_STRATEGIES_URL = 'https://www.apollo.com/wealth/strategies'

export const APOLLO_STRATEGIES_ACCORDION_DEEP_LINK =
  'https://www.apollo.com/wealth/strategies#accordion-0ece485fb3-item-1412f41259'

export const APOLLO_WEALTH_PRODUCTS_URL =
  'https://www.apollo.com/wealth/strategies/products?source=vanity-link'

export const strategiesWhatWeDo =
  'Millions of families count on Apollo to generate investment income and retirement savings. Apollo invests in private and public markets across Credit, Equity, and Real Assets to seek excess returns—through alternatives or retirement-oriented channels. The firm describes a patient, creative, and rigorous approach and capital solutions that support growth and large-scale real-economy financing.'

export const strategiesPillars = [
  {
    id: 'credit',
    title: 'Credit',
    summary:
      'Breadth of capital and a history of structuring work support a comprehensive Credit platform: financing solutions and investment strategies across the risk spectrum.',
    sublinks: [
      { label: 'Asset-Backed Finance', href: 'https://www.apollo.com/strategies/asset-management/credit/asset-backed-finance' },
      { label: 'Corporate Credit', href: 'https://www.apollo.com/strategies/asset-management/credit/corporate-credit' },
      {
        label: 'Investment-grade private credit',
        href: 'https://www.apollo.com/wealth/strategies/asset-management/credit/investment-grade-private-credit',
      },
    ],
    learnMore: 'https://www.apollo.com/strategies/asset-management/credit',
  },
  {
    id: 'equity',
    title: 'Equity',
    summary:
      'Focus on purchase price and disciplined underwriting; creative solutions across all-weather equity strategies.',
    sublinks: [
      { label: 'Private Equity', href: 'https://www.apollo.com/strategies/asset-management/equity/private-equity' },
      { label: 'Hybrid Value', href: 'https://www.apollo.com/strategies/asset-management/equity/hybrid-value' },
      { label: 'Impact Investing', href: 'https://www.apollo.com/strategies/asset-management/equity/impact-investing' },
      { label: 'Secondaries', href: 'https://www.apollo.com/strategies/asset-management/equity/secondaries' },
    ],
    learnMore: 'https://www.apollo.com/strategies/asset-management/equity',
  },
  {
    id: 'realassets',
    title: 'Real Assets',
    summary:
      'Integrated Real Assets platform across geographies and the risk spectrum—infrastructure, real estate, energy transition, and related specialties.',
    sublinks: [
      { label: 'Infrastructure', href: 'https://www.apollo.com/strategies/asset-management/real-assets/infrastructure' },
      { label: 'Real Estate', href: 'https://www.apollo.com/strategies/asset-management/real-assets/real-estate' },
      {
        label: 'Energy Transition',
        href: 'https://www.apollo.com/strategies/asset-management/real-assets/energy-transition',
      },
    ],
    learnMore: 'https://www.apollo.com/strategies/asset-management/real-assets',
  },
] as const

export const strategiesAdjacent = [
  {
    title: 'Capital Solutions',
    summary:
      'Apollo Capital Solutions partners with teams across the platform to originate, execute, and syndicate large-scale transactions for sponsors, corporates, and other issuers.',
    href: 'https://www.apollo.com/strategies/asset-management/capital-solutions',
  },
  {
    title: 'Financial Services',
    summary:
      'Financial Institutions Group sits at the intersection of retirement services and asset management—built for insurers, institutional investors, originators, and the broader retirement ecosystem.',
    href: 'https://www.apollo.com/strategies/financial-services',
  },
  {
    title: 'Retirement Solutions',
    summary:
      'Range of retirement income solutions for institutions, companies, and individuals—aligned with long-horizon outcomes.',
    href: 'https://www.apollo.com/wealth/strategies/retirement-solutions',
  },
] as const
