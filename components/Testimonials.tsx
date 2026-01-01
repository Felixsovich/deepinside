import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Анна М.",
    role: "Маркетолог, 32 года",
    text: "После одного сеанса я поняла, откуда растут мои страхи перед деньгами. Мы проработали родовую программу, и за 3 месяца мой доход вырос в 2 раза. Это не магия — это работа с подсознанием.",
    rating: 5
  },
  {
    id: 2,
    name: "Дмитрий К.",
    role: "Предприниматель, 41 год",
    text: "Я скептик по жизни, но регрессия показала мне то, о чём я не мог знать сознательно. Ушли панические атаки, которые мучили 10 лет. Рекомендую всем, кто устал лечить симптомы.",
    rating: 5
  },
  {
    id: 3,
    name: "Елена С.",
    role: "Психолог, 38 лет",
    text: "Я сама работаю с людьми, но никогда не видела настолько глубокого подхода. Регрессия — это не просто терапия, это путь к своей истинной сути. Благодарна за опыт.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-stone-950 via-violet-950/20 to-stone-950 relative overflow-hidden">
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Заголовок */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-7xl font-semibold tracking-tight mb-6 uppercase"
            style={{ 
              fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Они уже <br className="md:hidden" />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              изменили реальность
            </span>
          </h2>
          <p 
            className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto"
            style={{ 
              fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 300
            }}
          >
            Реальные истории людей, прошедших путь трансформации
          </p>
        </motion.div>

        {/* Карточки отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              
              {/* Иконка цитаты */}
              <div className="flex items-start justify-between mb-6">
                <Quote size={32} className="text-violet-400 opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>

              {/* Текст отзыва */}
              <p 
                className="text-stone-300 leading-relaxed mb-6"
                style={{ 
                  fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 300
                }}
              >
                {testimonial.text}
              </p>

              {/* Автор */}
              <div className="border-t border-stone-800 pt-4">
                <p 
                  className="font-medium text-white mb-1"
                  style={{ 
                    fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {testimonial.name}
                </p>
                <p 
                  className="text-sm text-stone-500"
                  style={{ 
                    fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 300
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Статистика */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { number: "500+", label: "Сеансов проведено" },
            { number: "98%", label: "Довольных клиентов" },
            { number: "5 лет", label: "Опыта практики" },
            { number: "24/7", label: "Поддержка" }
          ].map((stat, index) => (
            <div key={index} className="border-l border-violet-500/30 pl-4">
              <div 
                className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                style={{ 
                  fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 700
                }}
              >
                {stat.number}
              </div>
              <div 
                className="text-stone-500 text-sm uppercase tracking-wider"
                style={{ 
                  fontFamily: '"InterTight", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 400
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;