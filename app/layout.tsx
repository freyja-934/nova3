import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { sms } from './data/sms'

const title = 'Nova 3 | Software Development Consulting'
const description =
  'Nova 3 is a software development consulting firm. We design, build, and scale web applications, APIs, and AI-powered products for startups and growing businesses.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05040a',
}

export const metadata: Metadata = {
  metadataBase: new URL(sms.siteUrl),
  title,
  description,
  keywords: [
    'software development consulting',
    'custom software development',
    'web application development',
    'API development',
    'AI integration',
    'workflow automation',
    'technical advisory',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    url: sms.siteUrl,
    siteName: 'Nova 3',
    images: [{ url: '/assets/logo.png', width: 1024, height: 1024, alt: 'Nova 3' }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/assets/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nova 3',
  url: sms.siteUrl,
  logo: `${sms.siteUrl}/assets/logo.png`,
  email: sms.supportEmail,
  description,
  serviceType: [
    'Custom software development',
    'Web application development',
    'API and backend development',
    'AI integration and automation',
    'Cloud and DevOps',
    'Technical consulting',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
