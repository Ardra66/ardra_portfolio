import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Palette,
  Wrench,
} from "lucide-react";

const skills = [
  { name: "HTML & CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React.js", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js & Express", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "VS Code & Postman", icon: Wrench },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#dfff00]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0066ff]">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">
            Tools I <span className="text-[#dfff00]">work with.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative border border-white/10 bg-[#050505] p-6 transition duration-300 hover:border-[#dfff00]/50 hover:shadow-[0_0_30px_rgba(223,255,0,0.12)]"
              >
                <Icon
                  size={30}
                  className="text-[#dfff00] transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#dfff00]"
                />

                <h3 className="mt-6 font-bold text-white">
                  {skill.name}
                </h3>

                <div className="mt-4 h-[2px] w-8 bg-[#0066ff] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#0066ff]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;