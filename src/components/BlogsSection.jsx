import React from "react";
import { blogs } from "../data/portfolioData";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const BlogCard = ({ blog, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg  overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -2,
        boxShadow: "0px 8px 15px rgba(0,0,0,0.08)",
        borderColor: "var(--aesthetic-blue)",
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--aesthetic-blue) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
          {blog.title}
        </h3>
        <p className="text-light-text dark:text-dark-text mb-4 text-sm leading-relaxed">
          {blog.description}...
        </p>
        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-aesthetic-blue hover:underline"
        >
          Read More <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

const BlogsSection = () => {
  return (
    <section
      id="blogs"
      className="section-padding bg-white/10 dark:bg-transparent"
    >
      <div className="container-responsive">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100"
        >
          Blogs
        </motion.h2>
        <div className="grid grid-cols-1 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://pranavpatani.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-white bg-aesthetic-blue rounded-lg shadow-md hover:bg-aesthetic-blue/90 focus:outline-none focus:ring-2 focus:ring-aesthetic-blue focus:ring-offset-2 transition-all"
            onClick={(e) => e.currentTarget.blur()} // Blur the button on click
          >
            View More Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
