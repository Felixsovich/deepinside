import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Square, Triangle, Hexagon, Circle, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: '#work', label: 'ИСТОРИИ', icon: Square, rotate: 0 },
    { id: '#process', label: 'МЕТОД', icon: Triangle, rotate: 180 },
    { id: '#services', label: 'ПРАКТИКИ', icon: Hexagon, rotate: 0 },
    { id: '#contact', label: 'КОНТАКТ', icon: Circle, rotate: 0 },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-28 bg-[#050505] border-r border-stone-800 z-50 flex-col justify-between items-center py-8">

        {/* ЛОГОТИП (Исправил поворот) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative h-40 flex items-center justify-center w-full outline-none"
          aria-label="На главную"
        >
          {/* Эффект подсветки фона при наведении */}
          <div className="absolute inset-0 bg-stone-900/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

          {/* writing-vertical-rl делает текст вертикальным. rotate-0 оставляет чтение сверху-вниз */}
          <span className="writing-vertical-rl text-2xl font-bold tracking-widest text-stone-500 group-hover:text-stone-100 transition-colors duration-500 font-serif z-10">
            STARUN
          </span>
        </button>

        {/* НАВИГАЦИЯ С ЭФФЕКТОМ "ДЫХАНИЯ" */}
        <div className="flex flex-col gap-8 items-center w-full">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex flex-col items-center gap-3 w-full py-2 relative"
              initial="initial"
              whileHover="hover"
              aria-label={item.label}
            >
              {/* Активная полоска слева при наведении */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white"
                variants={{
                  initial: { height: 0 },
                  hover: { height: '100%' }
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Иконка с вращением */}
              <motion.div
                variants={{
                  initial: { rotate: item.rotate, scale: 1, color: "#78716c" }, // stone-500
                  hover: { rotate: item.rotate + 90, scale: 1.1, color: "#f5f5f4" } // stone-100
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon size={22} strokeWidth={1.5} />
              </motion.div>

              {/* ТЕКСТ: Вертикальный + эффект расширения букв (tracking) */}
              <motion.span
                className="writing-vertical-rl text-[10px] font-bold uppercase font-serif"
                variants={{
                  initial: { opacity: 0.5, letterSpacing: "0.1em", y: 0 },
                  hover: { opacity: 1, letterSpacing: "0.3em", y: 2 } // Растягиваем буквы
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {item.label}
              </motion.span>
            </motion.button>
          ))}
        </div>

        {/* Декор внизу */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-stone-800 to-transparent relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-stone-500 rounded-full" />
        </div>
      </nav>

      {/* ================= MOBILE HEADER (Без изменений, только тексты) ================= */}
      <nav className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#050505]/90 backdrop-blur-md border-b border-stone-800 z-50 flex items-center justify-between px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-bold tracking-tighter text-white font-serif"
        >
          STARUN
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-stone-300 hover:text-white p-2"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col justify-center items-center gap-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-stone-500 hover:text-white p-2"
            >
              <X size={32} />
            </button>

            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="text-stone-600 group-hover:text-stone-300 transition-colors">
                  <item.icon size={32} strokeWidth={1} style={{ transform: `rotate(${item.rotate}deg)` }} />
                </div>
                <span className="text-3xl font-serif font-medium text-stone-200 group-hover:text-white tracking-widest">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;