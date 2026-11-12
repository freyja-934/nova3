import { stack } from '../data/site'

export default function TechStrip() {
  const items = [...stack, ...stack]

  return (
    <section className="relative border-y border-white/[0.07] bg-white/[0.015] py-8" aria-label="Technologies we work with">
      <p className="container-site mb-6 text-center font-mono text-[12px] uppercase tracking-[0.14em] text-fg-3">
        Tools and platforms we ship with
      </p>
      <div className="mask-fade-x overflow-hidden">
        <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= stack.length}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-fg-2"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
