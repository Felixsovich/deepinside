import React from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  setLoading: (loading: boolean) => void;
}

const Preloader: React.FC<PreloaderProps> = ({ setLoading }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white text-black"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.2 }}
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="overflow-hidden relative">
        <motion.h1
          className="text-6xl md:text-9xl font-bold tracking-tighter"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          ELIZAVETA
        </motion.h1>
      </div>
      <div className="overflow-hidden relative ml-4 md:ml-8">
        <motion.h1
          className="text-6xl md:text-9xl font-bold tracking-tighter"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        >
          STARUN
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Preloader;