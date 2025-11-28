'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const handleMouseEnter = (e) => {
      if (e.target.closest('.cursor-pointer') || e.target.closest('.side-panel')) {
        setIsPointer(true)
      }
    }

    const handleMouseLeave = () => {
      setIsPointer(false)
    }

    window.addEventListener('mousemove', mouseMove)
    
    // Добавляем обработчики для всей панели
    const sidePanel = document.querySelector('.side-panel')
    if (sidePanel) {
      sidePanel.addEventListener('mouseenter', handleMouseEnter)
      sidePanel.addEventListener('mouseleave', handleMouseLeave)
    }

    const clickableElements = document.querySelectorAll('.cursor-pointer')
    clickableElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      if (sidePanel) {
        sidePanel.removeEventListener('mouseenter', handleMouseEnter)
        sidePanel.removeEventListener('mouseleave', handleMouseLeave)
      }
      clickableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    pointer: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
    }
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={isPointer ? "pointer" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-outline fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={isPointer ? "pointer" : "default"}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      />
    </>
  )
}