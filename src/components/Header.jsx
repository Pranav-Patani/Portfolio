import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";

const Header = () => {
  const { scrollY } = useScroll();
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 4px 6px rgba(0, 0, 0, 0.1)"]
  );

  return (
    <motion.header
      style={{
        boxShadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-light-bg section-padding py-4 dark:bg-dark-bg"
    >
      <div className="container-responsive flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo />
        </motion.div>
        <ThemeToggleButton />
      </div>
    </motion.header>
  );
};

export default Header;
