/** Public Apollo URLs and paraphrased themes for interview prototype — verify links before live meetings. */

export const APOLLO_IG_PRIVATE_CREDIT_STRATEGY =
  'https://www.apollo.com/wealth/strategies/asset-management/credit/investment-grade-private-credit'

export const APOLLO_ACADEMY = {
  register: 'https://apolloacademy.com/register/?partnerref=apo-academy-wp-nav-aalink',
  learningCenter: 'https://apolloacademy.com/learning-center/?partnerref=apo-academy-wp-nav-aalink',
  alternativePerspectives: 'https://apolloacademy.com/alternative-perspectives/?partnerref=apo-academy-wp-nav-aalink',
  viewFromApolloPodcast: 'https://apolloacademy.com/the-view-from-apollo/?partnerref=apo-academy-wp-nav-aalink',
  outlook2026: 'https://www.apolloacademy.com/courses/2026-outlook/',
} as const

export const APOLLO_INSIGHTS = {
  demystifyingPrivateIgDec2024:
    'https://www.apollo.com/wealth/insights-news/insights/2024/12/demystifying-the-opportunity-in-investment-grade-private-credit',
  liquidityPrivateIgFeb2026:
    'https://www.apollo.com/institutional/insights-news/insights/2026/02/how-is-liquidity-evolving-in-private-investment-grade-credit',
  convergenceCreditMay2026:
    'https://www.apollo.com/wealth/insights-news/insights/the-view-from-apollo/2026/05/convergence-finding-opportunity-in-a-converging-credit-market',
  investingAcrossCreditCycleApr2026:
    'https://www.apollo.com/wealth/insights-news/insights/the-view-from-apollo/2026/04/investing-across-the-credit-cycle',
} as const

/** Third-party page screenshot — may change availability; falls back in UI if blocked. */
export const APOLLO_STRATEGY_PAGE_SCREENSHOT = (pageUrl: string) =>
  `https://image.thum.io/get/width/1400/crop/720/noanimate/${encodeURIComponent(pageUrl)}`
