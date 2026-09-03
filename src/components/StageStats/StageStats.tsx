import type { GPXStats, ElevationPoint } from '../../utils/gpx'
import ElevationProfile from './ElevationProfile'
import GpxDownload from './GpxDownload'
import './StageStats.css'

type StageStatsProps = {
  stats: GPXStats
  gpx: string
  gpxFileName: string
  onPointHover: (point: ElevationPoint | null) => void
}

function StageStats({
  stats,
  gpx,
  gpxFileName,
  onPointHover,
}: StageStatsProps) {
  return (
    <div className="stage-stats">
      <div className="stage-stats__grid">
        <div className="stage-stat">
          <span>Distancia</span>
          <strong>
            {(stats.distance / 1000).toFixed(1)} km
          </strong>
        </div>

        <div className="stage-stat">
          <span>Ascenso total</span>
          <strong>
            +{Math.round(stats.elevationGain)} m
          </strong>
        </div>

        <div className="stage-stat">
          <span>Descenso total</span>
          <strong>
            −{Math.round(stats.elevationLoss)} m
          </strong>
        </div>

        <div className="stage-stat">
          <span>Altitud máxima</span>
          <strong>
            {Math.round(stats.maxElevation)} m
          </strong>
        </div>

        <div className="stage-stat">
          <span>Altitud mínima</span>
          <strong>
            {Math.round(stats.minElevation)} m
          </strong>
        </div>

      </div>

      <div className="stage-stats__download">
        <GpxDownload
          gpx={gpx}
          fileName={gpxFileName}
        />
      </div>

      <div className="stage-stats__profile">
        <ElevationProfile
          points={stats.elevationProfile}
          onPointHover={onPointHover}
        />
      </div>
    </div>
  )
}

export default StageStats
