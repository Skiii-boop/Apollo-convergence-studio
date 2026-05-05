import { useCallback, useState } from 'react'
import type { ClientPortrait, StudioView, SuitabilityChecklistItemId } from './types'
import { AppShell } from './components/AppShell'
import { clientPortrait as defaultPortrait } from './data/demoClient'
import {
  createDefaultSuitabilityChecklistState,
  type SuitabilityChecklistState,
} from './data/suitabilityChecklist'
import { ConvergenceBoard } from './views/ConvergenceBoard'
import { DistributorLaunchPlan } from './views/DistributorLaunchPlan'
import { HomeView } from './views/HomeView'
import { ObjectionSimulator } from './views/ObjectionSimulator'
import { ProductXRay } from './views/ProductXRay'
import { RMBrief } from './views/RMBrief'

export default function App() {
  const [view, setView] = useState<StudioView>('home')
  const [liquidityBudget, setLiquidityBudget] = useState(48)
  const [portrait, setPortrait] = useState<ClientPortrait>(() => ({ ...defaultPortrait }))
  const [suitabilityChecklist, setSuitabilityChecklist] = useState<SuitabilityChecklistState>(
    createDefaultSuitabilityChecklistState
  )

  const onPortraitChange = useCallback((key: keyof ClientPortrait, value: string) => {
    setPortrait((p) => ({ ...p, [key]: value }))
  }, [])

  const onPortraitReset = useCallback(() => {
    setPortrait({ ...defaultPortrait })
  }, [])

  const onToggleChecklist = useCallback((id: SuitabilityChecklistItemId) => {
    setSuitabilityChecklist((prev) => ({ ...prev, [id]: !prev[id] }))
  }, [])

  return (
    <AppShell view={view} onView={setView}>
      {view === 'home' && (
        <HomeView
          onNavigate={setView}
          checklistState={suitabilityChecklist}
          onToggleChecklist={onToggleChecklist}
        />
      )}
      {view === 'distributor' && (
        <DistributorLaunchPlan checklistState={suitabilityChecklist} onToggleChecklist={onToggleChecklist} />
      )}
      {view === 'board' && (
        <ConvergenceBoard
          liquidityBudget={liquidityBudget}
          onLiquidityChange={setLiquidityBudget}
          onNavigate={setView}
          portrait={portrait}
          onPortraitChange={onPortraitChange}
          onPortraitReset={onPortraitReset}
        />
      )}
      {view === 'xray' && <ProductXRay />}
      {view === 'objections' && <ObjectionSimulator />}
      {view === 'brief' && <RMBrief liquidityBudget={liquidityBudget} portrait={portrait} />}
    </AppShell>
  )
}
