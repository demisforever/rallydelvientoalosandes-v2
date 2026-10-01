import Header from '../../components/Header/Header'
import logoDelVientoALosAndes from '../../assets/images/logoDelVientoALosAndes.png'
import './Documents.css'

function LiabilityWaiverPage() {
  return (
    <main className="regulation-page min-h-screen bg-[#0F0F10] text-white">
      <Header />

      <section className="px-6 pb-24 pt-32 md:px-10">
        <div className="mx-auto max-w-5xl">

          {/* HERO */}
          <header className="regulation-hero text-center">
            <img
              src={logoDelVientoALosAndes}
              alt="Rally del Viento a los Andes"
              className="mx-auto mb-8 w-44 md:w-52"
            />

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C08A45]">
              Documento oficial
            </p>

            <h1 className="text-3xl font-semibold uppercase tracking-[0.12em] md:text-5xl">
              Deslinde de responsabilidad
            </h1>

            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/50">
              Declaración jurada
            </p>

            <div className="mx-auto mt-8 h-px w-16 bg-[#C08A45]" />
          </header>

          {/* DOCUMENT */}
          <article className="regulation-document liability-document mt-16">

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
                Departamento Minas · Neuquén · 06 al 08 de febrero de 2026
              </p>
            </header>

            {/* RESPONSIBILITY */}
            <section className="regulation-section mt-16">
              <header className="regulation-section-header">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C08A45]">
                    Declaración
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                  Deslinde de responsabilidad
                </h2>
              </header>

              <div className="regulation-body">
                <p>
                  Declaro en forma irrevocable, que eximo de toda
                  responsabilidad a los organizadores de la 5ta. edición del
                  Rally MTB en parejas por etapas “Del Viento a los Andes”, y a
                  las autoridades jurisdiccionales del lugar de realización que
                  fiscalice, por cualquier reclamo contra los mencionados, por
                  motivo de alguna lesión o accidente personal provocado por
                  caídas, contacto con otros participantes, consecuencias del
                  clima y del terreno, daño y/o pérdidas de objetos, sufrido
                  antes, durante y después de la carrera.
                </p>
              </div>
            </section>

            {/* IMAGE RIGHTS */}
            <section className="regulation-section">
              <header className="regulation-section-header">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C08A45]">
                    Autorización
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                  Uso de imagen
                </h2>
              </header>

              <div className="regulation-body">
                <p>
                  Autorizo a los organizadores de la competencia y sponsor a
                  utilizar, reproducir, distribuir y/o publicar fotografías,
                  videos, grabaciones y/o cualquier otro medio de registración
                  de mi persona tomadas con motivo y en ocasión de la presente
                  competencia, sin compensación económica alguna a mi favor.
                </p>
              </div>
            </section>

            {/* MEDICAL FITNESS */}
            <section className="regulation-section">
              <header className="regulation-section-header">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C08A45]">
                    Declaración
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                  Aptitud médica
                </h2>
              </header>

              <div className="regulation-body">
                <p>
                  Asimismo manifiesto que fui examinado por médico competente
                  que determinó estado adecuado y sin riesgo para la práctica
                  de este tipo de competencia.
                </p>
              </div>
            </section>

            {/* PARTICIPANT DATA */}
            <section className="regulation-section">
              <header className="regulation-section-header">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C08A45]">
                    Participantes
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                  Datos del equipo
                </h2>
              </header>

              <div className="minor-team-data">
                <div className="minor-form-field">
                  <span>Equipo</span>
                  <div className="minor-form-line" />
                </div>

                <div className="minor-form-field">
                  <span>Categoría</span>
                  <div className="minor-form-line" />
                </div>
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
                  Corredores
                </h2>
              </header>

              <div className="minor-signatures-grid">

                {/* CORREDOR 1 */}
                <div className="minor-signature-block">
                  <div className="minor-signature-line" />

                  <p className="minor-signature-role">
                    Firma del corredor N.º 1
                  </p>

                  <div className="minor-signature-data">
                    <div>
                      <span>Aclaración</span>
                      <div className="minor-form-line" />
                    </div>

                    <div>
                      <span>DNI N.º</span>
                      <div className="minor-form-line" />
                    </div>
                  </div>
                </div>

                {/* CORREDOR 2 */}
                <div className="minor-signature-block">
                  <div className="minor-signature-line" />

                  <p className="minor-signature-role">
                    Firma del corredor N.º 2
                  </p>

                  <div className="minor-signature-data">
                    <div>
                      <span>Aclaración</span>
                      <div className="minor-form-line" />
                    </div>

                    <div>
                      <span>DNI N.º</span>
                      <div className="minor-form-line" />
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* DATE */}
            <div className="regulation-closing">
              <div className="mx-auto mb-6 h-px w-16 bg-[#C08A45]" />

              <p className="text-center text-xs uppercase tracking-[0.12em] text-white/40">
                Huinganco, 5 de febrero de 2026.
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
              href="/documentos"
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

export default LiabilityWaiverPage
