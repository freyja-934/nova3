'use client'

import { motion } from 'framer-motion'

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Cloud & APIs']

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-nova-gradient-start/20 via-nova-darker to-nova-gradient-end/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-nova-gradient-start/25 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nova-gradient-end/25 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="section-padding w-full pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
        >
          <span className="block">Software Development</span>
          <span className="block gradient-text animated-gradient pb-3">Consulting</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Custom web applications, APIs, and automation built by an experienced software engineer. From idea to
          launch, with clean code and clear communication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
          >
            Start a Project
          </button>
          <button
            onClick={() => scrollTo('#services')}
            className="w-full sm:w-auto px-8 py-4 glass-effect rounded-lg font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View Services
          </button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {stack.map((tech) => (
            <li key={tech} className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-gray-200">
              {tech}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
