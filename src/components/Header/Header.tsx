import logo from '../../assets/images/logoDelVientoALosAndes.png'

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#hero" aria-label="Rally del Viento a los Andes">
          <img
            src={logo}
            alt="Rally del Viento a los Andes"
            className="h-auto w-32 md:w-40"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#experience"
            className="text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
          >
            Experiencia
          </a>

          <a
            href="#disciplines"
            className="text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
          >
            Disciplinas
          </a>

          <a
            href="#stages"
            className="text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
          >
            Etapas
          </a>

          <a
            href="#maps"
            className="text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
          >
            Recorrido
          </a>

          <a
            href="#results"
            className="text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
          >
            Resultados
          </a>

          <a
            href="#registration"
            className="bg-[#C08A45] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-transform hover:scale-105"
          >
            Quiero ser parte
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header