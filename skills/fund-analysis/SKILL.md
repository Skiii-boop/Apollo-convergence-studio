---
name: fund-analysis
description: Structured due-diligence and portfolio-fit analysis for investment funds (public, semi-liquid, private). Use when the user asks to evaluate, compare, or explain a fund's role, risks, suitability, or fit in a client portfolio.
---

# Fund Analysis / 基金分析

Produce a repeatable, evidence-backed fund analysis with fixed JSON output and a user-facing report. **Do not** give marketing summaries — run the full workflow and score each dimension.

## When to Use

**Use when:**
- User asks to analyze, evaluate, compare, or diligence a specific fund or sleeve
- User asks whether a fund fits a client portfolio or replaces a public sleeve
- User needs advisor-ready language: mechanics, first-break risks, liquidity, fees, suitability

**Do NOT use when:**
- User wants live trading, subscription, or order execution
- User asks for personalized investment advice without client context (refuse or run with explicit assumptions)
- User only wants a fund name lookup with no analysis depth
- Task is pure regulatory filing or legal document drafting

**Example triggers:**
1. "帮我分析一下 Apollo Diversified Credit Fund 适不适合放进这个客户的固收仓位？"
2. "Compare this interval fund vs public IG — what breaks first?"
3. "做一份基金尽调：semi-liquid private credit，关注流动性、费用和估值"
4. "这个 BDC 在组合里扮演什么角色？有哪些红旗？"
5. "Fund X due diligence for RM brief — structure, risks, portfolio role"

## Inputs

### Required

| Field | Type | Meaning |
|-------|------|---------|
| `fund_identifier` | string | Fund name, ticker, ISIN, or official product page URL |
| `analysis_purpose` | enum | `due_diligence` \| `portfolio_fit` \| `comparison` \| `client_brief` \| `objection_prep` |
| `investor_context` | object | At minimum: `horizon_years`, `liquidity_need` (low/med/high), `risk_tolerance` (conservative/balanced/aggressive), `qualified_investor` (bool or unknown) |

### Optional

| Field | Type | Default | Range / notes |
|-------|------|---------|---------------|
| `peer_funds` | string[] | `[]` | For comparison mode |
| `portfolio_snapshot` | object | null | Current sleeves with %; enables fit scoring |
| `liquidity_budget_pct` | number | null | 0–100; max % allocatable to illiquid/semi-liquid |
| `jurisdiction` | string | `unknown` | Affects eligibility assumptions |
| `fee_sensitivity` | enum | `medium` | low \| medium \| high |
| `focus_dimensions` | string[] | all | Subset: `strategy`, `liquidity`, `fees`, `valuation`, `manager`, `concentration`, `suitability` |
| `data_sources` | string[] | auto | URLs, factsheets, PPM excerpts user provided |

### Missing-input handling

1. If `fund_identifier` missing → ask once: name/URL + vehicle type if known
2. If `investor_context` missing and purpose is `portfolio_fit` or `client_brief` → ask for horizon, liquidity need, qualified status; else assume `horizon_years=7`, `liquidity_need=medium`, `risk_tolerance=balanced`, `qualified_investor=unknown` and flag in `limitations`
3. If no documents provided → search official issuer pages + recent factsheet; note data gaps in output

## Workflow

### Step 1 — Identify & classify vehicle

**Goal:** Lock fund identity and structural bucket.

**Data:** Official product page, prospectus/PPM summary, vehicle type (mutual, ETF, interval, evergreen, closed-end, BDC, REIT, PE/VC).

**Judgment:** Map to `vehicle_type` and `liquidity_tier`: `daily` \| `weekly` \| `monthly` \| `quarterly` \| `interval` \| `gated` \| `locked`.

**Output:** `fund_profile` (name, manager, lane, vehicle, liquidity mechanics, base currency).

### Step 2 — Strategy & portfolio role

**Goal:** State what problem the fund solves and where it belongs.

**Data:** Strategy description, asset focus, return objective, benchmark if any.

**Judgment:** Assign `portfolio_role[]` (e.g. fixed-income replacement, yield enhancer, diversifier, equity completion). Flag overlap with public beta.

**Output:** `strategy_summary`, `portfolio_role`, `solves`, `where_fits`, `what_wrong_if_misused`.

### Step 3 — Liquidity & cash-flow fit

**Goal:** Match fund liquidity to client liquidity budget.

**Data:** Redemption terms, gates, notice, side pockets, borrowing lines.

**Judgment:** Score `liquidity_fit` 1–5 vs `investor_context.liquidity_need` and `liquidity_budget_pct`. **Fail** if fund illiquidity exceeds budget.

**Output:** `liquidity_analysis` (terms, stress behavior, fit score, narrative).

### Step 4 — Economics (fees & net outcome)

**Goal:** Surface fee stack and whether net return hurdle is plausible.

**Data:** Management fee, performance fee, hurdle, platform/distributor fees, expense ratio.

**Judgment:** `fee_assessment`: `favorable` \| `market` \| `elevated` \| `unclear`. Compare to peer if available.

**Output:** `fee_breakdown`, `fee_assessment`, `net_return_considerations`.

### Step 5 — Risk & first-break scenarios

**Goal:** Name what breaks first under stress — not generic "market risk."

**Data:** Underlying exposures, leverage, concentration, covenant/mark mechanics, vintage mix.

**Judgment:** List 3–5 `first_break_risks` ordered by likelihood × impact. Map to `risk_flags[]`.

**Output:** `risk_register`, `first_break_risks`, `vs_public_tradeoff` { win, lose }.

### Step 6 — Valuation & transparency

**Goal:** Explain how NAV is marked and client perception risk.

**Data:** Valuation policy, appraisal frequency, historical write-down behavior if disclosed.

**Judgment:** `valuation_quality`: `high` \| `moderate` \| `opaque` \| `unknown`.

**Output:** `valuation_analysis`, mark-lag narrative if applicable.

### Step 7 — Suitability gate

**Goal:** Binary-style checklist before any positive recommendation tone.

**Data:** Investor context + fund constraints (qualified investor, min investment, jurisdiction).

**Check items:** long horizon, illiquidity tolerance, gates understood, fee tolerance, NAV understanding, not emergency capital, concentration reviewed, currency reviewed, distributor eligibility.

**Output:** `suitability_checklist` (item → pass/fail/unknown), `suitability_verdict`: `appropriate` \| `conditional` \| `not_appropriate` \| `insufficient_data`.

### Step 8 — Synthesize verdict & confidence

**Goal:** Single directional view with explicit uncertainty.

**Judgment:** Apply scoring framework (below). Produce `overall_stance`: `bullish` \| `neutral` \| `bearish` on **portfolio fit** (not price prediction).

**Output:** Full JSON schema + user-facing report.

## Data & Tools

### Required data
- Official fund/product page or legal summary (prospectus, PPM, factsheet)
- Liquidity/redemption terms
- Fee schedule
- Strategy / holdings summary (as disclosed)

### Optional enhancements
- Peer fund comparison set
- Manager AUM and track record (same strategy)
- Historical NAV / distribution data
- Servicer or covenant commentary (private credit)
- Distributor platform eligibility

### Quality checks
- Prefer issuer primary sources over third-party marketing
- Cross-check vehicle type vs liquidity terms for consistency
- Flag stale documents (>12 months) unless no alternative
- If holdings undisclosed, cap `confidence` at `medium`

### Degradation
| Missing | Action |
|---------|--------|
| No PPM/factsheet | Use public page only; `confidence` ≤ `low`; expand `limitations` |
| No peer set | Skip relative fee/rank; absolute assessment only |
| No portfolio snapshot | Omit allocation %; give qualitative role only |
| No qualified-investor confirmation | `suitability_verdict` = `conditional`; require verification |

## Scoring Framework

### Dimension weights (portfolio-fit analysis)

| Dimension | Weight | Key signals |
|-----------|--------|-------------|
| Liquidity fit | 25% | Terms vs budget; gate history if known |
| Strategy clarity & role | 20% | Clear mandate, low overlap misuse |
| Risk / first-break | 20% | Concentration, leverage, mark risk |
| Fee efficiency | 15% | Net hurdle vs role |
| Valuation transparency | 10% | Mark policy, disclosure |
| Suitability match | 10% | Checklist pass rate |

### Stance rules (`overall_stance`)

- **bullish:** Weighted score ≥ 4.0 AND suitability ≠ `not_appropriate` AND no critical red flag
- **bearish:** Weighted score < 2.5 OR suitability = `not_appropriate` OR critical liquidity mismatch
- **neutral:** Otherwise, or material `unknown` data

### Confidence

| Level | Criteria |
|-------|----------|
| high | Primary docs + holdings/fees complete + peer context |
| medium | Primary strategy/liquidity/fees present; some gaps |
| low | Marketing-only or major fields inferred |

## Output Schema

Return **both** JSON and the Chinese report template below.

```json
{
  "meta": {
    "skill": "fund-analysis",
    "generated_at": "ISO-8601",
    "fund_identifier": "string",
    "analysis_purpose": "string"
  },
  "fund_profile": {
    "name": "string",
    "manager": "string",
    "vehicle_type": "string",
    "liquidity_tier": "string",
    "strategy_lane": "Credit|Equity|Real Assets|Multi|Other"
  },
  "summary": "string — 2-4 sentences",
  "overall_stance": "bullish|neutral|bearish",
  "weighted_score": 0.0,
  "key_findings": ["string"],
  "evidence": [
    { "claim": "string", "source": "string", "source_type": "official|user|inferred" }
  ],
  "portfolio_role": ["string"],
  "liquidity_analysis": {
    "terms_summary": "string",
    "fit_score_1_to_5": 0,
    "narrative": "string"
  },
  "fee_breakdown": { "management": "string", "performance": "string", "other": "string" },
  "fee_assessment": "favorable|market|elevated|unclear",
  "first_break_risks": ["string"],
  "risk_flags": ["string"],
  "vs_public_tradeoff": { "win": "string", "lose": "string" },
  "suitability_checklist": [
    { "item": "string", "status": "pass|fail|unknown" }
  ],
  "suitability_verdict": "appropriate|conditional|not_appropriate|insufficient_data",
  "risks": ["string"],
  "actionable_takeaways": ["string"],
  "limitations": ["string"],
  "confidence": "high|medium|low"
}
```

### User-facing report template (中文)

```markdown
## 基金分析摘要
{summary}

**综合判断：** {overall_stance}（组合适配度，非价格预测）｜**置信度：** {confidence}｜**评分：** {weighted_score}/5

## 关键发现
- {key_findings}

## 组合角色
{portfolio_role}

## 流动性
{liquidity_analysis.narrative}

## 费用
{fee_assessment} — {fee_breakdown}

## 优先破裂风险
1. {first_break_risks}

## 相对公募权衡
- 优势：{vs_public_tradeoff.win}
- 劣势：{vs_public_tradeoff.lose}

## 适当性
{suitability_verdict} — {suitability_checklist highlights}

## 可执行建议
- {actionable_takeaways}

## 风险与局限
- {risks}
- {limitations}

## 证据来源
- {evidence}
```

## Rules

1. **Evidence-linked claims** — every material finding maps to `evidence[]`
2. **No price targets** — analyze structure, fit, and risks only
3. **Suitability before enthusiasm** — never bullish if checklist fails on critical items
4. **Advisor tone** — explain mechanics and what breaks first; avoid marketing superlatives
5. **Disclose assumptions** — default investor context must appear in `limitations`
6. **Not investment advice** — include disclaimer when output may be used client-facing

## Example (abbreviated)

**Input:**
```json
{
  "fund_identifier": "Apollo Diversified Credit Fund",
  "analysis_purpose": "portfolio_fit",
  "investor_context": {
    "horizon_years": 10,
    "liquidity_need": "low",
    "risk_tolerance": "balanced",
    "qualified_investor": true
  },
  "liquidity_budget_pct": 25,
  "portfolio_snapshot": { "public_ig_pct": 20, "cash_pct": 14 }
}
```

**Reasoning outline:**
1. Classify as interval fund / semi-liquid credit → liquidity_tier `interval`
2. Role: partial public IG replacement, spread pickup with illiquidity budget
3. Liquidity: periodic windows → fit_score 4/5 given low liquidity_need and 25% budget
4. Fees: interval fund typical stack → fee_assessment `market`
5. First-break: credit cycle, mark lag, gate stress in redemption spikes
6. Suitability: passes horizon/qualified; gates need client acknowledgment → `conditional`
7. Score ~3.8 → `neutral` leaning bullish; confidence `medium` (public page only)

**Output JSON:** (agent fills full schema per run)

**User answer:** Use Chinese report template with fund-specific evidence from official Apollo product page and interval-fund mechanics.
