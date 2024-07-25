export type ArtilleryReport = {
  aggregate: MetricsWindow
  intermediate: MetricsWindow[]
}

type MetricsWindow = {
  counters: Counters
  rates: Rates
  summaries: Record<string, Histogram>
  histograms: Record<string, Histogram>
} & Timestamps

type Timestamps = {
  firstCounterAt?: number
  firstHistogramAt?: number
  lastCounterAt?: number
  lastHistogramAt?: number
  firstMetricAt?: number
  lastMetricAt?: number
  period: string | number
}

type Histogram = {
  min: number
  max: number
  count: number
  mean: number
  p50: number
  median: number
  p75: number
  p90: number
  p95: number
  p99: number
  p999: number
}

type Rates = Record<string, number>
type Counters = Record<string, number>
