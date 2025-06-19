import React from "react";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-transparent dark:bg-transparent"
    >
      <div className="container-responsive">
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
          <motion.a
            href="https://github.com/Pranav-Patani?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-sm font-medium text-white bg-aesthetic-blue rounded-xl shadow-lg hover:bg-aesthetic-blue/85 focus:outline-none focus:ring-2 focus:ring-aesthetic-blue focus:ring-offset-2 transition-all transform hover:scale-105"
            onClick={(e) => e.currentTarget.blur()}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View More Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
