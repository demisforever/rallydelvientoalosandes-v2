import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Experience from '../../components/Experience/Experience'
import Disciplines from '../../components/Disciplines/Disciplines'
import StageMap from '../../components/Stages/StageMap'

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Disciplines />
      <StageMap />
    </main>
  )
}

export default Home