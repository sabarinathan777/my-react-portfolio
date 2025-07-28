import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="relative bg-gradient-to-br from-slate-950 via-black to-gray-900 text-slate-400 py-8 px-6 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Tagline */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-slate-200">
              Sabari Nathan
            </h4>
            <p className="text-sm">Passionate about clean code & UI perfection.</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-slate-200 transition">Home</Link>
            <Link to="/about" className="hover:text-slate-200 transition">About</Link>
            <Link to="/projects" className="hover:text-slate-200 transition">Projects</Link>
            <Link to="/contact" className="hover:text-slate-200 transition">Contact</Link>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Sabari Nathan. All rights reserved.
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default Footer;
