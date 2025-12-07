import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { HORIZONTAL_SLIDES } from '../constants';
import { ChevronRight, ChevronLeft, ArrowDown, Send } from 'lucide-react';

const HorizontalScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
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

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

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

  const x = useTransform(smoothIndex, (value) => {
    return isMobile
      ? `calc(${-value} * 100vw)`
      : `calc(${-value} * (100vw - 7rem))`; // Чуть увеличил отступ для меню
  });

  // Берем цвета текущего слайда для UI элементов
  const currentColors = HORIZONTAL_SLIDES[activeSlide]?.colors || HORIZONTAL_SLIDES[0].colors;
  const isLastSlide = activeSlide === HORIZONTAL_SLIDES.length - 1;

  const scrollToSlide = (index: number) => {
    if (!targetRef.current) return;
    const container = targetRef.current;
    const containerTop = container.offsetTop;
    const containerHeightPx = container.offsetHeight - window.innerHeight;

    const progress = index / (HORIZONTAL_SLIDES.length - 1);
    const scrollPos = containerTop + (progress * containerHeightPx);

    window.scrollTo({
      top: scrollPos,
      behavior: 'smooth'
    });
  };

  return (
    <motion.section
      id="process"
      ref={targetRef}
      className="relative w-full"
      style={{ height: `${HORIZONTAL_SLIDES.length * 100}vh` }} // Высота секции зависит от кол-ва слайдов
    >
      <div className="sticky top-0 h-screen overflow-hidden w-full">

        {/* === ДИНАМИЧЕСКИЙ ФОН === */}
        <motion.div
          className="absolute inset-0 z-0 transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: currentColors.background }}
        />

        <motion.div
          style={{ x }}
          className="flex h-full"
        >
          {HORIZONTAL_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-screen flex-shrink-0 flex flex-col justify-center px-6 md:px-16 w-screen md:w-[calc(100vw-7rem)] overflow-hidden"
            >
              {/* === ФОНОВОЕ ИЗОБРАЖЕНИЕ ИЛИ ВИДЕО (АТМОСФЕРА) === */}
              {slide.html ? (
                // Если вдруг нужен iframe (для редких случаев)
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                  <iframe
                    src={slide.html}
                    className="w-full h-full border-none grayscale"
                    tabIndex={-1}
                  />
                  <div className="absolute inset-0 bg-stone-950/60" />
                </div>
              ) : slide.image ? (
                // Картинка с красивым наложением
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 10 }} // Медленный зум (эффект Кена Бернса)
                    className="w-full h-full object-cover opacity-30 md:opacity-40 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  {/* Градиент, чтобы текст читался идеально */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>
              ) : null}

              {/* === КОНТЕНТ === */}
              <div className="relative z-10 max-w-5xl mt-[-5vh]">
                <div className="flex items-center gap-4 mb-6">
                  <motion.span
                    className="font-mono text-xs md:text-sm tracking-[0.2em] border px-4 py-1.5 rounded-full uppercase"
                    style={{
                      color: slide.colors.subtext,
                      borderColor: slide.colors.subtext,
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.subtitle}
                  </motion.span>

                  <motion.div
                    className="h-[1px] w-12 md:w-32"
                    style={{ backgroundColor: slide.colors.subtext }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 128 }}
                    transition={{ delay: 0.3 }}
                  />
                </div>

                <motion.h2
                  className="text-[12vw] md:text-[6vw] font-bold tracking-tighter leading-[0.9] mb-6 md:mb-8 font-serif uppercase"
                  style={{ color: slide.colors.text }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  className="text-lg md:text-2xl font-light max-w-xl leading-relaxed font-sans"
                  style={{ color: slide.colors.subtext }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {slide.description}
                </motion.p>

                {/* === КНОПКА CTA (Только на последнем слайде) === */}
                {index === HORIZONTAL_SLIDES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12"
                  >
                    <a
                      href="https://t.me/starunstyle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-stone-100 text-stone-950 rounded-full font-medium hover:bg-white hover:scale-105 transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                      <span>Начать свой путь</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
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
        </motion.div>

        {/* === НАВИГАЦИЯ (Точки слева) === */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 hidden md:flex">
          {HORIZONTAL_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(idx)}
              className="group flex items-center gap-4"
              aria-label={`Перейти к этапу ${slide.title}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-500 ${activeSlide === idx ? 'w-12 bg-white' : 'w-2 bg-white/30 group-hover:bg-white/70'}`}
                style={{ backgroundColor: activeSlide === idx ? currentColors.text : undefined }}
              />
            </button>
          ))}
        </div>

        {/* === НИЖНЯЯ ПАНЕЛЬ === */}
        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 px-6 md:px-16 flex justify-between items-end z-20 pointer-events-none">
          {/* Индикатор скролла */}
          <div className="hidden md:flex items-center gap-3 opacity-60 mix-blend-difference" style={{ color: currentColors.text }}>
            <ArrowDown size={20} className="animate-bounce" />
            <span className="uppercase text-xs tracking-[0.2em] font-mono">
              {isLastSlide ? 'Финал пути' : 'Листайте вниз'}
            </span>
          </div>

          {/* Кнопки Вперед/Назад */}
          <div className="flex gap-4 pointer-events-auto ml-auto md:ml-0">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="p-3 md:p-4 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              style={{ color: currentColors.text, borderColor: `${currentColors.text}30` }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scrollToSlide(Math.min(HORIZONTAL_SLIDES.length - 1, activeSlide + 1))}
              disabled={activeSlide === HORIZONTAL_SLIDES.length - 1}
              className="p-3 md:p-4 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              style={{ color: currentColors.text, borderColor: `${currentColors.text}30` }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HorizontalScroll;