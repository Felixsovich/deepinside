import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import TextReveal from './TextReveal';

const WorkItem: React.FC<{ item: typeof PROJECTS[0], index: number, onClick: () => void }> = ({ item, index, onClick }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <motion.div
      ref={ref}
      className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div
        className="overflow-hidden mb-6 aspect-[4/5] md:aspect-[3/4] relative cursor-pointer rounded-sm bg-stone-900"
        onClick={onClick}
      >
        <motion.div
          style={{ y, scale: 1.3 }}
          className="w-full h-full"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-opacity duration-700 opacity-80 group-hover:opacity-60"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90 pointer-events-none" />

        <div className="absolute bottom-6 left-6 right-6 z-10">
          <p className="text-stone-400 text-sm mb-2 font-mono">{item.category}</p>
          <TextReveal className="text-2xl text-stone-100 leading-none"
            style={{
              fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 500
            }}
          >
            {item.title}
          </TextReveal>
        </div>

        <div className="absolute top-4 right-4 bg-gradient-to-br from-lime-500 to-emerald-500 text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-xl z-20">
          <ArrowUpRight size={24} />
        </div>
      </div>

      <div className="flex justify-between items-start border-t border-stone-800 pt-4">
        <p className="text-stone-500 text-sm line-clamp-2 md:w-3/4">
          {item.shortDesc}
        </p>
        <span className="text-stone-600 text-xs border border-stone-800 px-2 py-1 rounded-full">{item.year}</span>
      </div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const [activeCase, setActiveCase] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-16 bg-stone-950 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-stone-800 pb-8">
        <div className="max-w-2xl">
          <TextReveal
            className="text-4xl md:text-7xl font-semibold tracking-tight uppercase mb-2 text-stone-200"
            style={{
              fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Истории Исцеления
          </TextReveal>
        </div>

        <span className="text-stone-500 mt-4 md:mt-0 flex items-center gap-2"
          style={{
            fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 300
          }}
        >
          <Sparkles size={16} className="text-yellow-600" /> Реальные кейсы
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {PROJECTS.map((item, index) => (
          <WorkItem key={item.id} item={item} index={index} onClick={() => setActiveCase(item)} />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm flex justify-center items-center p-4"
            onClick={() => setActiveCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-stone-900 border border-stone-800 w-full max-w-2xl p-6 md:p-12 relative overflow-y-auto max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors bg-stone-800 rounded-full p-2"
                onClick={() => setActiveCase(null)}
              >
                <X size={24} />
              </button>

              <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">
                {activeCase.category}
              </span>

              <h3
                className="text-2xl md:text-4xl text-white mb-8 leading-tight"
                style={{
                  fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600
                }}
              >
                {activeCase.title}
              </h3>

              <div className="space-y-6 text-stone-300 font-light text-base md:text-lg leading-relaxed">
                <div className="bg-stone-950/50 p-6 rounded-lg border-l-2 border-red-900/50">
                  <h4
                    className="text-stone-100 font-medium mb-2 text-xl"
                    style={{
                      fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Проблема:
                  </h4>
                  <p>{activeCase.shortDesc}</p>
                </div>

                <div className="bg-stone-950/50 p-6 rounded-lg border-l-2 border-green-900/50">
                  <h4
                    className="text-stone-100 font-medium mb-2 text-xl"
                    style={{
                      fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Решение:
                  </h4>
                  <p>{activeCase.fullStory}</p>
                </div>
              </div>

              <button
                onClick={() => { setActiveCase(null); window.location.href = 'https://t.me/starunstyle'; }}
                className="mt-10 w-full py-5 bg-gradient-to-r from-lime-500 to-emerald-500 text-black font-medium hover:from-lime-400 hover:to-emerald-400 transition-all transform hover:scale-[1.02] uppercase tracking-widest text-sm rounded-full flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(132,204,22,0.5)] hover:shadow-[0_0_60px_rgba(132,204,22,0.7)]"
              >
                <span>Хочу такой же результат</span>
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;