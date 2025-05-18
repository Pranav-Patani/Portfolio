import React from "react";
import { personalInfo } from "../data/portfolioData";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding bg-transparent dark:bg-transparent relative overflow-hidden pt-24"
    >
      <div className="container-responsive text-center z-10">
        {personalInfo.profilePictureUrl && (
          <motion.div
            className="mb-8"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <img
              src={personalInfo.profilePictureUrl}
              alt={personalInfo.name}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-aesthetic-blue shadow-lg"
            />
          </motion.div>
        )}
        <p className="mb-0.5 text-md md:text-2xl">Hello! I am</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {personalInfo.name.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="inline-block dark:text-slate-100 text-slate-800"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: personalInfo.name.length * 0.1 + 0.3,
            duration: 0.5,
          }}
          className="text-xl md:text-2xl text-aesthetic-blue mb-8"
        >
          Frontend Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: personalInfo.name.length * 0.1 + 0.5,
            duration: 0.5,
          }}
          className="max-w-2xl mx-auto text-md md:text-lg text-light-text dark:text-dark-text mb-10"
        >
          {personalInfo.shortBio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: personalInfo.name.length * 0.1 + 0.7,
            duration: 0.5,
          }}
          className="flex justify-center space-x-4 md:space-x-6"
        >
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text dark:text-dark-text hover:text-aesthetic-blue transition-colors"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text dark:text-dark-text hover:text-aesthetic-blue transition-colors"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            href={`mailto:${personalInfo.email}`}
            className="text-light-text dark:text-dark-text hover:text-aesthetic-blue transition-colors"
          >
            <Mail size={28} />
          </motion.a>
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            href={`tel:${personalInfo.phone}`}
            className="text-light-text dark:text-dark-text hover:text-aesthetic-blue transition-colors"
          >
            <Phone size={28} />
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className="absolute w-32 h-32 bg-sky-300/30 dark:bg-sky-700/30 rounded-full filter blur-xl opacity-65"
        animate={{
          x: [
            0, 50, 100, 150, 200, 150, 100, 50, 0, -50, -100, -150, -200, -150,
            -100, -50, 0,
          ],
          y: [
            200, 150, 100, 50, 0, -50, -100, -150, -200, -150, -100, -50, 0, 50,
            100, 150, 200,
          ],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-40 h-40 bg-blue-300/30 dark:bg-blue-700/30 rounded-full filter blur-2xl opacity-60"
        animate={{
          x: [
            0, -50, -100, -150, -200, -150, -100, -50, 0, 50, 100, 150, 200,
            150, 100, 50, 0,
          ],
          y: [
            200, 150, 100, 50, 0, -50, -100, -150, -200, -150, -100, -50, 0, 50,
            100, 150, 200,
          ],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
      />{" "}
    </section>
  );
};

export default HeroSection;
