import Header from '../../components/Header/Header'
import logoDelVientoALosAndes from '../../assets/images/logoDelVientoALosAndes.png'
import './Documents.css'

function MinorAuthorizationPage() {
  return (
    <main className="regulation-page min-h-screen bg-[#0F0F10] text-white">
      <Header />

      <section className="px-6 pb-24 pt-32 md:px-10">
        <div className="mx-auto max-w-5xl">
          <a
            href="/#documents"
            className="medical-document-back-link mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#C08A45]"
          >
            <span aria-hidden="true">←</span>
            Volver a documentos
          </a>

          {/* HERO */}
          <header className="regulation-hero text-center">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C08A45]">
              Documento oficial
            </p>

            <h1 className="text-3xl font-semibold uppercase tracking-[0.12em] md:text-5xl">
              Autorización para menores
            </h1>

            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/50">
              Declaración jurada
            </p>

            <div className="mx-auto mt-8 h-px w-16 bg-[#C08A45]" />
          </header>

          {/* DOCUMENT */}
          <article className="regulation-document minor-authorization-document mt-16">

            <header className="regulation-document-header">
              <img
                src={logoDelVientoALosAndes}
                alt="Rally del Viento a los Andes"
                className="mx-auto mb-6 w-36"
              />

              <p className="text-center text-xs font-medium uppercase tracking-[0.16em] text-[#C08A45]">
                5ta. Edición
              </p>

              <h2 className="mt-3 text-center text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                Rally MTB en parejas · 3 etapas
              </h2>

              <p className="mt-3 text-center text-lg italic text-white/60">
                “DEL VIENTO A LOS ANDES”
              </p>

              <p className="mt-4 text-center text-xs uppercase tracking-[0.14em] text-white/40">
                Departamento Minas · Neuquén · 05 al 08 de febrero de 2026
              </p>
            </header>

            {/* INTRODUCTION */}
            <section className="regulation-section mt-16">
              <header className="regulation-section-header">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C08A45]">
                    Documento
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                  Autorización para menores
                </h2>
              </header>

              <div className="regulation-body">

                <p>
                  <strong className="font-medium text-white">
                    AUTORIZACIÓN PARA MENORES – DECLARACIÓN JURADA.
                  </strong>
                </p>

                <p className="mt-6">
                  Deben firmar los padres, tutores o encargados del corredor
                  menor de edad, firmas certificadas por autoridad policial,
                  juez de paz o escribano.
                </p>

              </div>
            </section>

            {/* DECLARATION */}
            <section className="regulation-section">
              <header className="regulation-section-header">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C08A45]">
                    Declaración
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                  Autorización
                </h2>
              </header>

              <div className="regulation-body">

                <p>
                  En ejercicio de la patria potestad del menor
                </p>

                <div className="minor-form-field">
                  <span>Nombre y apellido del menor</span>
                  <div className="minor-form-line" />
                </div>

                <div className="minor-form-field minor-form-field-small">
                  <span>DNI N°</span>
                  <div className="minor-form-line" />
                </div>

                <p className="mt-8">
                  otorgamos la autorización expresa para que participe de la
                  5ta. edición del Rally MTB en parejas, por etapas “Del Viento
                  a los Andes”, a realizarse del 5 al 8 de febrero de 2026,
                  declarando conocer y aceptar su reglamentación.
                </p>

              </div>
            </section>

            {/* SIGNATURES */}
            <section className="regulation-section minor-signatures-section">
              <header className="regulation-section-header">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C08A45]">
                    Firmas
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                  Padres / Tutores
                </h2>
              </header>

              <div className="minor-signatures-grid">

                {/* PADRE / TUTOR */}
                <div className="minor-signature-block">
                  <div className="minor-signature-line" />

                  <p className="minor-signature-role">
                    Firma del padre / tutor
                  </p>

                  <div className="minor-signature-data">
                    <div>
                      <span>Aclaración</span>
                      <div className="minor-form-line" />
                    </div>

                    <div>
                      <span>DNI N°</span>
                      <div className="minor-form-line" />
                    </div>
                  </div>
                </div>

                {/* MADRE / TUTOR */}
                <div className="minor-signature-block">
                  <div className="minor-signature-line" />

                  <p className="minor-signature-role">
                    Firma de la madre / tutor
                  </p>

                  <div className="minor-signature-data">
                    <div>
                      <span>Aclaración</span>
                      <div className="minor-form-line" />
                    </div>

                    <div>
                      <span>DNI N°</span>
                      <div className="minor-form-line" />
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* CLOSING */}
            <div className="regulation-closing">
              <div className="mx-auto mb-6 h-px w-16 bg-[#C08A45]" />

              <p className="text-center text-xs uppercase text-white/40">
                Documento para presentar con las firmas certificadas
              </p>
            </div>

          </article>

          {/* ACTIONS */}
          <div className="regulation-actions mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => window.print()}
              className="border border-[#C08A45]/40 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#C08A45] transition-colors hover:border-[#C08A45] hover:text-white"
            >
              Imprimir / Guardar PDF
            </button>

            <a
              href="/#documents"
              className="border border-white/10 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 transition-colors hover:border-white/30 hover:text-white"
            >
              Volver a documentos
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}

export default MinorAuthorizationPage
