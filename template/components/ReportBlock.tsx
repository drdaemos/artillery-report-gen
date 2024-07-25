import { Card } from '@tremor/react'
import type { ReactNode } from 'react'

export function ReportBlock({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-tremor-content-strong">{heading}</h2>
      <div className="mt-4">{children}</div>
    </Card>
  )
}
