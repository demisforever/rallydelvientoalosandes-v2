import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Experience from '../../components/Experience/Experience'
import Disciplines from '../../components/Disciplines/Disciplines'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Gallery from '../../components/Gallery/Gallery'
import Documents from '../../components/Documents/Documents'

function Home() {
  // Permite abrir directamente una sección de Home mediante un hash, por ejemplo /#documents.
  useEffect(() => {
    const hash = window.location.hash

    if (!hash) return

    const element = document.querySelector(hash)

    if (!element) return

    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Disciplines />

      <section className="bg-[#0F0F10] px-6 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C08A45]">
            El recorrido
          </span>
          <h2 className="mt-4 text-3xl uppercase tracking-tight md:text-5xl">
            Tres etapas. Un desafío.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
            Descubrí los recorridos que conectan Huinganco, Varvarco y Los
            Cerrillos, y consultá los mapas, las estadísticas y los archivos GPX
            de cada etapa.
          </p>
          <a
            href="/stages"
            className="mt-8 inline-flex border border-[#C08A45] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#C08A45]"
          >
            Explorar las etapas
          </a>
        </div>
      </section>

      <Gallery />
      <Documents />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
