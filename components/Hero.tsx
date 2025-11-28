
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const textVariants: Variants = {
    initial: { y: "100%" },
    animate: { y: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } }
  };

  return (
    <section className="h-screen flex flex-col justify-center px-4 pb-20 overflow-hidden relative border-b border-stone-900 bg-black">

      {/* Video Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 2.5 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-60"
        >
          {/* Foggy forest video */}
          <source src="/src/video/forest_01.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability, but lighter than before */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      <div className="flex flex-col relative z-10 mix-blend-lighten">
        {["ВИЗУАЛЬНАЯ", "АЛХИМИЯ", "& КОД", "ДУШИ"].map((line, index) => (
          <div key={index} className="overflow-hidden -mt-2 md:-mt-6">
            <motion.h1
              className="text-[13vw] leading-[0.8] font-bold tracking-tighter text-stone-200 uppercase origin-left font-serif"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={index}
              transition={{ delay: 2.4 + (index * 0.1), duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            >
              {line}
            </motion.h1>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-12 ml-2 md:mt-16 max-w-lg border-l border-stone-600 pl-6 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <p className="text-lg text-stone-300 font-light leading-relaxed drop-shadow-lg">
          Мы — проводники в цифровые миры, объединяющие древние смыслы и современные технологии. Мы создаем реальность для визионеров.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
      >
        <div className="animate-spin-slow w-24 h-24 rounded-full border border-stone-600 flex items-center justify-center backdrop-blur-sm">
          <span className="text-xs uppercase tracking-widest text-stone-400">Вниз</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
