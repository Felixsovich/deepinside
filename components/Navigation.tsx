import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

// Геометрические фигуры для каждого пункта меню
const SHAPES = ['circle', 'square', 'triangle', 'diamond'] as const;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Рендер геометрической фигуры
  const renderShape = (shape: typeof SHAPES[number], isHovered: boolean) => {
    const baseClasses = "transition-all duration-300";
    const hoverClasses = isHovered ? "scale-110 rotate-12" : "";

    switch (shape) {
      case 'circle':
        return (
          <motion.div
            className={`w-6 h-6 rounded-full border-2 ${baseClasses} ${hoverClasses}`}
            style={{
              borderColor: isHovered ? '#84cc16' : '#84cc1650',
              boxShadow: isHovered ? '0 0 20px rgba(132, 204, 22, 0.6)' : 'none'
            }}
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
          />
        );
      case 'square':
        return (
          <motion.div
            className={`w-6 h-6 rounded-sm border-2 ${baseClasses} ${hoverClasses}`}
            style={{
              borderColor: isHovered ? '#10b981' : '#10b98150',
              boxShadow: isHovered ? '0 0 20px rgba(16, 185, 129, 0.6)' : 'none'
            }}
            animate={isHovered ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
          />
        );
      case 'triangle':
        return (
          <motion.div
            className={`w-6 h-6 border-2 ${baseClasses} ${hoverClasses}`}
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              borderColor: isHovered ? '#84cc16' : '#84cc1650',
              boxShadow: isHovered ? '0 0 20px rgba(132, 204, 22, 0.6)' : 'none'
            }}
            animate={isHovered ? { rotate: 120 } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
          />
        );
      case 'diamond':
        return (
          <motion.div
            className={`w-6 h-6 border-2 ${baseClasses} ${hoverClasses}`}
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              borderColor: isHovered ? '#10b981' : '#10b98150',
              boxShadow: isHovered ? '0 0 20px rgba(16, 185, 129, 0.6)' : 'none'
            }}
            animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
          />
        );
    }
  };

  return (
    <>
      {/* DESKTOP SIDEBAR - РАСШИРЕННАЯ */}
      <motion.nav
        className={`hidden md:flex fixed left-0 top-0 h-screen w-44 backdrop-blur-xl border-r z-50 flex-col items-center justify-between py-12 transition-all duration-500 ${scrolled ? 'bg-black/90 border-lime-900/30' : 'bg-black/80 border-stone-900'
          } ${hoveredItem !== null ? 'border-lime-500/50 shadow-[0_0_30px_rgba(132,204,22,0.2)]' : ''}`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="text-4xl font-bold tracking-tighter hover:scale-110 transition-transform duration-300 group relative"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 700
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="bg-gradient-to-br from-lime-400 to-emerald-400 bg-clip-text text-transparent">
            ST
          </span>
        </motion.a>

        {/* Menu Items с геометрическими фигурами */}
        <div className="flex flex-col gap-6">
          {MENU_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-lime-900/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + (index * 0.1) }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Геометрическая фигура */}
              <div className="flex-shrink-0">
                {renderShape(SHAPES[index], hoveredItem === index)}
              </div>

              {/* Текст */}
              <span
                className={`text-xs tracking-wider uppercase transition-all duration-300 ${hoveredItem === index ? 'text-lime-400 translate-x-1' : 'text-stone-400'
                  }`}
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.1em'
                }}
              >
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Social / Contact hint */}
        <motion.div
          className="text-xs text-stone-600 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          TG
        </motion.div>
      </motion.nav>

      {/* MOBILE HEADER */}
      <motion.header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-stone-800' : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.a
          href="#"
          className="text-2xl font-bold tracking-tighter"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 700
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bg-gradient-to-br from-lime-400 to-emerald-400 bg-clip-text text-transparent">
            ST
          </span>
        </motion.a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white z-50 relative p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-8 text-center">
              {MENU_ITEMS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-4xl font-light text-stone-100 hover:text-lime-400 transition-colors tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    fontFamily: '"Inter Tight", sans-serif',
                    fontWeight: 300
                  }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="https://www.instagram.com/why_not_regress/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-4 bg-gradient-to-r from-lime-500 to-emerald-500 text-black rounded-full font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                Связаться
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;