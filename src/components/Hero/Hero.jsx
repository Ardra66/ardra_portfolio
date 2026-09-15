import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import ardraImage from "../../assets/ardra.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B0B0B] text-[#F5F1E8]"
    >
      {/* =========================================================
          BACKGROUND TYPOGRAPHY
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-10 select-none text-[15vw] font-black uppercase leading-none tracking-tighter text-[#F5F1E8]/[0.018]">
          PORT
        </div>

        <div className="absolute bottom-0 left-0 select-none text-[15vw] font-black uppercase leading-none tracking-tighter text-[#F5F1E8]/[0.018]">
          FOLIO
        </div>
      </div>

      {/* =========================================================
          DECORATIVE CRIMSON STARS
      ========================================================= */}

      <div className="absolute left-8 top-32 text-3xl text-[#8B0D1A] sm:text-4xl">
        ✦
      </div>

      <motion.div
        animate={{
          rotate: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[15%] top-[25%] text-2xl text-[#8B0D1A]"
      >
        ✦
      </motion.div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 md:px-10 lg:pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative z-20"
          >
            {/* Small heading */}

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0D1A] sm:text-sm">
              MERN Stack Developer
            </p>

            {/* =================================================
                NAME
            ================================================= */}

            <h1
              className="
                max-w-3xl
                text-[15vw]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.07em]
                text-[#F5F1E8]
                sm:text-7xl
                md:text-8xl
                lg:text-[5.5rem]
                xl:text-[6rem]
              "
            >
              Ardra
              <br />

              <span className="text-[#F5F1E8]">
                Suresh
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="mt-7 max-w-xl text-sm leading-6 text-[#F5F1E8]/65 sm:text-base sm:leading-7">
              I build modern, responsive and user-focused web
              applications using MongoDB, Express.js, React.js
              and Node.js.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-7 flex flex-wrap gap-4">

              {/* Primary button */}

              <a
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#8B0D1A]
                  px-6
                  py-3.5
                  font-semibold
                  text-[#F5F1E8]
                  shadow-[0_0_30px_rgba(139,13,26,0.25)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#A20F20]
                  hover:shadow-[0_0_45px_rgba(139,13,26,0.45)]
                "
              >
                View Projects

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

              {/* Secondary button */}

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-[#F5F1E8]/20
                  px-6
                  py-3.5
                  font-semibold
                  text-[#F5F1E8]
                  transition-all
                  duration-300
                  hover:border-[#8B0D1A]
                  hover:bg-[#8B0D1A]/10
                  hover:text-[#F5F1E8]
                "
              >
                Contact Me
              </a>
            </div>

            {/* =================================================
                MERN ICONS
                No boxes — only icons
            ================================================= */}

            <div className="mt-9 flex items-center gap-6 sm:gap-8">

              {/* MongoDB */}

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.18,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="group cursor-pointer"
              >
                <SiMongodb
                  aria-label="MongoDB"
                  className="
                    text-3xl
                    text-[#F5F1E8]
                    transition-all
                    duration-300
                    group-hover:text-[#F5F1E8]
                    group-hover:drop-shadow-[0_0_14px_#8B0D1A]
                    sm:text-4xl
                  "
                />
              </motion.div>

              {/* Express */}

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.18,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="group cursor-pointer"
              >
                <SiExpress
                  aria-label="Express.js"
                  className="
                    text-3xl
                    text-[#F5F1E8]
                    transition-all
                    duration-300
                    group-hover:text-[#F5F1E8]
                    group-hover:drop-shadow-[0_0_14px_#8B0D1A]
                    sm:text-4xl
                  "
                />
              </motion.div>

              {/* React */}

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.18,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="group cursor-pointer"
              >
                <SiReact
                  aria-label="React"
                  className="
                    text-3xl
                    text-[#F5F1E8]
                    transition-all
                    duration-300
                    group-hover:text-[#F5F1E8]
                    group-hover:drop-shadow-[0_0_14px_#8B0D1A]
                    sm:text-4xl
                  "
                />
              </motion.div>

              {/* Node.js */}

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.18,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="group cursor-pointer"
              >
                <SiNodedotjs
                  aria-label="Node.js"
                  className="
                    text-3xl
                    text-[#F5F1E8]
                    transition-all
                    duration-300
                    group-hover:text-[#F5F1E8]
                    group-hover:drop-shadow-[0_0_14px_#8B0D1A]
                    sm:text-4xl
                  "
                />
              </motion.div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT PORTRAIT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              relative
              mx-auto
              -mt-8
              w-full
              max-w-[620px]
              lg:-mt-16
            "
          >
            {/* =================================================
                IMAGE AREA
            ================================================= */}

            <div className="relative h-[500px] w-full overflow-visible sm:h-[560px] md:h-[640px]">

              {/* =================================================
                  LARGE CRIMSON GLOW
                  Behind portrait only
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[55%]
                  z-0
                  h-[480px]
                  w-[360px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#8B0D1A]/35
                  blur-[90px]
                "
              />

              {/* =================================================
                  ANIMATED CRIMSON BACKLIGHT
              ================================================= */}

              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[52%]
                  z-0
                  h-[430px]
                  w-[430px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#8B0D1A]/25
                  blur-[120px]
                "
              />

              {/* =================================================
                  CRIMSON PORTRAIT PANEL
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[8%]
                  top-[5%]
                  z-0
                  h-[78%]
                  w-[70%]
                  bg-[#8B0D1A]
                "
              />

              {/* =================================================
                  SOFT SECONDARY CRIMSON GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[58%]
                  z-0
                  h-[420px]
                  w-[280px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[50%]
                  bg-[#8B0D1A]/20
                  blur-[80px]
                "
              />

              {/* =================================================
                  PORTRAIT
                  CLEAN — NOT BLENDED WITH CRIMSON
              ================================================= */}

              <img
                src={ardraImage}
                alt="Ardra Suresh"
                className="
                  absolute
                  left-[53%]
                  top-[35%]
                  z-10
                  h-[135%]
                  w-[135%]
                  -translate-x-1/2
                  -translate-y-1/2
                  object-contain
                  object-center
                  grayscale
                  brightness-110
                  contrast-125
                  drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)]
                "
              />

              {/* =================================================
                  CRIMSON CIRCLE
              ================================================= */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-0
                  top-8
                  z-20
                  h-20
                  w-20
                  rounded-full
                  bg-[#8B0D1A]
                  shadow-[0_0_50px_rgba(139,13,26,0.35)]
                  sm:h-24
                  sm:w-24
                "
              />

              {/* =================================================
                  CREAM OUTLINE CIRCLE
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  h-32
                  w-32
                  rounded-full
                  border-[16px]
                  border-[#F5F1E8]/10
                  sm:h-40
                  sm:w-40
                "
              />

              {/* =================================================
                  SMALL CRIMSON DOT
              ================================================= */}

              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-20
                  top-24
                  z-20
                  h-3
                  w-3
                  rounded-full
                  bg-[#8B0D1A]
                  shadow-[0_0_25px_#8B0D1A]
                "
              />
            </div>

            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-10
                left-2
                z-30
                rounded-2xl
                border
                border-[#F5F1E8]/10
                bg-[#8B0D1A]/95
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                backdrop-blur-xl
                sm:p-5
                md:-left-6
              "
            >
              <p className="text-[10px] uppercase tracking-widest text-[#F5F1E8]/70 sm:text-xs">
                Currently
              </p>

              <p className="mt-1 text-sm font-bold text-[#F5F1E8] sm:text-base">
                Building for the web
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2"
      >
        <a
          href="#about"
          className="
            flex
            flex-col
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-[#F5F1E8]/40
            transition-colors
            duration-300
            hover:text-[#8B0D1A]
            sm:text-xs
          "
        >
          Scroll

          <ArrowDown size={15} />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;