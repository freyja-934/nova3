'use client'

import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-nova-darker"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Animated logo */}
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Orbiting dots */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, 40 * Math.cos((index * 120) * Math.PI / 180), 0],
              y: [0, 40 * Math.sin((index * 120) * Math.PI / 180), 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
      
      <motion.p
        className="absolute bottom-10 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading amazing things...
      </motion.p>
    </motion.div>
  )
}
