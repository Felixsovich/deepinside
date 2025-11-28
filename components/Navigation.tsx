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
    { id: '#work', label: 'АРТЕФАКТЫ', icon: Square, rotate: 0 },
    { id: '#process', label: 'РИТУАЛ', icon: Triangle, rotate: 180 },
    { id: '#services', label: 'ДАРЫ', icon: Hexagon, rotate: 0 },
    { id: '#contact', label: 'СВЯЗЬ', icon: Circle, rotate: 0 },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR (Hidden on Mobile) ================= */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-24 bg-[#050505] border-r border-stone-800 z-50 flex-col justify-between items-center py-12">
        {/* Home Button / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative h-48 flex items-center justify-center w-full outline-none"
        >
          <div className="absolute inset-0 bg-stone-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          <span className="writing-vertical-rl text-2xl font-bold tracking-tighter text-white rotate-0 z-10 group-hover:text-stone-300 transition-colors font-serif">
            STARUN
          </span>
        </button>

        {/* Rune Navigation */}
        <div className="flex flex-col gap-12 items-center">
          {navItems.map((item) => (
            <div key={item.id} className="relative group flex items-center justify-center">
              {/* Hover Label */}
              <div className="absolute left-14 overflow-hidden pointer-events-none">
                <span className="bg-stone-100 text-black text-xs font-bold px-4 py-2 uppercase tracking-widest whitespace-nowrap opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out shadow-xl font-serif">
                  {item.label}
                </span>
              </div>

              {/* Icon / Rune */}
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative w-10 h-10 flex items-center justify-center text-stone-500 hover:text-white transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: item.rotate + 90 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon
                    size={24}
                    strokeWidth={1.5}
                    className="fill-transparent group-hover:fill-white/10 transition-all duration-500"
                    style={{ transform: `rotate(${item.rotate}deg)` }}
                  />
                </motion.div>
              </button>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="w-[1px] h-24 bg-stone-800 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-stone-500 rounded-full" />
        </div>
      </nav>

      {/* ================= MOBILE HEADER (Hidden on Desktop) ================= */}
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

      {/* ================= MOBILE MENU OVERLAY ================= */}
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