# Apollo Convergence Studio

**Apollo Convergence Studio** is an interview prototype for a wealth-sales covering Greater China.  
It is designed as a **relationship-first advisor workspace**: diagnose portfolio gaps, design public/private fixed-income solutions, explain product structure, rehearse hard client objections, and execute through distributor workflows with suitability controls.

This project is intentionally positioned as:
- A **decision-support and communication studio**, not a generic dashboard
- A **sales/advisory workflow artifact**, not a portfolio management system
- A **demonstration of commercial judgment**, not a product pitch engine

## Github pages
https://skiii-boop.github.io/Apollo-convergence-studio/ 

Or scan the QR below <img width="420" height="420" alt="apollo-convergence-studio-qr" src="https://github.com/user-attachments/assets/68e4f850-f605-42fd-ad9a-b018eddcf256" />


## Important Disclaimer

- Educational prototype only
- Not affiliated with Apollo Global Management
- Not investment advice, solicitation, or an offer to buy/sell securities
- Any product references are sourced from Apollo public pages and should be independently verified for eligibility, jurisdiction, and current terms

---

## Why This Exists

The core thesis is simple:

> Wealth conversations are no longer “public vs private.”  
> They are about **portfolio role**, **liquidity budget**, **client suitability**, and **trust over time**.

This studio demonstrates how an RM could move from:
1) client diagnosis,  
2) to construction logic,  
3) to product explanation,  
4) to objection handling,  
5) to distributor execution,  
6) to repeatable reporting.

---

## Audience

Designed for:
- Wealth / private bank sales 
- Product strategy and distribution stakeholders
- Investment counselors / RMs
- Anyone evaluating whether the candidate understands both **client conversation quality** and **distribution execution reality**

---

## Product Experience Map

### 1) Home
Purpose: big-picture context + strategy and product landscape.

Includes:
- Apollo strategy summary (Credit / Equity / Real Assets)
- Public deep links to Apollo Wealth strategy/product pages
- Full list of 15 Apollo Wealth products (from public page)
- Visual highlighting for **semi-liquid**, **open-end/evergreen**, and related vehicle types
- Sales pipeline + upcoming client events timeline
- Embedded **Suitability & Risk Checklist**

### 2) Convergence Board
Purpose: convert client profile into a portfolio-construction narrative.

Includes:
- Thesis bar
- Editable client portrait
- Today vs Proposed allocation engine (with liquidity-budget slider)
- Portfolio diagnosis panel
- Why-now context cards
- Next-best-action navigation

### 3) Product X-Ray
Purpose: explain sleeves in advisor language, not marketing copy.

Includes:
- Product mechanics
- Portfolio role
- First-break risks
- Public-vs-private tradeoffs
- Apollo public references / Academy links

### 4) Objection Simulator
Purpose: rehearse difficult conversations with composure and compliance awareness.

Includes:
- Common objections
- Response style toggles (Client / RM / CIO)
- Short + market-style + disclosure + “what not to say”
- Extended talk tracks and drill-down notes

### 5) RM Brief
Purpose: one-page internal pre-meeting artifact.

Includes:
- Client snapshot and diagnosis
- Construction rationale
- Objection checklist
- Risk/disclosure language examples
- Meeting checklist and next-step goal

### 6) Distributor Launch Plan
Purpose: align with real distribution job requirements.

Workflow:
1. Distributor mapping  
2. Eligibility check  
3. NDA / confidentiality check  
4. Product due diligence  
5. Platform approval  
6. RM training  
7. Roadshow / client outreach  
8. Subscription support  
9. Salesforce tracking  
10. After-sales reporting

---

## Suitability & Risk Checklist (Core Control)

The checklist captures critical pre-trade questions:
- Long-term investment horizon?
- Illiquidity tolerance?
- Qualified / professional investor status?
- Understanding of gates and redemption limits?
- Fee tolerance?
- Private market NAV valuation understanding?
- Concentration risk reviewed?
- Currency exposure reviewed?
- Not emergency liquidity capital?
- Distributor approval status confirmed?

Design goal: show that product enthusiasm is always gated by suitability and risk framing.

---

## Capability Showcase (What this demonstrates)

- **Portfolio reasoning:** public/private construction logic with liquidity-aware sizing
- **Product communication:** translating complexity into role-based language
- **Commercial realism:** distributor workflow, platform approval, and post-sales tracking
- **Client handling:** objection rehearsal with audience-specific framing
- **Governance mindset:** suitability checklist and explicit risk controls
- **Execution quality:** responsive frontend, clean navigation, production-like structure

---

## 5-Minute Demo Flow

1. **Open Home**  
   Show strategy pillars, 15-product map, and why relationship/trust framing matters.

2. **Open Convergence Board**  
   Edit client portrait quickly, move liquidity slider, narrate why proposal changes.

3. **Open Product X-Ray (Private IG or ABF)**  
   Explain “what it solves,” “what breaks first,” and role vs public credit.

4. **Open Objection Simulator**  
   Run one hard objection across Client and CIO language.

5. **Open Distributor Launch Plan + Checklist**  
   Show this is not only investment thinking but launch execution.

6. **Open RM Brief**  
   End with tangible meeting output.

---

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Static deployment via GitHub Pages workflow

---

## Local Development

```bash
cd apollo-convergence-studio
npm install
npm run dev
```

Build + verify:

```bash
npm run lint
npm run build
npm run preview
```


## License

MIT — see `LICENSE`.
