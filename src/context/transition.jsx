'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Motion from '~/components/motion';

export default function TransitionProvider({ children }) {
  const path = usePathname();
  const containerRef = useRef(null);
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        ref={containerRef}
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.4 }}
        exit={{ x: 1000, opacity: 0 }}
        key={path}
      >
        {children}
        <Motion />
      </motion.div>
    </AnimatePresence>
  );
}
