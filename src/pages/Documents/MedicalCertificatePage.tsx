import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import logoDelVientoALosAndes from '../../assets/images/logoDelVientoALosAndes.png'

function MedicalCertificatePage() {
  return (
    <main className="medical-document-page min-h-screen bg-[#0F0F10] text-white">
      <Header />

      <section className="px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/documentos"
            className="medical-document-back-link mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#C08A45]"
          >
            <span aria-hidden="true">←</span>
            Volver a documentos
          </Link>
          {/* Document header */}
          <header className="medical-document-header text-center">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#C08A45]">
              Rally del Viento a los Andes
            </p>

            <h1 className="text-2xl font-semibold uppercase tracking-[0.12em] md:text-3xl">
              Certificado Médico
            </h1>

            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/50">
              de Aptitud Física
            </p>
          </header>

          {/* Printable document */}
          <article className="medical-document-paper mt-12 bg-[#F4F1EB] px-6 py-10 text-[#171717] shadow-2xl md:px-16 md:py-14">
            <div className="mx-auto max-w-3xl">
              <header className="border-b border-black/10 pb-8 text-center">
                <img
                  src={logoDelVientoALosAndes}
                  alt="Rally del Viento a los Andes"
                  className="mx-auto mb-6 w-40"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                  5ta. Edición Rally MTB en Parejas · 3 Etapas
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-black/60">
                  “Del Viento a los Andes”
                </p>

                <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-black/50">
                  Departamento Minas, Neuquén · 6 al 8/02/2026
                </p>
              </header>

              <section className="pt-10">
                <h2 className="text-center text-xl font-semibold uppercase tracking-[0.08em]">
                  Certificado Médico de Aptitud Física
                </h2>

                <p className="mt-3 text-center text-xs italic text-black/60">
                  A completar por profesional médico.
                </p>

                <div className="mt-10 space-y-8 text-sm leading-7">
                  <p>
                    Rp./
                  </p>

                  <p>
                    Certifico que{' '}
                    <span className="inline-block min-w-[260px] border-b border-black/50 align-bottom" />
                    {' '}DNI N°{' '}
                    <span className="inline-block min-w-[150px] border-b border-black/50 align-bottom" />
                  </p>

                  <p>
                    fue evaluado/a desde el punto de vista médico, no
                    presentando a la fecha contraindicaciones para realizar
                    actividad física, encontrándose en condiciones de salud
                    aptas para la práctica de actividad deportiva competitiva
                    de moderada y alta intensidad.
                  </p>
                </div>

                <div className="mt-10 space-y-7 text-sm">
                  <div className="flex flex-col gap-2 border-b border-black/30 pb-2 md:flex-row md:items-end">
                    <span className="font-medium">Grupo sanguíneo:</span>
                    <span className="hidden flex-1 border-b border-black/30 md:block" />
                    <span className="md:hidden">&nbsp;</span>
                  </div>

                  <div className="flex flex-col gap-2 border-b border-black/30 pb-2">
                    <span className="font-medium">
                      Electrocardiograma:
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 border-b border-black/30 pb-2">
                    <span className="font-medium">
                      Observaciones:
                    </span>
                  </div>
                </div>

                <div className="mt-12 space-y-7 text-sm">
                  <div className="flex flex-col gap-2 border-b border-black/30 pb-2 md:flex-row md:items-end">
                    <span className="font-medium">
                      Fecha de emisión:
                    </span>
                    <span className="hidden flex-1 border-b border-black/30 md:block" />
                  </div>

                  <div className="flex flex-col gap-2 border-b border-black/30 pb-2 md:flex-row md:items-end">
                    <span className="font-medium">
                      Nombre y apellido del médico:
                    </span>
                    <span className="hidden flex-1 border-b border-black/30 md:block" />
                  </div>

                  <div className="flex flex-col gap-2 border-b border-black/30 pb-2 md:flex-row md:items-end">
                    <span className="font-medium">
                      Número de matrícula del médico:
                    </span>
                    <span className="hidden flex-1 border-b border-black/30 md:block" />
                  </div>
                </div>

                <div className="mt-16 flex justify-end">
                  <div className="w-64 text-center">
                    <div className="h-20 border-b border-black/40" />

                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em]">
                      Firma del médico
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>

          {/* Actions */}
          <div className="medical-document-actions mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full border border-[#C08A45]/60 px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#C08A45] transition-colors hover:border-[#C08A45] hover:bg-[#C08A45] hover:text-[#0F0F10] sm:w-auto"
            >
              Imprimir / Guardar PDF
            </button>

            <a
              href="/documentos"
              className="w-full px-7 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white sm:w-auto"
            >
              Volver a documentos
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MedicalCertificatePage