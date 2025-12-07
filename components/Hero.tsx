import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Send } from 'lucide-react'; // Импортируем иконку для Телеграма

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
        transition={{ delay: 0.5, duration: 2.5 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-50" // Чуть уменьшил прозрачность для читаемости
        >
          {/* Убедись, что путь к видео верный */}
          <source src="/src/video/forest_01.mp4" type="video/mp4" />
        </video>
        {/* Градиент, чтобы текст читался идеально */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      </motion.div>

      <div className="flex flex-col relative z-10 mix-blend-screen px-2 md:px-0">
        {/* Ключевые слова в заголовке для SEO и атмосферы */}
        {["ИСЦЕЛЕНИЕ", "ПАМЯТИ", "& КОД", "ДУШИ"].map((line, index) => (
          <div key={index} className="overflow-hidden -mt-2 md:-mt-6">
            <motion.h1
              className="text-[13vw] leading-[0.85] font-bold tracking-tighter text-stone-200 uppercase origin-left font-serif"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={index}
              transition={{ delay: 1.4 + (index * 0.1), duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            >
              {line}
            </motion.h1>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-8 md:mt-4 relative z-10 max-w-[90%] md:max-w-full">

        <motion.div
          className="ml-2 border-l border-stone-500 pl-6 max-w-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          {/* SEO-текст: объясняем суть метода */}
          <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed drop-shadow-lg">
            Я — проводник в глубины вашего подсознания. Через регрессивный гипноз мы находим первопричины страхов и блоков, чтобы переписать сценарий вашей судьбы здесь и сейчас.
          </p>

          {/* КНОПКА TELEGRAM */}
          <a
            href="https://t.me/starunstyle"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-stone-100 text-stone-950 rounded-full font-medium hover:bg-stone-300 transition-all duration-300 group"
          >
            <span>Записаться на разбор</span>
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden md:block absolute bottom-0 right-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <div className="animate-spin-slow w-24 h-24 rounded-full border border-stone-600 flex items-center justify-center backdrop-blur-sm bg-black/20">
            <span className="text-xs uppercase tracking-widest text-stone-400">Вниз</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;