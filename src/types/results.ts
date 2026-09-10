export type CompetitionFormat =
  | 'individual'
  | 'pair'

export type ResultStatus =
  | 'finished'
  | 'dnf'
  | 'dns'

export type Gender =
  | 'M'
  | 'F'
  | 'E'
  | null

export type ResultPosition = {
  overall: number | null
  gender: number | null
  category: number | null
}

export type StageDefinition = {
  number: number
  name: string
}

export type IndividualStageResult = {
  number: number
  time: string | null
}

export type PairStageResult = {
  number: number
  rider1Time: string | null
  rider2Time: string | null
}

export type PenaltyBonus = {
  time: string
  type?: 'penalty' | 'bonus' | 'unknown'
} | null

export type ResultBase = {
  position: ResultPosition

  bib: number | null

  name: string

  category: {
    name: string
    gender: Gender
  }

  location: string | null

  status: ResultStatus

  totalTime: string | null

  penaltyBonus: PenaltyBonus

  difference: {
    first: string | null
    previous: string | null
  }

  detailUrl: string
}

export type IndividualResult = ResultBase & {
  format: 'individual'
  stages: IndividualStageResult[]
}

export type PairResult = ResultBase & {
  format: 'pair'
  stages: PairStageResult[]
}

export type CompetitionResult =
  | IndividualResult
  | PairResult

export type Competition = {
  id: string
  name: string
  format: CompetitionFormat
  stages: StageDefinition[]
  results: CompetitionResult[]
}

export type ResultsSource = {
  name: string
  url: string
  lastUpdated?: string
}

export type RaceResults = {
  year: number
  source: ResultsSource
  competitions: Competition[]
}
