import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-black/70 px-5 py-3 shadow-2xl backdrop-blur-xl">

        <div className="flex items-center justify-between">

          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            Ardra<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 transition duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">

            <a
              href="https://github.com/Ardra66"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2 text-gray-400 transition duration-300 hover:border-violet-400/50 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.65.8.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </a>

            <a
              href="#contact"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2 text-gray-400 transition duration-300 hover:border-violet-400/50 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 1 0 5.25 7.06 2.03 2.03 0 0 0 5.25 3ZM20.44 13.42c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38l.33-6.58Z" />
              </svg>
            </a>

          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:border-violet-400/50 md:hidden"
          >
            {isOpen ? (
              <span className="text-xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>

        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 border-t border-white/10 pt-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </motion.nav>
  );
}

export default Navbar;