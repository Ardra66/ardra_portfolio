import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Image Gallery",
    category: "React Project",
    description:
      "A responsive image gallery with clean UI, interactive layouts and smooth user experience.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Image_gallery.png",
    live: "https://image-gallery-flax-beta.vercel.app",
    github: "",
  },
  {
    title: "Expense Tracker",
    category: "React Project",
    description:
      "A modern expense management app with CRUD operations, calculations, filtering and local storage.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Expense_tracker.png",
    live: "https://expense-tracker-murex-one-rmy2b89j7x.vercel.app",
    github: "",
  },
  {
    title: "Student Dashboard",
    category: "React Project",
    description:
      "An interactive student dashboard for managing student details, marks and performance results.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Student_dashboard.png",
    live: "https://student-marks-dashboard-3otn0e8zs-knovista.vercel.app",
    github: "",
  },
  {
    title: "Gradient Maker",
    category: "React Project",
    description:
      "A creative gradient generator that lets users create and customize beautiful CSS gradients.",
    tech: ["React", "CSS"],
    image: "/projects/Gradient_maker.png",
    live: "https://gradient-generator-gt1hihlmn-knovista.vercel.app",
    github: "",
  },
  {
    title: "Color Palette Generator",
    category: "React Project",
    description:
      "A colorful tool for generating and exploring custom color palettes with an easy-to-use interface.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/color_palette.png",
    live: "https://color-palette-generator-9oceujv2s-knovista.vercel.app",
    github: "",
  },
  {
    title: "Counter App",
    category: "React Project",
    description:
      "A simple interactive counter application demonstrating React state and component-based development.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Counter_app.png",
    live: "https://counter-9gi7xnz19-knovista.vercel.app",
    github: "",
  },
  {
    title: "Habit Tracker",
    category: "React Project",
    description:
      "A habit tracking application designed to help users create, complete and manage daily habits.",
    tech: ["React", "LocalStorage"],
    image: "/projects/Habit_tracker.png",
    live: "https://expense-tracker-z9yy-edd3abcv7-knovista.vercel.app",
    github: "",
  },
  {
    title: "Quiz App",
    category: "React Project",
    description:
      "An interactive quiz application with questions, answer selection, scoring and a responsive interface.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Quiz_app.png",
    live: "https://habit-tracker-72v7fbntb-knovista.vercel.app",
    github: "",
  },
  {
    title: "Note App",
    category: "React Project",
    description:
      "A lightweight note-taking application for creating, editing and managing notes with a clean UI.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Note_App.png",
    live: "https://note-fohf1qf4z-knovista.vercel.app",
    github: "",
  },
  {
    title: "Theme Switcher",
    category: "React Project",
    description:
      "A responsive theme switching application demonstrating reusable components and dynamic UI styling.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Theme_Switcher.png",
    live: "https://theme-switcher-jo7qg7q4t-knovista.vercel.app",
    github: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#0066ff]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0066ff]">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            Selected{" "}
            <span className="text-[#dfff00] neon-yellow-glow">
              Projects.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            A collection of projects I've built while learning and developing
            my skills in modern web technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.5deg] hover:border-[#dfff00]/60 hover:shadow-[0_0_35px_rgba(223,255,0,0.15)]"
            >
              {/* Screenshot */}
              <div className="relative aspect-video overflow-hidden bg-[#0b0b0b]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#0066ff]/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                <span className="absolute left-4 top-4 border border-[#dfff00]/40 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dfff00]">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-6">
                {/* Project number */}
                <span className="absolute right-5 top-5 text-xs font-black tracking-widest text-[#0066ff]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-start justify-between gap-4 pr-8">
                  <h3 className="text-2xl font-black text-white transition duration-300 group-hover:text-[#dfff00] group-hover:drop-shadow-[0_0_10px_rgba(223,255,0,0.35)]">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-[#dfff00] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(223,255,0,0.8)]"
                  />
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-1 text-xs font-medium text-gray-400 transition duration-300 hover:border-[#0066ff]/60 hover:text-[#0066ff] hover:shadow-[0_0_12px_rgba(0,102,255,0.2)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-[#dfff00] px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(223,255,0,0.5)]"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff] hover:bg-[#0066ff]/10 hover:text-[#0066ff] hover:shadow-[0_0_20px_rgba(0,102,255,0.25)]"
                    >
                      <GitBranch size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;