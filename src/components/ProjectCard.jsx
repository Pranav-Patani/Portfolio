import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const { theme } = useTheme();

  const projectImage =
    (theme === "dark" && project.imageDark) ||
    project.imageLight ||
    project.image ||
    "/fallback-image.png"; // optional fallback

  return (
    <motion.div
      className="bg-light-card dark:bg-dark-card rounded-xl shadow-lg overflow-hidden relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
        borderColor: "var(--aesthetic-blue)",
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      {/* Blurry blue light effect */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, var(--aesthetic-blue) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Image Section with Parallax Effect */}
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <div className="relative max-h-96 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
          {projectImage && (
            <>
              <motion.img
                src={projectImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: imageLoaded ? "blur(0px)" : "blur(10px)",
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                animate={{
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated Tech Stack Badges on Image */}
              <motion.div
                className="absolute top-4 left-4 flex flex-wrap gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.techStack.slice(0, 3).map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="text-xs bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full font-medium border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + techIndex * 0.05,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Quick Access Links Overlay */}
              <motion.div
                className="absolute bottom-4 right-4 flex space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-aesthetic-blue/90 backdrop-blur-sm text-white rounded-full hover:bg-aesthetic-blue transition-colors shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </motion.a>
                {project.githubLink && project.githubLink !== "#" && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/90 backdrop-blur-sm text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </motion.a>
                )}
              </motion.div>

              {/* Loading shimmer effect */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </>
          )}

          {/* Fallback gradient when no image */}
          {!projectImage && (
            <div className="w-full h-full bg-gradient-to-br from-aesthetic-blue/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-4xl font-bold text-aesthetic-blue opacity-50">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
        </div>
      </a>

      {/* Content Section */}
      <div className="relative z-10 p-6 cursor-default">
        <div className="flex justify-between items-start mb-3">
          <motion.h3
            className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-aesthetic-blue transition-colors duration-300"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <span className="text-xs text-aesthetic-blue bg-aesthetic-blue/10 dark:bg-aesthetic-blue/20 px-3 py-1 rounded-full font-medium whitespace-nowrap ml-4">
            {project.date}
          </span>
        </div>

        <p className="text-sm text-aesthetic-blue/80 dark:text-aesthetic-blue/90 mb-4 italic font-medium">
          {project.technologies}
        </p>

        <div className="space-y-3 mb-4">
          {project.description.map((desc, id) => (
            <motion.p
              className="text-light-text dark:text-dark-text text-sm leading-relaxed"
              key={id}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {desc}
            </motion.p>
          ))}
        </div>

        {/* Remaining Tech Stack */}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="flex space-x-6 pt-2">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-aesthetic-blue hover:text-aesthetic-blue/80 font-medium transition-colors"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            Live Demo <ExternalLink size={14} className="ml-1" />
          </motion.a>
          {project.githubLink && project.githubLink !== "#" && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium transition-colors"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              GitHub <Github size={14} className="ml-1" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Click ripple effect */}
      <motion.div
        className="absolute inset-0 bg-aesthetic-blue/5 opacity-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
