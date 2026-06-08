import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";

const professionalProjects = [
  {
    title: "Loan Origination System (LOS)",
    date: "2023 – Present",
    category: "Professional",
    description:
      "Worked on a complex financial application for managing loans, including LTV, CLTV, and other key lending features. Built with Vue 3 and Quasar, with a focus on high performance, scalable state management, and a robust UI for loan officers.",
    tech: ["Vue 3", "Composition API", "Quasar", "Vuex", "Pinia", "Axios", "JavaScript"],
    role: "Frontend Developer",
    confidential: true,
  },
  {
    title: "Inspection Portal",
    date: "Jan 2025 – Apr 2025",
    category: "Professional",
    description:
      "Developed a responsive Inspection Portal using Vue 3 and Vuetify. The portal allows users to perform detailed inspections with an intuitive UI optimised for both desktop and mobile devices.",
    tech: ["Vue 3", "Composition API", "Vuetify", "Vue Router", "Pinia"],
    role: "Frontend Developer",
    confidential: true,
  },
  {
    title: "TCC Platforms",
    date: "Jul 2025 – Feb 2026",
    category: "Professional",
    description:
      "Built a Vue 3 Admin Panel with Tailwind CSS; implemented slug-based dynamic routing for a community site and a static corporate website with reusable components and clean architecture.",
    tech: ["Vue 3", "Composition API", "Tailwind CSS", "Vue Router", "Pinia"],
    role: "Frontend Developer",
    confidential: true,
  },
];

const personalProjects = [
  {
    title: "YouTube Clone",
    date: "Jul 2025",
    category: "Personal",
    description:
      "Built a responsive YouTube UI clone as my first React project using Vite. Includes mobile-first design, reusable components, and clean deployment with GitHub and Vercel.",
    tech: ["React", "Vite", "CSS", "Vercel"],
    role: "Personal Project",
    links: {
      live: "https://youtube-clone-neon-theta.vercel.app",
      code: "https://github.com/sabarinathan777/youtube-clone",
    },
  },
  {
    title: "Smart Study Scheduler",
    date: "Aug 2025",
    category: "Personal",
    description:
      "Responsive study scheduling app with CRUD via localStorage and useReducer, multi-delete, advanced filtering, and integrated dark/light mode.",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],
    role: "Personal Project",
    links: {
      live: "https://smart-study-scheduler-nine.vercel.app",
      code: "https://github.com/sabarinathan777/smart-study-scheduler",
    },
  },
];

const categoryColors = {
  Professional: {
    badge: "bg-violet-500/20 border-violet-500/30 text-violet-300",
    tag:   "bg-violet-500/10 text-violet-300 border-violet-500/20",
    glow:  "hover:shadow-violet-500/10",
  },
  Personal: {
    badge: "bg-teal-500/20 border-teal-500/30 text-teal-300",
    tag:   "bg-teal-500/10 text-teal-300 border-teal-500/20",
    glow:  "hover:shadow-teal-500/10",
  },
};

const ProjectCard = ({ project, index }) => {
  const color = categoryColors[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`glass-card rounded-2xl p-6 flex flex-col gap-4
                  hover:border-white/15 hover:shadow-xl ${color.glow}
                  transition-all duration-300 group`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white group-hover:text-[#A586ED] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500">{project.date}</p>
        </div>
        <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${color.badge}`}>
          {project.category}
        </span>
      </div>

      {/* Role */}
      <p className="text-xs text-gray-500 italic">{project.role}</p>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed flex-1">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className={`text-xs px-2.5 py-1 rounded-md border ${color.tag}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div className="pt-1 border-t border-white/5">
        {project.confidential ? (
          <span className="flex items-center gap-1.5 text-xs text-gray-600">
            <FaLock size={11} /> Confidential — internal product
          </span>
        ) : (
          <div className="flex items-center gap-4">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#A586ED] hover:text-violet-300 transition-colors"
              >
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            )}
            {project.links?.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={13} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SectionHeading = ({ title, color = "text-[#A586ED]", lineColor = "bg-[#A586ED]/20" }) => (
  <div className="flex items-center gap-4 mb-8">
    <h2 className={`text-2xl font-bold ${color} shrink-0`}>{title}</h2>
    <div className={`flex-1 h-px ${lineColor}`} />
  </div>
);

const Projects = () => (
  <section id="projects" className="bg-[#10101A] text-white py-20 px-6">
    <div className="max-w-5xl mx-auto">

      {/* Page header */}
      <motion.div
        className="text-center mb-16 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#A586ED]">Projects</h1>
        <p className="text-sm text-gray-500 tracking-widest uppercase">
          Real-world & personal apps I've built
        </p>
      </motion.div>

      {/* Professional */}
      <div className="mb-16">
        <SectionHeading title="Professional" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {professionalProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

      {/* Personal */}
      <div>
        <SectionHeading
          title="Personal & Learning"
          color="text-teal-400"
          lineColor="bg-teal-400/20"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personalProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Projects;
