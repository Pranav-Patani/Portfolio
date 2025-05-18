import React from "react";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg border border-light-border-color dark:border-dark-border-color overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -2, // Reduced lift
        boxShadow: "0px 8px 15px rgba(0,0,0,0.08)", // Adjusted shadow
        borderColor: "var(--aesthetic-blue)",
      }}
    >
      {/* Blurry blue light effect */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--aesthetic-blue) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            {project.title}
          </h3>
          <span className="text-xs text-aesthetic-blue bg-aesthetic-blue/10 dark:bg-aesthetic-blue/20 px-2 py-1 rounded-full font-medium">
            {project.date}
          </span>
        </div>
        <p className="text-sm text-light-text dark:text-dark-text mb-1 italic">
          {project.technologies}
        </p>
        <p className="text-light-text dark:text-dark-text mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-aesthetic-blue hover:underline"
          >
            Live Demo <ExternalLink size={16} className="ml-1" />
          </a>
          {project.githubLink && project.githubLink !== "#" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-aesthetic-blue hover:underline"
            >
              GitHub <Github size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-transparent dark:bg-transparent"
    >
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Pranav-Patani?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-white bg-aesthetic-blue rounded-lg shadow-md hover:bg-aesthetic-blue/85 focus:outline-none focus:ring-2 focus:ring-aesthetic-blue focus:ring-offset-2 transition-all"
            onClick={(e) => e.currentTarget.blur()}
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
