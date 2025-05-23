import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-8 section-padding !pb-8 !pt-12 border-t border-light-border-color dark:border-dark-border-color">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo />
        </motion.div>
      </div>

      <div className="container-responsive text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-aesthetic-blue transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-aesthetic-blue transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="hover:text-aesthetic-blue transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            aria-label="Phone"
            className="hover:text-aesthetic-blue transition-colors"
          >
            <Phone size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-70">Built with ☕ and 🧠</p>
      </div>
    </footer>
  );
};

export default Footer;
