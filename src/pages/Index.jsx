import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TechSkillsSection from "../components/TechSkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogsSection from "../components/BlogsSection";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-gray-100 to-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:via-[#0B1120] dark:to-slate-950">
      <Header />
      <main className="flex-grow pt-[72px]">
        <HeroSection />
        <TechSkillsSection />
        <ProjectsSection />
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
