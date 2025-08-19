import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Project data - in production this would come from a database or CMS
const projectsData: Record<string, any> = {
  'coinbase-nft': {
    name: 'Coinbase NFT Marketplace Beta',
    client: 'Coinbase',
    category: 'Platform',
    description: 'Contributed to the beta launch infrastructure, UI flows, and early feature architecture for Coinbase\'s NFT marketplace.',
    longDescription: `As part of the early team working on Coinbase's NFT marketplace beta, I contributed to building the foundation that would support millions of users trading NFTs. This involved creating scalable infrastructure, designing intuitive UI flows, and implementing core features that made NFT trading accessible to mainstream users.

    The project required deep integration with Ethereum and multiple Layer 2 solutions, ensuring fast and cost-effective transactions while maintaining the security standards expected from a major financial platform.`,
    tags: ['React', 'TypeScript', 'Web3.js', 'Ethereum', 'NFT', 'GraphQL'],
    logo: '/assets/project-logos/coinbase-logo-black-and-white.png',
    achievements: [
      'Helped launch beta to 1M+ waitlist users',
      'Implemented gas-optimized smart contract interactions',
      'Built responsive UI components used across the platform',
      'Contributed to security audit preparations',
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'GraphQL', 'PostgreSQL'],
      blockchain: ['Ethereum', 'Web3.js', 'IPFS'],
    },
  },
  'house-of-pranksy': {
    name: 'House of Pranksy',
    client: 'Pranksy',
    category: 'NFT Collection',
    description: 'Custom CMS-powered minting website with NFT/Discord role gating and SeaDrop contract integration.',
    longDescription: `House of Pranksy required a sophisticated minting experience that could handle high traffic while providing exclusive features for holders. The platform integrated seamlessly with Discord for role-based access and featured a custom CMS that allowed the team to update content without technical knowledge.

    The SeaDrop contract integration ensured secure and efficient minting, while the NFT-gated areas provided exclusive content and benefits to holders, creating a true utility-driven experience.`,
    tags: ['Next.js', 'Solidity', 'Discord API', 'Sanity CMS', 'SeaDrop'],
    achievements: [
      'Successful mint of 10,000 NFTs in under 2 hours',
      'Zero downtime during high-traffic mint',
      'Integrated Discord roles for 5,000+ members',
      'Built custom admin dashboard for content management',
    ],
    technologies: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express', 'Discord.js'],
      blockchain: ['Ethereum', 'Solidity', 'Hardhat', 'OpenZeppelin'],
    },
  },
  // Add more projects as needed
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nova-gradient-start/10 to-nova-gradient-end/10" />
        
        <div className="section-padding relative z-10">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 glass-effect rounded-full text-sm">
                {project.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{project.client}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {project.name}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 glass-effect rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
                <div className="prose prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Key Achievements</h2>
                <ul className="space-y-3">
                  {project.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-nova-gradient-end mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Client Logo */}
              {project.logo && (
                <div className="glass-effect p-8 rounded-xl">
                  <div className="relative w-full h-32">
                    <Image
                      src={project.logo}
                      alt={project.client}
                      fill
                      className="object-contain filter brightness-0 invert opacity-80"
                    />
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-xl font-display font-semibold mb-6">Tech Stack</h3>
                <div className="space-y-6">
                  {Object.entries(project.technologies).map(([category, techs]) => (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(techs as string[]).map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/5 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="glass-effect p-8 rounded-xl text-center">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Have a similar project?
                </h3>
                <p className="text-gray-400 mb-6">
                  Let&apos;s discuss how we can help bring your vision to life.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white hover:shadow-lg transition-shadow"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
