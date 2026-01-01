import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';

const SEO_SERVICES = [
  {
    id: 1,
    title: "Регрессия в прошлые жизни",
    description: "Глубинное погружение в память души. Мы найдем корень ваших повторяющихся сценариев, страхов и кармических узлов в прошлых воплощениях, чтобы развязать их в настоящем.",
    tags: ["Карма", "Память души", "Дежавю", "Предназначение"]
  },
  {
    id: 2,
    title: "Терапия Психосоматики",
    description: "Болезнь — это разговор тела с вами. Я помогаю расшифровать этот язык. Убираем эмоциональные зажимы и старые обиды, которые стали причиной физических недугов.",
    tags: ["Здоровье", "Исцеление", "Блоки в теле", "Энергия"]
  },
  {
    id: 3,
    title: "Проработка Родовых Сценариев",
    description: "Вы не обязаны нести тяжесть ошибок ваших предков. Сеанс позволяет восстановить поток любви в родовой системе, принять силу рода и отпустить чужие программы.",
    tags: ["Сила рода", "Отношения", "Семья", "Денежный поток"]
  },
  {
    id: 4,
    title: "Эволюция Сознания (Наставничество)",
    description: "Комплексная работа для тех, кто готов к квантовому скачку. Персональное сопровождение, гипнотерапия и духовные практики для выхода на новый уровень жизни.",
    tags: ["Коучинг", "Рост", "Бизнес", "Миссия"]
  }
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-stone-900 text-stone-100">
      <div className="mb-20">
        <h2
          className="text-4xl md:text-7xl font-semibold tracking-tight mb-6 uppercase"
          style={{
            fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 600
          }}
        >
          Сеансы Трансформации
        </h2>
        <div className="w-full h-[1px] bg-stone-700" />
      </div>

      <div className="flex flex-col">
        {SEO_SERVICES.map((service) => (
          <motion.div
            key={service.id}
            className="border-b border-stone-800 py-12 group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div className="flex items-baseline gap-6 mb-4 md:mb-0">
                <span className="text-stone-500 font-mono text-sm">0{service.id}</span>
                <h3
                  className="text-2xl md:text-5xl font-medium group-hover:text-lime-400 transition-colors duration-300"
                  style={{
                    fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 500
                  }}
                >
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
                <p
                  className="text-lg md:text-xl md:w-1/2 text-stone-300 font-light leading-relaxed"
                  style={{
                    fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 300
                  }}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 md:w-1/2 content-start">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="border border-stone-600 rounded-full px-4 py-1 text-xs md:text-sm text-stone-400 uppercase tracking-wider hover:bg-stone-800 hover:border-violet-500/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Яркая CTA кнопка */}
              <div className="mt-8 md:pl-12">
                <a
                  href="https://t.me/starunstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-105"
                >
                  <span>Записаться на сеанс</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;