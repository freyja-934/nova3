'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { title: 'Discover', description: 'We talk through your goals, users, budget, and timeline.' },
  { title: 'Plan', description: 'You get a clear scope, technical approach, and estimate before work starts.' },
  { title: 'Build', description: 'Development in short iterations with regular demos and updates.' },
  { title: 'Launch & Support', description: 'Deployment, handoff, documentation, and ongoing support if you need it.' },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-nova-dark/60 to-transparent" />
      <div className="section-padding" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              A simple, transparent process from first call to launch.
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <span className="font-display text-3xl font-bold gradient-text">0{index + 1}</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
