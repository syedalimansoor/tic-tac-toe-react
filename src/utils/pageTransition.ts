import { MotionProps } from "framer-motion";

const pageTransition: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, delay: 0.2 },
};

export default pageTransition;
