import React from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  setLoading: (loading: boolean) => void;
}

const Preloader: React.FC<PreloaderProps> = ({ setLoading }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white text-black overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.2 }}
      onAnimationComplete={() => setLoading(false)}
    >
      {/* Контейнер для обоих слов с адаптивными размерами */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 px-4 md:px-8 w-full max-w-[90vw]">

        {/* ELIZAVETA */}
        <div className="overflow-hidden w-full md:w-auto flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            <h1
              className="text-[12vw] sm:text-[10vw] md:text-[6rem] lg:text-[8rem] xl:text-[11rem] font-bold tracking-tighter whitespace-nowrap leading-[0.9]"
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                wordSpacing: '-0.05em' // Уменьшаем расстояние между буквами
              }}
            >
              ELIZAVETA
            </h1>
          </motion.div>
        </div>

        {/* STARUN */}
        <div className="overflow-hidden w-full md:w-auto flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          >
            <h1
              className="text-[12vw] sm:text-[10vw] md:text-[6rem] lg:text-[8rem] xl:text-[11rem] font-bold tracking-tighter whitespace-nowrap leading-[0.9]"
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                wordSpacing: '-0.05em'
              }}
            >
              STARUN
            </h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;