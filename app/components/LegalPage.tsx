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
    <div className="relative min-h-screen">
      <section className="relative isolate overflow-hidden pb-12 pt-36 sm:pb-16 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute left-1/2 top-[-30%] h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.4),transparent)] blur-2xl" />
          <div className="bg-grid mask-radial absolute inset-0 opacity-40" />
        </div>
        <div className="container-site max-w-3xl text-center">
          <h1 className="h-display text-4xl sm:text-6xl">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-2">{intro}</p>
          {updated && <p className="mt-4 font-mono text-[12px] uppercase tracking-wider text-fg-3">Last updated: {updated}</p>}
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-12 leading-relaxed text-fg-2">{children}</div>
        </div>
      </section>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4 border-t border-white/10 pt-10 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-medium tracking-[-0.02em] text-fg sm:text-2xl">{title}</h2>
      {children}
    </section>
  )
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2.5 pl-6 marker:text-violet-400">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export const legalLink =
  'text-fg underline decoration-violet-400/70 underline-offset-4 transition-colors hover:decoration-fg'
