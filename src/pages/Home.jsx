import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Frontend Developer", "Vue & React Specialist", "UI-Centric Coder"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen bg-background text-text-base flex items-center justify-center px-6">
      <motion.div
        className="max-w-3xl w-full text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Sabari Nathan
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-light text-primary">
          <span ref={typedEl} />
        </h2>

        <p className="text-text-dim text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          I build fast, responsive, and accessible web interfaces using Vue, React, and modern tools. My focus is clean code and clean design.
        </p>

        <p className="text-text-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          I'm a frontend developer focused on crafting responsive and interactive web experiences.
          Currently expanding my skills in React & Tailwind — learn more in the{" "}
          <a href="#about" className="text-primary underline hover:text-primary-hover transition">
            About section
          </a>.
        </p>

        <motion.a
          href="/Documents/cv.pdf"
          download="Sabari_Nathan_CV.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary mt-4"
        >
          📄 Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
