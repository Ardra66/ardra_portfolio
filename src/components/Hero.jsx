function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Purple Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="w-full max-w-7xl">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-violet-400">
          Frontend Developer • MERN Stack
        </p>

        <h1 className="text-[18vw] font-black leading-[0.75] tracking-[-0.08em] md:text-[12rem]">
          ARDRA
        </h1>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-[18vw] font-black leading-[0.75] tracking-[-0.08em] md:text-[12rem]">
            SURESH<span className="text-violet-500">.</span>
          </h2>

          <p className="max-w-sm text-sm leading-6 text-white/50 md:mb-3">
            I create modern, responsive digital experiences with React,
            JavaScript and the MERN stack.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:text-violet-400"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
