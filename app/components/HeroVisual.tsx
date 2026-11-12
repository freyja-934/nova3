'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'
import { Check } from './ui/Icons'

const k = 'text-violet-300'
const s = 'text-ember'
const f = 'text-sky-300'
const c = 'text-fg-3'

export default function HeroVisual() {
  const reduce = useReducedMotion()
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 80, damping: 18 })
  const sy = useSpring(py, { stiffness: 80, damping: 18 })

  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6])
  const driftX = useTransform(sx, [-0.5, 0.5], [-14, 14])
  const driftY = useTransform(sy, [-0.5, 0.5], [-10, 10])
  const counterX = useTransform(driftX, (v) => -v * 1.2)
  const counterY = useTransform(driftY, (v) => -v * 1.2)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-[1/0.92] w-full max-w-[560px]"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* soft glow behind the stack */}
      <div className="absolute inset-[8%] rounded-full bg-violet-600/30 blur-[90px]" />

      {/* editor window */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="absolute inset-x-[2%] top-[10%] overflow-hidden rounded-2xl border border-white/15 bg-ink-2/80 shadow-[0_40px_120px_-30px_rgba(139,92,246,0.6)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-fg-2">
            api/orders/route.ts
          </span>
        </div>
        <pre className="overflow-hidden px-4 py-5 font-mono text-[10px] leading-[1.85] text-fg min-[400px]:text-[11.5px] sm:px-5 sm:text-[13px]">
          <code>
            <span className={k}>export async function</span> <span className={f}>POST</span>(req: Request) {'{'}
            {'\n'}
            {'  '}
            <span className={k}>const</span> body = orderSchema.<span className={f}>parse</span>(
            {'\n'}
            {'    '}
            <span className={k}>await</span> req.<span className={f}>json</span>()
            {'\n'}
            {'  '})
            {'\n'}
            {'  '}
            <span className={k}>const</span> order = <span className={k}>await</span> db.orders.
            <span className={f}>create</span>(body)
            {'\n'}
            {'  '}
            <span className={k}>await</span> queue.<span className={f}>publish</span>(
            <span className={s}>&apos;order.created&apos;</span>, order)
            {'\n\n'}
            {'  '}
            <span className={c}>{'// 201 Created'}</span>
            {'\n'}
            {'  '}
            <span className={k}>return</span> Response.<span className={f}>json</span>(order, {'{'} status:{' '}
            <span className={s}>201</span> {'}'})
            {'\n'}
            {'}'}
          </code>
        </pre>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-2/90 to-transparent" />
      </motion.div>

      {/* deploy chip */}
      <motion.div style={{ x: driftX, y: driftY }} className="absolute -right-1 top-[1%] sm:right-[-4%]">
        <div className="animate-float rounded-2xl border border-white/15 bg-ink-3/85 px-4 py-3 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
              <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-pulse-ring" />
              <Check className="relative h-4 w-4" />
            </span>
            <div>
              <p className="text-[13px] font-medium leading-tight">Deployed to production</p>
              <p className="mt-0.5 font-mono text-[11px] text-fg-3">42s · all checks passed</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* latency chip */}
      <motion.div style={{ x: counterX, y: counterY }} className="absolute -left-1 bottom-[2%] sm:left-[-6%]">
        <div
          className="animate-float rounded-2xl border border-white/15 bg-ink-3/85 p-4 shadow-2xl backdrop-blur-xl"
          style={{ animationDelay: '-3s' }}
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-fg-3">p95 latency</p>
          <div className="mt-1 flex items-end gap-3">
            <p className="text-2xl font-medium tracking-tight">118ms</p>
            <span className="mb-1 rounded-full bg-emerald-400/15 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
              -32%
            </span>
          </div>
          <svg viewBox="0 0 140 36" className="mt-2 h-9 w-36" fill="none">
            <defs>
              <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 8 L14 10 L28 6 L42 14 L56 12 L70 20 L84 18 L98 25 L112 24 L126 30 L140 28 V36 H0Z" fill="url(#spark)" />
            <motion.path
              d="M0 8 L14 10 L28 6 L42 14 L56 12 L70 20 L84 18 L98 25 L112 24 L126 30 L140 28"
              stroke="#b98cff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.9, ease: 'easeOut' }}
            />
          </svg>
        </div>
      </motion.div>

      {/* PR chip */}
      <motion.div style={{ x: driftX, y: driftY }} className="absolute bottom-[18%] right-[-2%] hidden sm:block">
        <div
          className="animate-float flex items-center gap-2.5 rounded-full border border-white/15 bg-ink-3/85 py-2 pl-3 pr-4 shadow-2xl backdrop-blur-xl"
          style={{ animationDelay: '-5s' }}
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="4" cy="3.5" r="1.7" />
            <circle cx="4" cy="12.5" r="1.7" />
            <circle cx="12" cy="12.5" r="1.7" />
            <path d="M4 5.2v5.6M12 10.8V7a2 2 0 0 0-2-2H8" />
          </svg>
          <span className="font-mono text-[11.5px] text-fg-2">PR #482 merged</span>
        </div>
      </motion.div>
    </div>
  )
}
