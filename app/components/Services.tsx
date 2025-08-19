'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const services = {
  infrastructure: {
    title: 'Web3 Infrastructure',
    icon: '🏗️',
    items: [
      {
        name: 'Smart Contract Development',
        description: 'Custom Solana and Ethereum smart contracts with security-first approach',
      },
      {
        name: 'Token Launch Systems',
        description: 'Complete token economics, launch mechanics, and distribution systems',
      },
      {
        name: 'Staking Portals',
        description: 'Custom staking systems with rewards, multipliers, and governance',
      },
      {
        name: 'DeFi Protocols',
        description: 'Yield farming, liquidity pools, and automated market makers',
      },
    ],
  },
  platforms: {
    title: 'NFT Platforms',
    icon: '🎨',
    items: [
      {
        name: 'Minting Websites',
        description: 'Beautiful, conversion-optimized minting experiences',
      },
      {
        name: 'Collection Portals',
        description: 'Token-gated websites with holder benefits and utilities',
      },
      {
        name: 'Marketplace Integration',
        description: 'Seamless integration with Magic Eden, OpenSea, and more',
      },
      {
        name: 'Rarity Systems',
        description: 'Dynamic rarity calculations and trait-based rewards',
      },
    ],
  },
  experiences: {
    title: 'Interactive Experiences',
    icon: '🎮',
    items: [
      {
        name: 'Gamification Systems',
        description: 'Raffles, spin wheels, and reward mechanics',
      },
      {
        name: 'Gated Content',
        description: 'NFT-based access to exclusive content and features',
      },
      {
        name: 'Community Tools',
        description: 'DAO voting, proposals, and treasury management',
      },
      {
        name: 'Analytics Dashboards',
        description: 'Real-time insights into collection performance',
      },
    ],
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('infrastructure')

  return (
    <section id="services" className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nova-dark/50 to-transparent" />
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
              What We <span className="gradient-text">Build</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              End-to-end Web3 solutions tailored to your project&apos;s unique needs
            </motion.p>
          </div>

          {/* Tabs Component */}
          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            {/* Tab List */}
            <Tabs.List className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              {Object.entries(services).map(([key, service], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Tabs.Trigger
                    value={key}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end text-white shadow-lg'
                        : 'glass-effect hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl mr-2">{service.icon}</span>
                    {service.title}
                  </Tabs.Trigger>
                </motion.div>
              ))}
            </Tabs.List>

            {/* Tab Content */}
            {Object.entries(services).map(([key, service]) => (
              <Tabs.Content key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {service.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all group"
                    >
                      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
                        {item.name}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </Tabs.Content>
            ))}
          </Tabs.Root>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-400 mb-6">
              Don&apos;t see what you need? We love custom challenges.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Let&apos;s Build Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
