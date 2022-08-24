import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ modal, setModal }) => {
  const blackVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const orderButtonVariant = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "200px",
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 120 },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {modal && (
        <motion.div
          variants={blackVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          //   transition={{type:'spring',}}
          className="backScreen"
        >
          <motion.div variants={orderButtonVariant} className="modal">
            <p>Order One More Pizza ?</p>
            <Link to="/">
              <button>Order Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
