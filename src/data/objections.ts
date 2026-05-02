import type { Audience } from '../types'

export interface ObjectionEntry {
  id: string
  prompt: string
  answers: Record<
    Audience,
    {
      short: string
      market: string
      disclosure: string
      notToSay: string
      takeaway: string
    }
  >
}

export const objectionCatalog: ObjectionEntry[] = [
  {
    id: 'pubcred',
    prompt: 'Why not just buy public credit?',
    answers: {
      client: {
        short: 'Public credit still belongs in the plan — we are adjusting how much generic IG you need for the same job.',
        market:
          'Public IG gives price discovery and liquidity; where the hurdle is durable carry and diversification of cash-flow patterns, we add sleeves that do not stack the same corporate factor.',
        disclosure:
          'Private and structured sleeves involve illiquidity, less frequent marks, and manager risk; past spread pickup is not guaranteed.',
        notToSay: '“Public credit is obsolete” — that is inaccurate and damages trust.',
        takeaway: 'Relative value and role: public for liquidity and beta, private where the budget and mandate fit.',
      },
      rm: {
        short: 'Public remains the liquidity anchor; private sleeves are sized only after the liquidity ladder is filled.',
        market:
          'Think barbell: TRACE-level risk in liquid form plus a sleeve of differentiated carry where the client can behave through cycles.',
        disclosure:
          'Illiquidity premium is not free lunch; stress paths include gates, slower distributions, and NAV volatility.',
        notToSay: '“Always outperform public” — opens you to falsifiability and compliance issues.',
        takeaway: 'Construction story: overlap reduction + income hurdle, not product replacement.',
      },
      cio: {
        short: 'Public IG remains the marginal price setter; privates add structural carry and covenants where liquidity budget permits.',
        market:
          'Factor overlap between broad HY/IG and sponsor lending can be high — sizing should reflect diversification benefit, not headline yield.',
        disclosure:
          'Model risk in marks and prepayment/refi behavior; stress tests should include slower monetization.',
        notToSay: 'Dismissive comments about public market efficiency in front of skeptical CIOs.',
        takeaway: 'Hybrid construction is convergence — not a binary.',
      },
    },
  },
  {
    id: 'stale',
    prompt: 'Private credit marks are stale, no?',
    answers: {
      client: {
        short: 'Marks update less often than public bonds — we lean on structure, covenants, and manager reporting, not daily prices.',
        market:
          'Illiquidity means appraisal-based marks; the risk is real but different — we focus on what breaks first in cash flows, not mark frequency.',
        disclosure:
          'A downward revaluation can arrive in steps; liquidity may be limited if many investors seek exits simultaneously.',
        notToSay: '“Marks do not matter” — regulators and clients rightly care.',
        takeaway: 'Transparency is about mechanics and triggers, not daily screens.',
      },
      rm: {
        short: 'Acknowledge the lag; pivot to first-break risks, covenants, and vintage rather than debating mark frequency alone.',
        market:
          'Use sponsor lending stress playbook: IC compression, refi markets, amendment behavior — those lead marks.',
        disclosure:
          'Client statements should include valuation uncertainty and potential delays in realization.',
        notToSay: 'Imply appraisals equal economic reality every quarter.',
        takeaway: 'Confidence comes from process disclosure, not pretending marks are like TRACE.',
      },
      cio: {
        short: 'Appraisal marks smooth volatility; risk lives in fundamentals and documentation — diligence on vintage and leverage stack.',
        market:
          'Cross-check marks with behavior: amendment rates, payment-in-kind creep, sector concentrations.',
        disclosure:
          'Operational due diligence on valuation policy and conflicts is part of the sleeve thesis.',
        notToSay: 'That private marks are “always conservative” — indefensible.',
        takeaway: 'Risk-first framing beats mark-frequency debates.',
      },
    },
  },
  {
    id: 'abfcomplex',
    prompt: 'ABF sounds too complex.',
    answers: {
      client: {
        short: 'Complexity is why we size it — the goal is a diversifier in cash flows, not the whole portfolio.',
        market:
          'We explain it like a mortgage pass-through mindset: pool performance, servicing, waterfall — in plain language, one layer at a time.',
        disclosure:
          'Complex structures can gap in stress; liquidity is limited and recovery paths may be non-linear.',
        notToSay: '“It is simple” when the client is clearly unconvinced.',
        takeaway: 'Progressive disclosure: pool → servicing → waterfall → your tranche.',
      },
      rm: {
        short: 'Anchor on economic role first; show the 20-second flow diagram; offer specialist call for doc depth.',
        market:
          'Position ABF as collateral diversity vs. single-name IG — not as esoteric alpha theater.',
        disclosure:
          'Operational and legal complexity are suitability flags for smaller allocations.',
        notToSay: 'Oversell structural alpha without naming servicer and collateral risks.',
        takeaway: 'Confidence = role clarity + optional deep dive.',
      },
      cio: {
        short: 'Complexity budget should match governance; sleeve size reflects ops capacity to monitor pools and servicers.',
        market:
          'ABF diversifies cash-flow patterns vs. corporate-only sleeves — relevant when equity beta is already elevated.',
        disclosure:
          'Model risk in prepay and recovery assumptions; stress cases need non-Gaussian tails.',
        notToSay: 'Treat ABF as generic private credit — different risk vectors.',
        takeaway: 'Sleeve sizing is partly a governance decision.',
      },
    },
  },
  {
    id: 'secnow',
    prompt: 'Why now for secondaries?',
    answers: {
      client: {
        short: 'Because your private program needs pacing and vintage balance — not because we are timing the market.',
        market:
          'Secondaries help smooth J-curves and reduce single-vintage concentration; they are a construction tool.',
        disclosure:
          'Pricing and NAV can move against you; distributions are not guaranteed on a fixed schedule.',
        notToSay: '“Market is cheap so we must buy” — unless you have a firm house view to cite.',
        takeaway: 'Structural rationale > tactical call.',
      },
      rm: {
        short: 'Frame as portfolio completion: pacing, diversification, and behavior vs. primary-only programs.',
        market:
          'Apollo’s 2026 wealth narrative elevates secondaries as core — still must fit liquidity and concentration policy.',
        disclosure:
          'Secondary portfolios can embed leverage and GP-specific risks — prospectus-level caveats apply.',
        notToSay: 'Guarantee shorter paybacks vs. primaries.',
        takeaway: 'Pacing and diversification are the client hooks.',
      },
      cio: {
        short: 'Secondaries improve capital efficiency of private programs; entry pricing is cycle-sensitive but not the only input.',
        market:
          'Liquidity provision to LPs can be attractive vs. primary commitments — manager selection remains dominant driver.',
        disclosure:
          'NAV marks and stale reporting can lag inflection points — risk controls matter.',
        notToSay: 'Present as pure alpha sleeve without liquidity footnotes.',
        takeaway: 'Program-level portfolio tool, not a beta substitute.',
      },
    },
  },
]
