import { useState } from 'react'
import type { ElevationPoint } from '../../utils/gpx'
import StageMap from '../StageMap/StageMap'
import './Stage.css'
import { parseGPX } from '../../utils/gpx'
import StageStats from '../StageStats/StageStats'

type StageProps = {
  number: number
  title: string
  description: string
  gpx: string
  gpxFileName: string
  mapSide: 'left' | 'right'
}

function Stage({
  number,
  title,
  description,
  gpx,
  gpxFileName,
  mapSide,
}: StageProps) {
  const [hoveredPoint, setHoveredPoint] =
    useState<ElevationPoint | null>(null)

  const isMapLeft = mapSide === 'left'

  const stats = parseGPX(gpx)

  return (
    <section className="stage">
      <div className="stage__header">
        <span className="stage__number">
          ETAPA {String(number).padStart(2, '0')}
        </span>

        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div
        className={`stage__content ${isMapLeft
          ? 'stage__content--map-left'
          : 'stage__content--map-right'
          }`}
      >
        <div className="stage__map">
          <StageMap
            gpx={gpx}
            hoveredPoint={hoveredPoint}
          />
        </div>

        <div className="stage__stats">
          <StageStats
            stats={stats}
            gpx={gpx}
            gpxFileName={gpxFileName}
            onPointHover={setHoveredPoint}
          />
        </div>

        <div className="stage__route" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Stage