import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="px-6 md:px-16 py-24 min-h-screen bg-stone-950 flex flex-col justify-between relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-stone-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 mt-12 md:mt-0">
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 font-serif">
          ДАВАЙТЕ <br/> СОТВОРЯТЬ
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
                <h4 className="text-stone-500 uppercase tracking-widest text-sm mb-4">Связь</h4>
                <a href="mailto:hello@wonjyou.tribute" className="block text-2xl hover:text-stone-400 transition-colors font-serif">hello@wonjyou.tribute</a>
                <a href="tel:+1234567890" className="block text-2xl hover:text-stone-400 transition-colors mt-2 font-serif">+1 (555) 000-0000</a>
            </div>
            <div>
                <h4 className="text-stone-500 uppercase tracking-widest text-sm mb-4">Сети</h4>
                <div className="flex flex-col gap-2">
                    {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map(social => (
                        <a key={social} href="#" className="text-xl hover:text-stone-400 transition-colors underline decoration-stone-800 underline-offset-4 font-serif">{social}</a>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mt-24 z-10">
        <div className="flex gap-4 mb-8 md:mb-0 w-full md:w-auto relative h-20 md:h-auto">
             <span className="text-6xl md:text-9xl font-bold text-stone-900 select-none absolute bottom-0 md:bottom-[-40px] left-0 pointer-events-none opacity-20 md:opacity-100 font-serif">WONJYOU</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-stone-500">
            <span>© 2024 Wonjyou Tribute</span>
            <span>Конфиденциальность</span>
            <span>Условия</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;