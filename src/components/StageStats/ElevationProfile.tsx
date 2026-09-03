import { useState } from 'react'
import type { ElevationPoint } from '../../utils/gpx'
import './ElevationProfile.css'

type ElevationProfileProps = {
  points: ElevationPoint[]
  onPointHover?: (point: ElevationPoint | null) => void
}

type HoverPoint = {
  x: number
  y: number
  point: ElevationPoint
}

function ElevationProfile({ points, onPointHover }: ElevationProfileProps) {
  const [hoverPoint, setHoverPoint] = useState<HoverPoint | null>(null)

  if (points.length === 0) {
    return null
  }

  const width = 1000
  const height = 300

  const padding = {
    top: 20,
    right: 20,
    bottom: 45,
    left: 60,
  }

  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const minDistance = points[0].distance
  const maxDistance = points[points.length - 1].distance

  const elevations = points.map((point) => point.elevation)

  const minElevation = Math.min(...elevations)
  const maxElevation = Math.max(...elevations)

  const elevationRange = maxElevation - minElevation || 1
  const distanceRange = maxDistance - minDistance || 1

  const getX = (distance: number) =>
    padding.left +
    ((distance - minDistance) / distanceRange) * chartWidth

  const getY = (elevation: number) =>
    padding.top +
    chartHeight -
    ((elevation - minElevation) / elevationRange) * chartHeight

  const profilePath = points
    .map((point, index) => {
      const x = getX(point.distance)
      const y = getY(point.elevation)

      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  const areaPath = `
    ${profilePath}
    L ${getX(maxDistance)} ${padding.top + chartHeight}
    L ${getX(minDistance)} ${padding.top + chartHeight}
    Z
  `

  const gridLines = 4

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const mouseX =
      ((event.clientX - rect.left) / rect.width) * width

    const clampedX = Math.max(
      padding.left,
      Math.min(width - padding.right, mouseX),
    )

    const distance =
      minDistance +
      ((clampedX - padding.left) / chartWidth) *
      distanceRange

    let closestPoint = points[0]
    let closestDistance = Math.abs(
      points[0].distance - distance,
    )

    for (let index = 1; index < points.length; index++) {
      const currentDistance = Math.abs(
        points[index].distance - distance,
      )

      if (currentDistance < closestDistance) {
        closestPoint = points[index]
        closestDistance = currentDistance
      }
    }

    setHoverPoint({
      x: getX(closestPoint.distance),
      y: getY(closestPoint.elevation),
      point: closestPoint,
    })

    onPointHover?.(closestPoint)
  }

  const handleMouseLeave = () => {
    setHoverPoint(null)
    onPointHover?.(null)
  }

  return (
    <div className="elevation-profile">
      <div className="elevation-profile__header">
        <span>Perfil de altimetría</span>

        <span>
          {minElevation.toLocaleString('es-AR')} m —{' '}
          {maxElevation.toLocaleString('es-AR')} m
        </span>
      </div>

      <svg
        className="elevation-profile__chart"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Perfil de altimetría de la etapa"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Líneas horizontales */}
        {Array.from({ length: gridLines + 1 }).map(
          (_, index) => {
            const ratio = index / gridLines

            const elevation =
              maxElevation - ratio * elevationRange

            const y = getY(elevation)

            return (
              <g key={elevation}>
                <line
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={y}
                  y2={y}
                  className="elevation-profile__grid"
                />

                <text
                  x={padding.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="elevation-profile__axis-label"
                >
                  {Math.round(elevation)} m
                </text>
              </g>
            )
          },
        )}

        {/* Área debajo del perfil */}
        <path
          d={areaPath}
          className="elevation-profile__area"
        />

        {/* Línea del perfil */}
        <path
          d={profilePath}
          className="elevation-profile__line"
        />

        {/* Eje X */}
        <line
          x1={padding.left}
          x2={width - padding.right}
          y1={padding.top + chartHeight}
          y2={padding.top + chartHeight}
          className="elevation-profile__axis"
        />

        {/* Distancia inicial */}
        <text
          x={padding.left}
          y={height - 12}
          textAnchor="start"
          className="elevation-profile__axis-label"
        >
          0 km
        </text>

        {/* Distancia final */}
        <text
          x={width - padding.right}
          y={height - 12}
          textAnchor="end"
          className="elevation-profile__axis-label"
        >
          {maxDistance.toFixed(1)} km
        </text>

        {/* Interacción */}
        {hoverPoint && (
          <>
            <line
              x1={hoverPoint.x}
              x2={hoverPoint.x}
              y1={padding.top}
              y2={padding.top + chartHeight}
              className="elevation-profile__hover-line"
            />

            <circle
              cx={hoverPoint.x}
              cy={hoverPoint.y}
              r="6"
              className="elevation-profile__hover-point"
            />
          </>
        )}
      </svg>

      {/* Tooltip */}
      {hoverPoint && (
        <div
          className="elevation-profile__tooltip"
          style={{
            left: `${(hoverPoint.x / width) * 100}%`,
          }}
        >
          <strong>
            {Math.round(hoverPoint.point.elevation)} m
          </strong>

          <span>
            {(hoverPoint.point.distance / 1000).toFixed(1)} km
          </span>
        </div>
      )}
    </div>
  )
}

export default ElevationProfile