import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-[#dfff00]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0066ff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0066ff]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            Let's Build
            <br />
            <span className="text-[#dfff00] neon-yellow-glow">
              Something.
            </span>
          </h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:grid-cols-2"
        >
          {/* Left */}
          <div className="p-8 md:p-12">
            <p className="max-w-lg text-lg leading-8 text-gray-400">
              I'm currently looking for opportunities to start my career as a
              Frontend or MERN Stack Developer. If you have an opportunity,
              project or idea, feel free to reach out.
            </p>

            {/* Email */}
            <a
              href="mailto:ardrazz68@gmail.com"
              className="mt-8 inline-flex items-center gap-3 text-lg font-bold text-white transition duration-300 hover:text-[#dfff00]"
            >
              <Mail className="text-[#dfff00]" size={22} />
              ardrazz68@gmail.com
            </a>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition duration-300 hover:border-[#0066ff] hover:bg-[#0066ff]/10 hover:text-[#0066ff]"
>
  <span className="text-sm font-black">in</span>
</a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition duration-300 hover:border-[#dfff00] hover:bg-[#dfff00]/10 hover:text-[#dfff00]"
              >
<span className="text-sm font-black">GH</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex min-h-[300px] items-center justify-center border-t border-white/10 bg-[#0a0a0a] p-8 md:border-l md:border-t-0">
            <div className="absolute h-48 w-48 rounded-full border border-[#dfff00]/20 shadow-[0_0_80px_rgba(223,255,0,0.12)]" />

            <div className="relative text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                Have a project?
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase text-white">
                Let's Talk
              </h3>

              <a
                href="mailto:ardrazz68@gmail.com"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#dfff00] px-6 py-3 font-black text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(223,255,0,0.45)]"
              >
                Contact Me
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;