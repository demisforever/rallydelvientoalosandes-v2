import { load } from 'cheerio'
import { mkdir, writeFile } from 'node:fs/promises'

import type {
  CompetitionResult,
  IndividualResult,
  PairResult,
  RaceResults,
  ResultStatus,
} from '../src/types/results'

const BASE_URL =
  'https://cronometrajeinstantaneo.com/resultados/rally-del-viento-a-los-andes-2025'

const OUTPUT_FILE = 'src/data/results/2025.json'

function cleanText(value: string): string {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .trim()
}

function parseNumber(value: string): number | null {
  const clean = cleanText(value).replace(/[^\d]/g, '')

  return clean ? Number(clean) : null
}

function parseGender(
  value: string,
): 'M' | 'F' | 'E' | null {
  const gender = cleanText(value).toUpperCase()

  if (gender === 'M') return 'M'
  if (gender === 'F') return 'F'
  if (gender === 'E') return 'E'

  return null
}

function parseStatus(value: string): ResultStatus {
  const status = cleanText(value).toUpperCase()

  if (status === 'DNF') return 'dnf'
  if (status === 'DNS') return 'dns'

  return 'finished'
}

function getDetailUrl(
  $: ReturnType<typeof load>,
  row: unknown,
): string {
  const links = $(row as never)
    .find('a[href*="ticket?idparticipante="]')
    .map((_, link) => $(link).attr('href'))
    .get()

  return links[0] ?? ''
}

function getCells(
  $: ReturnType<typeof load>,
  row: unknown,
) {
  return $(row as never).find('td')
}

function getCellText(
  $: ReturnType<typeof load>,
  row: unknown,
  className: string,
): string {
  return cleanText(
    $(row as never)
      .find(`td.${className}`)
      .first()
      .text(),
  )
}

function getStageCells(
  $: ReturnType<typeof load>,
  row: unknown,
) {
  return $(row as never)
    .find('td.etapa')
    .map((_, cell) => ({
      className: $(cell).attr('class') ?? '',
      value: cleanText($(cell).text()),
    }))
    .get()
}

function parseIndividualRow(
  $: ReturnType<typeof load>,
  row: unknown,
): IndividualResult {
  const positionOverall = getCellText(
    $,
    row,
    'pos_general',
  )

  const positionGender = getCellText(
    $,
    row,
    'pos_sexo',
  )

  const positionCategory = getCellText(
    $,
    row,
    'pos_categoria',
  )

  const bib = getCellText($, row, 'numero')
  const name = getCellText($, row, 'nombre')
  const category = getCellText($, row, 'categoria')
  const gender = getCellText($, row, 'sexo')
  const location = getCellText($, row, 'localidad')

  const stageCells = getStageCells($, row)

  const totalTime = getCellText($, row, 'total')
  const firstDifference = getCellText(
    $,
    row,
    'diff_primero',
  )
  const previousDifference = getCellText(
    $,
    row,
    'diff_anterior',
  )

  return {
    format: 'individual',

    position: {
      overall: parseNumber(positionOverall),
      gender: parseNumber(positionGender),
      category: parseNumber(positionCategory),
    },

    bib: parseNumber(bib),

    name,

    category: {
      name: category,
      gender: parseGender(gender),
    },

    location: location || null,

    status: parseStatus(totalTime),

    stages: stageCells.map((stage, index) => ({
      number: index + 1,
      time: stage.value || null,
    })),

    penaltyBonus: null,

    totalTime: totalTime || null,

    difference: {
      first:
        firstDifference === '-'
          ? null
          : firstDifference || null,

      previous:
        previousDifference === '-'
          ? null
          : previousDifference || null,
    },

    detailUrl: getDetailUrl($, row),
  }
}

function parsePairRow(
  $: ReturnType<typeof load>,
  row: unknown,
): PairResult {
  const positionOverall = getCellText(
    $,
    row,
    'pos_general',
  )

  const positionGender = getCellText(
    $,
    row,
    'pos_sexo',
  )

  const positionCategory = getCellText(
    $,
    row,
    'pos_categoria',
  )

  const bib = getCellText($, row, 'numero')
  const name = getCellText($, row, 'nombre')
  const category = getCellText($, row, 'categoria')
  const gender = getCellText($, row, 'sexo')
  const location = getCellText($, row, 'localidad')

  const stageCells = getStageCells($, row)

  const totalTime = getCellText($, row, 'total')
  const firstDifference = getCellText(
    $,
    row,
    'diff_primero',
  )
  const previousDifference = getCellText(
    $,
    row,
    'diff_anterior',
  )

  const stages = [
    {
      number: 1,
      rider1Time: stageCells[0]?.value || null,
      rider2Time: stageCells[1]?.value || null,
    },
    {
      number: 2,
      rider1Time: stageCells[2]?.value || null,
      rider2Time: stageCells[3]?.value || null,
    },
    {
      number: 3,
      rider1Time: stageCells[4]?.value || null,
      rider2Time: stageCells[5]?.value || null,
    },
  ]

  return {
    format: 'pair',

    position: {
      overall: parseNumber(positionOverall),
      gender: parseNumber(positionGender),
      category: parseNumber(positionCategory),
    },

    bib: parseNumber(bib),

    name,

    category: {
      name: category,
      gender: parseGender(gender),
    },

    location: location || null,

    status: parseStatus(totalTime),

    stages,

    penaltyBonus: null,

    totalTime: totalTime || null,

    difference: {
      first:
        firstDifference === '-'
          ? null
          : firstDifference || null,

      previous:
        previousDifference === '-'
          ? null
          : previousDifference || null,
    },

    detailUrl: getDetailUrl($, row),
  }
}

async function scrape() {
  console.log('Fetching 2025 results...')

  const response = await fetch(BASE_URL)

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}: ${response.statusText}`,
    )
  }

  const html = await response.text()
  const $ = load(html)

  const tables = $('table')

  console.log(`Found ${tables.length} tables.`)

  if (tables.length !== 2) {
    throw new Error(
      `Expected 2 result tables, found ${tables.length}.`,
    )
  }

  const competitions = []

  /*
   * TABLE 1
   * Rally Promocional
   */
  const promotionalTable = tables.eq(0)

  const promotionalResults: CompetitionResult[] = []

  promotionalTable
    .find('tbody tr')
    .each((_, row) => {
      promotionalResults.push(
        parseIndividualRow($, row),
      )
    })

  competitions.push({
    id: 'promocional',
    name: 'Rally Promocional',
    format: 'individual' as const,

    stages: [
      {
        number: 1,
        name: 'Huinganco → Varvarco',
      },
    ],

    results: promotionalResults,
  })

  /*
   * TABLE 2
   * Rally Duplas
   */
  const pairsTable = tables.eq(1)

  const pairResults: CompetitionResult[] = []

  pairsTable
    .find('tbody tr')
    .each((_, row) => {
      pairResults.push(
        parsePairRow($, row),
      )
    })

  competitions.push({
    id: 'duplas',
    name: 'Rally Duplas',
    format: 'pair' as const,

    stages: [
      {
        number: 1,
        name: 'Huinganco → Varvarco',
      },
      {
        number: 2,
        name: 'Varvarco → Los Cerrillos',
      },
      {
        number: 3,
        name: 'Los Cerrillos → Huinganco',
      },
    ],

    results: pairResults,
  })

  const output: RaceResults = {
    year: 2025,

    source: {
      name: 'Cronometraje Instantáneo',
      url: BASE_URL,
    },

    competitions,
  }

  await mkdir('src/data/results', {
    recursive: true,
  })

  await writeFile(
    OUTPUT_FILE,
    `${JSON.stringify(output, null, 2)}\n`,
    'utf8',
  )

  console.log('')
  console.log('Scraping completed successfully.')
  console.log(`Output: ${OUTPUT_FILE}`)
  console.log('')

  competitions.forEach((competition) => {
    console.log(
      `${competition.name}: ${competition.results.length} results`,
    )
  })
}

scrape().catch((error) => {
  console.error('')
  console.error('Scraping failed:')
  console.error(error)
  process.exit(1)
})