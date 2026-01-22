import { latestAnalysis } from './latestanalysis'
import { technicalFactors } from './technicalfactors'

export type AnalysisItem = {
  date: string
  title: string
  symbol: string
  analyst: string
  file: string
}

export const analysisDataMap: Record<string, AnalysisItem[]> = {
  latest: latestAnalysis,
  technical: technicalFactors,
}
