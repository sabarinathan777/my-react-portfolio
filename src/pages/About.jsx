/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaVuejs, FaJs, FaLayerGroup, FaBolt, FaWind,
  FaCodeBranch, FaReact, FaCode, FaGit
} from "react-icons/fa";

const useExperienceText = () => {
  return useMemo(() => {
    const startDate = new Date("2022-12-01");
    const now = new Date();
    const monthsDiff =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    if (years === 0) return `${months} month${months > 1 ? "s" : ""}`;
    if (months === 0) return `${years} year${years > 1 ? "s" : ""}`;
    return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  }, []);
};

const skills = [
  { name: "HTML & CSS", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Vue.js", level: 85, icon: <FaVuejs className="text-green-500" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },
  { name: "Quasar", level: 80, icon: <FaBolt className="text-indigo-500" /> },
  { name: "Vuetify", level: 75, icon: <FaLayerGroup className="text-purple-500" /> },
  { name: "Tailwind CSS", level: 70, icon: <FaWind className="text-teal-400" /> },
  { name: "React.js", level: 70, icon: <FaReact className="text-cyan-400" /> },
  { name: "TFS", level: 60, icon: <FaCodeBranch className="text-gray-400" /> },
  { name: "C#", level: 55, icon: <FaCode className="text-blue-700" /> },
  { name: "Git", level: 55, icon: <FaGit className="text-pink-500" /> },
];

const About = () => {
  const experienceText = useExperienceText();
  const proficient = skills.filter((s) => s.level >= 70);
  const familiar = skills.filter((s) => s.level < 70);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.3 }
    }),
  };

  return (
    <section id="about" className="min-h-screen px-6 py-16 bg-[#10101A] text-gray-200">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-[#A586ED]"
        >
          About Me
        </motion.h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-center sm:text-left text-gray-300 leading-relaxed"
        >
          <p>
            I’m a frontend developer with{" "}
            <span className="text-[#A586ED] font-semibold">{experienceText}</span> of
            professional experience, building responsive and high-performance
            web applications using modern tools like Vue.js, React, and Tailwind CSS.
          </p>
          <p>
            I’m passionate about clean UI, reusable components, and creating
            intuitive user experiences. I’ve worked on fast-paced projects,
            solving real-world frontend challenges with performance in mind.
          </p>
        </motion.div>

        {/* Proficient */}
        <div>
          <h3 className="text-[#A586ED] font-semibold text-lg mb-6">Proficient In</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {proficient.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                className="bg-gray-800 hover:bg-gray-700 transition rounded-xl p-4 flex flex-col items-center text-center shadow-md"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Familiar */}
        <div>
          <h3 className="text-[#A586ED] font-semibold text-lg mb-6">Familiar With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {familiar.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                className="bg-gray-800 hover:bg-gray-700 transition rounded-xl p-4 flex flex-col items-center text-center shadow-md"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


