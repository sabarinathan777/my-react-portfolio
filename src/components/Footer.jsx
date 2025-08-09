/* eslint-disable no-unused-vars */
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
      <footer className="bg-[#10101A] text-[#B0B0C3] py-10 px-6 border-t border-[#1f1f2d]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Tagline */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white">Sabari Nathan</h4>
            <p className="text-sm">Passionate about clean code & UI perfection.</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-[#A586ED] transition">Home</Link>
            <Link to="/about" className="hover:text-[#A586ED] transition">About</Link>
            <Link to="/projects" className="hover:text-[#A586ED] transition">Projects</Link>
            <Link to="/contact" className="hover:text-[#A586ED] transition">Contact</Link>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sabarinathan777"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A586ED] transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabari-nathan-31488b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A586ED] transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#666681]">
          © {new Date().getFullYear()} Sabari Nathan. All rights reserved.
        </div>
      </footer>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#A586ED] hover:bg-[#9270e0] text-white p-3 rounded-full shadow-lg transition"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default Footer;
