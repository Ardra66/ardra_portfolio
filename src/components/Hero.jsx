import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ardraPhoto from "../assets/ardra.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pt-28 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#dfff00]/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#0066ff]/10 blur-[140px]" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* ================= TEXT ================= */}
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

          {/* Buttons */}
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

        {/* ================= IMAGE AREA ================= */}
       {/* ================= IMAGE AREA ================= */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center md:h-[500px]"
>
  {/* =========================================
      SOFT YELLOW NEON AURA
      This stays BEHIND the photo
  ========================================= */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.35, 0.5, 0.35],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      h-64
      w-64
      rounded-full
      bg-[#dfff00]/30
      blur-[65px]
      md:h-80
      md:w-80
    "
  />

  {/* Smaller bright yellow core */}
  <div
    className="
      pointer-events-none
      absolute
      h-48
      w-48
      rounded-full
      bg-[#dfff00]/15
      blur-[45px]
      md:h-64
      md:w-64
    "
  />

  {/* =========================================
      SUBTLE BLUE AMBIENT GLOW
      Keep this much weaker than yellow
  ========================================= */}
  <div
    className="
      pointer-events-none
      absolute
      right-[-20px]
      h-72
      w-72
      rounded-full
      bg-[#0066ff]/10
      blur-[100px]
    "
  />

  {/* =========================================
      DECORATIVE CIRCLE
  ========================================= */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      h-72
      w-72
      rounded-full
      border
      border-[#dfff00]/25
      md:h-96
      md:w-96
    "
  />

  {/* =========================================
      PHOTO
      ========================================= */}
  <div
    className="
      relative
      z-10
      h-72
      w-56
      overflow-hidden
      border
      border-[#dfff00]/60
      bg-[#111]
      shadow-[0_0_25px_rgba(223,255,0,0.12)]
      md:h-96
      md:w-72
    "
  >
    {/* Yellow light directly behind image */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-[#dfff00]/5
      "
    />

    <img
      src={ardraPhoto}
      alt="Ardra Suresh"
      className="
        relative
        z-10
        h-full
        w-full
        object-cover
      "
    />
  </div>

  {/* =========================================
      CREATIVE DEVELOPER LABEL
  ========================================= */}
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      right-0
      top-10
      z-20
      border
      border-[#0066ff]/70
      bg-black/90
      px-4
      py-2
      text-xs
      font-bold
      uppercase
      tracking-widest
      text-[#0066ff]
      shadow-[0_0_20px_rgba(0,102,255,0.2)]
    "
  >
    Creative Developer
  </motion.div>

  {/* =========================================
      NEON YELLOW SQUARE
  ========================================= */}
  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.8, 1, 0.8],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      bottom-12
      left-0
      z-20
      h-4
      w-4
      bg-[#dfff00]
      shadow-[0_0_20px_#dfff00]
    "
  />
</motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-gray-500 md:flex">
        Scroll
        <ArrowDown size={15} className="text-[#dfff00]" />
      </div>
    </section>
  );
}

export default Hero;