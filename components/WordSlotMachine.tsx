import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
  'ТРАНСФОРМАЦИЯ',
  'ИСЦЕЛЕНИЕ',
  'ОСОЗНАНИЕ',
  'СВОБОДА',
  'СИЛА',
  'ЛЮБОВЬ',
  'ЦЕЛОСТНОСТЬ',
  'ГАРМОНИЯ',
  'ПРОЗРЕНИЕ',
  'ВОЗРОЖДЕНИЕ'
];

const WordSlotMachine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpinning(true);

      // Имитация "быстрого вращения"
      let spinCount = 0;
      const spinInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % WORDS.length);
        spinCount++;

        // После 10 быстрых смен начинаем замедляться
        if (spinCount > 10) {
          clearInterval(spinInterval);
          setIsSpinning(false);
        }
      }, isSpinning && spinCount < 8 ? 80 : 200); // Сначала быстро, потом медленнее

    }, 5000); // Каждые 5 секунд новый спин

    return () => clearInterval(interval);
  }, [isSpinning]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-stone-950 via-emerald-950/20 to-stone-950 overflow-visible">

      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[2000px] mx-auto text-center px-4 md:px-8 lg:px-12">

        {/* Заголовок над барабаном */}
        <motion.p
          className="text-stone-500 uppercase tracking-[0.3em] text-sm mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 500
          }}
        >
          Ваш путь к
        </motion.p>

        {/* Барабан со словами */}
        <div className="relative h-[280px] md:h-[380px] flex items-center justify-center mb-12 overflow-visible">

          {/* Рамка барабана - адаптивная ширина под содержимое */}
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            <div className="w-fit min-w-[90vw] md:min-w-[80vw] lg:min-w-[70vw] xl:min-w-[60vw] h-[240px] md:h-[320px] border-2 border-lime-500/40 rounded-2xl backdrop-blur-sm shadow-[0_0_30px_rgba(132,204,22,0.3)] px-8 md:px-12 lg:px-16" />
          </div>

          {/* Слово */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: isSpinning ? -300 : -100, opacity: 0, rotateX: -90 }}
              animate={{
                y: 0,
                opacity: 1,
                rotateX: 0,
                transition: {
                  duration: isSpinning ? 0.1 : 0.6,
                  ease: isSpinning ? "linear" : [0.34, 1.56, 0.64, 1]
                }
              }}
              exit={{
                y: isSpinning ? 300 : 100,
                opacity: 0,
                rotateX: 90,
                transition: { duration: 0.1 }
              }}
              className="absolute z-10 px-10 md:px-16 lg:px-20 xl:px-24 overflow-visible"
              style={{ perspective: 1000 }}
            >
              <h2
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw] xl:text-[5.5vw] font-bold tracking-tighter bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent"
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 700,
                  textShadow: '0 0 80px rgba(132, 204, 22, 0.5)',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.02em'
                }}
              >
                {WORDS[currentIndex]}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Анимированные индикаторы по бокам */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 lg:px-12 pointer-events-none z-0 overflow-visible">

            {/* Левый индикатор */}
            <motion.div
              className="w-1 h-40 bg-gradient-to-b from-transparent via-lime-500 to-transparent rounded-full"
              animate={{
                y: [0, -15, 0, 15, 0],
                opacity: [0.7, 1, 0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Правый индикатор */}
            <motion.div
              className="w-1 h-40 bg-gradient-to-b from-transparent via-lime-500 to-transparent rounded-full"
              animate={{
                y: [0, 15, 0, -15, 0],
                opacity: [0.7, 1, 0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>

          {/* Дополнительные декоративные элементы для барабана */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-1 bg-gradient-to-r from-transparent via-lime-500/30 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-1 bg-gradient-to-r from-transparent via-lime-500/30 to-transparent" />
        </div>

        {/* Подпись */}
        <motion.p
          className="text-stone-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 300
          }}
        >
          Каждый сеанс — это шаг к новому уровню осознанности
        </motion.p>

        {/* Счётчик прокруток */}
        <motion.div
          className="mt-12 flex justify-center gap-2 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {WORDS.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full ${index === currentIndex
                ? 'w-8 bg-lime-500'
                : 'w-1 bg-stone-700'
                }`}
              animate={{
                opacity: index === currentIndex ? [0.7, 1, 0.7] : 0.5,
                scale: index === currentIndex ? [1, 1.1, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WordSlotMachine;