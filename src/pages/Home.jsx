/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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
    <section className="bg-[#10101A] text-white min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-3xl w-full text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-gray-200">Hi, I'm </span>
          <span className="text-[#A586ED]">Sabari Nathan</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-light text-[#A586ED]">
          <span ref={typedEl} />
        </h2>

        <p className="sm:text-lg leading-relaxed max-w-xl mx-auto text-gray-300">
          I build fast, responsive, and accessible web interfaces using Vue, React, and modern tools.
          My focus is clean code and clean design.
        </p>

        <p className="sm:text-lg mt-4 max-w-2xl mx-auto text-gray-300">
          I'm a frontend developer focused on crafting responsive and interactive web experiences.
          Currently expanding my skills in React & Tailwind — learn more in the{" "}
            <Link
    to="/about"
    className="text-[#A586ED] underline hover:text-violet-300 transition"
  >
    About section
  </Link>.
        </p>

        <motion.a
          href="/document/cv.pdf"
          download="Sabari_Nathan_FrontEnd.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#A586ED] text-white px-6 py-3 rounded-md font-semibold shadow-md bg:text-[#8677aa] hover:text-white transition mt-4"
        >
          📄 Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
