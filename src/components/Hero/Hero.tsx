function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0F0F10] text-white"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube-nocookie.com/embed/YvEir9POn7U?autoplay=1&mute=1&controls=0&loop=1&playlist=YvEir9POn7U&modestbranding=1&rel=0"
          title="Rally del Viento a los Andes"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex max-w-4xl flex-col items-center text-center">

          <img
            src="/src/assets/images/delVientotransparent.png"
            alt="Rally del Viento a los Andes"
            className="w-full max-w-3xl"
          />

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#D8D8D8]">
            11 · 12 · 13 · 14 FEBRERO 2027
          </p>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#D8D8D8]">
            Huinganco · Neuquén
          </p>

          <button
            type="button"
            className="mt-10 bg-[#C08A45] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-105"
          >
            Quiero ser parte
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero