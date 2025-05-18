import React from "react";
import { techSkills } from "../data/portfolioData";
import { motion } from "framer-motion";

const SkillPill = ({ name, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-aesthetic-blue/10 dark:bg-aesthetic-blue/20 text-aesthetic-blue dark:text-sky-300 px-4 py-2 rounded-full text-sm font-medium cursor-pointer border border-aesthetic-blue/30"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 15px rgba(14, 165, 233, 0.4)",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {name}
    </motion.a>
  );
};

const SkillCategory = ({ title, skills, delay }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <SkillPill name={skill.name} link={skill.link} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TechSkillsSection = () => {
  return (
    <section
      id="skills"
      className="section-padding bg-white/10 dark:bg-transparent"
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100"
        >
          Technical Skills
        </motion.h2>
        <SkillCategory
          title="Languages"
          skills={techSkills.languages}
          delay={0.2}
        />
        <SkillCategory
          title="Developer Tools"
          skills={techSkills.developerTools}
          delay={0.4}
        />
        <SkillCategory
          title="Technologies & Libraries"
          skills={techSkills.technologiesLibraries}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default TechSkillsSection;
