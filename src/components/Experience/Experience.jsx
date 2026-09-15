import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#08090D] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Heading */}
          <div>
            <p className="text-sm font-semibold text-[#8B5CF6]">
              03.
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
              My
              <br />
              <span className="text-[#8B5CF6]">
                Experience.
              </span>
            </h2>

            <BriefcaseBusiness
              className="mt-10 text-[#8B5CF6]"
              size={46}
              strokeWidth={1}
            />
          </div>

          {/* Experience */}
          <div className="space-y-6">

            <motion.article
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl border border-[#252A34] bg-[#111318] p-7 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.06)] md:p-9"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#8B5CF6]/5 blur-3xl transition-all group-hover:bg-[#8B5CF6]/10" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm font-mono text-[#8B5CF6]">
                    2024 — Present
                  </span>

                  <ArrowUpRight
                    className="text-[#9CA3AF] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8B5CF6]"
                    size={20}
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  MERN Stack Developer
                </h3>

                <p className="mt-2 text-[#8B5CF6]">
                  Company / Organization
                </p>

                <p className="mt-6 max-w-2xl leading-7 text-[#9CA3AF]">
                  Worked on modern web applications, building responsive
                  interfaces and developing full-stack functionality using
                  React, Node.js, Express.js and MongoDB.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Tailwind",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#252A34] px-3 py-1.5 text-xs text-[#9CA3AF]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group rounded-3xl border border-[#252A34] p-7 transition-all duration-300 hover:border-[#8B5CF6]/50 md:p-9"
            >
              <span className="text-sm font-mono text-[#8B5CF6]">
                Previous
              </span>

              <h3 className="mt-6 text-2xl font-bold">
                Previous Role
              </h3>

              <p className="mt-2 text-[#9CA3AF]">
                Company / Organization
              </p>

              <p className="mt-5 leading-7 text-[#9CA3AF]">
                Add your previous experience, internship or freelance work
                here. We will replace this placeholder with your actual
                information.
              </p>
            </motion.article>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;