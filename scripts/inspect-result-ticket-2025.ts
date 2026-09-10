import { load } from 'cheerio'

const BASE_URL =
  'https://cronometrajeinstantaneo.com/resultados/rally-del-viento-a-los-andes-2025'

type TicketConfig = {
  label: string
  participantId: number
}

const tickets: TicketConfig[] = [
  {
    label: 'INDIVIDUAL',
    participantId: 101,
  },
  {
    label: 'DUPLA',
    participantId: 17,
  },
]

async function inspectTicket({
  label,
  participantId,
}: TicketConfig) {
  const url =
    `${BASE_URL}/ticket?idparticipante=${participantId}`

  console.log('\n')
  console.log('='.repeat(80))
  console.log(
    `${label} — PARTICIPANTE ${participantId}`,
  )
  console.log('='.repeat(80))

  console.log('\nFetching:')
  console.log(url)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status} while fetching ${url}`,
    )
  }

  const html = await response.text()

  console.log('\nHTML size:', html.length, 'characters')

  const $ = load(html)

  // ---------------------------------------------------------------------------
  // PAGE TITLE
  // ---------------------------------------------------------------------------

  console.log('\nPAGE TITLE')
  console.log('-'.repeat(80))
  console.log($('title').text().trim())

  // ---------------------------------------------------------------------------
  // HEADINGS
  // ---------------------------------------------------------------------------

  console.log('\nHEADINGS')
  console.log('-'.repeat(80))

  $('h1, h2, h3, h4, h5, h6').each((index, element) => {
    console.log(
      `[${index}] ${$(element).text().trim()}`,
    )
  })

  // ---------------------------------------------------------------------------
  // TABLES
  // ---------------------------------------------------------------------------

  const tables = $('table')

  console.log('\nTABLES FOUND:', tables.length)
  console.log('='.repeat(80))

  tables.each((tableIndex, table) => {
    console.log(`\nTABLE #${tableIndex + 1}`)
    console.log('-'.repeat(80))

    console.log($(table).text().replace(/\s+/g, ' ').trim())
  })

  // ---------------------------------------------------------------------------
  // LINKS
  // ---------------------------------------------------------------------------

  console.log('\nLINKS')
  console.log('-'.repeat(80))

  const links = $('a')

  console.log('Total links:', links.length)

  links.each((index, element) => {
    const text = $(element).text().replace(/\s+/g, ' ').trim()
    const href = $(element).attr('href') ?? ''

    console.log(`\n[${index}]`)
    console.log(`  text: ${text}`)
    console.log(`  href: ${href}`)
  })

  // ---------------------------------------------------------------------------
  // CSS CLASSES
  // ---------------------------------------------------------------------------

  console.log('\nCSS CLASSES')
  console.log('-'.repeat(80))

  const classes = new Set<string>()

  $('*').each((_, element) => {
    const classAttribute = $(element).attr('class')

    if (!classAttribute) return

    classAttribute
      .split(/\s+/)
      .filter(Boolean)
      .forEach((className) => {
        classes.add(className)
      })
  })

  Array.from(classes)
    .sort()
    .forEach((className) => {
      console.log(`  .${className}`)
    })

  // ---------------------------------------------------------------------------
  // FORMS / INPUTS
  // ---------------------------------------------------------------------------

  console.log('\nFORMS / INPUTS')
  console.log('-'.repeat(80))

  console.log('Forms found:', $('form').length)
  console.log('Inputs found:', $('input').length)
  console.log('Selects found:', $('select').length)
  console.log('Textareas found:', $('textarea').length)

  // ---------------------------------------------------------------------------
  // IMAGES
  // ---------------------------------------------------------------------------

  console.log('\nIMAGES')
  console.log('-'.repeat(80))

  const images = $('img')

  console.log('Images found:', images.length)

  images.each((index, element) => {
    const src = $(element).attr('src') ?? ''
    const alt = $(element).attr('alt') ?? ''

    console.log(`\n[${index}]`)
    console.log(`  src: ${src}`)
    console.log(`  alt: ${alt}`)
  })

  // ---------------------------------------------------------------------------
  // IMPORTANT PAGE TEXT
  // ---------------------------------------------------------------------------

  console.log('\nIMPORTANT PAGE TEXT')
  console.log('-'.repeat(80))

  const bodyText = $('body')
    .text()
    .replace(/\s+/g, ' ')
    .trim()

  console.log(bodyText)

  // ---------------------------------------------------------------------------
  // TICKET STRUCTURE
  // ---------------------------------------------------------------------------

  console.log('\nTICKET STRUCTURE')
  console.log('-'.repeat(80))

  console.log('.ticket:', $('.ticket').length)
  console.log(
    '.ticket_content:',
    $('.ticket_content').length,
  )
  console.log(
    '.ticket_etapas:',
    $('.ticket_etapas').length,
  )
  console.log(
    '.tiempo_etapa:',
    $('.tiempo_etapa').length,
  )

  // ---------------------------------------------------------------------------
  // TICKET ETAPAS
  // ---------------------------------------------------------------------------

  $('.ticket_etapas').each((index, element) => {
    console.log(`\nTICKET ETAPAS #${index + 1}`)
    console.log('-'.repeat(80))

    console.log($(element).html()?.trim())
  })

  // ---------------------------------------------------------------------------
  // TICKET DATA ELEMENTS
  // ---------------------------------------------------------------------------

  console.log('\nTICKET DATA ELEMENTS')
  console.log('-'.repeat(80))

  const selectors = [
    '.numero',
    '.nombre',
    '.categoria',
    '.localidad',
    '.pos_general',
    '.pos_general_nro',
    '.pos_sexo',
    '.pos_sexo_nro',
    '.pos_categoria',
    '.pos_categoria_nro',
    '.tiempo',
    '.tiempo_nro',
    '.nombre_etapa',
    '.tiempo_etapa',
  ]

  selectors.forEach((selector) => {
    const elements = $(selector)

    console.log(`\n${selector}: ${elements.length}`)

    elements.each((index, element) => {
      const text = $(element)
        .text()
        .replace(/\s+/g, ' ')
        .trim()

      console.log(`  [${index}] ${text}`)
      console.log(
        `      HTML: ${$.html(element)?.trim()}`,
      )
    })
  })

  // ---------------------------------------------------------------------------
  // END
  // ---------------------------------------------------------------------------

  console.log('\n')
  console.log('='.repeat(80))
  console.log(`END ${label} — PARTICIPANTE ${participantId}`)
  console.log('='.repeat(80))
}

async function main() {
  for (const ticket of tickets) {
    await inspectTicket(ticket)
  }
}

main().catch((error) => {
  console.error('\nInspector failed:')
  console.error(error)
  process.exit(1)
})