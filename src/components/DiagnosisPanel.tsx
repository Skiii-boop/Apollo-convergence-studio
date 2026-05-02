export function DiagnosisPanel({ bullets }: { bullets: string[] }) {
  return (
    <div className="rounded-lg border border-olive/25 bg-olive/5 px-5 py-4">
      <p className="font-mono text-[10px] uppercase tracking-wider text-olive">Portfolio diagnosis</p>
      <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-graphite marker:text-olive">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}
