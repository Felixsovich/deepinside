'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const constraintsRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section ref={constraintsRef} className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-7xl md:text-9xl font-bold mb-8"
          variants={itemVariants}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
        >
          DEEP INSIDE
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We create digital experiences that blur the line between art and technology
        </motion.p>

        <motion.div
          className="mt-12"
          variants={itemVariants}
        >
          <motion.button
            className="border-2 border-white px-8 py-4 text-lg rounded-none"
            whileHover={{ 
              backgroundColor: "#ffffff", 
              color: "#000000",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View Work
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}