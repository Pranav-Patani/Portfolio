import React from "react";
import { blogs } from "../data/portfolioData";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const BlogCard = ({ blog, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

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
      {/* Blurry Blue Overlay */}
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

      {/* Blog Image Banner */}
      <a
        href={blog.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-96 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
          {blog.image && (
            <>
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: imageLoaded ? "blur(0px)" : "blur(10px)",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                animate={{ opacity: isHovered ? 0.8 : 0.4 }}
                transition={{ duration: 0.3 }}
              />

              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </>
          )}

          {!blog.image && (
            <div className="w-full h-full bg-gradient-to-br from-aesthetic-blue/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-4xl font-bold text-aesthetic-blue opacity-50">
                {blog.title.charAt(0)}
              </div>
            </div>
          )}
        </div>
      </a>

      {/* Blog Content */}
      <div className="relative z-10 p-6 cursor-default">
        <motion.h3
          className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-aesthetic-blue transition-colors duration-300 mb-2"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {blog.title}
        </motion.h3>
        <p className="text-light-text dark:text-dark-text mb-4 text-sm leading-relaxed">
          {blog.description}...
        </p>
        <motion.a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-aesthetic-blue hover:text-aesthetic-blue/80 font-medium transition-colors"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          Read More <ExternalLink size={14} className="ml-1" />
        </motion.a>
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
