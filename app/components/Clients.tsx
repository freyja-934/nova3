'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const clients = [
  { name: 'Coinbase', logo: '/assets/project-logos/coinbase-logo-black-and-white.png', featured: true },
  { name: 'Magic Eden', logo: '/assets/project-logos/magic-eden-logo.png', featured: true },
  { name: 'Catalina Whale Mixer', logo: null, featured: true },
  { name: 'House of Pranksy', logo: null, featured: false },
  { name: 'Glacis Labs', logo: '/assets/project-logos/glacis-logo.svg', featured: false },
  { name: 'Sol Yetis', logo: '/assets/project-logos/sol-yetis-logo.png', featured: false },
  { name: 'Yeah Tigers', logo: '/assets/project-logos/yeah-tigers.png', featured: false },
  { name: 'Baby Ape Social Club', logo: null, featured: false },
  { name: 'Degen Dojos', logo: null, featured: false },
  { name: 'Balloonsville', logo: '/assets/project-logos/balloonsville-logo.svg', featured: false },
  { name: 'Maxis', logo: null, featured: false },
  { name: 'Metaforge', logo: '/assets/project-logos/metaforge-logo-svg.png', featured: false },
  { name: 'Otaku', logo: '/assets/project-logos/otaku-logo.png', featured: false },
  { name: 'Bubblegoose Ballers', logo: null, featured: false },
  { name: 'Icarus', logo: '/assets/project-logos/icarus-logo.png', featured: false },
  { name: 'Shrouded Playground', logo: null, featured: false },
  { name: 'Wise Whales', logo: '/assets/project-logos/wise-whales.png', featured: false },
  { name: 'Sooshi DAO', logo: '/assets/project-logos/sooshi-dao-logo.png', featured: false },
]

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/section-background.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nova-darker via-nova-darker/95 to-nova-darker" />
      </div>

      <div className="section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              From Fortune 500 companies to innovative Web3 projects
            </motion.p>
          </div>

          {/* Featured Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              Featured Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clients.filter(client => client.featured).map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-effect p-8 rounded-xl flex items-center justify-center hover:bg-white/5 transition-all group"
                >
                  {client.logo ? (
                    <div className="relative w-48 h-20 filter grayscale group-hover:grayscale-0 transition-all">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  ) : (
                    <h4 className="font-display font-semibold text-2xl text-gray-400 group-hover:gradient-text transition-all">
                      {client.name}
                    </h4>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Clients Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              All Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.7 + (index * 0.05) }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-lg flex items-center justify-center h-24 hover:bg-white/5 transition-all group cursor-pointer"
                >
                  {client.logo ? (
                    <div className="relative w-full h-12 filter grayscale group-hover:grayscale-0 transition-all">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                        style={{ filter: 'brightness(0) invert(1) opacity(0.6)' }}
                      />
                    </div>
                  ) : (
                    <h5 className="font-medium text-sm text-gray-500 group-hover:text-white transition-colors text-center">
                      {client.name}
                    </h5>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 glass-effect px-8 py-4 rounded-full">
              <div>
                <span className="text-2xl font-bold gradient-text">{clients.length}+</span>
                <span className="text-gray-400 ml-2">Happy Clients</span>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div>
                <span className="text-2xl font-bold gradient-text">100%</span>
                <span className="text-gray-400 ml-2">Satisfaction Rate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
