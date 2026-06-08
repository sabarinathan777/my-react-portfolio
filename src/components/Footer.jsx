import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/",         label: "Home" },
  { path: "/about",    label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact",  label: "Contact" },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#10101A] text-[#B0B0C3] py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Tagline */}
          <div className="text-center sm:text-left">
            <h4 className="text-base font-semibold text-white">Sabari Nathan</h4>
            <p className="text-xs mt-1 text-gray-600">Vue 3 Specialist · Expanding into React</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm" aria-label="Footer navigation">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-gray-500 hover:text-[#A586ED] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://github.com/sabarinathan777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg bg-white/5 border border-white/[0.08] text-gray-500 hover:text-white hover:border-white/20 transition-all"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabari-nathan-31488b250"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg bg-white/5 border border-white/[0.08] text-gray-500 hover:text-[#A586ED] hover:border-[#A586ED]/30 transition-all"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-700">
          © {new Date().getFullYear()} Sabari Nathan. All rights reserved.
        </div>
      </footer>

      {/* Scroll-to-top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 bg-[#A586ED] hover:bg-[#9270e0] text-white
                       p-3 rounded-full shadow-lg shadow-[#A586ED]/25 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
