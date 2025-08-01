import {
  motion,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ from = 0, to, duration = 4 }) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useAnimationFrame(() => {
    setDisplay(Math.floor(count.get()));
  });

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate: (latest) => count.set(latest),
    });

    return () => controls.stop();
  }, [from, to, duration, count]);
  return <motion.span>{display}</motion.span>;
};

export default AnimatedCounter;
