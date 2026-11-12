'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { steps } from '../data/site'
import Reveal from './ui/Reveal'

export default function Process() {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="process" className="section">
      <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="eyebrow">Process</span>
          <h2 className="h-section mt-5">A simple, transparent path from first call to launch.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-fg-2">
            No black boxes. You always know what is being built, why, and what comes next.
          </p>
        </Reveal>

        <ol ref={ref} className="relative">
          {/* track + animated progress line */}
          <span className="absolute bottom-3 left-[19px] top-3 w-px bg-white/10" aria-hidden="true" />
          <motion.span
            className="absolute bottom-3 left-[19px] top-3 w-px origin-top bg-gradient-to-b from-violet-400 via-violet-500 to-ember"
            style={{ scaleY: reduce ? 1 : progress }}
            aria-hidden="true"
          />

          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="relative pb-12 pl-16 last:pb-0">
              <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink font-mono text-[13px] text-violet-300 shadow-[0_0_0_6px_#05040a]">
                0{i + 1}
              </span>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">{s.title}</h3>
                  <span className="font-mono text-[12px] uppercase tracking-wider text-fg-3">{s.meta}</span>
                </div>
                <p className="mt-3 leading-relaxed text-fg-2">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
