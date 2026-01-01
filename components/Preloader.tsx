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
      {/* Контейнер для обоих слов */}
      <div className="flex items-center gap-6 md:gap-12 px-4">

        {/* ELIZAVETA */}
        <div className="overflow-hidden relative h-[100px] md:h-[180px] flex items-center">
          <motion.h1
            className="text-7xl md:text-[11rem] font-bold tracking-tighter whitespace-nowrap leading-none"
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.03em'
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            ELIZAVETA
          </motion.h1>
        </div>

        {/* STARUN */}
        <div className="overflow-hidden relative h-[100px] md:h-[180px] flex items-center">
          <motion.h1
            className="text-7xl md:text-[11rem] font-bold tracking-tighter whitespace-nowrap leading-none"
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.03em'
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          >
            STARUN
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;