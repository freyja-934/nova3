import Link from 'next/link'
import { engagements, industries } from '../data/site'
import { ArrowRight, Check } from './ui/Icons'
import Reveal from './ui/Reveal'
import SpotlightCard from './ui/SpotlightCard'

export default function Engagements() {
  return (
    <section id="engagements" className="section">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.14),transparent)]" />
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Engagements</span>
          <h2 className="h-section mt-5">Work with us the way that fits your team.</h2>
          <p className="mt-5 text-lg leading-relaxed text-fg-2">
            Three simple models, each with transparent pricing and clear expectations.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.08} className="flex">
              <SpotlightCard
                className={`flex w-full flex-col p-8 ${e.featured ? 'border-violet-400/40 from-violet-500/[0.14] to-white/[0.02]' : ''}`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-medium tracking-[-0.02em]">{e.name}</h3>
                    {e.featured && (
                      <span className="rounded-full bg-violet-500/25 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-violet-300">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[12px] uppercase tracking-wider text-fg-3">{e.tag}</p>
                  <p className="mt-6 leading-relaxed text-fg-2">{e.description}</p>
                  <ul className="mt-6 space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] text-fg">
                        <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-violet-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto border-t border-white/10 pt-6 text-sm text-fg-3">{e.best}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Industries */}
        <Reveal className="mt-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">Industries</span>
              <h3 className="h-section mt-5 !text-[30px] sm:!text-4xl">Experience across the products businesses run on.</h3>
            </div>
            <Link href="/#contact" className="group inline-flex items-center gap-2 text-[15px] text-fg-2 hover:text-fg">
              Don&apos;t see yours? Tell us about it
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <li
              key={ind.name}
              className="group relative bg-ink-2 p-7 transition-colors hover:bg-ink-3"
            >
              <p className="text-lg font-medium tracking-tight">{ind.name}</p>
              <p className="mt-1.5 text-sm text-fg-3">{ind.note}</p>
              <span className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
