'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 'coinbase-nft',
    name: 'Coinbase NFT Marketplace',
    client: 'Coinbase',
    category: 'platform',
    description: 'Contributed to the beta launch infrastructure, UI flows, and early feature architecture.',
    tags: ['React', 'TypeScript', 'Web3', 'NFT'],
    featured: true,
    logo: '/assets/project-logos/coinbase-logo-black-and-white.png',
  },
  {
    id: 'house-of-pranksy',
    name: 'House of Pranksy',
    client: 'Pranksy',
    category: 'nft',
    description: 'Custom CMS-powered minting website with NFT/Discord role gating and SeaDrop contract integration.',
    tags: ['Next.js', 'Solidity', 'Discord', 'CMS'],
    featured: true,
  },
  {
    id: 'catalina-whale-mixer',
    name: 'Catalina Whale Mixer',
    client: 'Self (Founder)',
    category: 'nft',
    description: 'Co-founded and built portal with staking, rewards, and long-term holder benefits.',
    tags: ['Solana', 'Rust', 'Staking', 'DeFi'],
    featured: true,
  },
  {
    id: 'glacis-airlift',
    name: 'Glacis Labs - Airlift',
    client: 'Glacis Labs',
    category: 'defi',
    description: 'Secure airdrop delivery system tailored for multi-token community rewards.',
    tags: ['Smart Contracts', 'Airdrops', 'Security'],
    logo: '/assets/project-logos/glacis-logo.svg',
  },
  {
    id: 'magic-eden-projects',
    name: 'Magic Eden Creator Portal',
    client: 'Magic Eden',
    category: 'platform',
    description: 'Built token-gated sites, staking portals, raffles, and claim UIs for referred creators.',
    tags: ['Solana', 'NFT', 'Staking', 'UI/UX'],
    logo: '/assets/project-logos/magic-eden-logo.png',
  },
  {
    id: 'baby-ape-social-club',
    name: 'Baby Ape Social Club',
    client: 'BASC',
    category: 'nft',
    description: 'Complete ecosystem: staking system, raffle app, spin-the-wheel roulette, and landing page.',
    tags: ['Gamification', 'Staking', 'Web3'],
  },
  {
    id: 'sol-yetis',
    name: 'Sol Yetis',
    client: 'Sol Yetis',
    category: 'nft',
    description: 'Raffle system with reward UI and interactive roulette wheel prize app.',
    tags: ['Solana', 'Gaming', 'Rewards'],
    logo: '/assets/project-logos/sol-yetis-logo.png',
  },
  {
    id: 'otaku-reader',
    name: 'Otaku Comic Reader',
    client: 'Otaku',
    category: 'platform',
    description: 'NFT-gated comic reader with exclusive content access for token holders.',
    tags: ['Content Gating', 'NFT', 'Media'],
    logo: '/assets/project-logos/otaku-logo.png',
  },
  {
    id: 'metaforge',
    name: 'Metaforge Gaming',
    client: 'Metaforge',
    category: 'gaming',
    description: 'Token-gated game system with integrated staking portal.',
    tags: ['Gaming', 'Token Gating', 'Staking'],
    logo: '/assets/project-logos/metaforge-logo-svg.png',
  },
]

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'platform', name: 'Platforms' },
  { id: 'nft', name: 'NFT Collections' },
  { id: 'defi', name: 'DeFi' },
  { id: 'gaming', name: 'Gaming' },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              A selection of our work across Web3, NFTs, and DeFi
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end text-white'
                    : 'glass-effect hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="glass-effect rounded-xl overflow-hidden hover:bg-white/5 transition-all">
                    {/* Project Image/Logo Area */}
                    <div className="h-48 bg-gradient-to-br from-nova-gradient-start/20 to-nova-gradient-end/20 flex items-center justify-center relative overflow-hidden">
                      {project.logo ? (
                        <div className="relative w-32 h-32">
                          <Image
                            src={project.logo}
                            alt={project.name}
                            fill
                            className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      ) : (
                        <h3 className="font-display font-bold text-2xl text-white/30 group-hover:text-white/60 transition-colors">
                          {project.client}
                        </h3>
                      )}
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              These are just a few highlights from our portfolio of 50+ projects
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white hover:gradient-text transition-all font-medium"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
