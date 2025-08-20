'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { categories, projects } from '../data/projects'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Only show featured projects on homepage
  const featuredProjects = projects.filter(p => p.featured)
  
  const filteredProjects = selectedCategory === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === selectedCategory)

  const handleCategoryChange = (category: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative">
      <div className="section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0"
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

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
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
                  <div className="glass-effect rounded-xl overflow-hidden hover:bg-black/30 hover:border-white/20 border border-transparent transition-all relative group">
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-nova-gradient-start/40 to-nova-gradient-end/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Project Image Area with Custom Background */}
                    <div className="h-48 relative overflow-hidden">
                      {/* Custom background image for featured projects */}
                      <Image
                        src={`/assets/card-bg-${(index % 3) + 1}.png`}
                        alt=""
                        fill
                        className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-105"
                      />
                      {/* Gradient overlay for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-nova-darker/80 to-transparent" />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div 
                          className="absolute top-4 right-4 z-10"
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
          </motion.div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              These are just a few highlights from our portfolio of {projects.length} projects
            </p>
            <Link
              href="/case-studies"
              className="inline-block px-6 py-3 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View All Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
