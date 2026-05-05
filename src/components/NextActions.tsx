import type { StudioView } from '../types'

export function NextActions({ onGo }: { onGo: (v: StudioView) => void }) {
  return (
    <div className="rounded-lg border border-navy/10 bg-navy p-5 text-ivory shadow-panel">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/80">Next best action</p>
      <div className="mt-4 flex flex-col gap-2">
        <button
          type="button"
          className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-ivory transition-colors hover:bg-white/10"
          onClick={() => onGo('home')}
        >
          Home — pipeline & 15 products
        </button>
        <button
          type="button"
          className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-ivory transition-colors hover:bg-white/10"
          onClick={() => onGo('distributor')}
        >
          Distributor Launch Plan
        </button>
        <button
          type="button"
          className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-ivory transition-colors hover:bg-white/10"
          onClick={() => onGo('xray')}
        >
          Open product X-Ray
        </button>
        <button
          type="button"
          className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-ivory transition-colors hover:bg-white/10"
          onClick={() => onGo('objections')}
        >
          Rehearse objections
        </button>
        <button
          type="button"
          className="rounded-md border border-copper/50 bg-copper/20 px-4 py-3 text-left text-sm font-semibold text-ivory transition-colors hover:bg-copper/30"
          onClick={() => onGo('brief')}
        >
          Generate RM brief
        </button>
      </div>
    </div>
  )
}
