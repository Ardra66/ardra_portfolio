import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#111318] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#8B5CF6]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-[#8B5CF6]">
              02.
            </p>

            <h2 className="mt-3 text-5xl font-black uppercase tracking-[-0.05em] md:text-7xl">
              Education
              <span className="text-[#8B5CF6]">.</span>
            </h2>
          </div>

          <GraduationCap
            className="hidden text-[#8B5CF6] md:block"
            size={48}
            strokeWidth={1}
          />
        </div>

        <div className="space-y-4">

          {/* Education item */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid gap-6 border-t border-[#252A34] py-8 transition-colors hover:border-[#8B5CF6]/50 md:grid-cols-[180px_1fr_auto] md:items-center"
          >
            <p className="font-mono text-sm text-[#8B5CF6]">
              2021 — 2025
            </p>

            <div>
              <h3 className="text-2xl font-bold transition-colors group-hover:text-[#8B5CF6]">
                Degree / Course Name
              </h3>

              <p className="mt-2 text-[#9CA3AF]">
                College / University Name
              </p>
            </div>

            <span className="w-fit rounded-full border border-[#252A34] px-4 py-2 text-xs uppercase tracking-wider text-[#9CA3AF]">
              Education
            </span>
          </motion.article>

          {/* Education item */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group grid gap-6 border-t border-[#252A34] py-8 transition-colors hover:border-[#8B5CF6]/50 md:grid-cols-[180px_1fr_auto] md:items-center"
          >
            <p className="font-mono text-sm text-[#8B5CF6]">
              2019 — 2021
            </p>

            <div>
              <h3 className="text-2xl font-bold transition-colors group-hover:text-[#8B5CF6]">
                Previous Education
              </h3>

              <p className="mt-2 text-[#9CA3AF]">
                Institution Name
              </p>
            </div>

            <span className="w-fit rounded-full border border-[#252A34] px-4 py-2 text-xs uppercase tracking-wider text-[#9CA3AF]">
              Education
            </span>
          </motion.article>

        </div>
      </div>
    </section>
  );
}

export default Education;