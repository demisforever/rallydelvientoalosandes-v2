import { useState } from 'react'
import logo from '../../assets/images/logoDelVientoALosAndes.png'

const navigationLinks = [
  { label: 'Experiencia', href: '/#experience' },
  { label: 'Disciplinas', href: '/#disciplines' },
  { label: 'Etapas', href: '/#stages' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Documentos', href: '/#documents' },
  { label: 'Contacto', href: '/#contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <a
          href="/#hero"
          aria-label="Rally del Viento a los Andes"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Rally del Viento a los Andes"
            className="h-auto w-[77px] md:w-[96px]"
          />
        </a>

        {/* Menú de escritorio */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón hamburguesa para móviles */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#C08A45] hover:text-[#C08A45] lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            /* Ícono de cierre */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            /* Tres líneas horizontales */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="mx-4 border border-white/10 bg-[#0f0f10]/95 px-5 py-3 shadow-2xl backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Navegación móvil">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block border-b border-white/10 py-4 text-xs uppercase tracking-[0.18em] text-white/80 transition-colors last:border-b-0 hover:text-[#C08A45]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header