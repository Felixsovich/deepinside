import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-16 pb-20 overflow-hidden relative border-b border-stone-900 bg-black">

      {/* Video Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2.5 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-50"
        >
          <source src="/src/video/forest_01.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      </motion.div>

      {/* Основной заголовок - ТРИ строки */}
      <div className="relative z-10 mix-blend-screen px-2 md:px-0 mb-8 space-y-[-0.15em] md:space-y-[-0.2em]">

        {/* Первая строка: ТВОЯ ИСТОРИЯ */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-[12vw] md:text-[8.5vw] leading-[0.85] font-normal tracking-tight text-stone-100 uppercase"
            style={{
              fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.2,
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1]
            }}
          >
            ТВОЯ ИСТОРИЯ
          </motion.h1>
        </div>

        {/* Вторая строка: НАЧАЛАСЬ */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-[12vw] md:text-[8.5vw] leading-[0.85] font-normal tracking-tight text-stone-100 uppercase"
            style={{
              fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.3,
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1]
            }}
          >
            НАЧАЛАСЬ
          </motion.h1>
        </div>

        {/* Третья строка: НЕ СЕГОДНЯ */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-[12vw] md:text-[8.5vw] leading-[0.85] font-normal tracking-tight text-stone-100 uppercase"
            style={{
              fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.4,
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1]
            }}
          >
            НЕ СЕГОДНЯ
          </motion.h1>
        </div>
      </div>

      {/* Подзаголовок */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto md:mx-0 mt-8 md:mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <h2
          className="text-3xl md:text-6xl font-light text-stone-200 leading-tight tracking-tight mb-10 md:mb-12"
          style={{
            fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 300,
            lineHeight: '1.1'
          }}
        >
          ПОЙДЁМ ГЛУБЖЕ?
        </h2>

        {/* CTA кнопка */}
        <motion.a
          href="https://t.me/starunstyle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 group shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-base md:text-lg font-medium tracking-wide">Записаться на сеанс</span>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-stone-400 to-transparent animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-light">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;