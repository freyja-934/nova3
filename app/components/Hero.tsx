import Link from 'next/link'
import { proof } from '../data/site'
import HeroVisual from './HeroVisual'
import { ArrowRight } from './ui/Icons'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background graphics: glow, stars, grid, horizon arc */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[-18%] h-[760px] w-[1300px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.5),rgba(91,33,182,0.18)_55%,transparent)] blur-2xl" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(255,154,92,0.16),transparent)] blur-2xl" />
        <div className="stars mask-radial absolute inset-0 animate-twinkle opacity-60" />
        <div
          className="stars mask-radial absolute inset-0 animate-twinkle opacity-30"
          style={{ backgroundSize: '230px 210px', animationDuration: '7s', animationDelay: '-3s' }}
        />
        <div className="bg-grid mask-radial absolute inset-0 opacity-50" />
        {/* horizon arc */}
        <div className="absolute bottom-[-62%] left-1/2 aspect-square w-[150%] -translate-x-1/2 rounded-full border-t border-violet-400/40 bg-[radial-gradient(closest-side,rgba(5,4,10,1)_92%,rgba(139,92,246,0.25))] shadow-[0_-30px_120px_-20px_rgba(139,92,246,0.55)] sm:bottom-[-95%]" />
      </div>

      <div className="container-site grid items-center gap-16 pb-20 pt-36 sm:pt-44 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28">
        <div>
          <div className="inline-flex animate-blur-in items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-3 pr-4 text-[13px] text-fg-2 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Software development consulting · Taking on new projects
          </div>

          <h1
            className="h-display mt-7 animate-blur-in text-[44px] sm:text-6xl lg:text-[76px]"
            style={{ animationDelay: '100ms' }}
          >
            Software built to ship.
            <br />
            <span className="text-gradient">Built to last.</span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-blur-in text-lg leading-relaxed text-fg-2 sm:text-xl"
            style={{ animationDelay: '220ms' }}
          >
            Nova 3 designs, builds, and scales web applications, APIs, and AI-powered products for startups and growing
            businesses. Senior engineers, clear communication, working software every week.
          </p>

          <div className="mt-10 flex animate-blur-in flex-col gap-3 sm:flex-row" style={{ animationDelay: '340ms' }}>
            <Link href="/#contact" className="btn-primary">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#services" className="btn-ghost">
              Explore services
            </Link>
          </div>
        </div>

        <div className="animate-blur-in" style={{ animationDelay: '300ms' }}>
          <HeroVisual />
        </div>
      </div>

      {/* Proof strip */}
      <div className="container-site relative pb-16">
        <ul className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p, i) => (
            <li
              key={p.label}
              className={`p-6 ${i > 0 ? 'border-t border-white/10 sm:border-t-0' : ''} ${
                i % 2 === 1 ? 'sm:border-l sm:border-white/10' : ''
              } ${i >= 2 ? 'sm:border-t sm:border-white/10 lg:border-t-0' : ''} ${
                i > 0 ? 'lg:border-l lg:border-white/10' : ''
              }`}
            >
              <p className="font-mono text-[12px] text-violet-400">0{i + 1}</p>
              <p className="mt-3 text-[17px] font-medium tracking-tight">{p.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-3">{p.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
