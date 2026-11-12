import { faqs } from '../data/site'
import { Plus } from './ui/Icons'
import Reveal from './ui/Reveal'

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section mt-5">Questions, answered.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-fg-2">
            Still wondering about something? Send us a note and we will reply within one business day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="faq group py-1">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium tracking-tight text-fg transition-colors hover:text-violet-300">
                  {f.q}
                  <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-fg-2 transition-transform duration-300">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <div className="faq-body">
                  <p className="overflow-hidden pb-6 pr-12 leading-relaxed text-fg-2">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
