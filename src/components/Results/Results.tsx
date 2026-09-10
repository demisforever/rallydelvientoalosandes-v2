import { useMemo, useState } from 'react'
import type {
  CompetitionResult,
  IndividualResult,
  PairResult,
  RaceResults,
} from '../../types/results'

import results2025 from '../../data/results/2025.json'

type FormatFilter = 'individual' | 'pair'

const resultsData = results2025 as RaceResults

function formatPosition(position: number | null) {
  if (position === null) return '—'
  return String(position).padStart(2, '0')
}

function getResultStatusLabel(result: CompetitionResult) {
  if (result.status === 'dnf') return 'DNF'
  if (result.status === 'dns') return 'DNS'

  if (result.format === 'pair') {
    const pairResult = result as PairResult

    const hasMissingStage = pairResult.stages.some(
      (stage) =>
        stage.rider1Time === null ||
        stage.rider2Time === null,
    )

    if (hasMissingStage) return 'Resultado incompleto'
  }

  if (result.format === 'individual') {
    const individualResult = result as IndividualResult

    const hasMissingStage = individualResult.stages.some(
      (stage) => stage.time === null,
    )

    if (hasMissingStage) return 'Resultado incompleto'
  }

  return 'Finalizado'
}

function hasIncompleteResult(result: CompetitionResult) {
  if (result.status !== 'finished') return false

  if (result.format === 'individual') {
    const individualResult = result as IndividualResult

    return individualResult.stages.some(
      (stage) => stage.time === null,
    )
  }

  const pairResult = result as PairResult

  return pairResult.stages.some(
    (stage) =>
      stage.rider1Time === null ||
      stage.rider2Time === null,
  )
}

function getDetailText(result: CompetitionResult) {
  if (result.format === 'individual') {
    return 'Corredor individual'
  }

  return 'Dupla'
}

function ResultRow({
  result,
  expanded,
  onToggle,
}: {
  result: CompetitionResult
  expanded: boolean
  onToggle: () => void
}) {
  const incomplete = hasIncompleteResult(result)
  const statusLabel = getResultStatusLabel(result)

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left transition-colors hover:bg-white/[0.03]"
        aria-expanded={expanded}
      >
        <div className="grid grid-cols-[56px_1fr_auto] items-center gap-4 px-4 py-5 md:grid-cols-[70px_1fr_160px_130px_40px] md:px-6">
          <div>
            <span className="font-display text-3xl leading-none text-[#C08A45]">
              {formatPosition(result.position.overall)}
            </span>
          </div>

          <div className="min-w-0">
            <div className="truncate font-display text-xl uppercase tracking-wide text-white md:text-2xl">
              {result.name}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#D8D8D8]">
              <span>
                Dorsal #{result.bib ?? '—'}
              </span>

              <span className="hidden text-white/30 sm:inline">
                •
              </span>

              <span className="truncate">
                {result.category.name}
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <span className="text-sm text-[#D8D8D8]">
              {result.category.name}
            </span>
          </div>

          <div className="text-right">
            {result.totalTime ? (
              <div className="font-mono text-sm font-medium text-white md:text-base">
                {result.totalTime}
              </div>
            ) : (
              <div className="text-sm text-white/40">
                Sin tiempo
              </div>
            )}

            <div
              className={`mt-1 text-xs ${incomplete
                ? 'text-[#C08A45]'
                : 'text-white/50'
                }`}
            >
              {statusLabel}
            </div>
          </div>

          <div className="hidden text-right md:block">
            <span className="text-white/40">
              {expanded ? '−' : '+'}
            </span>
          </div>
        </div>
      </button>

      {expanded && <ResultDetail result={result} />}
    </div>
  )
}

function ResultDetail({
  result,
}: {
  result: CompetitionResult
}) {
  const incomplete = hasIncompleteResult(result)

  return (
    <div className="bg-[#171717] px-4 pb-6 md:px-6 md:pb-8">
      <div className="grid gap-8 border-t border-white/10 pt-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C08A45]">
            Información
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">
                Posición general
              </dt>
              <dd className="mt-1 text-lg text-white">
                {result.position.overall ?? '—'}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">
                Categoría
              </dt>
              <dd className="mt-1 text-sm leading-5 text-white">
                {result.category.name}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">
                Ubicación
              </dt>
              <dd className="mt-1 text-sm text-white">
                {result.location ?? '—'}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">
                Posición categoría
              </dt>
              <dd className="mt-1 text-lg text-white">
                {result.position.category ?? '—'}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">
                Posición género
              </dt>
              <dd className="mt-1 text-lg text-white">
                {result.position.gender ?? '—'}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">
                Modalidad
              </dt>
              <dd className="mt-1 text-sm text-white">
                {getDetailText(result)}
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C08A45]">
            Etapas
          </div>

          {result.format === 'individual' ? (
            <div className="space-y-3">
              {result.stages.map((stage) => (
                <div
                  key={stage.number}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0"
                >
                  <span className="text-sm text-white/60">
                    Etapa {stage.number}
                  </span>

                  <span className="font-mono text-sm text-white">
                    {stage.time ?? 'No registrado'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {result.stages.map((stage) => (
                <div
                  key={stage.number}
                  className="border-b border-white/10 pb-3 last:border-b-0"
                >
                  <div className="mb-2 text-sm text-white/60">
                    Etapa {stage.number}
                  </div>

                  <div className="flex justify-end gap-6">
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-white/30">
                        Corredor 1
                      </div>

                      <div className="font-mono text-sm text-white">
                        {stage.rider1Time ?? 'No registrado'}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-white/30">
                        Corredor 2
                      </div>

                      <div className="font-mono text-sm text-white">
                        {stage.rider2Time ?? 'No registrado'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {incomplete && (
        <div className="mt-6 border-l-2 border-[#C08A45] bg-[#C08A45]/5 px-4 py-3">
          <p className="text-sm leading-6 text-[#D8D8D8]">
            <span className="font-semibold text-[#C08A45]">
              Resultado incompleto.
            </span>{' '}
            No se registraron tiempos para todas las etapas de
            esta participación. La clasificación se muestra con
            los datos disponibles y no se completan etapas
            faltantes de forma artificial.
          </p>
        </div>
      )}

      {result.difference.first && (
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
          <span>
            Diferencia con el primero:{' '}
            <strong className="font-mono font-normal text-white">
              {result.difference.first}
            </strong>
          </span>

          {result.difference.previous && (
            <span>
              Diferencia con el anterior:{' '}
              <strong className="font-mono font-normal text-white">
                {result.difference.previous}
              </strong>
            </span>
          )}
        </div>
      )}

      {result.detailUrl && (
        <div className="mt-6">
          <a
            href={result.detailUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-[#C08A45] transition-colors hover:text-white"
          >
            Ver resultado original
            <span className="ml-2">↗</span>
          </a>
        </div>
      )}
    </div>
  )
}

function Results() {
  const [format, setFormat] =
    useState<FormatFilter>('pair')

  const [category, setCategory] = useState('all')

  const [search, setSearch] = useState('')

  const [expandedId, setExpandedId] =
    useState<string | number | null>(null)

  const competition = useMemo(
    () =>
      resultsData.competitions.find(
        (item) => item.format === format,
      ),
    [format],
  )

  const categories = useMemo<string[]>(() => {
    if (!competition) return []

    const categoryNames = competition.results.map(
      (result) => result.category.name,
    )

    return Array.from(new Set(categoryNames)).sort(
      (a, b) => a.localeCompare(b, 'es'),
    )
  }, [competition])

  const filteredResults = useMemo(() => {
    if (!competition) return []

    const normalizedSearch = search
      .trim()
      .toLowerCase()

    return [...competition.results]
      .filter((result) => {
        if (
          category !== 'all' &&
          result.category.name !== category
        ) {
          return false
        }

        if (!normalizedSearch) return true

        const searchableText = [
          result.name,
          result.bib?.toString() ?? '',
          result.category.name,
          result.location ?? '',
        ]
          .join(' ')
          .toLowerCase()

        return searchableText.includes(normalizedSearch)
      })
      .sort((a, b) => {
        const positionA = a.position.overall
        const positionB = b.position.overall

        if (positionA === null) return 1
        if (positionB === null) return -1

        return positionA - positionB
      })
  }, [competition, category, search])

  const handleFormatChange = (
    nextFormat: FormatFilter,
  ) => {
    setFormat(nextFormat)
    setCategory('all')
    setSearch('')
    setExpandedId(null)
  }

  return (
    <section
      id="resultados"
      className="bg-[#0F0F10] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C08A45]">
            Edición 2025
          </p>

          <h2 className="font-display text-5xl uppercase leading-none tracking-wide text-white md:text-7xl">
            Clasificaciones
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#D8D8D8] md:text-lg">
            Reviví los resultados de la edición 2025 y
            consultá la clasificación general, categorías y
            tiempos de cada participante.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-6 border-y border-white/10 py-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Modalidad
            </div>

            <div className="flex">
              <button
                type="button"
                onClick={() =>
                  handleFormatChange('individual')
                }
                className={`border px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${format === 'individual'
                  ? 'border-[#C08A45] bg-[#C08A45] text-[#0F0F10]'
                  : 'border-white/15 text-white hover:border-white/40'
                  }`}
              >
                Individual
              </button>

              <button
                type="button"
                onClick={() =>
                  handleFormatChange('pair')
                }
                className={`border border-l-0 px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${format === 'pair'
                  ? 'border-[#C08A45] bg-[#C08A45] text-[#0F0F10]'
                  : 'border-white/15 text-white hover:border-white/40'
                  }`}
              >
                Duplas
              </button>
            </div>
          </div>

          <div className="text-sm text-white/50">
            {filteredResults.length}{' '}
            {filteredResults.length === 1
              ? 'resultado'
              : 'resultados'}
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_320px]">
          <div>
            <label
              htmlFor="results-search"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
            >
              Buscar
            </label>

            <input
              id="results-search"
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Participante, equipo o dorsal..."
              className="w-full border border-white/15 bg-[#171717] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#C08A45]"
            />
          </div>

          <div>
            <label
              htmlFor="results-category"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
            >
              Categoría
            </label>

            <select
              id="results-category"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              className="w-full border border-white/15 bg-[#171717] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C08A45]"
            >
              <option value="all">
                Todas las categorías
              </option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-hidden border-y border-white/10 bg-[#171717]">
          <div className="hidden grid-cols-[70px_1fr_160px_130px_40px] gap-4 border-b border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/30 md:grid">
            <span>Pos.</span>
            <span>Participante</span>
            <span>Categoría</span>
            <span className="text-right">
              Tiempo
            </span>
            <span />
          </div>

          {filteredResults.length > 0 ? (
            filteredResults.map((result, index) => {
              const id =
                result.bib ??
                `${result.name}-${index}`

              return (
                <ResultRow
                  key={id}
                  result={result}
                  expanded={expandedId === id}
                  onToggle={() =>
                    setExpandedId((current) =>
                      current === id ? null : id,
                    )
                  }
                />
              )
            })
          ) : (
            <div className="px-6 py-16 text-center">
              <p className="font-display text-2xl uppercase text-white">
                No encontramos resultados
              </p>

              <p className="mt-2 text-sm text-white/50">
                Probá con otro participante, equipo,
                dorsal o categoría.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 text-xs leading-5 text-white/35">
          Fuente: {resultsData.source.name}
          {resultsData.source.lastUpdated
            ? ` · Actualizado ${resultsData.source.lastUpdated}`
            : ''}
        </div>
      </div>
    </section>
  )
}

export default Results
