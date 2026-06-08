import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5, FaVuejs, FaJs, FaLayerGroup, FaBolt, FaWind,
  FaCodeBranch, FaReact, FaCode, FaGit,
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
  { name: "HTML & CSS",   level: 90, icon: <FaHtml5  />, color: "from-orange-500 to-red-500" },
  { name: "Vue.js",       level: 85, icon: <FaVuejs  />, color: "from-green-500 to-emerald-400" },
  { name: "JavaScript",   level: 80, icon: <FaJs     />, color: "from-yellow-400 to-amber-400" },
  { name: "Quasar",       level: 80, icon: <FaBolt   />, color: "from-indigo-500 to-violet-500" },
  { name: "Vuetify",      level: 75, icon: <FaLayerGroup />, color: "from-purple-500 to-[#A586ED]" },
  { name: "Tailwind CSS", level: 70, icon: <FaWind   />, color: "from-teal-400 to-cyan-400" },
  { name: "React.js",     level: 50, icon: <FaReact  />, color: "from-cyan-400 to-blue-400" },
  { name: "TFS",          level: 60, icon: <FaCodeBranch />, color: "from-gray-400 to-gray-500" },
  { name: "C#",           level: 55, icon: <FaCode   />, color: "from-blue-600 to-blue-800" },
  { name: "Git",          level: 55, icon: <FaGit    />, color: "from-pink-500 to-orange-500" },
];

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium text-gray-200">
          <span className="text-base">{skill.icon}</span>
          {skill.name}
          {skill.name === "React.js" && (
            <span className="text-xs text-gray-500 italic">(Personal Projects)</span>
          )}
        </span>
        <span className="text-gray-500 text-xs">{skill.level}%</span>
      </div>
      {/* Track */}
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: index * 0.06 + 0.15, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  const experienceText = useExperienceText();
  const proficient = skills.filter((s) => s.level >= 70);
  const familiar   = skills.filter((s) => s.level < 70);

  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-[#10101A] text-gray-200">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#A586ED]">About Me</h1>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Who I am & what I know</p>
        </motion.div>

        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-7 space-y-4 text-gray-300 leading-relaxed"
        >
          <p>
            I'm a frontend developer with{" "}
            <span className="text-[#A586ED] font-semibold">{experienceText}</span>{" "}
            of professional experience, specialising in{" "}
            <span className="text-[#A586ED] font-semibold">Vue 3</span> and the{" "}
            <span className="text-[#A586ED] font-semibold">Composition API</span>.
            I've spent my career building enterprise-grade financial applications,
            including a production{" "}
            <span className="text-[#A586ED] font-semibold">Loan Origination System (LOS)</span>{" "}
            supporting mortgage and lending workflows.
          </p>
          <p>
            Outside of work, I'm actively expanding into React — the projects on this
            portfolio reflect that learning journey. I'm passionate about clean UI,
            reusable components, and intuitive user experiences built with performance in mind.
          </p>
        </motion.div>

        {/* Proficient */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-[#A586ED]">Proficient In</h3>
            <div className="flex-1 h-px bg-[#A586ED]/20" />
          </div>
          <div className="space-y-4">
            {proficient.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Familiar */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-teal-400">Familiar With</h3>
            <div className="flex-1 h-px bg-teal-400/20" />
          </div>
          <div className="space-y-4">
            {familiar.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
