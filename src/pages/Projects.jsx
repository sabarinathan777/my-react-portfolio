import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const projectData = [
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-background text-text-base py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">
          Projects Timeline
        </h2>
        <p className="text-text-muted mt-2 text-sm sm:text-base">
          A snapshot of real-world apps I’ve contributed to
        </p>
      </div>

      <VerticalTimeline lineColor="#6366f1">
        {projectData.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            date={project.date}
            iconStyle={{ background: "#6366f1", color: "#fff" }}
            icon={project.icon}
            contentStyle={{
              background: "#1e293b",
              color: "#e2e8f0",
              boxShadow: "0 0 0 1px #334155",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
          >
            <motion.h3
              className="text-xl font-semibold text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-text-muted mt-1 italic">
              {project.role}
            </p>
            <p className="mt-2 text-text-dim">{project.description}</p>
            <p className="mt-2 text-sm text-dim font-mono">
              Tech: {project.tech}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Projects;
