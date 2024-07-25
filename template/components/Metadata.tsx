import { List, ListItem } from '@tremor/react'
import { fromUnixTime } from 'date-fns'
import type { ArtilleryReport } from '../types/report.ts'
import { ReportBlock } from './ReportBlock.tsx'

function timestampToReadableString(timestamp?: number): string {
  return fromUnixTime((timestamp ?? 0) / 1000).toUTCString()
}

export function Metadata({ report }: { report: ArtilleryReport }) {
  const startedAt = timestampToReadableString(report.aggregate.firstCounterAt)
  const endedAt = timestampToReadableString(report.aggregate.lastCounterAt)
  return (
    <ReportBlock heading="Overview">
      <List>
        <ListItem>
          <span>Started at: </span>
          <span className="font-semibold">{startedAt}</span>
        </ListItem>
        <ListItem>
          <span>Ended at: </span>
          <span className="font-semibold">{endedAt}</span>
        </ListItem>
      </List>
    </ReportBlock>
  )
}
