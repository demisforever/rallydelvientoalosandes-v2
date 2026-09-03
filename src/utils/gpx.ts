export type ElevationPoint = {
  distance: number
  elevation: number
  latitude: number
  longitude: number
}

export type GPXStats = {
  distance: number
  elevationGain: number
  elevationLoss: number
  maxElevation: number
  minElevation: number
  elevationProfile: ElevationPoint[]
}

function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  const earthRadius = 6371000

  const latitude1 = (lat1 * Math.PI) / 180
  const latitude2 = (lat2 * Math.PI) / 180

  const deltaLatitude = ((lat2 - lat1) * Math.PI) / 180
  const deltaLongitude = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.cos(latitude1) *
    Math.cos(latitude2) *
    Math.sin(deltaLongitude / 2) ** 2

  return (
    earthRadius *
    2 *
    Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  )
}

export function parseGPX(gpxText: string): GPXStats {
  const parser = new DOMParser()

  const document = parser.parseFromString(
    gpxText,
    'application/xml',
  )

  const trackPoints = Array.from(
    document.querySelectorAll('trkpt'),
  )

  const points = trackPoints
    .map((point) => {
      const lat = Number(point.getAttribute('lat'))
      const lon = Number(point.getAttribute('lon'))
      const elevation = Number(
        point.querySelector('ele')?.textContent,
      )

      return {
        lat,
        lon,
        elevation,
      }
    })
    .filter(
      (point) =>
        Number.isFinite(point.lat) &&
        Number.isFinite(point.lon) &&
        Number.isFinite(point.elevation),
    )

  let distance = 0
  let elevationGain = 0
  let elevationLoss = 0

  const elevationProfile: ElevationPoint[] = []

  points.forEach((point, index) => {
    if (index > 0) {
      const previous = points[index - 1]

      distance += haversineDistance(
        previous.lat,
        previous.lon,
        point.lat,
        point.lon,
      )

      const elevationDifference =
        point.elevation - previous.elevation

      if (elevationDifference > 0) {
        elevationGain += elevationDifference
      } else {
        elevationLoss += Math.abs(elevationDifference)
      }
    }

    elevationProfile.push({
      distance,
      elevation: point.elevation,
      latitude: point.lat,
      longitude: point.lon,
    })
  })

  const elevations = points.map((point) => point.elevation)

  return {
    distance,
    elevationGain,
    elevationLoss,
    maxElevation: Math.max(...elevations),
    minElevation: Math.min(...elevations),
    elevationProfile,
  }
}
