import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-white"
        >
          ARDRA<span className="text-[#f15a29]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-white transition hover:text-[#8B5CF6]"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-white transition hover:text-[#8B5CF6]"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-white transition hover:text-[#8B5CF6]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-white transition hover:text-[#8B5CF6]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-white transition hover:text-[#8B5CF6]"
          >
            Contact
          </a>
<a
  href="#education"
  className="text-sm font-medium text-white transition hover:text-[#8B5CF6]"
>
  Education
</a>

<a
  href="#experience"
  className="text-sm font-medium text-white transition hover:text-[#8B5CF6]"
>
  Experience
</a>

        </nav>

        {/* Contact button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 md:block"
        >
          Let's Talk
        </a>

        {/* Mobile button */}
        <button
          className="rounded-full bg-white/10 p-3 text-white backdrop-blur-md md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;