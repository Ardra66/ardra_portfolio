import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pt-28 md:px-10 lg:px-16"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#dfff00]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#0066ff]/10 blur-[140px]" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#dfff00]">
            Hello, I'm
          </p>

          <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.82] tracking-[-0.06em] text-white">
            ARDRA
            <br />
            <span className="text-[#dfff00]">SURESH</span>
          </h1>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#0066ff] shadow-[0_0_12px_#0066ff]" />
            <p className="text-lg font-semibold text-gray-300 md:text-xl">
              Frontend / MERN Stack Developer
            </p>
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
            I build modern, responsive and engaging web experiences using
            React, JavaScript and the MERN stack.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-[#dfff00] px-6 py-3.5 font-bold text-black transition duration-300 hover:shadow-[0_0_30px_rgba(223,255,0,0.5)]"
            >
              View My Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="border border-white/20 px-6 py-3.5 font-bold text-white transition duration-300 hover:border-[#0066ff] hover:text-[#0066ff] hover:shadow-[0_0_25px_rgba(0,102,255,0.25)]"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* Creative image area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center md:h-[500px]"
        >
          {/* Blue glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[#0066ff]/20 blur-[90px]" />

          {/* Decorative ring */}
          <div className="absolute h-72 w-72 rounded-full border border-[#dfff00]/30 shadow-[0_0_40px_rgba(223,255,0,0.12)] md:h-96 md:w-96" />

          {/* Temporary image */}
          <div className="relative h-72 w-56 overflow-hidden border border-[#dfff00]/50 bg-[#111] shadow-[0_0_35px_rgba(223,255,0,0.15)] md:h-96 md:w-72">
            <div className="flex h-full items-center justify-center text-center text-sm text-gray-500">
              YOUR PHOTO
            </div>
          </div>

          {/* Floating neon label */}
          <div className="absolute right-0 top-10 border border-[#0066ff]/60 bg-black/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0066ff] shadow-[0_0_20px_rgba(0,102,255,0.2)]">
            Creative Developer
          </div>

          <div className="absolute bottom-12 left-0 h-4 w-4 bg-[#dfff00] shadow-[0_0_20px_#dfff00]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-gray-500 md:flex">
        Scroll
        <ArrowDown size={15} className="text-[#dfff00]" />
      </div>
    </section>
  );
}

export default Hero;