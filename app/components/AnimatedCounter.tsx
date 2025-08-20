'use client'

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, Math.round)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const animation = animate(motionValue, value, { duration })
      return animation.stop
    }
  }, [isInView, value, motionValue, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
