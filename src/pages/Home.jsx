import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Vue 3 Developer", "Expanding into React", "UI-Centric Coder"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const downloadFile = () => {
    fetch("/document/cv.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Sabari_Nathan_FrontEnd.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <section className="bg-[#10101A] text-white min-h-screen flex items-center px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

        {/* ── Left: Text Content ── */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                       bg-[#A586ED]/15 border border-[#A586ED]/30 text-[#A586ED]"
          >
            <span className="w-2 h-2 rounded-full bg-[#A586ED] animate-pulse" />
            Open to opportunities
          </motion.span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-gray-200">Hi, I'm </span>
            <span className="bg-gradient-to-r from-[#A586ED] to-pink-400 bg-clip-text text-transparent">
              Sabari Nathan
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-light text-[#A586ED] h-8">
            <span ref={typedEl} />
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-lg">
            Vue 3 specialist with 3.5+ years of professional experience building
            enterprise financial applications. This portfolio showcases my React
            learning journey through personal projects.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-lg">
            Explore my Vue 3 work —{" "}
            <Link to="/about" className="text-[#A586ED] hover:underline transition">
              see my full stack →
            </Link>
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              onClick={downloadFile}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-[#A586ED] hover:bg-[#9270e0]
                         text-white px-6 py-3 rounded-xl font-semibold shadow-lg
                         shadow-[#A586ED]/25 transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </motion.button>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sabarinathan777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10
                           text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sabari-nathan-31488b250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10
                           text-gray-400 hover:text-[#A586ED] hover:border-[#A586ED]/40 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Decorative Glow Avatar ── */}
        <motion.div
          className="hidden md:flex items-center justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          {/* Outer glow ring */}
          <div className="absolute w-80 h-80 rounded-full bg-[#A586ED]/20 blur-3xl animate-pulse" />
          <div className="absolute w-64 h-64 rounded-full bg-indigo-500/15 blur-2xl" />

          {/* Avatar circle */}
          <div className="relative w-64 h-64 rounded-full border border-[#A586ED]/30
                          bg-gradient-to-br from-[#A586ED]/20 to-indigo-600/20
                          flex items-center justify-center shadow-2xl">
            <div className="text-center space-y-1 select-none">
              <div className="text-6xl font-black bg-gradient-to-br from-[#A586ED] to-pink-400
                              bg-clip-text text-transparent">
                SN
              </div>
              <p className="text-xs text-gray-500 tracking-widest uppercase">Frontend Dev</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
