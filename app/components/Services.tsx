import { services, type ServiceIcon } from '../data/services'
import { CloudIcon, Compass, Layers, ServerIcon, Sparkles, WindowIcon } from './ui/Icons'
import Reveal from './ui/Reveal'
import SpotlightCard from './ui/SpotlightCard'

const icons: Record<ServiceIcon, typeof WindowIcon> = {
  web: WindowIcon,
  api: ServerIcon,
  ai: Sparkles,
  ux: Layers,
  cloud: CloudIcon,
  advisory: Compass,
}

function WebVisual() {
  return (
    <div className="pointer-events-none absolute -bottom-6 right-6 hidden w-[44%] sm:block" aria-hidden="true">
      <div className="rounded-xl border border-white/15 bg-ink-2/90 p-3 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
        <div className="mb-3 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 h-14 rounded-lg bg-gradient-to-br from-violet-500/50 to-violet-700/20" />
          <div className="h-14 rounded-lg bg-white/[0.06]" />
          <div className="h-8 rounded-lg bg-white/[0.06]" />
          <div className="h-8 rounded-lg bg-white/[0.06]" />
          <div className="h-8 rounded-lg bg-white/[0.06]" />
        </div>
        <div className="mt-3 h-1.5 w-2/3 rounded-full bg-white/10" />
        <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
      </div>
    </div>
  )
}

function AiVisual() {
  return (
    <div className="pointer-events-none absolute bottom-8 right-8 hidden w-[38%] space-y-2.5 sm:block" aria-hidden="true">
      <div className="ml-auto w-[78%] rounded-2xl rounded-br-md border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-[12px] text-fg-2">
        Summarize this week&apos;s support tickets.
      </div>
      <div className="w-[88%] rounded-2xl rounded-bl-md border border-violet-400/30 bg-violet-500/15 px-3.5 py-3 transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-violet-300">
          <Sparkles className="h-3 w-3" /> Draft ready
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/15" />
        <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-white/10" />
        <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-white/10" />
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="h-section mt-5">Everything you need to design, build, and run great software.</h2>
          <p className="mt-5 text-lg leading-relaxed text-fg-2">
            One senior team across the full stack, so your product gets a single point of accountability from first
            sketch to production.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.name} delay={(i % 3) * 0.08} className={`${s.span} flex`}>
                <SpotlightCard className="group flex min-h-[260px] w-full flex-col p-7 sm:p-8">
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-violet-300 transition-colors group-hover:border-violet-400/40 group-hover:bg-violet-500/15">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[12px] text-fg-3">0{i + 1}</span>
                    </div>
                    <h3 className="mt-8 text-[22px] font-medium tracking-[-0.02em]">{s.name}</h3>
                    <p className={`mt-3 leading-relaxed text-fg-2 ${s.visual ? 'sm:max-w-[52%]' : ''}`}>{s.description}</p>
                    <ul className={`mt-auto flex flex-wrap gap-2 pt-7 ${s.visual ? 'sm:max-w-[52%]' : ''}`}>
                      {s.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11.5px] text-fg-3"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {s.visual === 'web' && <WebVisual />}
                  {s.visual === 'ai' && <AiVisual />}
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
