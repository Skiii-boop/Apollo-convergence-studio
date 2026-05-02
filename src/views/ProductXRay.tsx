import { useState } from 'react'
import type { ProductId } from '../types'
import { products } from '../data/products'

export function ProductXRay() {
  const [pid, setPid] = useState<ProductId>('abf')
  const p = products.find((x) => x.id === pid)!

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="space-y-2">
        <h2 className="sr-only">Product list</h2>
        <p className="font-mono text-[10px] uppercase tracking-wider text-mist">Sleeves</p>
        <nav className="flex flex-col gap-1">
          {products.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setPid(x.id)}
              className={`rounded-md border px-3 py-2 text-left text-sm transition-all duration-studio ${
                x.id === pid
                  ? 'border-navy bg-navy text-ivory'
                  : 'border-transparent text-graphite hover:border-navy/15 hover:bg-panel'
              }`}
            >
              {x.title}
            </button>
          ))}
        </nav>
      </aside>

      <article className="min-w-0 space-y-8 rounded-lg border border-navy/10 bg-panel p-6 shadow-panel">
        <header>
          <p className="font-mono text-[10px] uppercase tracking-wider text-copper">Product X-Ray</p>
          <h2 className="mt-1 font-display text-3xl text-ink">{p.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-graphite">{p.tagline}</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {(
            [
              ['What it solves', p.solves],
              ['Why now', p.whyNow],
              ['Where it fits', p.whereFits],
              ['What could go wrong', p.whatWrong],
            ] as const
          ).map(([label, text]) => (
            <div key={label} className="rounded-md border border-navy/10 bg-ivory/50 p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-mist">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy">{text}</p>
            </div>
          ))}
        </div>

        <section>
          <h3 className="font-display text-xl text-ink">How it works</h3>
          <ol className="mt-4 flex flex-wrap gap-3">
            {p.flowSteps.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-2 rounded-full border border-navy/10 bg-ivory px-3 py-1.5 font-mono text-[11px] text-ink"
              >
                <span className="text-copper">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-ink">Portfolio role</h3>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-graphite marker:text-copper">
              {p.portfolioRole.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-copper/25 bg-copper/5 p-4">
            <h3 className="font-display text-xl text-ink">What breaks first</h3>
            <ul className="mt-3 space-y-2 text-sm text-graphite">
              {p.firstBreak.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="font-mono text-copper">▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-md border border-navy/10 bg-navy/5 p-5">
          <h3 className="font-display text-xl text-ink">vs. public credit</h3>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-olive">Wins</p>
              <p className="mt-1 text-sm text-graphite">{p.vsPublic.win}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-mist">Tradeoffs</p>
              <p className="mt-1 text-sm text-graphite">{p.vsPublic.lose}</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-navy/10 pt-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-mist">Apollo angle (subtle)</p>
          <p className="mt-2 text-sm text-graphite">{p.apolloAngle}</p>
          <p className="mt-6 font-display text-lg italic text-ink">
            If I were the RM, what would I say next?
          </p>
          <p className="mt-1 text-sm text-graphite">
            Anchor on portfolio role and liquidity budget, then offer a specialist deep dive on documentation — not a
            yield flex.
          </p>
        </footer>
      </article>
    </div>
  )
}
