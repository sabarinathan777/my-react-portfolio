import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/",         label: "Home" },
  { path: "/about",    label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact",  label: "Contact" },
];

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#10101A]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight" aria-label="Home">
            <span className="bg-gradient-to-r from-pink-400 to-[#A586ED] bg-clip-text text-transparent">
              Saba
            </span>
            <span className="bg-gradient-to-r from-[#A586ED] to-blue-400 bg-clip-text text-transparent">
              ri.
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group ${
                    isActive ? "text-[#A586ED]" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-[#A586ED]/15 border border-[#A586ED]/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 z-50 md:hidden
                         bg-[#10101A]/95 backdrop-blur-xl border-l border-white/10
                         flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X size={24} className="text-gray-300" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? "bg-[#A586ED]/20 text-[#A586ED] border border-[#A586ED]/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`
                    }
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
