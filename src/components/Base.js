import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const containerVariants = {
    hidden: { x: "-100vh" },
    visible: {
      x: 0,
      transition: { delay: 0.1, duration: 0.2, type: "spring", stiffness: 130 },
    },
  };

  const nextVariants = {
    hidden: { x: "100vh" },
    visible: {
      x: 0,
      transition: { delay: 0.1, duration: 0.3, type: "spring", stiffness: 130 },
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 240 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextVariants}
          initial="hidden"
          animate="visible"
          className="next"
        >
          <Link to="/toppings">
            <motion.button variants={hoverVariant} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
