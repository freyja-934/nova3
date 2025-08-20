import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Nova 3 - Web3 Development Studio',
  description: 'Explore our portfolio of successful Web3 projects, from NFT platforms to DeFi protocols. See how we help clients succeed in the Web3 space.',
  openGraph: {
    title: 'Nova 3 Case Studies - Web3 Project Portfolio',
    description: 'Explore our portfolio of successful Web3 projects and see how we help clients succeed.',
    type: 'website',
    url: 'https://nova3.dev/case-studies',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nova 3 Case Studies',
      },
    ],
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
