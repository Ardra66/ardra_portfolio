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
    live: " https://expense-tracker-murex-one-rmy2b89j7x.vercel.app",
    github: "",
  },
  {
    title: "Student Dashboard",
    category: "React Project",
    description:
      "An interactive student dashboard for managing student details, marks and performance results.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Student_dashboard.png",
    live: "",
    github: "",
  },
  {
    title: "Gradient Maker",
    category: "React Project",
    description:
      "A creative gradient generator that lets users create and customize beautiful CSS gradients.",
    tech: ["React", "CSS"],
    image: "/projects/Gradient_maker.png",
    live: "",
    github: "",
  },
  {
    title: "Color Palette Generator",
    category: "React Project",
    description:
      "A colorful tool for generating and exploring custom color palettes with an easy-to-use interface.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/color_palette.png",
    live: "",
    github: "",
  },
  {
    title: "Counter App",
    category: "React Project",
    description:
      "A simple interactive counter application demonstrating React state and component-based development.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Counter_app.png",
    live: "",
    github: "",
  },
  {
    title: "Habit Tracker",
    category: "React Project",
    description:
      "A habit tracking application designed to help users create, complete and manage daily habits.",
    tech: ["React", "LocalStorage"],
    image: "/projects/Habit_tracker.png",
    live: "",
    github: "",
  },
  {
    title: "Quiz App",
    category: "React Project",
    description:
      "An interactive quiz application with questions, answer selection, scoring and a responsive interface.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Quiz_app.png",
    live: "",
    github: "",
  },
  {
    title: "Note App",
    category: "React Project",
    description:
      "A lightweight note-taking application for creating, editing and managing notes with a clean UI.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Note_App.png",
    live: "",
    github: "",
  },
  {
    title: "Theme Switcher",
    category: "React Project",
    description:
      "A responsive theme switching application demonstrating reusable components and dynamic UI styling.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/Theme_Switcher.png",
    live: "https://theme-switcher-knovista.vercel.app",
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

          <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">
            Selected <span className="text-[#dfff00]">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            A collection of projects I've built while learning and developing
            my skills in modern web technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid gap-7 md:grid-cols-2">
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
              className="group overflow-hidden border border-white/10 bg-[#0a0a0a] transition duration-300 hover:border-[#dfff00]/50 hover:shadow-[0_0_35px_rgba(223,255,0,0.1)]"
            >
              {/* Screenshot */}
              <div className="relative aspect-video overflow-hidden bg-[#111]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                <span className="absolute left-4 top-4 border border-[#dfff00]/40 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dfff00]">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-white">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-[#dfff00] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-1 text-xs font-medium text-gray-400"
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
                      className="flex items-center gap-2 bg-[#dfff00] px-4 py-2.5 text-sm font-bold text-black transition hover:shadow-[0_0_20px_rgba(223,255,0,0.4)]"
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
                      className="flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition hover:border-[#0066ff] hover:text-[#0066ff]"
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