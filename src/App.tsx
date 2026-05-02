import { useState } from 'react'
import type { StudioView } from './types'
import { AppShell } from './components/AppShell'
import { ConvergenceBoard } from './views/ConvergenceBoard'
import { ObjectionSimulator } from './views/ObjectionSimulator'
import { ProductXRay } from './views/ProductXRay'
import { RMBrief } from './views/RMBrief'

export default function App() {
  const [view, setView] = useState<StudioView>('board')
  const [liquidityBudget, setLiquidityBudget] = useState(48)

  return (
    <AppShell view={view} onView={setView}>
      {view === 'board' && (
        <ConvergenceBoard
          liquidityBudget={liquidityBudget}
          onLiquidityChange={setLiquidityBudget}
          onNavigate={setView}
        />
      )}
      {view === 'xray' && <ProductXRay />}
      {view === 'objections' && <ObjectionSimulator />}
      {view === 'brief' && <RMBrief liquidityBudget={liquidityBudget} />}
    </AppShell>
  )
}
