import { Link } from 'react-router-dom'
import './Documents.css'

const documents = [
  {
    title: 'Reglamento',
    description:
      'Reglamento oficial de la edición, modalidad, categorías, recorrido, inscripciones y condiciones de participación.',
    href: '/documentos/reglamento',
  },
  {
    title: 'Certificado médico',
    description:
      'Formulario de certificado médico para acreditar la aptitud física necesaria para participar del Rally.',
    href: '/documentos/certificado-medico',
  },
  {
    title: 'Autorización para menores',
    description:
      'Declaración jurada y autorización para participantes menores de edad.',
    href: '/documentos/autorizacion-menores',
  },
  {
    title: 'Deslinde de responsabilidad',
    description:
      'Formulario de deslinde de responsabilidad, uso de imagen y declaración de aptitud médica.',
    href: '/documentos/deslinde',
  },
]

function Documents() {
  return (
    <section
      id="documents"
      className="documents-section bg-[#0F0F10] px-6 py-24 text-white md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#C08A45]">
            Documentación
          </p>

          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            Documentos del Rally
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/55 md:text-base">
            Encontrá toda la documentación necesaria para conocer las
            condiciones de participación y completar los formularios
            correspondientes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {documents.map((document, index) => (
            <Link
              key={document.href}
              to={document.href}
              className="documents-card group"
            >
              <div className="documents-card-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="documents-card-content">
                <h3>{document.title}</h3>

                <p>{document.description}</p>

                <span className="documents-card-link">
                  Ver documento
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Documents
