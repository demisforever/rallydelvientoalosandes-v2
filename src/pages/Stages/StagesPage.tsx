import Header from '../../components/Header/Header'
import Stage from '../../components/Stages/Stage'
import stage1Gpx from '../../assets/gpx/etapa-1-huinganco-varvarco.gpx?raw'
import stage2Gpx from '../../assets/gpx/etapa-2-varvarco-los-cerrillos.gpx?raw'
import stage3Gpx from '../../assets/gpx/etapa-3-los-cerrillos-huinganco.gpx?raw'
import Footer from '../../components/Footer/Footer'

function StagesPage() {
  return (
    <main>
      <Header />

      <div className="bg-[#0F0F10] px-6 pb-16 pt-36 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C08A45]">
            Rally del Viento a los Andes
          </span>
          <h1 className="mt-4 text-4xl uppercase tracking-tight md:text-6xl">
            Las etapas
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
            Tres recorridos por los paisajes del Norte Neuquino. Explorá cada
            etapa, consultá sus estadísticas y descargá el archivo GPX para
            preparar tu recorrido.
          </p>
        </div>
      </div>

      <div>
        <Stage
          number={1}
          title="Huinganco → Varvarco"
          description="La primera etapa..."
          gpx={stage1Gpx}
          gpxFileName="etapa-1-huinganco-varvarco.gpx"
          mapSide="left"
        />
        <Stage
          number={2}
          title="Varvarco → Los Cerrillos"
          description="La segunda etapa continúa el recorrido hacia el corazón de los Andes."
          gpx={stage2Gpx}
          gpxFileName="etapa-2-varvarco-los-cerrillos.gpx"
          mapSide="left"
        />
        <Stage
          number={3}
          title="Los Cerrillos → Huinganco"
          description="La última etapa nos devuelve a Huinganco para completar la experiencia."
          gpx={stage3Gpx}
          gpxFileName="etapa-3-los-cerrillos-huinganco.gpx"
          mapSide="left"
        />
      </div>

      <Footer />
    </main>
  )
}

export default StagesPage
