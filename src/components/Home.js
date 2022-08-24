import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loder from "./Loder";

const Home = () => {
  const containerVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 2 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const hoverVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { delay: 0.1, duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <motion.div
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={hoverVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loder />
    </motion.div>
  );
};

export default Home;
