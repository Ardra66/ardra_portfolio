import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    type: "Internship",
    title: "MERN Stack Developer Intern",
    company: "Knovista Technologies",
    date: "Internship",
    icon: BriefcaseBusiness,
    description:
      "Worked on MERN Stack development and built responsive web applications using modern frontend and backend technologies.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    type: "Training",
    title: "MERN Stack Development",
    company: "Avodha Institute",
    date: "Completed",
    icon: GraduationCap,
    description:
      "Completed practical MERN Stack training with hands-on experience in developing full-stack web applications and working with modern development tools.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black px-6 py-24 md:px-10 lg:px-20"
    >
      {/* Animated Background Elements */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-10 right-[-100px] h-80 w-80 rounded-full bg-[#dfff00]/5 blur-3xl"
      />

      {/* Small glowing dots */}

      <div className="pointer-events-none absolute left-[10%] top-[25%] h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />

      <div className="pointer-events-none absolute right-[15%] top-[40%] h-1.5 w-1.5 rounded-full bg-[#dfff00] shadow-[0_0_15px_#dfff00]" />

      <div className="pointer-events-none absolute bottom-[20%] left-[20%] h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />

      {/* Main Container */}

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
            My Journey
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Experience{" "}
            <span className="text-[#dfff00] drop-shadow-[0_0_12px_rgba(223,255,0,0.45)]">
              & Training
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            My learning journey and practical experience in modern web
            development.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-4xl">
          {/* Blue Timeline */}

          <div className="absolute left-4 top-0 h-full w-[2px] bg-blue-500 shadow-[0_0_12px_#3b82f6] md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: isLeft ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`relative mb-16 flex w-full ${
                  isLeft
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Icon */}

                <div className="absolute left-4 top-8 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-black text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.65)]">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Card */}

                <div
                  className={`ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-[44%] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="group relative border border-blue-500/50 bg-black p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#dfff00] hover:shadow-[0_0_30px_rgba(223,255,0,0.18)] md:p-7">
                    {/* Top glow line */}

                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#dfff00] shadow-[0_0_12px_#dfff00] transition-all duration-500 group-hover:w-full" />

                    {/* Type + Date */}

                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfff00]">
                        {item.type}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CalendarDays size={14} />
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#dfff00] md:text-2xl">
                      {item.title}
                    </h3>

                    {/* Company */}

                    <p className="mb-4 text-sm font-semibold text-blue-400">
                      {item.company}
                    </p>

                    {/* Description */}

                    <p className="mb-6 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>

                    {/* Skills */}

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="flex items-center gap-1.5 border border-blue-500/30 bg-black px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 group-hover:border-[#dfff00]/40 group-hover:text-[#dfff00]"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-blue-500"
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-4 h-px max-w-3xl bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
        />
      </div>
    </section>
  );
}

export default Experience;