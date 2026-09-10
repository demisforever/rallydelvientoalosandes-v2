import { load } from 'cheerio'

const URL =
  'https://cronometrajeinstantaneo.com/resultados/rally-del-viento-a-los-andes-2025'

function cleanText(value: string) {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .trim()
}

async function inspect() {
  console.log(`Fetching:\n${URL}\n`)

  const response = await fetch(URL)

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}: ${response.statusText}`,
    )
  }

  const html = await response.text()

  console.log(`HTML size: ${html.length} characters\n`)

  const $ = load(html)

  const tables = $('table')

  console.log(`TABLES FOUND: ${tables.length}`)
  console.log('='.repeat(80))

  tables.each((tableIndex, table) => {
    console.log(`\nTABLE #${tableIndex + 1}`)
    console.log('-'.repeat(80))

    /*
     * Buscar los elementos inmediatamente anteriores
     * a la tabla para descubrir cómo identifica
     * Cronometraje Instantáneo cada competencia.
     */
    const previousElements = $(table)
      .prevAll()
      .slice(0, 8)
      .get()
      .reverse()

    console.log('\nPrevious elements:')

    previousElements.forEach((element) => {
      const tag = element.tagName
      const text = cleanText($(element).text())

      if (text) {
        console.log(`  <${tag}> ${text}`)
      }
    })

    /*
     * Headers
     */
    console.log('\nHeaders:')

    const headers = $(table)
      .find('thead tr')
      .first()
      .find('th, td')
      .map((_, element) => cleanText($(element).text()))
      .get()

    if (headers.length === 0) {
      console.log('  No <thead> found.')

      const firstRow = $(table)
        .find('tr')
        .first()

      firstRow.find('th, td').each((index, element) => {
        console.log(
          `  [${index}] ${cleanText($(element).text())}`,
        )
      })
    } else {
      headers.forEach((header, index) => {
        console.log(`  [${index}] ${header}`)
      })
    }

    /*
     * Rows
     */
    const rows = $(table).find('tbody tr')

    console.log(`\nRows in <tbody>: ${rows.length}`)

    /*
     * Primera fila
     */
    const firstRow = rows.first()

    if (firstRow.length) {
      console.log('\nFIRST ROW:')
      console.log('-'.repeat(80))

      firstRow.find('td').each((index, cell) => {
        console.log(
          `[${index}] ${cleanText($(cell).text())}`,
        )

        $(cell)
          .find('a')
          .each((linkIndex, link) => {
            console.log(
              `    LINK ${linkIndex}:`,
            )
            console.log(
              `      text: ${cleanText($(link).text())}`,
            )
            console.log(
              `      href: ${$(link).attr('href') ?? '(none)'}`,
            )
          })
      })

      console.log('\nFIRST ROW HTML:')
      console.log(firstRow.toString())
    }

    /*
     * Última fila
     */
    const lastRow = rows.last()

    if (lastRow.length) {
      console.log('\nLAST ROW:')
      console.log('-'.repeat(80))

      lastRow.find('td').each((index, cell) => {
        console.log(
          `[${index}] ${cleanText($(cell).text())}`,
        )
      })
    }

    /*
     * Links de participantes
     */
    const participantLinks = $(table)
      .find('a[href*="ticket?idparticipante="]')
      .map((_, link) => ({
        text: cleanText($(link).text()),
        href: $(link).attr('href') ?? '',
      }))
      .get()

    console.log(
      `\nParticipant ticket links: ${participantLinks.length}`,
    )

    participantLinks
      .slice(0, 3)
      .forEach((link, index) => {
        console.log(`  ${index + 1}. ${link.text}`)
        console.log(`     ${link.href}`)
      })

    /*
     * Resumen de clases de la tabla.
     */
    const classes = new Set<string>()

    $(table)
      .find('*')
      .each((_, element) => {
        const className = $(element).attr('class')

        if (!className) return

        className
          .split(/\s+/)
          .filter(Boolean)
          .forEach((name) => classes.add(name))
      })

    console.log('\nCSS classes found inside table:')

    Array.from(classes)
      .sort()
      .forEach((className) => {
        console.log(`  .${className}`)
      })
  })
}

inspect().catch((error) => {
  console.error('\nInspector failed:')
  console.error(error)
  process.exit(1)
})
