import fs from 'node:fs'
import path from 'node:path'

type TicketStage = {
  name: string
  time?: string | null
  rider1Time?: string | null
  rider2Time?: string | null
}

type TicketResult = {
  participantId: number | null
  format: 'individual' | 'pair'
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

type TicketsFile = {
  year: number
  source: {
    name: string
    url: string
    lastUpdated?: string
  }
  tickets: TicketResult[]
}

const filePath = path.resolve(
  'src/data/results/tickets/2025.json',
)

function isValidTime(value: unknown): boolean {
  if (value === null) return true
  if (typeof value !== 'string') return false

  return /^\d{2}:\d{2}:\d{2}$/.test(value)
}

function reportError(
  errors: string[],
  ticket: TicketResult | null,
  message: string,
) {
  const prefix = ticket
    ? `#${ticket.number ?? ticket.participantId ?? '?'} — ${ticket.name}`
    : 'GENERAL'

  errors.push(`${prefix}: ${message}`)
}

console.log('')
console.log('='.repeat(80))
console.log('VALIDATING 2025 TICKETS')
console.log('='.repeat(80))
console.log('')
console.log(`File: ${filePath}`)
console.log('')

if (!fs.existsSync(filePath)) {
  console.error('ERROR: JSON file not found.')
  console.error(filePath)
  process.exit(1)
}

let data: TicketsFile

try {
  const raw = fs.readFileSync(filePath, 'utf-8')
  data = JSON.parse(raw)
} catch (error) {
  console.error('ERROR: Could not read or parse JSON.')
  console.error(error)
  process.exit(1)
}

const errors: string[] = []
const warnings: string[] = []

if (data.year !== 2025) {
  errors.push(
    `GENERAL: Expected year 2025, got ${data.year}`,
  )
}

if (!Array.isArray(data.tickets)) {
  errors.push('GENERAL: "tickets" is not an array.')
  process.exit(1)
}

const tickets = data.tickets

console.log(`Total tickets: ${tickets.length}`)
console.log('')

//
// -----------------------------------------------------------------------------
// BASIC COUNTS
// -----------------------------------------------------------------------------

const individualTickets = tickets.filter(
  (ticket) => ticket.format === 'individual',
)

const pairTickets = tickets.filter(
  (ticket) => ticket.format === 'pair',
)

console.log('FORMAT COUNTS')
console.log('-'.repeat(80))
console.log(`Individual: ${individualTickets.length}`)
console.log(`Pair:       ${pairTickets.length}`)
console.log(`Total:      ${tickets.length}`)
console.log('')

if (individualTickets.length !== 19) {
  errors.push(
    `GENERAL: Expected 19 individual tickets, got ${individualTickets.length}`,
  )
}

if (pairTickets.length !== 57) {
  errors.push(
    `GENERAL: Expected 57 pair tickets, got ${pairTickets.length}`,
  )
}

if (tickets.length !== 76) {
  errors.push(
    `GENERAL: Expected 76 total tickets, got ${tickets.length}`,
  )
}

//
// -----------------------------------------------------------------------------
// DUPLICATES
// -----------------------------------------------------------------------------

console.log('DUPLICATES')
console.log('-'.repeat(80))

const participantIds = new Map<number, number>()
const numbers = new Map<number, number>()

for (const ticket of tickets) {
  if (ticket.participantId !== null) {
    participantIds.set(
      ticket.participantId,
      (participantIds.get(ticket.participantId) ?? 0) + 1,
    )
  }

  if (ticket.number !== null) {
    numbers.set(
      ticket.number,
      (numbers.get(ticket.number) ?? 0) + 1,
    )
  }
}

for (const [id, count] of participantIds) {
  if (count > 1) {
    errors.push(
      `GENERAL: participantId ${id} appears ${count} times.`,
    )
  }
}

for (const [number, count] of numbers) {
  if (count > 1) {
    errors.push(
      `GENERAL: number ${number} appears ${count} times.`,
    )
  }
}

console.log(
  [...participantIds.values()].some((count) => count > 1)
    ? 'Duplicate participantIds found.'
    : 'No duplicate participantIds.',
)

console.log(
  [...numbers.values()].some((count) => count > 1)
    ? 'Duplicate numbers found.'
    : 'No duplicate numbers.',
)

console.log('')

//
// -----------------------------------------------------------------------------
// TICKET VALIDATION
// -----------------------------------------------------------------------------

console.log('TICKET VALIDATION')
console.log('-'.repeat(80))

for (const ticket of tickets) {
  const label = `#${ticket.number ?? '?'} — ${ticket.name}`

  //
  // Required basic fields
  //

  if (ticket.participantId === null) {
    reportError(
      errors,
      ticket,
      'participantId is null.',
    )
  }

  if (ticket.number === null) {
    reportError(
      errors,
      ticket,
      'number is null.',
    )
  }

  if (
    ticket.participantId !== null &&
    ticket.number !== null &&
    ticket.participantId !== ticket.number
  ) {
    reportError(
      errors,
      ticket,
      `participantId (${ticket.participantId}) !== number (${ticket.number}).`,
    )
  }

  if (!ticket.name?.trim()) {
    reportError(
      errors,
      ticket,
      'name is empty.',
    )
  }

  if (!ticket.category?.trim()) {
    reportError(
      errors,
      ticket,
      'category is empty.',
    )
  }

  if (!ticket.detailUrl?.trim()) {
    reportError(
      errors,
      ticket,
      'detailUrl is empty.',
    )
  }

  //
  // Position
  //

  if (!ticket.position) {
    reportError(
      errors,
      ticket,
      'position object is missing.',
    )
  } else {
    if (
      ticket.position.overall !== null &&
      typeof ticket.position.overall !== 'number'
    ) {
      reportError(
        errors,
        ticket,
        'position.overall is not a number or null.',
      )
    }

    if (
      ticket.position.gender !== null &&
      typeof ticket.position.gender !== 'number'
    ) {
      reportError(
        errors,
        ticket,
        'position.gender is not a number or null.',
      )
    }

    if (
      ticket.position.category !== null &&
      typeof ticket.position.category !== 'number'
    ) {
      reportError(
        errors,
        ticket,
        'position.category is not a number or null.',
      )
    }
  }

  //
  // Total time
  //

  if (!isValidTime(ticket.totalTime)) {
    reportError(
      errors,
      ticket,
      `Invalid totalTime: ${ticket.totalTime}`,
    )
  }

  //
  // Stages
  //

  if (!Array.isArray(ticket.stages)) {
    reportError(
      errors,
      ticket,
      'stages is not an array.',
    )
    continue
  }

  if (ticket.format === 'individual') {
    if (ticket.stages.length !== 1) {
      reportError(
        errors,
        ticket,
        `Individual should have 1 stage, got ${ticket.stages.length}.`,
      )
    }

    for (const [index, stage] of ticket.stages.entries()) {
      if (!stage.name?.trim()) {
        reportError(
          errors,
          ticket,
          `Stage ${index + 1} has empty name.`,
        )
      }

      if (!isValidTime(stage.time)) {
        reportError(
          errors,
          ticket,
          `Stage ${index + 1} has invalid time: ${stage.time}`,
        )
      }

      if (
        stage.rider1Time !== undefined ||
        stage.rider2Time !== undefined
      ) {
        reportError(
          errors,
          ticket,
          `Individual stage ${index + 1} contains pair fields.`,
        )
      }
    }
  }

  const expectedPairStages = [
    'ETAPA 1 - HUINGANCO - VARVARCO',
    'ETAPA 2 - VARVARCO - LAGUNA LOS CERRILLOS',
    'ETAPA 3 - LAGUNA LOS CERRILLOS - HUINGANCO',
  ]

  if (ticket.format === 'pair') {
    if (ticket.stages.length !== 3) {
      const existingStageNames = new Set(
        ticket.stages.map((stage) => stage.name),
      )

      const missingStages = expectedPairStages.filter(
        (stageName) => !existingStageNames.has(stageName),
      )

      warnings.push(
        `${label}: Pair has ${ticket.stages.length} stage(s) instead of 3.` +
        (
          missingStages.length > 0
            ? ` Missing: ${missingStages.join(', ')}.`
            : ''
        ),
      )
    }

    for (const [index, stage] of ticket.stages.entries()) {
      if (!stage.name?.trim()) {
        reportError(
          errors,
          ticket,
          `Stage ${index + 1} has empty name.`,
        )
      }

      if (!isValidTime(stage.rider1Time)) {
        reportError(
          errors,
          ticket,
          `Stage ${index + 1} has invalid rider1Time: ${stage.rider1Time}`,
        )
      }

      if (!isValidTime(stage.rider2Time)) {
        reportError(
          errors,
          ticket,
          `Stage ${index + 1} has invalid rider2Time: ${stage.rider2Time}`,
        )
      }

      if (stage.time !== undefined) {
        reportError(
          errors,
          ticket,
          `Pair stage ${index + 1} contains individual "time" field.`,
        )
      }
    }
  }

  //
  // URL
  //

  if (
    ticket.participantId !== null &&
    !ticket.detailUrl.includes(
      `idparticipante=${ticket.participantId}`,
    )
  ) {
    warnings.push(
      `${label}: detailUrl does not contain expected participantId.`,
    )
  }
}

console.log(
  errors.length === 0
    ? 'All ticket structure checks passed.'
    : `${errors.length} validation error(s) found.`,
)

console.log('')

//
// -----------------------------------------------------------------------------
// STAGE CONSISTENCY
// -----------------------------------------------------------------------------

console.log('STAGE CONSISTENCY')
console.log('-'.repeat(80))

const individualStageNames = new Set(
  individualTickets.flatMap((ticket) =>
    ticket.stages.map((stage) => stage.name),
  ),
)

const pairStageNames = new Set(
  pairTickets.flatMap((ticket) =>
    ticket.stages.map((stage) => stage.name),
  ),
)

console.log(
  `Individual stage names: ${individualStageNames.size}`,
)

for (const name of individualStageNames) {
  console.log(`  - ${name}`)
}

console.log('')

console.log(
  `Pair stage names: ${pairStageNames.size}`,
)

for (const name of pairStageNames) {
  console.log(`  - ${name}`)
}

console.log('')

if (individualStageNames.size !== 1) {
  warnings.push(
    `Individual tickets contain ${individualStageNames.size} different stage names.`,
  )
}

if (pairStageNames.size !== 3) {
  warnings.push(
    `Pair tickets contain ${pairStageNames.size} different stage names.`,
  )
}

//
// -----------------------------------------------------------------------------
// POSITION CHECKS
// -----------------------------------------------------------------------------

console.log('POSITION CHECKS')
console.log('-'.repeat(80))

const checkSequentialPositions = (
  list: TicketResult[],
  label: string,
) => {
  const positions = list
    .map((ticket) => ticket.position.overall)
    .filter(
      (position): position is number =>
        position !== null,
    )
    .sort((a, b) => a - b)

  const expected = Array.from(
    { length: positions.length },
    (_, index) => index + 1,
  )

  const valid =
    positions.length === expected.length &&
    positions.every(
      (position, index) =>
        position === expected[index],
    )

  console.log(
    `${label} overall positions: ${valid ? 'OK' : 'CHECK REQUIRED'
    }`,
  )

  if (!valid) {
    warnings.push(
      `${label} overall positions are not sequential.`,
    )
  }
}

checkSequentialPositions(
  individualTickets,
  'Individual',
)

checkSequentialPositions(
  pairTickets,
  'Pair',
)

console.log('')

//
// -----------------------------------------------------------------------------
// SUMMARY
// -----------------------------------------------------------------------------

console.log('='.repeat(80))
console.log('VALIDATION SUMMARY')
console.log('='.repeat(80))
console.log('')

console.log(`Total tickets:       ${tickets.length}`)
console.log(`Individual tickets:  ${individualTickets.length}`)
console.log(`Pair tickets:        ${pairTickets.length}`)
console.log(`Errors:              ${errors.length}`)
console.log(`Warnings:            ${warnings.length}`)

if (errors.length > 0) {
  console.log('')
  console.log('ERRORS')
  console.log('-'.repeat(80))

  for (const error of errors) {
    console.log(`✗ ${error}`)
  }
}

if (warnings.length > 0) {
  console.log('')
  console.log('WARNINGS')
  console.log('-'.repeat(80))

  for (const warning of warnings) {
    console.log(`! ${warning}`)
  }
}

console.log('')
console.log('='.repeat(80))

if (errors.length === 0) {
  console.log('VALIDATION PASSED')
  console.log('='.repeat(80))
  process.exit(0)
}

console.log('VALIDATION FAILED')
console.log('='.repeat(80))

process.exit(1)