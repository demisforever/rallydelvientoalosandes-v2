import * as cheerio from 'cheerio'

const BASE_URL =
  'https://cronometrajeinstantaneo.com/resultados/rally-del-viento-a-los-andes-2025/ticket'

type TicketToInspect = {
  number: number
  name: string
}

const tickets: TicketToInspect[] = [
  {
    number: 62,
    name: 'Brutal Bike',
  },
  {
    number: 25,
    name: 'Los Galgos',
  },
  {
    number: 40,
    name: 'Mapuche Btt',
  },
  {
    number: 47,
    name: 'Las Desconocidas',
  },
  {
    number: 45,
    name: 'Las Bbr (banda Buena Racha)',
  },
  {
    number: 44,
    name: 'Sin Rodillas Y A Puro Corazón',
  },
]

function cleanText(value: string | undefined | null): string {
  return (value ?? '').replace(/\s+/g, ' ').trim()
}

async function inspectTicket(ticket: TicketToInspect) {
  const url = `${BASE_URL}?idparticipante=${ticket.number}`

  console.log('\n')
  console.log('='.repeat(80))
  console.log(`DUPLA — ${ticket.number} — ${ticket.name}`)
  console.log('='.repeat(80))

  console.log('\nFetching:')
  console.log(url)

  const response = await fetch(url)

  if (!response.ok) {
    console.log(
      `HTTP ERROR: ${response.status} ${response.statusText}`,
    )
    return
  }

  const html = await response.text()

  console.log(`\nHTML size: ${html.length} characters`)

  const $ = cheerio.load(html)

  // ---------------------------------------------------------------------------
  // BASIC INFORMATION
  // ---------------------------------------------------------------------------

  console.log('\nBASIC INFORMATION')
  console.log('-'.repeat(80))

  console.log(
    `Title: ${cleanText($('title').text())}`,
  )

  console.log(
    `Number (.numero): ${cleanText($('.numero').first().text())}`,
  )

  console.log(
    `Name (.nombre): ${cleanText($('.nombre').first().text())}`,
  )

  console.log(
    `Category (.categoria): ${cleanText($('.categoria').first().text())}`,
  )

  console.log(
    `Location (.localidad): ${cleanText($('.localidad').first().text())}`,
  )

  console.log(
    `Total time (.tiempo): ${cleanText($('.tiempo').first().text())}`,
  )

  // ---------------------------------------------------------------------------
  // TICKET ETAPAS
  // ---------------------------------------------------------------------------

  console.log('\nTICKET ETAPAS')
  console.log('-'.repeat(80))

  const etapasContainer = $('.ticket_etapas').first()

  if (!etapasContainer.length) {
    console.log('No .ticket_etapas container found.')
  } else {
    console.log(
      `Containers found: ${$('.ticket_etapas').length}`,
    )

    console.log(
      `HTML size: ${etapasContainer.html()?.length ?? 0} characters`,
    )

    console.log('\nRAW HTML:')
    console.log('-'.repeat(80))
    console.log(etapasContainer.html() ?? '')
  }

  // ---------------------------------------------------------------------------
  // STAGE NAMES
  // ---------------------------------------------------------------------------

  console.log('\nSTAGE NAMES')
  console.log('-'.repeat(80))

  const stageNames = $('.nombre_etapa')

  console.log(`Found: ${stageNames.length}`)

  stageNames.each((index, element) => {
    console.log(
      `[${index}] ${cleanText($(element).text())}`,
    )
  })

  // ---------------------------------------------------------------------------
  // STAGE TIMES
  // ---------------------------------------------------------------------------

  console.log('\nSTAGE TIMES')
  console.log('-'.repeat(80))

  const stageTimes = $('.tiempo_etapa')

  console.log(`Found: ${stageTimes.length}`)

  stageTimes.each((index, element) => {
    console.log(
      `[${index}] ${cleanText($(element).text())}`,
    )
  })

  // ---------------------------------------------------------------------------
  // STAGE STRUCTURE
  // ---------------------------------------------------------------------------

  console.log('\nSTAGE STRUCTURE')
  console.log('-'.repeat(80))

  if (!etapasContainer.length) {
    console.log('No stage container available.')
  } else {
    etapasContainer
      .children()
      .each((index, element) => {
        const tag = element.tagName
        const className = $(element).attr('class') ?? ''
        const text = cleanText($(element).text())

        console.log(`\nCHILD [${index}]`)
        console.log(`tag: ${tag}`)
        console.log(`class: ${className}`)
        console.log(`text: ${text}`)

        console.log('\nHTML:')
        console.log($(element).toString())
      })
  }

  // ---------------------------------------------------------------------------
  // IMPORTANT PAGE TEXT
  // ---------------------------------------------------------------------------

  console.log('\nIMPORTANT PAGE TEXT')
  console.log('-'.repeat(80))

  const ticketText = cleanText(
    $('.ticket').first().text(),
  )

  console.log(ticketText)

  console.log('\n')
  console.log('='.repeat(80))
  console.log(`END ${ticket.number} — ${ticket.name}`)
  console.log('='.repeat(80))
}

async function main() {
  console.log('\n')
  console.log('='.repeat(80))
  console.log('INSPECTING PROBLEMATIC 2025 TICKETS')
  console.log('='.repeat(80))

  console.log(`\nTickets to inspect: ${tickets.length}`)

  for (const ticket of tickets) {
    try {
      await inspectTicket(ticket)
    } catch (error) {
      console.error(
        `\nERROR inspecting ${ticket.number} — ${ticket.name}`,
      )
      console.error(error)
    }
  }

  console.log('\n')
  console.log('='.repeat(80))
  console.log('INSPECTION COMPLETED')
  console.log('='.repeat(80))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})