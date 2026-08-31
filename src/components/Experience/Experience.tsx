const landscapeImage = '/assets/photos/raw/lagunaVarvarcoTapia(2).jpeg'
const dosmilmsnm = '/assets/photos/raw/2.000msnm.jpeg'
const cyclistImage = '/assets/photos/raw/maravillosonorteneuquino.jpg'
const campImage = '/assets/photos/raw/porestoschivitosvaleelesfuerzo.jpeg'

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0F0F10] text-white"
    >
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#C08A45]">
              La experiencia
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              No se trata sólo de llegar a la meta.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              Son cuatro días atravesando las montañas del norte neuquino.
              Tres etapas, kilómetros de esfuerzo y paisajes que difícilmente
              puedas olvidar.
            </p>
          </div>
        </div>
      </div>

      {/* Mountain */}
      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden md:aspect-[2/1]">
          <img
            src={dosmilmsnm}
            alt="Paisaje de Laguna Varvarco Tapia"
            className="h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-2xl p-8 md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
              Norte Neuquino
            </p>

            <p className="mt-4 text-2xl font-medium leading-tight md:text-4xl">
              La montaña no es el escenario.
              <br />
              Es parte de la experiencia.
            </p>
          </div>
        </div>
      </div>

      {/* Challenge */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#C08A45]">
              El desafío
            </p>

            <h3 className="text-3xl font-semibold uppercase leading-[0.95] tracking-tight md:text-5xl">
              Encontrá tu ritmo.
              <br />
              Superá tus límites.
            </h3>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              El camino pone a prueba tus límites. La montaña te obliga a
              encontrar tu propio ritmo y, cuando competís en dupla, también
              a confiar en quien pedalea a tu lado.
            </p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={cyclistImage}
                alt="Ciclista recorriendo las montañas del norte neuquino"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Camp */}
      <div className="relative">
        <div className="relative min-h-[70vh] overflow-hidden">
          <img
            src={campImage}
            alt="Campamento del Rally del Viento a los Andes"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex min-h-[70vh] items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C08A45]">
                  Cuando termina la etapa
                </p>

                <h3 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                  Comienza otra parte de la experiencia.
                </h3>

                <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                  El fuego, la comida, las conversaciones y la cordillera bajo
                  las estrellas forman parte del recuerdo tanto como los
                  kilómetros recorridos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience