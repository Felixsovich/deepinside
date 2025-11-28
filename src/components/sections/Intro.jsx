'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const horizontalScrollRef = useRef(null)

  useEffect(() => {
    const handleWheel = (e) => {
      if (horizontalScrollRef.current) {
        if (e.deltaY > 0) {
          // Скролл вниз - переходим к следующему листу
          setTimeout(() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })
          }, 500)
        }
      }
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section 
      ref={horizontalScrollRef}
      className="h-screen flex items-center justify-center bg-black overflow-hidden relative"
    >
      {/* Бегущая строка */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap text-8xl font-bold"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <span className="mx-8 text-gray-400">ПРОШЛЫЕ ЖИЗНИ</span>
          <span className="mx-8 text-gray-400">ДУХОВНЫЙ РОСТ</span>
          <span className="mx-8 text-gray-400">САМОПОЗНАНИЕ</span>
          <span className="mx-8 text-gray-400">ТРАНСФОРМАЦИЯ</span>
          <span className="mx-8 text-gray-400">ПРОШЛЫЕ ЖИЗНИ</span>
          <span className="mx-8 text-gray-400">ДУХОВНЫЙ РОСТ</span>
          <span className="mx-8 text-gray-400">САМОПОЗНАНИЕ</span>
          <span className="mx-8 text-gray-400">ТРАНСФОРМАЦИЯ</span>
        </motion.div>
      </div>

      {/* Центральный текст */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-8">DEEP INSIDE</h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Путешествие вглубь себя
        </p>
      </motion.div>

      {/* Индикатор скролла */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}