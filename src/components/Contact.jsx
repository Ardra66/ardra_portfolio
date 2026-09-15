import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.77 1.07.77 2.16v3.2c0 .31.21.67.8.56C20.21 21.4 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Neon background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#dfff00]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0066ff]/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0066ff]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            Let's{" "}
            <span className="text-[#dfff00] neon-yellow-glow">
              Connect.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Have a project, opportunity, or idea in mind? Feel free to reach
            out. I'm always open to discussing new opportunities and creative
            projects.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md md:p-10"
          >
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dfff00]">
                Contact Details
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase text-white md:text-4xl">
                Let's build something{" "}
                <span className="text-[#0066ff] neon-blue-glow">
                  great.
                </span>
              </h3>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ardrazz68@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#dfff00]/50 hover:bg-[#dfff00]/5 hover:shadow-[0_0_25px_rgba(223,255,0,0.12)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#dfff00]/30 bg-[#dfff00]/10 text-[#dfff00] transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(223,255,0,0.35)]">
                  <Mail size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Email
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white md:text-base">
                    ardrazz68@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#dfff00]"
                />
              </a>

              {/* Phone */}
              <a
                href="tel:+918593075870"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff]/50 hover:bg-[#0066ff]/5 hover:shadow-[0_0_25px_rgba(0,102,255,0.12)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#0066ff]/30 bg-[#0066ff]/10 text-[#0066ff] transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.35)]">
                  <Phone size={22} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white md:text-base">
                    +91 85930 75870
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0066ff]"
                />
              </a>

              {/* Location */}
              <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#dfff00]/50 hover:bg-[#dfff00]/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#dfff00]/30 bg-[#dfff00]/10 text-[#dfff00] transition group-hover:scale-110">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white md:text-base">
                    Thrissur, Kerala, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Find Me Online
              </p>

              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/Ardra66"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#dfff00] hover:bg-[#dfff00] hover:text-black hover:shadow-[0_0_25px_rgba(223,255,0,0.4)]"
                >
                  <GithubIcon />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff] hover:bg-[#0066ff] hover:text-white hover:shadow-[0_0_25px_rgba(0,102,255,0.4)]"
                >
                  <LinkedinIcon />
                </a>

                {/* Gmail */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ardrazz68@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#dfff00] hover:bg-[#dfff00] hover:text-black hover:shadow-[0_0_25px_rgba(223,255,0,0.4)]"
                >
                  <Mail size={21} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-[#dfff00]/20 bg-[#0a0a0a] p-7 md:p-10"
          >
            {/* Decorative neon shapes */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#dfff00]/20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#0066ff]/20" />

            <div className="relative">
              <span className="text-7xl font-black text-[#dfff00]/10 md:text-9xl">
                01
              </span>

              <h3 className="-mt-6 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
                Open to
                <br />
                <span className="text-[#dfff00] neon-yellow-glow">
                  opportunities.
                </span>
              </h3>

              <p className="mt-6 max-w-md leading-7 text-gray-400">
                I'm currently interested in frontend development, MERN stack
                opportunities, and creative web projects where I can learn,
                contribute, and grow.
              </p>
            </div>

            <div className="relative mt-10">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ardrazz68@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#dfff00] px-6 py-3.5 font-black uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(223,255,0,0.5)]"
              >
                Send Me a Message
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
