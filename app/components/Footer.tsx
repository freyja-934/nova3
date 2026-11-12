import Image from 'next/image'
import Link from 'next/link'
import { services } from '../data/services'
import { sms } from '../data/sms'

const companyLinks = [
  { label: 'Engagements', href: '/#engagements' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'SMS Alerts', href: '/sms-alerts' },
]

const linkClass = 'text-sm text-fg-3 transition-colors hover:text-fg'
const headClass = 'font-mono text-[12px] uppercase tracking-[0.14em] text-fg-2'

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-white/10">
      <div className="container-site relative z-10 pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Nova 3 home">
              <Image src="/assets/logo.png" alt="" width={32} height={32} className="h-8 w-8" />
              <span className="text-[17px] font-semibold tracking-[-0.02em]">
                Nova<span className="text-violet-400"> 3</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-3">
              Software development consulting. We design, build, and scale web applications, APIs, and AI-powered
              products for startups and growing businesses.
            </p>
            <a href={`mailto:${sms.supportEmail}`} className="mt-5 inline-block font-mono text-sm text-fg-2 hover:text-violet-300">
              {sms.supportEmail}
            </a>
          </div>

          <nav aria-label="Services">
            <h3 className={headClass}>Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href="/#services" className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className={headClass}>Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className={headClass}>Legal</h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-fg-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nova 3. All rights reserved.</p>
          <p className="font-mono text-[12px]">Remote · Serving clients worldwide</p>
        </div>
      </div>

      {/* oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-[0.18em] select-none text-center text-[clamp(72px,19vw,300px)] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(185,140,255,0.28), rgba(185,140,255,0) 80%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        NOVA 3
      </div>
    </footer>
  )
}
