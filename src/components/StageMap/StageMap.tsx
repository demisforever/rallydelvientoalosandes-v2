import { useEffect, useRef } from 'react'
import {
  Map,
  LngLatBounds,
  Marker,
  NavigationControl,
  setWorkerUrl,
} from 'maplibre-gl'
import { gpx } from '@tmcw/togeojson'
import type { ElevationPoint } from '../../utils/gpx'

import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

import 'maplibre-gl/dist/maplibre-gl.css'
import './StageMap.css'
import { MAP_STYLE } from '../../config/map'

setWorkerUrl(workerUrl)

type StageMapProps = {
  gpx: string
  hoveredPoint: ElevationPoint | null
}

function StageMap({
  gpx: gpxText,
  hoveredPoint,
}: StageMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<Map | null>(null)
  const hoverMarker = useRef<Marker | null>(null)

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    const initializeMap = async () => {
      const parser = new DOMParser()
      const gpxDocument = parser.parseFromString(
        gpxText,
        'application/xml',
      )

      const geojson = gpx(gpxDocument)

      map.current = new Map({
        container: mapContainer.current!,
        style: MAP_STYLE,
        center: [-70.62, -37.15],
        zoom: 9,
      })

      map.current.on('load', () => {
        map.current?.addControl(
          new NavigationControl({
            showCompass: true,
            showZoom: true,
          }),
          'bottom-right',
        )

        map.current?.addSource('stage-route', {
          type: 'geojson',
          data: geojson,
        })

        map.current?.addLayer({
          id: 'stage-route-glow',
          type: 'line',
          source: 'stage-route',
          paint: {
            'line-color': '#C08A45',
            'line-width': 10,
            'line-opacity': 0.2,
          },
        })

        map.current?.addLayer({
          id: 'stage-route-line',
          type: 'line',
          source: 'stage-route',
          paint: {
            'line-color': '#C08A45',
            'line-width': 4,
            'line-opacity': 1,
          },
        })

        const coordinates: [number, number][] = []

        geojson.features.forEach((feature) => {
          if (feature.geometry.type !== 'LineString') return

          feature.geometry.coordinates.forEach((coordinate) => {
            coordinates.push([coordinate[0], coordinate[1]])
          })
        })

        if (coordinates.length === 0) return

        const bounds = coordinates.reduce(
          (bounds, coordinate) => bounds.extend(coordinate),
          new LngLatBounds(coordinates[0], coordinates[0]),
        )

        map.current?.fitBounds(bounds, {
          padding: {
            top: 80,
            bottom: 80,
            left: 80,
            right: 80,
          },
        })

        // Marcador de inicio
        const startMarker = document.createElement('div')
        startMarker.className =
          'stage-marker stage-marker-start'

        new Marker({
          element: startMarker,
          anchor: 'center',
        })
          .setLngLat(coordinates[0])
          .addTo(map.current!)

        // Marcador de llegada
        const finishMarker = document.createElement('div')
        finishMarker.className =
          'stage-marker stage-marker-finish'

        new Marker({
          element: finishMarker,
          anchor: 'center',
        })
          .setLngLat(coordinates[coordinates.length - 1])
          .addTo(map.current!)

        const hoverMarkerElement = document.createElement('div')

        hoverMarkerElement.className =
          'stage-marker stage-marker-hover'

        hoverMarker.current = new Marker({
          element: hoverMarkerElement,
          anchor: 'center',
        })
          .setLngLat(coordinates[0])
          .addTo(map.current!)
        hoverMarker.current.remove()
      })
    }

    initializeMap()

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [gpxText])

  useEffect(() => {
    if (!hoverMarker.current) return

    if (!hoveredPoint) {
      hoverMarker.current.remove()
      return
    }

    hoverMarker.current
      .setLngLat([
        hoveredPoint.longitude,
        hoveredPoint.latitude,
      ])
      .addTo(map.current!)
  }, [hoveredPoint])

  return (
    <section className="stage-map">
      <div
        ref={mapContainer}
        className="stage-map__container"
      />
    </section>
  )
}

export default StageMap
