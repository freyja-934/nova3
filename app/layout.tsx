import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nova 3 - Web3 Development Studio',
  description: 'Premium Web3 infrastructure and experiences for creators, founders, and platforms. Founded by Casey Charlesworth.',
  keywords: 'Web3, Solana, Ethereum, NFT, DApp, Blockchain Development',
  openGraph: {
    title: 'Nova 3 - Web3 Development Studio',
    description: 'Premium Web3 infrastructure and experiences',
    type: 'website',
    url: 'https://nova3.dev',
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
    title: 'Nova 3 - Web3 Development Studio',
    description: 'Premium Web3 infrastructure and experiences',
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
        {/* Main content */}
        <div className="flex flex-col min-h-screen noise-overlay">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
