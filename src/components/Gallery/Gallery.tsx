import { useEffect, useState } from 'react'
import './Gallery.css'

type GalleryImage = {
  src: string
  alt: string
}

const images: GalleryImage[] = [
  {
    src: '/assets/photos/raw/2.000msnm.jpeg',
    alt: 'Rally del Viento a los Andes a 2.000 metros sobre el nivel del mar',
  },
  {
    src: '/assets/photos/raw/Va.AguasCalientes.jpg',
    alt: 'Villa Aguas Calientes',
  },
  {
    src: '/assets/photos/raw/asistenciaAlCiclista.jpg',
    alt: 'Asistencia a los ciclistas',
  },
  {
    src: '/assets/photos/raw/campamentoEnAtreuco2023.jpg',
    alt: 'Campamento en Atreuco',
  },
  {
    src: '/assets/photos/raw/campamentoenAtreuco.jpg',
    alt: 'Campamento en Atreuco',
  },
  {
    src: '/assets/photos/raw/campamentoyasadolagunaVarvarcoTapia.jpeg',
    alt: 'Campamento junto a la Laguna Varvarco Tapia',
  },
  {
    src: '/assets/photos/raw/chivitosypremiación.jpeg',
    alt: 'Chivitos y premiación',
  },
  {
    src: '/assets/photos/raw/compañerosenlaruta.jpeg',
    alt: 'Compañeros en la ruta',
  },
  {
    src: '/assets/photos/raw/confraternidadenlosCerrillos.jpeg',
    alt: 'Confraternidad en Los Cerrillos',
  },
  {
    src: '/assets/photos/raw/crucedeaguastermales2aetapa.jpeg',
    alt: 'Cruce de aguas termales durante la segunda etapa',
  },
  {
    src: '/assets/photos/raw/desafiandolamontaña.jpg',
    alt: 'Desafiando la montaña',
  },
  {
    src: '/assets/photos/raw/elasadodelaúltimanoche.jpg',
    alt: 'Asado de la última noche',
  },
  {
    src: '/assets/photos/raw/final3aetapa.jpeg',
    alt: 'Final de la tercera etapa',
  },
  {
    src: '/assets/photos/raw/lagunaVarvarcoTapia(2).jpeg',
    alt: 'Laguna Varvarco Tapia',
  },
  {
    src: '/assets/photos/raw/lagunaVarvarcoTapia.jpeg',
    alt: 'Laguna Varvarco Tapia',
  },
  {
    src: '/assets/photos/raw/largadaenAtreuco.jpg',
    alt: 'Largada en Atreuco',
  },
  {
    src: '/assets/photos/raw/largadaenHuinganco.jpg',
    alt: 'Largada en Huinganco',
  },
  {
    src: '/assets/photos/raw/latrepadadelA°Atreuco.jpeg',
    alt: 'Trepada del arroyo Atreuco',
  },
  {
    src: '/assets/photos/raw/llegada3aetapa.jpg',
    alt: 'Llegada de la tercera etapa',
  },
  {
    src: '/assets/photos/raw/maravillosonorteneuquino.jpg',
    alt: 'Paisajes del Norte Neuquino',
  },
  {
    src: '/assets/photos/raw/nuestrosarrieros(2).jpeg',
    alt: 'Arrieros del Norte Neuquino',
  },
  {
    src: '/assets/photos/raw/nuestrosarrieros(3).jpeg',
    alt: 'Arrieros del Norte Neuquino',
  },
  {
    src: '/assets/photos/raw/nuestrosarrieros.jpeg',
    alt: 'Arrieros del Norte Neuquino',
  },
  {
    src: '/assets/photos/raw/paisajesincreibles.jpg',
    alt: 'Paisajes increíbles del Norte Neuquino',
  },
  {
    src: '/assets/photos/raw/porestoschivitosvaleelesfuerzo.jpeg',
    alt: 'Por estos chivitos vale el esfuerzo',
  },
  {
    src: '/assets/photos/raw/rumboalvolcánDomuyo.jpg',
    alt: 'Rumbo al volcán Domuyo',
  },
  {
    src: '/assets/photos/raw/somoselnorteneuquino.jpg',
    alt: 'Somos el Norte Neuquino',
  },
  {
    src: '/assets/photos/raw/trabajandoenequipo.jpeg',
    alt: 'Trabajando en equipo',
  },
]

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeGallery = () => {
    setSelectedIndex(null)
  }

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === 0
        ? images.length - 1
        : current - 1
    })
  }

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === images.length - 1
        ? 0
        : current + 1
    })
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeGallery()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  useEffect(() => {
    document.body.style.overflow =
      selectedIndex !== null ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  return (
    <section
      id="gallery"
      className="bg-[#0F0F10] px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C08A45]">
            Momentos del Rally
          </span>

          <h2 className="mt-4 text-4xl uppercase leading-none tracking-tight md:text-6xl">
            Galería
          </h2>

          <p className="mt-6 text-sm leading-6 text-white/50 md:text-base">
            Montaña, esfuerzo, compañerismo y momentos que quedan para siempre.
          </p>
        </div>

        {/* Gallery */}
        <div className="gallery-scroll max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group mb-4 block w-full overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-[#C08A45]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.03]"
                />

                <span className="pointer-events-none absolute" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          onClick={closeGallery}
        >
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center text-2xl text-white/70 transition hover:text-white"
            aria-label="Cerrar galería"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center text-3xl text-white/60 transition hover:text-white md:left-8"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-full max-w-full object-contain"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.15em] text-white/50">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center text-3xl text-white/60 transition hover:text-white md:right-8"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery