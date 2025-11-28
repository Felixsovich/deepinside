'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ['ПРОШЛЫЕ ЖИЗНИ', 'ДУХОВНЫЙ РОСТ', 'САМОПОЗНАНИЕ', 'ТРАНСФОРМАЦИЯ']

export default function SheetII() {
  const [animationPhase, setAnimationPhase] = useState('enter') // 'enter' | 'move' | 'static'
  const [visibleWords, setVisibleWords] = useState([])

  useEffect(() => {
    // Фаза появления слов
    const enterTimer = setTimeout(() => {
      setVisibleWords(words)
      setTimeout(() => {
        setAnimationPhase('move')
      }, 1000)
    }, 500)

    return () => clearTimeout(enterTimer)
  }, [])

  return (
    <section className="min-h-screen bg-black text-white relative pl-20"> {/* pl-20 для отступа под панель */}
      
      {/* Анимированные слова */}
      <div className="h-screen flex items-center justify-center relative">
        <AnimatePresence>
          {visibleWords.map((word, index) => (
            <motion.div
              key={word}
              className={`absolute ${
                animationPhase === 'enter' ? 'text-6xl' : 
                animationPhase === 'move' ? 'text-4xl' : 'text-2xl'
              } font-bold`}
              initial={{ 
                opacity: 0, 
                y: 100,
                x: 0
              }}
              animate={{
                opacity: 1,
                y: animationPhase === 'enter' ? 0 : -100,
                x: animationPhase === 'enter' ? 0 : -300
              }}
              transition={{
                duration: 1,
                delay: animationPhase === 'enter' ? index * 0.3 : index * 0.1,
                ease: "easeOut"
              }}
              onAnimationComplete={() => {
                if (index === words.length - 1 && animationPhase === 'move') {
                  setTimeout(() => setAnimationPhase('static'), 500)
                }
              }}
            >
              {word}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Контент после анимации */}
      <AnimatePresence>
        {animationPhase === 'static' && (
          <motion.div
            className="absolute inset-0 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Левая часть - статичные слова */}
            <div className="w-1/2 p-8 flex flex-col justify-center space-y-8">
              {words.map((word, index) => (
                <motion.h3
                  key={word}
                  className="text-3xl font-bold text-gray-400 hover:text-white cursor-pointer transition-colors"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {word}
                </motion.h3>
              ))}
            </div>

            {/* Правая часть - контент */}
            <div className="w-1/2 p-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <h2 className="text-5xl font-bold mb-8">Глубинное познание</h2>
                <p className="text-xl text-gray-300 max-w-md">
                  Путешествие вглубь подсознания для раскрытия вашего потенциала 
                  и понимания истинного предназначения
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}