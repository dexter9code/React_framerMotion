import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Order = ({ pizza, setModal }) => {
  const ShowingButton = () => {
    setTimeout(() => {
      setModal(true);
    }, 5000);
  };
  useEffect(() => {
    ShowingButton();
  }, [setModal]);

  const containerVariants = {
    hidden: { x: "-100vh" },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
        type: "spring",
        stiffness: 130,
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariant}>
        <p>You ordered a {pizza.base} pizza with:</p>
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
