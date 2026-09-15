import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Experience", "Projects"];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-white"
        >
          ARDRA<span className="neon-yellow">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {link}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#dfff00] shadow-[0_0_10px_#dfff00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="flex items-center gap-2 border border-[#dfff00] px-5 py-2.5 text-sm font-bold text-[#dfff00] transition duration-300 hover:bg-[#dfff00] hover:text-black hover:shadow-[0_0_25px_rgba(223,255,0,0.45)]"
          >
            Contact
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#dfff00] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#050505] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-300 transition hover:text-[#dfff00]"
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex w-fit items-center gap-2 bg-[#dfff00] px-5 py-3 font-bold text-black"
            >
              Contact
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;