import { load } from 'cheerio'
import { readFile, writeFile, mkdir } from 'node:fs/promises'

import type {
  CompetitionResult,
  RaceResults,
} from '../src/types/results'

const INPUT_FILE = 'src/data/results/2025.json'
const OUTPUT_DIR = 'src/data/results/tickets'
const OUTPUT_FILE = `${OUTPUT_DIR}/2025.json`

type TicketStage = {
  name: string
  time: string | null
}

type IndividualTicket = {
  participantId: number | null
  format: 'individual'
  number: number | null
  name: string
  category: string
  location: string | null
  position: {
    overall: number | null
    gender: number | null
    category: number | null
  }
  totalTime: string | null
  stages: TicketStage[]
  detailUrl: string
}

type PairTicketStage = {
  name: string
  rider1Time: string | null
  rider2Time: string | null
}

type PairTicket = {
  participantId: number | null
  format: 'pair'
  number: number | null
  name: string
  category: string
  location: string | null
  position: {
    overall: number | null
    gender: number | null
    category: number | null
  }
  totalTime: string | null
  stages: PairTicketStage[]
  detailUrl: string
}

type TicketResult =
  | IndividualTicket
  | PairTicket

type TicketsResults = {
  year: number
  source: {
    name: string
    url: string
  }
  tickets: TicketResult[]
}

function cleanText(value: string | undefined | null): string {
  return (value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseNumber(
  value: string | undefined | null,
): number | null {
  const cleaned = cleanText(value)

  if (!cleaned) return null

  const match = cleaned.match(/\d+/)

  if (!match) return null

  return Number.parseInt(match[0], 10)
}

function parseIndividualStageData(
  $: ReturnType<typeof load>,
): TicketStage[] {
  const stageNames = $('.nombre_etapa')
    .map((_, element) =>
      cleanText($(element).text()),
    )
    .get()

  const stageTimes = $('.tiempo_etapa')
    .map((_, element) =>
      cleanText(
        $(element)
          .find('.tiempo_nro')
          .first()
          .text(),
      ),
    )
    .get()

  const count = Math.min(
    stageNames.length,
    stageTimes.length,
  )

  const stages: TicketStage[] = []

  for (let index = 0; index < count; index += 1) {
    stages.push({
      name: stageNames[index],
      time: stageTimes[index] || null,
    })
  }

  return stages
}

function parsePairStageData(
  $: ReturnType<typeof load>,
): PairTicketStage[] {
  const stageNames = $('.nombre_etapa')
    .map((_, element) =>
      cleanText($(element).text()),
    )
    .get()

  const stageTimes = $('.tiempo_etapa')
    .map((_, element) =>
      cleanText(
        $(element)
          .find('.tiempo_nro')
          .first()
          .text(),
      ),
    )
    .get()

  const count = Math.min(
    stageNames.length,
    stageTimes.length,
  )

  const stages: PairTicketStage[] = []

  for (let index = 0; index < count; index += 2) {
    const firstName = stageNames[index]
    const firstTime = stageTimes[index]

    if (!firstName) continue

    stages.push({
      name: firstName,
      rider1Time: firstTime || null,
      rider2Time:
        stageTimes[index + 1] || null,
    })
  }

  return stages
}

function parseTicket(
  html: string,
  result: CompetitionResult,
): TicketResult {
  const $ = load(html)

  const number = parseNumber(
    $('.numero').first().text(),
  )

  const name = cleanText(
    $('.nombre').first().text(),
  )

  const category = cleanText(
    $('.categoria').first().text(),
  )

  const locationText = cleanText(
    $('.localidad').first().text(),
  )

  const location = locationText || null

  const position = {
    overall: parseNumber(
      $('.pos_general_nro').first().text(),
    ),
    gender: parseNumber(
      $('.pos_sexo_nro').first().text(),
    ),
    category: parseNumber(
      $('.pos_categoria_nro').first().text(),
    ),
  }

  const totalTime =
    cleanText(
      $('.tiempo')
        .first()
        .find('.tiempo_nro')
        .first()
        .text(),
    ) || null

  if (result.format === 'individual') {
    return {
      participantId: result.bib,
      format: 'individual',
      number,
      name,
      category,
      location,
      position,
      totalTime,
      stages: parseIndividualStageData($),
      detailUrl: result.detailUrl,
    }
  }

  return {
    participantId: result.bib,
    format: 'pair',
    number,
    name,
    category,
    location,
    position,
    totalTime,
    stages: parsePairStageData($),
    detailUrl: result.detailUrl,
  }
}

async function fetchTicket(
  result: CompetitionResult,
): Promise<TicketResult> {
  console.log(
    `  Fetching ${result.bib ?? 'unknown'} — ${result.name}`,
  )

  const response = await fetch(result.detailUrl)

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status} — ${result.detailUrl}`,
    )
  }

  const html = await response.text()

  return parseTicket(html, result)
}

async function main() {
  console.log('Loading 2025 results...')

  const input = await readFile(
    INPUT_FILE,
    'utf-8',
  )

  const raceResults =
    JSON.parse(input) as RaceResults

  const tickets: TicketResult[] = []

  let total = 0
  let successful = 0
  let failed = 0

  for (const competition of raceResults.competitions) {
    console.log('\n')
    console.log(
      `Competition: ${competition.name}`,
    )
    console.log(
      `Results: ${competition.results.length}`,
    )

    for (const result of competition.results) {
      total += 1

      try {
        const ticket = await fetchTicket(result)

        tickets.push(ticket)

        successful += 1
      } catch (error) {
        failed += 1

        console.error(
          `  ERROR: ${result.detailUrl}`,
        )

        console.error(
          error instanceof Error
            ? error.message
            : error,
        )
      }
    }
  }

  const output: TicketsResults = {
    year: raceResults.year,
    source: {
      name: raceResults.source.name,
      url: raceResults.source.url,
    },
    tickets,
  }

  await mkdir(OUTPUT_DIR, {
    recursive: true,
  })

  await writeFile(
    OUTPUT_FILE,
    JSON.stringify(output, null, 2),
    'utf-8',
  )

  console.log('\n')
  console.log('='.repeat(80))
  console.log('SCRAPING COMPLETED')
  console.log('='.repeat(80))

  console.log(`Total tickets: ${total}`)
  console.log(`Successful: ${successful}`)
  console.log(`Failed: ${failed}`)
  console.log(`Output: ${OUTPUT_FILE}`)
}

main().catch((error) => {
  console.error('\nScraper failed:')
  console.error(error)
  process.exit(1)
})