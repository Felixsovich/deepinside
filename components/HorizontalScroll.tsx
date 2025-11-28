import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { HORIZONTAL_SLIDES } from '../constants';
import { ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';

const HorizontalScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size to adjust scroll math
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
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

  // Calculate X translation based on screen width
  // Desktop: container is (100vw - 6rem sidebar)
  // Mobile: container is 100vw
  const x = useTransform(smoothIndex, (value) => {
    return isMobile 
      ? `calc(${-value} * 100vw)` 
      : `calc(${-value} * (100vw - 6rem))`; 
  });

  const currentColors = HORIZONTAL_SLIDES[activeSlide]?.colors || HORIZONTAL_SLIDES[0].colors;

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
      style={{ height: `${HORIZONTAL_SLIDES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden w-full">
        <motion.div 
          className="absolute inset-0 z-0 transition-colors duration-700 ease-in-out"
          style={{ backgroundColor: currentColors.background }}
        />

        {/* The Track width matches slide widths */}
        <motion.div 
          style={{ x }} 
          className="flex h-full"
        >
          {HORIZONTAL_SLIDES.map((slide) => (
            <div 
              key={slide.id} 
              className="relative h-screen flex-shrink-0 flex flex-col justify-center px-6 md:px-12 w-screen md:w-[calc(100vw-6rem)]"
            >
              {/* Background Image Accent */}
              <div className="absolute right-0 top-0 w-full md:w-2/3 h-full opacity-10 mix-blend-overlay pointer-events-none">
                <img src={slide.image} className="w-full h-full object-cover mask-image-gradient" />
              </div>

              <div className="relative z-10 max-w-4xl mt-[-5vh]">
                <div className="flex items-center gap-4 mb-4 md:mb-8">
                    <motion.span 
                      className="font-mono text-xs md:text-sm tracking-widest border px-4 py-1.5 rounded-full backdrop-blur-md uppercase"
                      style={{ 
                        color: slide.colors.subtext, 
                        borderColor: slide.colors.subtext 
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                        {slide.subtitle}
                    </motion.span>
                    <motion.div 
                        className="h-[1px] w-12 md:w-24" 
                        style={{ backgroundColor: slide.colors.subtext }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ delay: 0.3 }}
                    />
                </div>
                
                <motion.h2 
                  className="text-[14vw] md:text-[7vw] font-bold tracking-tighter leading-[0.9] md:leading-[0.85] mb-4 md:mb-8 font-serif"
                  style={{ color: slide.colors.text }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-2xl font-light max-w-xl leading-relaxed"
                  style={{ color: slide.colors.subtext }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {slide.description}
                </motion.p>
              </div>

              <div 
                className="absolute bottom-[-2vh] right-[2vw] md:bottom-[-5vh] md:right-[5vw] font-serif text-[15vh] md:text-[30vh] font-bold opacity-10 select-none pointer-events-none"
                style={{ color: slide.colors.text }}
              >
                0{slide.id}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Controls Overlay - Hidden on small mobile screens to save space, relies on scroll/buttons */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 hidden md:flex">
            {HORIZONTAL_SLIDES.map((slide, idx) => (
                <button
                    key={slide.id}
                    onClick={() => scrollToSlide(idx)}
                    className="group flex items-center gap-2"
                >
                    <div 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-8 bg-white' : 'bg-white/30 group-hover:bg-white/70'}`}
                        style={{ backgroundColor: activeSlide === idx ? currentColors.text : undefined }}
                    />
                </button>
            ))}
        </div>

        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 px-6 md:px-12 flex justify-between items-end z-20 pointer-events-none">
            <div className="hidden md:flex items-center gap-2 animate-bounce opacity-70" style={{ color: currentColors.text }}>
                <ArrowDown size={20} />
                <span className="uppercase text-xs tracking-widest">Листайте для познания</span>
            </div>

            <div className="flex gap-4 pointer-events-auto ml-auto md:ml-0">
                <button 
                    onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                    disabled={activeSlide === 0}
                    className="p-3 md:p-4 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all disabled:opacity-30"
                    style={{ color: currentColors.text, borderColor: `${currentColors.text}40` }}
                >
                    <ChevronLeft size={20} />
                </button>
                <button 
                    onClick={() => scrollToSlide(Math.min(HORIZONTAL_SLIDES.length - 1, activeSlide + 1))}
                    disabled={activeSlide === HORIZONTAL_SLIDES.length - 1}
                    className="p-3 md:p-4 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all disabled:opacity-30"
                    style={{ color: currentColors.text, borderColor: `${currentColors.text}40` }}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HorizontalScroll;