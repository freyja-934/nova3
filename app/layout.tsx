import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const title = 'Nova 3 - Software Development Consulting'
const description =
  'Software development consulting: custom web applications, APIs, automation, and technical guidance for startups and small businesses.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nova3.org'),
  title,
  description,
  keywords: 'software development, web applications, API development, automation, technical consulting',
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://nova3.org',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nova 3 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-nova-darker text-white antialiased`}>
        <Navbar />
        {/* Main content - removed noise-overlay from container to avoid transform issues */}
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <main className="flex-grow relative overflow-x-hidden">
            <div className="noise-overlay" />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
