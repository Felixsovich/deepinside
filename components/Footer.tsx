import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-black text-stone-100 min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden">

      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-black to-stone-950 opacity-90" />

      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-lime-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Главный призыв к действию - КРУПНО */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-6xl md:text-9xl lg:text-[12rem] font-semibold tracking-tight mb-8 leading-[1.05]"
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #ff6b9d 0%, #ffa500 50%, #ff1744 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ПОЙДЁМ <br />
            ГЛУБЖЕ?
          </h2>

          <motion.p
            className="text-xl md:text-3xl text-stone-400 mb-16 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              fontWeight: 300
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Первая консультация — это шаг в новую реальность. <br />
            Напишите мне, и мы найдем ключ к вашей трансформации.
          </motion.p>

          {/* Большая яркая кнопка */}
          <motion.a
            href="https://t.me/starunstyle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 px-16 py-8 bg-gradient-to-r from-lime-500 to-emerald-500 text-black rounded-full font-medium hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 group shadow-[0_0_60px_rgba(132,204,22,0.6)] hover:shadow-[0_0_100px_rgba(132,204,22,0.8)] text-xl md:text-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={28} className="group-hover:rotate-45 transition-transform duration-300" />
            <span>Записаться на сеанс</span>
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Нижняя секция - разделители */}
        <div className="border-t border-stone-800 pt-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

            {/* Контакты */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3
                className="text-stone-500 uppercase text-lg tracking-[0.3em] mb-6"
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 500
                }}
              >
                Контакты
              </h3>
              <div className="space-y-4">
                <a
                  href="https://t.me/starunstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-stone-300 hover:text-lime-400 transition-colors group text-lg"
                >
                  <div className="p-3 rounded-full bg-stone-900 group-hover:bg-lime-900/50 transition-colors">
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span>Telegram</span>
                </a>
                <a
                  href="https://instagram.com/starunstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-stone-300 hover:text-violet-400 transition-colors group text-lg"
                >
                  <div className="p-3 rounded-full bg-stone-900 group-hover:bg-violet-900/50 transition-colors">
                    <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span>Instagram</span>
                </a>
              </div>
            </motion.div>

            {/* Навигация */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3
                className="text-stone-500 uppercase text-lg tracking-[0.3em] mb-6"
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 500
                }}
              >
                Навигация
              </h3>
              <nav className="space-y-4">
                {[
                  { label: 'Метод', href: '#process' },
                  { label: 'Истории', href: '#work' },
                  { label: 'Практики', href: '#services' }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-stone-300 hover:text-lime-400 transition-colors hover:translate-x-2 transform duration-200 text-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* О методе */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3
                className="text-stone-500 uppercase text-lg tracking-[0.3em] mb-6"
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 500
                }}
              >
                О методе
              </h3>
              <p
                className="text-stone-400 text-base md:text-lg leading-relaxed"
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 300
                }}
              >
                Регрессивный гипноз — это научно обоснованная практика доступа
                к подсознанию для исцеления травм и раскрытия потенциала.
              </p>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-600">
            <p
              className="text-sm"
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontWeight: 300
              }}
            >
              © 2026 DeepInside. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-stone-400 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-stone-400 transition-colors">Договор-оферта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;