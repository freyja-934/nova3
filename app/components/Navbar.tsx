'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#projects', label: 'Projects' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 glass-effect backdrop-blur-xl ${
        isScrolled ? 'py-3 sm:py-4 bg-nova-darker/80 shadow-lg' : 'py-4 sm:py-6 bg-nova-darker/60'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/assets/logo.png"
                alt="Nova 3"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="font-display font-bold text-lg sm:text-xl gradient-text">
                NOVA 3
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group py-2"
              >
                <span className="relative z-10 font-medium transition-colors group-hover:text-white">
                  {link.label}
                </span>
                              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-nova-gradient-start/10 to-nova-gradient-end/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"
              />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-0.5 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end origin-left"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-0.5 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-0.5 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end origin-left"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <motion.div 
                className="glass-effect rounded-lg p-4 space-y-2 backdrop-blur-xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-all relative overflow-hidden group"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-nova-gradient-start/20 to-nova-gradient-end/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
