import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram } from 'lucide-react'; // Убедись, что lucide-react установлен

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="px-6 md:px-16 py-24 min-h-screen bg-stone-950 flex flex-col justify-between relative overflow-hidden border-t border-stone-900">

      {/* Background Accent: Атмосферное пятно */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 mt-12 md:mt-0">
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 font-serif text-stone-200">
          НАЧАТЬ <br /> ПУТЬ
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
          <div>
            <h4 className="text-stone-500 uppercase tracking-widest text-xs mb-6">Личный контакт</h4>
            <a
              href="https://t.me/starunstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl md:text-4xl text-white hover:text-stone-300 transition-colors font-serif group"
            >
              <Send size={32} className="group-hover:translate-x-2 transition-transform" />
              t.me/starunstyle
            </a>

            {/* Если будет email, раскомментируй */}
            {/* <a href="mailto:contact@elizaveta.ru" className="block text-xl text-stone-400 hover:text-stone-200 mt-4 font-serif">contact@elizaveta.ru</a> */}
          </div>

          <div>
            <h4 className="text-stone-500 uppercase tracking-widest text-xs mb-6">Социальные сети</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-2 text-xl hover:text-stone-300 transition-colors text-stone-400 font-serif">
                <Instagram size={20} /> Instagram
              </a>
              {/* Добавь другие соцсети по необходимости */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mt-24 z-10 border-t border-stone-900 pt-8">
        <div className="flex gap-4 mb-8 md:mb-0 w-full md:w-auto relative h-12 md:h-auto">
          {/* Заменили WONJYOU на STARUN */}
          <span className="text-6xl md:text-[12rem] font-bold text-stone-900 select-none absolute bottom-[-1rem] md:bottom-[-6rem] left-0 pointer-events-none opacity-50 font-serif leading-none">
            STARUN
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-stone-600 uppercase tracking-wider">
          <span>© {new Date().getFullYear()} Elizaveta Starun</span>
          <a href="#" className="hover:text-stone-400 transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-stone-400 transition-colors">Договор оферты</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;