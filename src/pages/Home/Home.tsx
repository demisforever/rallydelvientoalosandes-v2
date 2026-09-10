import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Experience from '../../components/Experience/Experience'
import Disciplines from '../../components/Disciplines/Disciplines'
import Stage from '../../components/Stages/Stage'
import stage1Gpx from '../../assets/gpx/etapa-1-huinganco-varvarco.gpx?raw'
import stage2Gpx from '../../assets/gpx/etapa-2-varvarco-los-cerrillos.gpx?raw'
import stage3Gpx from '../../assets/gpx/etapa-3-los-cerrillos-huinganco.gpx?raw'

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Disciplines />

      <div id="stages">
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
    </main>
  )
}

export default Home
