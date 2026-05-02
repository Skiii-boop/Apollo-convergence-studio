export function WhyNow({
  cards,
}: {
  cards: { title: string; body: string }[]
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-xl text-ink">Why now</h2>
      <div className="grid flex-1 gap-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="rounded-lg border border-navy/10 bg-panel p-5 shadow-panel transition-shadow duration-studio hover:shadow-lift"
          >
            <h3 className="font-display text-lg text-ink">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
