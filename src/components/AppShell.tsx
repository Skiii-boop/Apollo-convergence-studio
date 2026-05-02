import type { ReactNode } from 'react'
import type { StudioView } from '../types'

const nav: { id: StudioView; label: string }[] = [
  { id: 'board', label: 'Convergence Board' },
  { id: 'xray', label: 'Product X-Ray' },
  { id: 'objections', label: 'Objection Simulator' },
  { id: 'brief', label: 'RM Brief' },
]

interface AppShellProps {
  view: StudioView
  onView: (v: StudioView) => void
  children: ReactNode
}

export function AppShell({ view, onView, children }: AppShellProps) {
  return (
    <div className="min-h-screen text-navy">
      <header className="border-b border-navy/10 bg-panel/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
              Interview prototype · Wealth advisor workspace · Not affiliated with Apollo GM
            </p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Apollo Convergence Studio
            </h1>
            <p className="mt-1 max-w-xl text-sm text-graphite">
              Diagnose portfolio gaps, map public/private construction, explain sleeves, rehearse objections,
              export a meeting brief.
            </p>
          </div>
          <nav className="flex flex-wrap gap-2" aria-label="Primary">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onView(item.id)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-studio ${
                  view === item.id
                    ? 'border-navy bg-navy text-ivory shadow-panel'
                    : 'border-navy/15 bg-transparent text-graphite hover:border-copper/50 hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-[1400px] px-5 py-10">{children}</main>
      <footer className="border-t border-navy/10 py-8 text-center font-mono text-[10px] leading-relaxed text-mist">
        Interview prototype — educational UI only, not investment advice. Not affiliated with Apollo Global Management.
        For portfolio / interview use; hosted copy may live on GitHub Pages.
      </footer>
    </div>
  )
}
