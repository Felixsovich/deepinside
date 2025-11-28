'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Project One', category: 'Web Design' },
  { id: 2, title: 'Project Two', category: 'Development' },
  { id: 3, title: 'Project Three', category: 'Branding' },
]

export default function Projects() {
  return (
    <section className="min-h-screen p-8">
      <motion.h2 
        className="text-6xl font-bold mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Selected Work
      </motion.h2>
      
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-96 bg-gray-800 mb-4"></div>
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <p className="text-xl text-gray-400">{project.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}