'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMediaQuery } from '~/hook/media-query';
import { cn } from '~/lib/utils';

export default function ParallaxHero({ className, ...props }) {
  const imageContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ['start start', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <motion.section
      ref={imageContainer}
      style={{ scale: x }}
      className={cn('hero', className, {})}
      {...props}
    >
      {props.children}
    </motion.section>
  );
}
