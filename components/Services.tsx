
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Plus } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-stone-900 text-stone-100">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-serif">НАШИ ПРАКТИКИ</h2>
        <div className="w-full h-[1px] bg-stone-700" />
      </div>

      <div className="flex flex-col">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            className="border-b border-stone-800 py-12 group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div className="flex items-baseline gap-6 mb-4 md:mb-0">
                <span className="text-stone-500 font-mono text-sm">0{service.id}</span>
                <h3 className="text-3xl md:text-5xl font-semibold group-hover:text-stone-400 transition-colors duration-300 font-serif">
                  {service.title}
                </h3>
              </div>
              
              <motion.div 
                className="hidden md:block"
                animate={{ rotate: activeService === service.id ? 45 : 0 }}
              >
                <Plus size={32} className="text-stone-600" />
              </motion.div>
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: activeService === service.id ? 'auto' : 0,
                opacity: activeService === service.id ? 1 : 0
              }}
              className="overflow-hidden"
            >
              <div className="pt-6 md:pl-12 flex flex-col md:flex-row gap-8">
                <p className="text-xl md:w-1/2 text-stone-400 font-light">{service.description}</p>
                <div className="flex flex-wrap gap-2 md:w-1/2">
                    {service.tags.map(tag => (
                        <span key={tag} className="border border-stone-700 rounded-full px-4 py-1 text-sm text-stone-300 uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
