import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, X } from 'lucide-react';

const Work: React.FC = () => {
  const [fullscreenProject, setFullscreenProject] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-16 bg-stone-950">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-stone-800 pb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter font-serif">
          ИЗБРАННЫЕ РАБОТЫ
        </h2>
        <span className="text-stone-500 mt-4 md:mt-0 font-serif">(2023 — 2024)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div
              className="overflow-hidden mb-6 aspect-[4/5] md:aspect-[3/4] relative cursor-pointer"
              onClick={() => project.html && setFullscreenProject(project.html)}
            >
              {project.html ? (
                <motion.iframe
                  src={project.html}
                  className="w-full h-full border-none transition-transform duration-700 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute top-4 right-4 bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="flex justify-between items-start border-t border-stone-800 pt-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-1 font-serif">{project.title}</h3>
                <p className="text-stone-500 text-sm uppercase tracking-wider">{project.category}</p>
              </div>
              <span className="text-stone-500 text-sm font-serif">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenProject && (
        <div className="fixed inset-0 z-50 bg-black/95 flex justify-center items-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 z-50"
            onClick={() => setFullscreenProject(null)}
          >
            <X size={28} />
          </button>
          <iframe
            src={fullscreenProject}
            className="w-full h-full max-w-[90vw] max-h-[90vh] border-none"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      )}
    </section>
  );
};

export default Work;
