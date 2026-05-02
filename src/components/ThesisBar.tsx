interface ThesisBarProps {
  text: string
}

export function ThesisBar({ text }: ThesisBarProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-navy/10 bg-panel px-6 py-5 shadow-panel">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-copper/10 to-transparent"
        aria-hidden
      />
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">Client thesis</p>
      <p className="mt-2 max-w-4xl font-display text-xl font-medium leading-snug text-balance text-ink md:text-2xl">
        {text}
      </p>
    </div>
  )
}
