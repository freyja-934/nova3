import Image from 'next/image'
import Link from 'next/link'
import { sms } from '../data/sms'
import { services } from '../data/services'

const companyLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'SMS Alerts', href: '/sms-alerts' },
]

const linkClass = 'text-gray-400 hover:text-white text-sm transition-colors'

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="h-px bg-gradient-to-r from-transparent via-nova-gradient-start to-transparent" />

      <div className="bg-nova-dark py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/assets/logo.png" alt="Nova 3" width={32} height={32} className="w-8 h-8" />
                <span className="font-display font-bold text-lg gradient-text">NOVA 3</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Software development consulting: web applications, APIs, automation, and technical guidance for
                startups and small businesses.
              </p>
              <a href={`mailto:${sms.supportEmail}`} className={`${linkClass} inline-block mt-4`}>
                {sms.supportEmail}
              </a>
            </div>

            <div>
              <h3 className="font-display font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.name}>
                    <Link href="/#services" className={linkClass}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Nova 3. All rights reserved.</p>
            <nav className="flex gap-6" aria-label="Legal">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
