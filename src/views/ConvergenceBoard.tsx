import { diagnosisBullets, thesisLine, whyNowCards } from '../data/demoClient'
import { ClientPortrait as ClientPortraitFields } from '../components/ClientPortrait'
import type { ClientPortrait as ClientPortraitModel, StudioView } from '../types'
import { ConvergenceEngine } from '../components/ConvergenceEngine'
import { DiagnosisPanel } from '../components/DiagnosisPanel'
import { NextActions } from '../components/NextActions'
import { ThesisBar } from '../components/ThesisBar'
import { WhyNow } from '../components/WhyNow'

interface ConvergenceBoardProps {
  liquidityBudget: number
  onLiquidityChange: (n: number) => void
  onNavigate: (v: StudioView) => void
  portrait: ClientPortraitModel
  onPortraitChange: (key: keyof ClientPortraitModel, value: string) => void
  onPortraitReset: () => void
}

export function ConvergenceBoard({
  liquidityBudget,
  onLiquidityChange,
  onNavigate,
  portrait,
  onPortraitChange,
  onPortraitReset,
}: ConvergenceBoardProps) {
  return (
    <div className="space-y-8">
      <ThesisBar text={thesisLine} />

      <div className="grid gap-8 xl:grid-cols-12">
        <div className="space-y-6 xl:col-span-3">
          <ClientPortraitFields data={portrait} onChange={onPortraitChange} onResetExample={onPortraitReset} />
        </div>

        <div className="space-y-6 xl:col-span-6">
          <ConvergenceEngine liquidityBudget={liquidityBudget} onLiquidityChange={onLiquidityChange} />
          <DiagnosisPanel bullets={diagnosisBullets} />
        </div>

        <div className="flex flex-col gap-6 xl:col-span-3">
          <WhyNow cards={whyNowCards} />
          <NextActions onGo={onNavigate} />
        </div>
      </div>
    </div>
  )
}
