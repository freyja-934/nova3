import { sms } from '../data/sms'
import CopyEmail from './CopyEmail'
import { ArrowRight } from './ui/Icons'
import Reveal from './ui/Reveal'

export default function Contact() {
  const subject = encodeURIComponent('New project inquiry')

  return (
    <section id="contact" className="section pt-12 sm:pt-16">
      <div className="container-site">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/[0.12] bg-ink-2 px-6 py-20 text-center sm:px-16 sm:py-28">
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute left-1/2 top-[-40%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.55),transparent)] blur-2xl" />
              <div className="stars mask-radial absolute inset-0 animate-twinkle opacity-50" />
              <div className="bg-grid mask-radial absolute inset-0 opacity-40" />
              <div className="absolute bottom-[-70%] left-1/2 aspect-square w-[130%] -translate-x-1/2 rounded-full border-t border-violet-400/40 shadow-[0_-30px_100px_-20px_rgba(139,92,246,0.5)]" />
            </div>

            <span className="eyebrow justify-center">Contact</span>
            <h2 className="h-display mx-auto mt-6 max-w-3xl text-4xl sm:text-6xl">
              Build with <span className="text-gradient">experts.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-2">
              Tell us what you are building and when you need it. We will reply within one business day with next steps.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`mailto:${sms.supportEmail}?subject=${subject}`} className="btn-primary">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
              <CopyEmail email={sms.supportEmail} />
            </div>
            <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-fg-3">
              Remote · Available for new projects
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
