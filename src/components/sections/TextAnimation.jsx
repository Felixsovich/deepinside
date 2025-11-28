'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const words = ['ПРОШЛЫЕ ЖИЗНИ', 'ДУХОВНЫЙ РОСТ', 'САМОПОЗНАНИЕ', 'ТРАНСФОРМАЦИЯ']

export default function TextAnimation() {
  const containerRef = useRef(null)
  const wordsRef = useRef([])
  const videoRef = useRef(null)
  const videoOverlayRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const viewportHeight = window.innerHeight
      const wordSpacing = viewportHeight * 0.16
      const startY = viewportHeight * 0.1

      // Начальное состояние текста
      gsap.set(wordsRef.current, {
        y: viewportHeight + 400,
        opacity: 0,
        x: 0,
        filter: 'blur(30px) brightness(2.5)',
        scale: 0.5
      })

      // Начальное состояние видео - полностью скрыто
      gsap.set(videoRef.current, {
        opacity: 0,
        scale: 1.1
      })

      gsap.set(videoOverlayRef.current, {
        opacity: 0.8
      })

      const masterTL = gsap.timeline()

      // Анимация появления текста
      words.forEach((_, index) => {
        const startTime = index * 1.2

        masterTL.to(wordsRef.current[index], {
          y: startY + wordSpacing * index,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px) brightness(1)',
          duration: 3,
          ease: "power2.out"
        }, startTime)

        masterTL.fromTo(wordsRef.current[index],
          { textShadow: '0 0 0px rgba(255,255,255,0)' },
          {
            textShadow: '0 0 40px rgba(255,255,255,0.8)',
            duration: 1.5,
            ease: "power1.inOut",
            repeat: 1,
            yoyo: true
          }, startTime + 0.5)
      })

      // Сдвиг текста
      masterTL.to(wordsRef.current, {
        x: -160,
        duration: 2.8,
        ease: "power2.inOut",
        stagger: { each: 0.2, from: "start" }
      }, "+=0.3")

      // ПОСЛЕ текста появляется видео
      masterTL.to(videoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power2.out"
      }, "+=0.5")

      // Затемнение становится менее интенсивным
      masterTL.to(videoOverlayRef.current, {
        opacity: 0.4,
        duration: 2,
        ease: "power2.out"
      }, "-=2")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative overflow-hidden"
      style={{ paddingLeft: '20rem' }}
    >
      {/* Видео фон - ОБЯЗАТЕЛЬНО добавляем video элемент */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0 }}
      >
        <source src="/videos/forest_01.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Затемнение для читаемости текста */}
      <div
        ref={videoOverlayRef}
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: 0.8 }}
      ></div>

      {/* Текст поверх всего */}
      <div className="relative z-20 h-full">
        {words.map((word, index) => (
          <div
            key={word}
            ref={el => wordsRef.current[index] = el}
            className="absolute text-left transform-gpu"
            style={{
              fontSize: '7vw',
              lineHeight: '0.5',
              fontWeight: '900',
              color: 'var(--white)',
              textTransform: 'uppercase',
              width: '90%',
              letterSpacing: '0.01em',
              marginBottom: '0.5rem',
              willChange: 'transform, opacity, filter, text-shadow'
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  )
}