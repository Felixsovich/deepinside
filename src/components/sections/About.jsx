'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="min-h-screen p-8 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-6xl font-bold mb-8">About Us</h2>
        <p className="text-2xl leading-relaxed">
          Deep Inside is a creative studio that specializes in pushing the boundaries 
          of digital experiences. We blend cutting-edge technology with artistic 
          vision to create immersive web experiences.
        </p>
      </motion.div>
    </section>
  )
}