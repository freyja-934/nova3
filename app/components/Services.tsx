'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { services } from '../data/services'


export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 relative">
      <div className="section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              What I <span className="gradient-text">Build</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end software development for startups and small businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="h-1 w-10 mb-4 rounded-full bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end" />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
