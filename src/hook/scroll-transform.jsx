import { useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const useScrollTransform = ({
  inputRange = [0, 1],
  outputRange,
  offset = ['start end', 'end end'],
}) => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset,
  });
  const motionValue = useTransform(scrollYProgress, inputRange, outputRange);
  return { target, motionValue };
};

export default useScrollTransform;
