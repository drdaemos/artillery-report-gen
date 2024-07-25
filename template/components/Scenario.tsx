import type { ArtilleryReport } from '../types/report.ts'
import { LoadSummary } from './LoadSummary.tsx'
import { Metadata } from './Metadata.tsx'

export function Scenario({ scenario, report }: { scenario: string; report: ArtilleryReport }) {
  return (
    <div className="scenario">
      <h1 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900">
        Test report: {scenario}
      </h1>
      <div className="mt-8 grid gap-4 grid-cols-3">
        <section className="col-span-2">
          <LoadSummary report={report} />
        </section>
        <aside className="col-span-1">
          <Metadata report={report} />
        </aside>
      </div>
    </div>
  )
}
