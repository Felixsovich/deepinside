import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { HORIZONTAL_SLIDES } from '../constants';
import { ChevronRight, ChevronLeft, ArrowDown, Send } from 'lucide-react';

const VerticalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Отслеживаем скролл всего контейнера
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Определяем активный слайд на основе прогресса скролла
  const rawSlideIndex = useTransform(scrollYProgress, [0, 1], [0, HORIZONTAL_SLIDES.length - 1]);

  const smoothIndex = useSpring(rawSlideIndex, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });

  useMotionValueEvent(rawSlideIndex, "change", (latest) => {
    const rounded = Math.round(latest);
    if (rounded !== activeSlide && rounded >= 0 && rounded < HORIZONTAL_SLIDES.length) {
      setActiveSlide(rounded);
    }
  });

  // Плавный градиентный переход между цветами фона
  const backgroundColor = useTransform(
    smoothIndex,
    HORIZONTAL_SLIDES.map((_, i) => i),
    HORIZONTAL_SLIDES.map(slide => slide.colors.background)
  );

  const isLastSlide = activeSlide === HORIZONTAL_SLIDES.length - 1;
  const currentColors = HORIZONTAL_SLIDES[activeSlide]?.colors || HORIZONTAL_SLIDES[0].colors;

  // Функция для плавного скролла к определенному слайду
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slideElements = containerRef.current.querySelectorAll('[data-slide]');
    const targetSlide = slideElements[index] as HTMLElement;

    if (targetSlide) {
      targetSlide.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full"
    >
      {/* Фиксированный градиентный фон */}
      <motion.div
        className="fixed inset-0 z-0 transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor }}
      />

      {/* Слайды */}
      <div className="relative z-10">
        {HORIZONTAL_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            data-slide={index}
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 overflow-hidden"
          >
            {/* Фоновое изображение или видео */}
            {slide.html ? (
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <iframe
                  src={slide.html}
                  className="w-full h-full border-none grayscale"
                  tabIndex={-1}
                />
                <div className="absolute inset-0 bg-stone-950/60" />
              </div>
            ) : slide.image ? (
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-30 md:opacity-40 mix-blend-overlay grayscale hover:grayscale-0"
                  style={{
                    transition: 'all 1.5s ease-out'
                  }}
                  whileInView={{
                    scale: [1.2, 1],
                    filter: ['blur(10px)', 'blur(0px)']
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.div>
            ) : null}

            {/* Контент */}
            <div className="relative z-10 max-w-5xl">
              <div className="flex items-center gap-4 mb-6">
                <motion.span
                  className="font-mono text-xs md:text-sm tracking-[0.2em] border px-4 py-1.5 rounded-full uppercase"
                  style={{
                    color: slide.colors.subtext,
                    borderColor: slide.colors.subtext,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.subtitle}
                </motion.span>

                <motion.div
                  className="h-[1px] w-12 md:w-32"
                  style={{ backgroundColor: slide.colors.subtext }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 128 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3 }}
                />
              </div>

              <motion.h2
                className="text-[15vw] md:text-[8vw] font-semibold tracking-[-0.02em] leading-[0.88] mb-8 md:mb-10 uppercase"
                style={{
                  color: slide.colors.text,
                  fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {slide.title}
              </motion.h2>

              <motion.p
                className="text-xl md:text-3xl font-light max-w-2xl leading-relaxed"
                style={{
                  color: slide.colors.subtext,
                  fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 300
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slide.description}
              </motion.p>

              {/* CTA на последнем слайде */}
              {index === HORIZONTAL_SLIDES.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12"
                >
                  <a
                    href="https://t.me/starunstyle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-lime-500 to-emerald-500 text-black rounded-full font-medium hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 group shadow-[0_0_40px_rgba(132,204,22,0.5)] hover:shadow-[0_0_60px_rgba(132,204,22,0.7)] hover:scale-105"
                  >
                    <span className="text-lg tracking-wide">Начать свой путь</span>
                    <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </motion.div>
              )}
            </div>

            {/* Огромный номер на фоне */}
            <div
              className="absolute bottom-[-5vh] right-[2vw] md:bottom-[-10vh] md:right-[5vw] font-serif text-[20vh] md:text-[40vh] font-bold opacity-5 select-none pointer-events-none"
              style={{ color: slide.colors.text }}
            >
              0{slide.id}
            </div>
          </div>
        ))}
      </div>

      {/* Навигация точками слева */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 hidden md:flex">
        {HORIZONTAL_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(idx)}
            className="group flex items-center gap-4"
            aria-label={`Перейти к этапу ${slide.title}`}
          >
            <div
              className={`h-2 rounded-full transition-all duration-500 ${activeSlide === idx
                  ? 'w-12 bg-white'
                  : 'w-2 bg-white/30 group-hover:bg-white/70'
                }`}
              style={{ backgroundColor: activeSlide === idx ? currentColors.text : undefined }}
            />
          </button>
        ))}
      </div>

      {/* Нижняя панель с индикатором и кнопками */}
      <div className="fixed bottom-6 md:bottom-12 left-0 right-0 px-6 md:px-16 flex justify-between items-end z-20 pointer-events-none">
        {/* Индикатор прогресса */}
        <div className="flex items-center gap-4 opacity-80 mix-blend-difference" style={{ color: currentColors.text }}>
          <div className="hidden md:flex items-center gap-3">
            <ArrowDown size={20} className="animate-bounce" />
            <span className="uppercase text-xs tracking-[0.2em] font-mono">
              {isLastSlide ? 'Финал пути' : 'Листайте вниз'}
            </span>
          </div>

          {/* Счётчик этапов */}
          <div className="font-mono text-sm md:text-base font-bold">
            <span className="text-2xl">{activeSlide + 1}</span>
            <span className="opacity-50"> / {HORIZONTAL_SLIDES.length}</span>
          </div>
        </div>

        {/* Кнопки навигации */}
        <div className="flex gap-4 pointer-events-auto ml-auto md:ml-0">
          <button
            onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
            disabled={activeSlide === 0}
            className="p-3 md:p-4 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            style={{ color: currentColors.text, borderColor: `${currentColors.text}30` }}
            aria-label="Предыдущий этап"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scrollToSlide(Math.min(HORIZONTAL_SLIDES.length - 1, activeSlide + 1))}
            disabled={activeSlide === HORIZONTAL_SLIDES.length - 1}
            className="p-3 md:p-4 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            style={{ color: currentColors.text, borderColor: `${currentColors.text}30` }}
            aria-label="Следующий этап"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerticalScroll;