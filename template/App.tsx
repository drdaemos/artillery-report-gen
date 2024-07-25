import './App.css'
import testReport from '../test/report.json'
import { Scenario } from './components/Scenario.tsx'

export function App() {
  const report =
    // @ts-ignore
    'aggregate' in window.__ARTILLERY_REPORT__ ? window.__ARTILLERY_REPORT__ : testReport

  return (
    <div className="app container mx-auto mb-16 p-4 lg:p-6">
      <Scenario report={report} scenario={'Translate Async'} />
    </div>
  )
}
