'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function TransitionProvider({ children }) {
  const path = usePathname();
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0, duration: 0.4 }}
      exit={{ x: 1000, opacity: 0 }}
      key={path}
    >
      {children}
    </motion.div>
  );
}
