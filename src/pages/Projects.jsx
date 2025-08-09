import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const professionalProjects = [
  {
    title: "Inspection Portal",
    date: "Jan 2025 - Apr 2025",
    icon: <FaLaptopCode />,
    description:
      "Developed a responsive Inspection Portal using Vue 3 and Vuetify. The portal allows users to perform detailed inspections with an intuitive UI optimized for desktops and mobile devices.",
    tech: "Vue 3, Vuetify, Vue Router, Pinia",
    role: "Frontend Developer",
  },
  {
    title: "Bank Loan Management System",
    date: "2023 - Present",
    icon: <FaLaptopCode />,
    description:
      "Worked on a complex banking application for managing loans, including LTV, CLTV, and other key financial features. Built with Vue 3 and Quasar, ensuring high performance and a robust UI.",
    tech: "Vue 3, Quasar, Vuex, Axios",
    role: "Frontend Developer",
  },
];

const personalProjects = [
  {
    title: "YouTube Clone (React)",
    date: "Jul 2025",
    icon: <FaLaptopCode />,
    description:
      "Built a responsive YouTube UI clone as my first React project using Vite. This project demonstrates my ability to quickly adapt to new technologies beyond Vue. Includes mobile-first design, reusable components, and clean deployment with GitHub and Vercel.",
    tech: "React, Vite, CSS, GitHub, Vercel",
    role: "Personal Project",
    links: {
      live: "https://youtube-clone-neon-theta.vercel.app",
      code: "https://github.com/sabarinathan777/youtube-clone",
    },
  },
   {
    title: "Smart Study Scheduler (React)",
    date: "Aug 2025",
    icon: <FaLaptopCode />,
    description:
  "Built a responsive study scheduling app with React and Tailwind CSS. Implemented CRUD operations using local storage with useReducer, replaced single-task deletion with multi-delete for efficiency, added advanced filtering, and integrated dark/light mode for an improved user experience.",
    tech: "React, Vite, Tailwind CSS, GitHub, Vercel",
    role: "Personal Project",
    links: {
      live: "https://smart-study-scheduler-nine.vercel.app",
      code: "https://github.com/sabarinathan777/smart-study-scheduler",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#10101A] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#A586ED]">
          Projects Timeline
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#B0B0C3]">
          A snapshot of real-world and personal apps I’ve worked on
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold text-left text-[#A586ED] mb-6">
          Professional Projects
        </h3>
        <VerticalTimeline lineColor="#6366f1">
          {professionalProjects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              date={project.date}
              iconStyle={{ background: "#6366f1", color: "#fff" }}
              icon={project.icon}
              contentStyle={{
                background: "#1E1E2A",
                color: "#FFFFFF",
                boxShadow: "0 0 0 1px #2C2C3A",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1E1E2A" }}
            >
              <motion.h3
                className="text-xl font-semibold text-[#A586ED]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-sm text-[#B0B0C3] mt-1 italic">{project.role}</p>
              <p className="mt-2 text-[#D1D1E0]">{project.description}</p>
              <p className="mt-2 text-sm font-mono text-gray-400">
                Tech: {project.tech}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-left text-teal-400 mb-6">
          Personal & Learning Projects
        </h3>
        <VerticalTimeline lineColor="#14b8a6">
          {personalProjects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              date={project.date}
              iconStyle={{ background: "#14b8a6", color: "#fff" }}
              icon={project.icon}
              contentStyle={{
                background: "#1A1A28",
                color: "#FFFFFF",
                boxShadow: "0 0 0 1px #334155",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1A1A28" }}
            >
              <motion.h3
                className="text-xl font-semibold text-teal-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-sm text-[#B0B0C3] mt-1 italic">{project.role}</p>
              <p className="mt-2 text-[#D1D1E0]">{project.description}</p>
              <p className="mt-2 text-sm font-mono text-gray-400">
                Tech: {project.tech}
              </p>
              {project.links && (
                <div className="mt-3 space-x-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 underline hover:text-blue-300"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 underline hover:text-blue-300"
                  >
                    📁 GitHub Code
                  </a>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Projects;
