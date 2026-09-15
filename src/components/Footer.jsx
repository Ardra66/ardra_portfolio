import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-10 md:px-10 lg:px-16">
      {/* Neon Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-[#dfff00]/10 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo / Name */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-black uppercase tracking-wider text-white"
        >
          ARDRA<span className="text-[#dfff00]">.</span>
        </motion.a>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ardra Suresh. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Ardra66"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#dfff00] hover:bg-[#dfff00]/10 hover:text-[#dfff00]"
          >
           <span className="text-xs font-black">GH</span>
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff] hover:bg-[#0066ff]/10 hover:text-[#0066ff]"
          >
            <span className="text-xs font-black">in</span>
          </a>

          <a
            href="mailto:ardrazz68@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#dfff00] hover:bg-[#dfff00]/10 hover:text-[#dfff00]"
          >
            <Mail size={18} />
          </a>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#dfff00] text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(223,255,0,0.45)]"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;