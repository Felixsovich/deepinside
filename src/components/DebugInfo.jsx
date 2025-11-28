'use client'

import { useEffect } from 'react'

export default function DebugInfo() {
  useEffect(() => {
    // Проверяем что GSAP загружен
    console.log('GSAP loaded:', window.gsap)
    
    // Проверяем элементы
    setTimeout(() => {
      const words = document.querySelectorAll('[class*="absolute"]')
      console.log('Found word elements:', words.length)
      words.forEach((word, i) => {
        console.log(`Word ${i}:`, word.textContent, word.style.transform)
      })
    }, 1000)
  }, [])

  return null
}