import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Development",
    text: "Building responsive and functional web applications with React and the MERN stack.",
  },
  {
    icon: Palette,
    title: "UI & Design",
    text: "Creating clean, modern interfaces with attention to visual details and user experience.",
  },
  {
    icon: Rocket,
    title: "Growth",
    text: "Always learning new technologies and improving my skills through practical projects.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#0066ff]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#0066ff]">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Turning ideas into{" "}
            <span className="text-[#dfff00] neon-yellow-glow">
              digital experiences.
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Number */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <span className="text-[9rem] font-black leading-none text-white/5 md:text-[12rem]">
              01
            </span>

            <div className="absolute left-8 top-16 h-20 w-20 border border-[#dfff00]/40 shadow-[0_0_30px_rgba(223,255,0,0.15)]" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-lg leading-8 text-gray-400">
              I'm{" "}
              <span className="font-semibold text-white">Ardra Suresh</span>,
              a passionate Frontend / MERN Stack Developer who enjoys creating
              modern, responsive and user-friendly websites.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I love turning ideas into interactive experiences using
              JavaScript, React and modern web technologies. I'm continuously
              learning, experimenting and building projects that help me grow
              as a developer.
            </p>

            {/* Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    whileHover={{ y: -6 }}
                    className="group border border-white/10 bg-[#0a0a0a] p-5 transition duration-300 hover:border-[#dfff00]/50 hover:shadow-[0_0_25px_rgba(223,255,0,0.08)]"
                  >
                    <Icon
                      size={25}
                      className="text-[#dfff00] transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="mt-4 font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;