'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-0 w-96 h-96 bg-nova-gradient-start/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-nova-gradient-end/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
            >
              The <span className="gradient-text">Origin Story</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end mx-auto"
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div 
                className="glass-effect p-6 sm:p-8 rounded-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-nova-gradient-start/5 to-nova-gradient-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4 gradient-text">
                  Founded by Casey Charlesworth
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nova 3 was founded by Casey Charlesworth, a veteran full stack engineer with deep expertise in Web3, Solana, Ethereum, and scalable dApp architecture.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  After contributing to major projects like <span className="text-white font-semibold">Coinbase&apos;s NFT marketplace beta</span> and founding the <span className="text-white font-semibold">Catalina Whale Mixer</span> collection, Casey launched Nova 3 to serve creators, founders, and platforms who need polished, reliable Web3 infrastructure and experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With a strong focus on UX/UI and CMS-enabled sites, Casey has built award-nominated staking portals, interactive gated content readers, token launchers, and full Web3 platforms for over a dozen collections and startups.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="glass-effect p-6 rounded-xl text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2 number-animate">
                    <AnimatedCounter value={15} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Major Clients</div>
                </motion.div>
                <motion.div 
                  className="glass-effect p-6 rounded-xl text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2 number-animate">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projects Delivered</div>
                </motion.div>
                <motion.div 
                  className="glass-effect p-6 rounded-xl text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2 number-animate">
                    $<AnimatedCounter value={100} suffix="M+" />
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">TVL Secured</div>
                </motion.div>
                <motion.div 
                  className="glass-effect p-6 rounded-xl text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2 number-animate">
                    <AnimatedCounter value={2021} />
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Founded</div>
                </motion.div>
              </div>

              {/* Key Achievements */}
              <motion.div 
                className="glass-effect p-6 rounded-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="font-display font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {[
                    "Contributed to Coinbase NFT Marketplace Beta launch",
                    "Preferred developer for Magic Eden creator referrals",
                    "Built custom staking systems securing millions in TVL",
                    "Published Web3 thought leadership on Medium"
                  ].map((achievement, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <motion.svg 
                        className="w-5 h-5 text-nova-gradient-end mt-0.5 mr-3 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </motion.svg>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
