import { latestAnalysis } from "./latestanalysis";
import { technicalFactors } from "./technicalfactors";
import { fundamentalAnalysis } from "./fundamentalAnalysis";
import { sectorAnalysis } from "./sectorAnalysis";
import { stockAnalysis } from "./stockAnalysis";
import { trinityQuickWin } from "./trinityQuickWin";

export type AnalysisItem = {
  date: string;
  title: string;
  symbol: string;
  analyst: string;
  file: string;
};

export const analysisDataMap: Record<string, AnalysisItem[]> = {
  latest: latestAnalysis,
  technical: technicalFactors,
  fundamental: fundamentalAnalysis,
  sector: sectorAnalysis,
  asset: stockAnalysis,
  "quick-win": trinityQuickWin,
};
