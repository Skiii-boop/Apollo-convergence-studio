import { useState } from 'react'
import type { Audience } from '../types'
import { objectionCatalog } from '../data/objections'

const audiences: { id: Audience; label: string }[] = [
  { id: 'client', label: 'Client language' },
  { id: 'rm', label: 'RM language' },
  { id: 'cio', label: 'CIO / market language' },
]

export function ObjectionSimulator() {
  const [oid, setOid] = useState(objectionCatalog[0].id)
  const [audience, setAudience] = useState<Audience>('client')
  const entry = objectionCatalog.find((o) => o.id === oid)!
  const block = entry.answers[audience]

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="space-y-6">
        <div>
          <label htmlFor="obj-select" className="font-mono text-[10px] uppercase tracking-wider text-mist">
            Objection
          </label>
          <select
            id="obj-select"
            value={oid}
            onChange={(e) => setOid(e.target.value)}
            className="mt-2 w-full rounded-md border border-navy/15 bg-panel px-3 py-2 font-sans text-sm text-ink shadow-inner"
          >
            {objectionCatalog.map((o) => (
              <option key={o.id} value={o.id}>
                {o.prompt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-mist">Response style</p>
          <div className="mt-2 flex flex-col gap-2">
            {audiences.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setAudience(a.id)}
                className={`rounded-md border px-3 py-2 text-left text-sm transition-all duration-studio ${
                  audience === a.id
                    ? 'border-navy bg-navy text-ivory'
                    : 'border-navy/10 bg-panel text-graphite hover:border-copper/40'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <figure className="rounded-lg border border-navy/10 bg-panel p-4 font-display text-lg leading-snug text-ink shadow-panel">
          “{entry.prompt}”
        </figure>
      </div>

      <div className="space-y-4">
        {(
          [
            ['Short answer', block.short],
            ['Market-style answer', block.market],
            ['Risk disclosure', block.disclosure],
            ['What not to say', block.notToSay],
            ['One-line takeaway', block.takeaway],
          ] as const
        ).map(([title, body]) => (
          <section
            key={title}
            className={`rounded-lg border p-5 shadow-panel ${
              title === 'What not to say'
                ? 'border-copper/30 bg-copper/5'
                : 'border-navy/10 bg-panel'
            }`}
          >
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-mist">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy">{body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
