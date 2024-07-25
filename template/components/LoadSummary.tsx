import { AreaChart } from '@tremor/react'
import { fromUnixTime } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import type { ArtilleryReport } from '../types/report.ts'
import { ReportBlock } from './ReportBlock.tsx'

const xAxisFormatter = (number: number) => {
  const start = fromUnixTime(Math.round(number / 1000))
  return `${formatInTimeZone(start, 'UTC', 'HH:mm:ss')}`
}

const durationFormatter = (number: number) => `${number} ms`
const usersFormatter = (number: number) => `${number} VUs`

type ChartData = {
  timestamp: number
  usersCreated: number
  usersActive: number
  asyncProcessingTime: number
}

export function LoadSummary({ report }: { report: ArtilleryReport }) {
  let maxUsers = 0
  let usersActive = 0
  const chartData: ChartData[] = report.intermediate.map((window) => {
    const usersCreated = window.counters['vusers.created'] ?? 0
    const usersCompleted = window.counters['vusers.completed'] ?? 0
    const usersFailed = window.counters['vusers.failed'] ?? 0
    usersActive = usersActive + usersCreated - usersCompleted - usersFailed
    maxUsers = Math.max(maxUsers, usersActive, usersCreated)

    return {
      xAxis: xAxisFormatter(Number(window.period)),
      timestamp: Number(window.period),
      usersCreated,
      usersActive,
      asyncProcessingTime: window.histograms.async_translation_time?.mean ?? 0,
    }
  })

  return (
    <ReportBlock heading="Load Summary">
      <AreaChart
        className="h-96"
        data={chartData}
        index="xAxis"
        categories={['usersCreated', 'usersActive', 'asyncProcessingTime']}
        colors={['cyan', 'indigo', 'rose']}
        xAxisConfigs={[
          {
            valueFormatter: xAxisFormatter,
            orientation: 'bottom',
          },
        ]}
        yAxisConfigs={[
          {
            categories: ['usersCreated', 'usersActive'],
            valueFormatter: usersFormatter,
            minValue: 0,
            maxValue: maxUsers + 5,
            orientation: 'left',
          },
          {
            categories: ['asyncProcessingTime'],
            valueFormatter: durationFormatter,
            orientation: 'right',
          },
        ]}
      />
    </ReportBlock>
  )
}
