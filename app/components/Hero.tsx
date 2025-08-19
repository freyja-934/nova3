'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-nova-darker/50 via-nova-darker/70 to-nova-darker" />
        
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center section-padding">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
              <span className="block">Building the Future of</span>
              <span className="block gradient-text">Web3 Infrastructure</span>
            </h1>
          </motion.div>

          {/* Animated Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Premium Web3 experiences for creators, founders, and platforms. 
            From smart contracts to full-stack dApps, we bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              View Our Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 glass-effect rounded-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Start a Project
            </motion.button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {['Solana', 'Ethereum', 'Smart Contracts', 'NFT Platforms', 'DeFi', 'Web3 UX'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="px-4 py-2 glass-effect rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
