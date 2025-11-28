'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const menuItems = [
  { id: 1, title: 'РЕГРЕССИЯ', target: 0, rune: 'ᚠ' },
  { id: 2, title: 'НАПРАВЛЕНИЯ', target: 1, rune: 'ᚢ' },
  { id: 3, title: 'МЕТОДЫ', target: 2, rune: 'ᚦ' },
  { id: 4, title: 'СЕАНСЫ', target: 3, rune: 'ᚨ' },
  { id: 5, title: 'ОТЗЫВЫ', target: 4, rune: 'ᚱ' },
  { id: 6, title: 'КОНТАКТЫ', target: 5, rune: 'ᚲ' }
]

export default function SidePanel({ currentSection, setCurrentSection }) {
  const [hoveredItem, setHoveredItem] = useState(null)

  const scrollToSection = (targetIndex) => {
    setCurrentSection(targetIndex)
  }

  return (
    <motion.div
      className="fixed left-0 top-0 h-full w-24 z-50 flex flex-col items-center py-8 cursor-pointer side-panel"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      style={{ background: 'var(--black)' }}
      onMouseEnter={() => setHoveredItem(null)}
    >
      {/* Логотип */}
      <motion.div
        className="mb-12 font-bold text-xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        style={{ color: 'var(--white)' }}
        onClick={() => scrollToSection(0)}
      >
        DI
      </motion.div>

      {/* Меню */}
      <div className="flex flex-col space-y-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => scrollToSection(item.target)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          >
            {/* Рунный символ */}
            <motion.div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold relative"
              whileHover={{
                scale: 1.3,
                backgroundColor: 'var(--dark-cyan)',
                borderColor: 'var(--dark-cyan)'
              }}
              whileTap={{ scale: 0.9 }}
              style={{
                borderColor: currentSection === item.target ? 'var(--orange)' : 'var(--white)',
                color: 'var(--white)',
                backgroundColor: currentSection === item.target ? 'var(--dark-cyan)' : 'transparent'
              }}
            >
              {item.rune}

              {/* Индикатор текущей секции */}
              {currentSection === item.target && (
                <motion.div
                  className="absolute -right-1 -top-1 w-3 h-3 rounded-full"
                  style={{ background: 'var(--orange)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>

            {/* Выпадающий текст */}
            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.div
                  className="absolute left-16 top-1/2 transform -translate-y-1/2 px-4 py-2 whitespace-nowrap border"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'var(--black)',
                    borderColor: 'var(--dark-cyan)',
                    color: 'var(--white)'
                  }}
                >
                  <span className="text-sm">{item.title}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}