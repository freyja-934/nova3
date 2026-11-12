export type ServiceIcon = 'web' | 'api' | 'ai' | 'ux' | 'cloud' | 'advisory'

export const services: {
  name: string
  description: string
  icon: ServiceIcon
  tags: string[]
  span: string
  visual?: 'web' | 'ai'
}[] = [
  {
    name: 'Web & product engineering',
    description:
      'Fast, accessible web applications, customer portals, and dashboards. We take products from first prototype to production, with the testing and polish that keep them reliable as you grow.',
    icon: 'web',
    tags: ['React', 'Next.js', 'TypeScript'],
    span: 'lg:col-span-4',
    visual: 'web',
  },
  {
    name: 'APIs & backend systems',
    description: 'Well-structured APIs, databases, queues, and integrations designed to scale with your product.',
    icon: 'api',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
    span: 'lg:col-span-2',
  },
  {
    name: 'UX/UI & front-end',
    description: 'Clean, consistent interfaces and design systems that feel great on every screen size.',
    icon: 'ux',
    tags: ['Design systems', 'Accessibility'],
    span: 'lg:col-span-2',
  },
  {
    name: 'AI features & automation',
    description:
      'Practical AI built into real workflows: assistants, document processing, search, and automations that connect the tools your team already uses and take repetitive work off their plate.',
    icon: 'ai',
    tags: ['LLM integration', 'Workflow automation', 'Evals'],
    span: 'lg:col-span-4',
    visual: 'ai',
  },
  {
    name: 'Cloud & DevOps',
    description:
      'CI/CD pipelines, infrastructure as code, observability, and cost control, so your software stays fast, secure, and online.',
    icon: 'cloud',
    tags: ['AWS', 'GCP', 'Docker', 'Terraform'],
    span: 'lg:col-span-3',
  },
  {
    name: 'Technical advisory & audits',
    description:
      'Architecture reviews, code audits, and practical advice on building the right thing the right way, from an engineer who has shipped it before.',
    icon: 'advisory',
    tags: ['Architecture', 'Code review', 'Roadmapping'],
    span: 'lg:col-span-3',
  },
]
