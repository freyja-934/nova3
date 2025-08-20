'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { categories, projects } from '../data/projects'

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const handleCategoryChange = (category: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nova-gradient-start/10 to-nova-gradient-end/10" />
        
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful Web3 projects, from NFT platforms to DeFi protocols. 
              Each project showcases our commitment to innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="section-padding">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative px-4 py-2 rounded-full font-medium transition-all overflow-hidden group ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end text-white shadow-lg'
                    : 'glass-effect hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <span className="relative z-10">{category.name}</span>
                {selectedCategory !== category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-nova-gradient-start/20 to-nova-gradient-end/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredProjects.length}</span> projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="glass-effect rounded-xl overflow-hidden hover:bg-black/30 hover:border-white/20 border border-transparent transition-all relative group h-full">
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-nova-gradient-start/40 to-nova-gradient-end/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                        whileHover={{ scale: 1.1 }}
                      />
                      
                      {/* Project Image/Logo Area */}
                      <div className="h-48 bg-gradient-to-br from-nova-gradient-start/20 to-nova-gradient-end/20 flex items-center justify-center relative overflow-hidden animated-gradient">
                        {project.logo ? (
                          <motion.div 
                            className="relative w-32 h-32"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Image
                              src={project.logo}
                              alt={project.name}
                              fill
                              className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                            />
                          </motion.div>
                        ) : (
                          <motion.h3 
                            className="font-display font-bold text-2xl text-white/30 group-hover:text-white/60 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            {project.client}
                          </motion.h3>
                        )}
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <motion.div 
                            className="absolute top-4 right-4"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                          >
                            <span className="px-3 py-1 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-full text-xs font-semibold shadow-lg glow-pulse">
                              Featured
                            </span>
                          </motion.div>
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
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 transition-all cursor-default"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 + tagIndex * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                          {project.tags.length > 3 && (
                            <motion.span 
                              className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                            >
                              +{project.tags.length - 3}
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Ready to add your project to our portfolio?
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 animated-gradient"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
