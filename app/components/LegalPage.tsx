import type { ReactNode } from 'react'

export function LegalPage({
  title,
  highlight,
  intro,
  updated,
  children,
}: {
  title: string
  highlight: string
  intro: ReactNode
  updated?: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32">
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nova-gradient-start/10 to-nova-gradient-end/10" />
        <div className="section-padding relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            {title} <span className="gradient-text">{highlight}</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300">{intro}</p>
          {updated && <p className="mt-4 text-sm text-gray-500">Last updated: {updated}</p>}
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-300 leading-relaxed">{children}</div>
        </div>
      </section>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-display font-semibold text-white">{title}</h2>
      {children}
    </section>
  )
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 marker:text-nova-gradient-end">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export const legalLink = 'text-white underline decoration-nova-gradient-end underline-offset-4 hover:decoration-white transition-colors'
