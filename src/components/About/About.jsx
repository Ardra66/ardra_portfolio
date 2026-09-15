import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#252A34] bg-[#08090D] py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#8B5CF6]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section number */}
        <div className="mb-12 flex items-center gap-4">
          <span className="text-sm font-semibold text-[#8B5CF6]">
            01.
          </span>

          <div className="h-px w-16 bg-[#8B5CF6]/40" />

          <span className="text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">
            About
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">
              Get to know me
            </p>

            <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-8xl">
              About
              <br />
              <span className="text-[#8B5CF6]">Me.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="text-xl leading-8 text-[#F5F7FA] md:text-2xl md:leading-9">
              I'm Ardra Suresh, a passionate MERN Stack Developer who enjoys
              building clean, responsive and user-focused web applications.
            </p>

            <p className="mt-6 leading-7 text-[#9CA3AF]">
              I enjoy turning ideas into functional digital experiences,
              exploring modern technologies and continuously improving my
              development skills. My focus is writing maintainable code while
              creating interfaces that are both useful and visually engaging.
            </p>

            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#8B5CF6] pb-2 text-sm font-semibold uppercase tracking-wider text-[#8B5CF6]"
            >
              Explore My Work
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* About stats */}
        <div className="mt-20 grid border-y border-[#252A34] sm:grid-cols-3">

          <div className="border-b border-[#252A34] py-8 sm:border-b-0 sm:border-r sm:px-8">
            <p className="text-4xl font-black text-[#8B5CF6]">01+</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-[#9CA3AF]">
              Years Learning
            </p>
          </div>

          <div className="border-b border-[#252A34] py-8 sm:border-b-0 sm:border-r sm:px-8">
            <p className="text-4xl font-black text-[#8B5CF6]">05+</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-[#9CA3AF]">
              Technologies
            </p>
          </div>

          <div className="py-8 sm:px-8">
            <p className="text-4xl font-black text-[#8B5CF6]">∞</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-[#9CA3AF]">
              Curiosity
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;