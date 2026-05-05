import { useState } from 'react'
import { APOLLO_STRATEGY_PAGE_SCREENSHOT } from '../data/apolloReferences'

interface ApolloHeroImageProps {
  pageUrl: string
  title: string
}

/**
 * Tries a static preview of Apollo’s public page, then optional CDN paths, then a text fallback.
 */
export function ApolloHeroImage({ pageUrl, title }: ApolloHeroImageProps) {
  const candidates = [
    APOLLO_STRATEGY_PAGE_SCREENSHOT(pageUrl),
    'https://www.apollo.com/content/dam/apolloaem/website/wealth/images/wealth-credit-hero-2400x900.jpg',
    'https://www.apollo.com/content/dam/apolloaem/website/wealth/images/private-credit-hero-2400x900.jpg',
  ]

  const [failed, setFailed] = useState(0)
  const hasMore = failed < candidates.length
  const src = hasMore ? candidates[failed]! : null

  return (
    <figure className="overflow-hidden rounded-lg border border-navy/10 bg-navy/5 shadow-inner">
      {src ? (
        <img
          src={src}
          alt={`${title} — visual reference from Apollo’s public strategy page`}
          className="h-auto w-full max-h-[min(420px,50vh)] object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed((f) => f + 1)}
        />
      ) : (
        <div className="flex flex-col items-start gap-3 bg-gradient-to-br from-navy to-ink p-8 text-ivory">
          <p className="font-display text-xl">Apollo · public strategy page</p>
          <p className="max-w-prose text-sm text-bone/90">
            Marketing imagery is served from Apollo’s site and can change. Open the official page for the up-to-date
            hero, charts, and footnotes.
          </p>
          <a
            href={pageUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-ivory hover:bg-white/20"
          >
            Open Apollo strategy page
          </a>
        </div>
      )}
      <figcaption className="border-t border-navy/10 bg-panel px-4 py-3 text-xs text-graphite">
        <span className="font-mono text-mist">Prototype note: </span>
        First image may be a third-party static capture of Apollo’s public URL for demo purposes only. Not investment
        advice. © Apollo content remains with Apollo Global Management.
      </figcaption>
    </figure>
  )
}
