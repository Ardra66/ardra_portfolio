import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#dfff00]/5 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-100px] top-1/3 h-96 w-96 rounded-full bg-[#0066ff]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= TOP LABEL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-[2px] w-12 bg-[#dfff00] shadow-[0_0_12px_#dfff00]" />

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#dfff00]">
            About Me
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl xl:text-8xl">
              Turning ideas into{" "}
              <span className="text-[#dfff00] drop-shadow-[0_0_18px_rgba(223,255,0,0.45)]">
                digital
              </span>
              <br />
              <span className="text-[#dfff00] drop-shadow-[0_0_18px_rgba(223,255,0,0.45)]">
                experiences.
              </span>
            </h2>

            {/* Decorative Lines */}
            <div className="mt-10 flex gap-2">
              <span className="h-[2px] w-16 bg-[#dfff00]" />
              <span className="h-[2px] w-6 bg-[#dfff00]/40" />
              <span className="h-[2px] w-2 bg-[#dfff00]/20" />
            </div>
          </motion.div>

          {/* ================= RIGHT TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto max-w-2xl text-center lg:text-left"
          >
            <p className="text-base leading-7 text-gray-400 md:text-lg md:leading-8">
              I'm{" "}
              <span className="font-bold text-white">
                Ardra Suresh
              </span>
              , a passionate Frontend / MERN Stack Developer who enjoys
              creating modern, responsive and user-friendly websites.
            </p>

            <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg md:leading-8">
              I love turning ideas into interactive experiences using
              JavaScript, React and modern web technologies. I'm continuously
              learning, experimenting and building projects that help me grow
              as a developer.
            </p>
          </motion.div>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >

          {/* Card 1 */}
          <div
            className="
              group
              border
              border-white/10
              bg-[#080808]
              p-6
              transition-all
              duration-300
              hover:border-[#dfff00]/40
              hover:bg-[#0b0b0b]
              hover:shadow-[0_0_30px_rgba(223,255,0,0.08)]
            "
          >
            <Code2
              size={28}
              strokeWidth={1.8}
              className="text-[#dfff00] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-5 text-lg font-bold text-white">
              Clean Development
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Writing clean, maintainable and scalable code using modern
              development practices.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              group
              border
              border-white/10
              bg-[#080808]
              p-6
              transition-all
              duration-300
              hover:border-[#dfff00]/40
              hover:bg-[#0b0b0b]
              hover:shadow-[0_0_30px_rgba(223,255,0,0.08)]
            "
          >
            <Palette
              size={28}
              strokeWidth={1.8}
              className="text-[#dfff00] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-5 text-lg font-bold text-white">
              Modern Design
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Creating visually engaging interfaces that are simple,
              responsive and enjoyable to use.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              group
              border
              border-white/10
              bg-[#080808]
              p-6
              transition-all
              duration-300
              hover:border-[#dfff00]/40
              hover:bg-[#0b0b0b]
              hover:shadow-[0_0_30px_rgba(223,255,0,0.08)]
            "
          >
            <Rocket
              size={28}
              strokeWidth={1.8}
              className="text-[#dfff00] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-5 text-lg font-bold text-white">
              Continuous Growth
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Constantly learning new technologies and improving my skills
              through real-world projects.
            </p>
          </div>
        </motion.div>

        {/* ================= BOTTOM DECORATION ================= */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 bg-[#dfff00] shadow-[0_0_10px_#dfff00]" />
          <span className="h-px w-20 bg-white/10" />
          <span className="h-1.5 w-1.5 bg-[#dfff00]/40" />
        </div>
      </div>
    </section>
  );
}

export default About;