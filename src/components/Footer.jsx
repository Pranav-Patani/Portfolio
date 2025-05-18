import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-8 section-padding !pb-8 !pt-12 border-t border-light-border-color dark:border-dark-border-color">
      <div className="container text-center">
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
        <p className="text-xs mt-2 opacity-70">
          Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
