'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import TextAnimation from './TextAnimation'

const sections = [
  { id: 1, bgColor: 'var(--black)', title: 'РЕГРЕССИЯ' },
  { id: 2, bgColor: 'var(--green)', title: 'НАПРАВЛЕНИЯ' },
  { id: 3, bgColor: 'var(--blue)', title: 'МЕТОДЫ' },
  { id: 4, bgColor: 'var(--dark-cyan)', title: 'СЕАНСЫ' },
  { id: 5, bgColor: 'var(--orange)', title: 'ОТЗЫВЫ' },
  { id: 6, bgColor: 'var(--blushing-silk)', title: 'КОНТАКТЫ' }
]

export default function HorizontalScroll({ currentSection, setCurrentSection }) {
  const containerRef = useRef(null)

  const handleWheel = useCallback((e) => {
    e.preventDefault()
    if (e.deltaY > 0) {
      setCurrentSection(prev => Math.min(prev + 1, sections.length - 1))
    } else {
      setCurrentSection(prev => Math.max(prev - 1, 0))
    }
  }, [setCurrentSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: () => -currentSection * window.innerWidth,
        duration: 1.5,
        ease: "power2.inOut"
      })
    })

    return () => ctx.revert()
  }, [currentSection])

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  return (
    <div className="horizontal-scroll-container">
      <div
        ref={containerRef}
        className="horizontal-scroll flex"
        style={{ width: `${sections.length * 100}vw` }}
      >
        <section
          className="horizontal-section relative overflow-hidden"
          style={{ background: sections[0].bgColor }}
        >
          <TextAnimation />

          <h1
            className="text-4xl lg:text-6xl font-bold absolute bottom-8 right-8 z-20"
            style={{ color: 'var(--white)' }}
          >
            {sections[0].title}
          </h1>
        </section>

        {sections.slice(1).map((section, index) => (
          <section
            key={section.id}
            className="horizontal-section flex items-center justify-center relative"
            style={{ background: section.bgColor }}
          >
            <div className="section-gradient" />

            <h1
              className="text-6xl lg:text-8xl font-bold text-center px-8"
              style={{
                color: section.id === 6 ? 'var(--black-font)' : 'var(--white)'
              }}
            >
              {section.title}
            </h1>
          </section>
        ))}
      </div>
    </div>
  )
}