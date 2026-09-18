import FooterMountainRange from './FooterMountainRange'

function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#0F0F10] text-white">
            <FooterMountainRange />

            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-2 lg:px-10">
                <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1.5fr_1fr_1fr]">
                    {/* Identidad */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#C08A45]">
                            Rally del Viento a los Andes
                        </span>

                        <h2 className="mt-4 max-w-md text-4xl uppercase leading-none tracking-tight md:text-5xl">
                            Donde termina
                            <br />
                            el camino,
                            <br />
                            empieza la historia.
                        </h2>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
                            Una experiencia de montaña en el corazón del Norte Neuquino.
                        </p>
                    </div>

                    {/* Navegación */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                            Navegación
                        </span>

                        <nav className="mt-6 flex flex-col gap-4">
                            <a
                                href="/#experience"
                                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                            >
                                Experiencia
                            </a>

                            <a
                                href="/#disciplinas"
                                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                            >
                                Disciplinas
                            </a>

                            <a
                                href="/#stages"
                                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                            >
                                Etapas
                            </a>

                            <a
                                href="/resultados"
                                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                            >
                                Resultados
                            </a>

                            <a
                                href="/#registration"
                                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                            >
                                Quiero ser parte
                            </a>
                        </nav>
                    </div>

                    {/* Ubicación */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                            El lugar
                        </span>

                        <div className="mt-6">
                            <p className="text-sm uppercase tracking-[0.15em] text-white/80">
                                Huinganco
                            </p>

                            <p className="mt-2 text-sm text-white/50">
                                Norte Neuquino
                                <br />
                                Provincia del Neuquén
                                <br />
                                Patagonia Argentina
                            </p>
                        </div>

                        <div className="mt-8">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                                Seguinos
                            </span>

                            <div className="mt-4 flex gap-5">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Instagram
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 border-t border-white/10 pt-6"> <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.18em] text-white/30 md:flex-row md:items-center md:justify-between"> <span> © Rally del Viento a los Andes </span>

                    <span>
                        Huinganco · Neuquén · Argentina
                    </span>

                    <span>
                        Desarrollado por{' '}
                        <a
                            href="mailto:demisgero22@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 transition-colors hover:text-white"
                        >
                            Demis Gerometta
                        </a>
                    </span>

                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer