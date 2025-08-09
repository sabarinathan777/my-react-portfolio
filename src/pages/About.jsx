/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaVuejs, FaJs, FaLayerGroup, FaBolt, FaWind,
  FaCodeBranch, FaReact, FaCode,
  FaGit
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
  { name: "HTML & CSS", level: 90, barColor: "bg-blue-500", icon: <FaHtml5 /> },
  { name: "Vue.js", level: 85, barColor: "bg-green-500", icon: <FaVuejs /> },
  { name: "JavaScript", level: 80, barColor: "bg-yellow-400", icon: <FaJs /> },
  { name: "Quasar", level: 80, barColor: "bg-indigo-500", icon: <FaBolt /> },
  { name: "Vuetify", level: 75, barColor: "bg-purple-500", icon: <FaLayerGroup /> },
  { name: "Tailwind CSS", level: 70, barColor: "bg-teal-400", icon: <FaWind /> },
  { name: "React.js", level: 70, barColor: "bg-cyan-500", icon: <FaReact /> },
  { name: "TFS", level: 60, barColor: "bg-gray-500", icon: <FaCodeBranch /> },
  { name: "C#", level: 55, barColor: "bg-blue-800", icon: <FaCode /> },
  { name: "Git", level: 55, barColor: "bg-pink-500", icon: <FaGit/> },
];

const About = () => {
  const experienceText = useExperienceText();
  const proficient = skills.filter((s) => s.level >= 70);
  const familiar = skills.filter((s) => s.level < 70);

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 bg-[#10101A] text-gray-200"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#A586ED] mb-4">
          Who Am I?
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4 text-sm sm:text-base text-center sm:text-left text-gray-300">
          <p>
            I’m a frontend developer with{" "}
            <strong className="text-[#A586ED]">{experienceText}</strong> of
            professional experience. I specialize in building responsive,
            high-performance web interfaces using modern tools like Vue.js,
            React, and Tailwind CSS.
          </p>
          <p>
            I'm passionate about clean UI, reusability, and building
            user-friendly experiences. I’ve contributed to several projects in
            fast-paced environments and love solving real-world frontend
            challenges.
          </p>
        </div>

        <div>
          <h3 className="text-[#A586ED] font-semibold text-base sm:text-lg mb-3">
            Proficient In
          </h3>
          {proficient.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col gap-1 mb-4"
            >
              <p className="font-medium flex items-center gap-2 text-sm sm:text-base text-gray-200">
                <span className="text-xl">{skill.icon}</span>
                {skill.name}
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`${skill.barColor} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}

          <h3 className="text-[#A586ED] font-semibold text-base sm:text-lg mt-6 mb-3">
            Familiar With
          </h3>
          {familiar.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col gap-1 mb-4"
            >
              <p className="font-medium flex items-center gap-2 text-sm sm:text-base text-gray-200">
                <span className="text-xl">{skill.icon}</span>
                {skill.name}
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`${skill.barColor} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
