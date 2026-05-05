import type { Audience, ObjectionAnswerBlock } from '../types'

export interface ObjectionEntry {
  id: string
  prompt: string
  answers: Record<Audience, ObjectionAnswerBlock>
}

export const objectionCatalog: ObjectionEntry[] = [
  {
    id: 'pubcred',
    prompt: 'Why not just buy public credit?',
    answers: {
      client: {
        short:
          'Public credit still belongs in the plan — we are adjusting how much generic IG you need for the same job.',
        market:
          'Public IG gives price discovery and liquidity; where the hurdle is durable carry and diversification of cash-flow patterns, we add sleeves that do not stack the same corporate factor.',
        disclosure:
          'Private and structured sleeves involve illiquidity, less frequent marks, and manager risk; past spread pickup is not guaranteed.',
        notToSay: '“Public credit is obsolete” — that is inaccurate and damages trust.',
        takeaway: 'Relative value and role: public for liquidity and beta, private where the budget and mandate fit.',
        deepDive:
          'Walk through two sleeves: (1) liquid public IG/HY for redeployability and stress behavior the client can observe daily; (2) private or structured sleeves only where the illiquidity budget exists and the cash-flow pattern is not redundant with the public book. Show overlap: same corporate issuers can appear in both — sizing is about marginal diversification and income hurdle, not ideology.',
        talkTrack60s:
          '“We are not replacing public credit — we are right-sizing it. Public markets still set the marginal price for much of corporate risk. The question is whether your entire income sleeve should be exposed to the same rate and spread cycles in one wrapper. Convergence, in Apollo’s public framing, is about construction: public where you need price discovery, private sleeves only where documentation and carry fit your liquidity contract with yourself.”',
        apolloEcho:
          'Apollo’s public “convergence” and private IG materials emphasize that public and private credit markets increasingly interact — use that to pivot from “either/or” to portfolio role and overlap analysis (see Apollo wealth insights on converging credit markets).',
      },
      rm: {
        short: 'Public remains the liquidity anchor; private sleeves are sized only after the liquidity ladder is filled.',
        market:
          'Think barbell: TRACE-level risk in liquid form plus a sleeve of differentiated carry where the client can behave through cycles.',
        disclosure:
          'Illiquidity premium is not free lunch; stress paths include gates, slower distributions, and NAV volatility.',
        notToSay: '“Always outperform public” — opens you to falsifiability and compliance issues.',
        takeaway: 'Construction story: overlap reduction + income hurdle, not product replacement.',
        deepDive:
          'Prep numbers: current IG duration, credit beta proxy, liquidity months covered, and cap-call calendar. Align with desk view on dispersion — private sleeves often win on documentation and covenants, not on pretending beta disappears. Have a one-page liquidity ladder sketch before you open the private sleeve discussion.',
        talkTrack60s:
          '“I want the public book to do what public books do best: reprice quickly and stay deployable. The private sleeve is sized after we reserve cash for taxes, lumpy spend, and behavioral slack. If we cannot name the illiquidity budget in months, we should not increase private exposure.”',
        apolloEcho:
          'Cite Apollo’s public line that much of private credit is investment grade and finances the real economy — not as a sales hook but to reframe: private is a funding channel with structural features, not a monolith (Apollo strategy and Academy primers).',
      },
      cio: {
        short: 'Public IG remains the marginal price setter; privates add structural carry and covenants where liquidity budget permits.',
        market:
          'Factor overlap between broad HY/IG and sponsor lending can be high — sizing should reflect diversification benefit, not headline yield.',
        disclosure:
          'Model risk in marks and prepayment/refi behavior; stress tests should include slower monetization.',
        notToSay: 'Dismissive comments about public market efficiency in front of skeptical CIOs.',
        takeaway: 'Hybrid construction is convergence — not a binary.',
        deepDive:
          'Bring vintage, sector, and documentation comparables. Discuss convergence evidence: same issuers tapping private and public markets, dispersion in private underwriting, and what illiquidity is buying in spread per turn of leverage. Separate beta from carry and from complexity premia.',
        talkTrack60s:
          '“We should size privates where marginal diversification and structural pickup are measurable, not where we are doubling the same corporate factor through a less liquid wrapper. Public IG still anchors price discovery for much of the complex.”',
        apolloEcho:
          'Apollo’s institutional and wealth pieces on private IG liquidity evolution are useful for CIO Q&A on evergreen mechanics, syndication, and pricing infrastructure — frame as market structure, not product hype.',
      },
    },
  },
  {
    id: 'stale',
    prompt: 'Private credit marks are stale, no?',
    answers: {
      client: {
        short:
          'Marks update less often than public bonds — we lean on structure, covenants, and manager reporting, not daily prices.',
        market:
          'Illiquidity means appraisal-based marks; the risk is real but different — we focus on what breaks first in cash flows, not mark frequency.',
        disclosure:
          'A downward revaluation can arrive in steps; liquidity may be limited if many investors seek exits simultaneously.',
        notToSay: '“Marks do not matter” — regulators and clients rightly care.',
        takeaway: 'Transparency is about mechanics and triggers, not daily screens.',
        deepDive:
          'Explain the sequence: fundamentals soften → amendments rise → coverage weakens → marks may lag then step down. Contrast with public TRACE where price is continuous but can overshoot. Offer reporting pack: servicer commentary, covenant headroom, vintage cohort behavior.',
        talkTrack60s:
          '“Stale is the wrong word — it is appraisal-based. That can damp day-to-day noise but it does not remove risk. What I watch is cash interest coverage, refi market depth for your cohort, and whether amendments are creeping in. Those lead marks.”',
        apolloEcho:
          'Apollo’s 2026 discussion of liquidity evolving in private IG is a good hook for explaining standardized pricing and secondary infrastructure without promising ETF-like liquidity.',
      },
      rm: {
        short:
          'Acknowledge the lag; pivot to first-break risks, covenants, and vintage rather than debating mark frequency alone.',
        market:
          'Use sponsor lending stress playbook: IC compression, refi markets, amendment behavior — those lead marks.',
        disclosure:
          'Client statements should include valuation uncertainty and potential delays in realization.',
        notToSay: 'Imply appraisals equal economic reality every quarter.',
        takeaway: 'Confidence comes from process disclosure, not pretending marks are like TRACE.',
        deepDive:
          'Prepare three data requests from manager: mark policy, stale position process, and side-by-case stress for top five exposures. Role-play how you will answer if client pulls a public chart and compares to private NAV line.',
        talkTrack60s:
          '“I am not asking you to ignore marks — I am asking you to pair marks with behavior. If amendments and PIK language are rising in the portfolio, that is the conversation, not whether the NAV moved on the same day as the ETF.”',
        apolloEcho:
          'Tie to Apollo public content on underwriting depth in converging markets — emphasize diligence and dispersion, not mark frequency as the sole risk metric.',
      },
      cio: {
        short:
          'Appraisal marks smooth volatility; risk lives in fundamentals and documentation — diligence on vintage and leverage stack.',
        market:
          'Cross-check marks with behavior: amendment rates, payment-in-kind creep, sector concentrations.',
        disclosure:
          'Operational due diligence on valuation policy and conflicts is part of the sleeve thesis.',
        notToSay: 'That private marks are “always conservative” — indefensible.',
        takeaway: 'Risk-first framing beats mark-frequency debates.',
        deepDive:
          'Propose stress grid: refi window, default correlation assumptions, recovery lag by sleeve. Discuss third-party pricing where available and how marks reconcile to cash distributions over rolling quarters.',
        talkTrack60s:
          '“We should treat private NAV as a process output tied to documentation and cash tests, not as a high-frequency beta read. The question is whether the underwriting stack is robust when refi markets gap.”',
        apolloEcho:
          'Reference Apollo’s liquidity-in-private-IG institutional note for structural evolution — useful for governance and ops due diligence talking points.',
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
        deepDive:
          'Use one tangible example pool type (e.g., equipment, receivables) without overfitting. Draw simple waterfall: collateral cash → fees → senior tranche → subordinated. Pair with “what breaks first”: servicer, collateral, ratings migration.',
        talkTrack60s:
          '“Complexity is a reason to size, not to ignore. We would use this sleeve to diversify the cash-flow patterns in your credit book — not to replace your liquidity stack. If you want, we walk one pool type slowly, then pause.”',
        apolloEcho:
          'Apollo publicly positions ABF as a growth chapter within private credit — use that to explain strategic relevance while keeping client language on pools and servicers, not jargon.',
      },
      rm: {
        short: 'Anchor on economic role first; show the 20-second flow diagram; offer specialist call for doc depth.',
        market:
          'Position ABF as collateral diversity vs. single-name IG — not as esoteric alpha theater.',
        disclosure:
          'Operational and legal complexity are suitability flags for smaller allocations.',
        notToSay: 'Oversell structural alpha without naming servicer and collateral risks.',
        takeaway: 'Confidence = role clarity + optional deep dive.',
        deepDive:
          'Pre-load one-page diagram and three risks: servicer quality, collateral drift, legal structure. Offer escalation path to product specialist and compliance-approved FAQ.',
        talkTrack60s:
          '“If the word ABS makes eyes glaze, translate: diversified cash flows backed by real activity, with a waterfall. We keep allocation small until governance comfort catches up.”',
        apolloEcho:
          'Apollo Academy and wealth insights on ABF are useful for credible “why now” without turning the meeting into a structurer’s lecture.',
      },
      cio: {
        short: 'Complexity budget should match governance; sleeve size reflects ops capacity to monitor pools and servicers.',
        market:
          'ABF diversifies cash-flow patterns vs. corporate-only sleeves — relevant when equity beta is already elevated.',
        disclosure:
          'Model risk in prepay and recovery assumptions; stress cases need non-Gaussian tails.',
        notToSay: 'Treat ABF as generic private credit — different risk vectors.',
        takeaway: 'Sleeve sizing is partly a governance decision.',
        deepDive:
          'Discuss data frequency, servicer oversight, and concentration limits by collateral type. Contrast mark stability vs. economic sensitivity — avoid conflating smooth marks with low economic risk.',
        talkTrack60s:
          '“We add ABF when the portfolio needs collateral diversity and we have the governance to monitor pools. Sleeve size is a function of ops bandwidth, not just return target.”',
        apolloEcho:
          'Align with Apollo’s public ABF narrative as differentiated engine within private credit — still independent suitability and docs review.',
      },
    },
  },
  {
    id: 'secnow',
    prompt: 'Why now for secondaries?',
    answers: {
      client: {
        short:
          'Because your private program needs pacing and vintage balance — not because we are timing the market.',
        market:
          'Secondaries help smooth J-curves and reduce single-vintage concentration; they are a construction tool.',
        disclosure:
          'Pricing and NAV can move against you; distributions are not guaranteed on a fixed schedule.',
        notToSay: '“Market is cheap so we must buy” — unless you have a firm house view to cite.',
        takeaway: 'Structural rationale > tactical call.',
        deepDive:
          'Map primary commitment schedule vs. cash needs; show where vintage clustering creates drawdown sensitivity. Explain secondaries as pacing layer, not return promise.',
        talkTrack60s:
          '“Now is about your program’s shape: pacing, diversification, and behavior through a multi-year private book — not a call that secondaries are statistically cheap this quarter.”',
        apolloEcho:
          'Apollo’s April 2026 public piece positions secondaries as a core building block in modern private portfolios — use for construction vocabulary, not timing bravado.',
      },
      rm: {
        short:
          'Frame as portfolio completion: pacing, diversification, and behavior vs. primary-only programs.',
        market:
          'Apollo’s 2026 wealth narrative elevates secondaries as core — still must fit liquidity and concentration policy.',
        disclosure:
          'Secondary portfolios can embed leverage and GP-specific risks — prospectus-level caveats apply.',
        notToSay: 'Guarantee shorter paybacks vs. primaries.',
        takeaway: 'Pacing and diversification are the client hooks.',
        deepDive:
          'Bring two case patterns: (1) overcommitted client needing distribution smoothing; (2) diversified program seeking vintage spread. Pair each with liquidity footnotes and fee drag.',
        talkTrack60s:
          '“Secondaries answer pacing and vintage questions your primary book cannot solve alone. We still respect gates, GP behavior, and NAV timing — this is not a liquidity substitute for cash needs.”',
        apolloEcho:
          'Cite Apollo wealth secondaries article for “core allocation” language — immediately pair with client-specific liquidity ladder.',
      },
      cio: {
        short:
          'Secondaries improve capital efficiency of private programs; entry pricing is cycle-sensitive but not the only input.',
        market:
          'Liquidity provision to LPs can be attractive vs. primary commitments — manager selection remains dominant driver.',
        disclosure:
          'NAV marks and stale reporting can lag inflection points — risk controls matter.',
        notToSay: 'Present as pure alpha sleeve without liquidity footnotes.',
        takeaway: 'Program-level portfolio tool, not a beta substitute.',
        deepDive:
          'Discuss dispersion across secondary strategies, leverage at vehicle level, and underwriting of portfolios acquired. Tie to CIO risk budget and concentration policy.',
        talkTrack60s:
          '“Secondaries improve program architecture: pacing, vintage, and access to diversified cash-flow streams. They do not remove private market risk — they re-shape it.”',
        apolloEcho:
          'Use Apollo’s public secondaries framing as portfolio completion, then pivot to your fund list and fee/NAV diligence — no endorsement implied by this demo.',
      },
    },
  },
]
