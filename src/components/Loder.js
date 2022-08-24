import { motion, useCycle } from "framer-motion";

const loderVariants = {
  visible1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.3, ease: "easeInOut" },
    },
  },
  visible2: {
    x: 0,
    y: [0, -30],
    transition: {
      y: { yoyo: Infinity, duration: 0.3, ease: "easeOut" },
    },
  },
};
const Loder = () => {
  const [singleAnimatinon, doubleAnimation] = useCycle("visible1", "visible2");
  return (
    <>
      <motion.div
        variants={loderVariants}
        animate={singleAnimatinon}
        className="loder-wrapper"
      ></motion.div>
      <div onClick={() => doubleAnimation()}>Change the Animation</div>
    </>
  );
};

export default Loder;
