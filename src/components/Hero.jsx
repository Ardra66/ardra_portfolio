function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Purple Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-violet-400">
            Frontend Developer • MERN Stack
          </p>

          <h1 className="text-7xl font-black leading-[0.85] tracking-[-0.06em] sm:text-8xl md:text-[7rem] lg:text-[8.5rem]">
            ARDRA
            <br />
            SURESH<span className="text-violet-500">.</span>
          </h1>

          <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
            I create modern, responsive digital experiences with React,
            JavaScript and the MERN stack.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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

        {/* Temporary Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-violet-500/30 blur-3xl" />

            <img
  src="https://i.pravatar.cc/600?img=47"
  alt="Profile"
  className="relative h-[350px] w-[280px] rounded-[2rem] object-cover grayscale-[20%] shadow-2xl sm:h-[420px] sm:w-[340px]"
/>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
