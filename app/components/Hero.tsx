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
    <section className="relative h-screen w-full overflow-hidden noise-overlay">
      {/* Video Background - Fixed, no animations */}
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
        
        {/* Static Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-nova-darker/50 via-nova-darker/70 to-nova-darker" />
        
        {/* Additional effects - Static */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-nova-darker/50" />
      </div>

      {/* Content - Full width on mobile */}
      <div className="relative z-10 h-full flex items-center justify-center px-0 sm:px-8 md:px-16 lg:px-24 pt-20 sm:pt-28 md:pt-32">
        <div className="text-center max-w-5xl mx-auto w-full">
          {/* Animated Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 px-2 sm:px-0">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Building the Future of
              </motion.span>
              <motion.span 
                className="block gradient-text animated-gradient"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Web3 Infrastructure
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Premium Web3 experiences for creators, founders, and platforms. 
            From smart contracts to full-stack dApps, we bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(153, 69, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <span className="relative z-10">View Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-nova-gradient-end to-nova-gradient-start"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "rgba(153, 69, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-lg font-semibold text-white hover:bg-white/10 transition-all border-2 border-transparent relative overflow-hidden group"
            >
              <span className="relative z-10">Start a Project</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-nova-gradient-start/20 to-nova-gradient-end/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0"
          >
            {['Solana', 'Ethereum', 'Smart Contracts', 'NFT Platforms', 'DeFi', 'Web3 UX'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 0 20px rgba(20, 241, 149, 0.3)"
                }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 glass-effect rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer group"
          onClick={() => scrollToSection('#about')}
          whileHover={{ scale: 1.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-nova-gradient-start to-nova-gradient-end rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
            />
            <svg
              className="w-6 h-6 text-white/70 group-hover:text-white transition-colors relative"
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
