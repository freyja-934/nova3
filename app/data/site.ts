// Marketing copy for the home page. Edit here, not in the components.

export const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#engagements', label: 'Engagements' },
  { href: '/#process', label: 'Process' },
  { href: '/#faq', label: 'FAQ' },
]

export const proof = [
  { label: 'Senior engineers', detail: 'Your project is built by experienced hands, not handed off.' },
  { label: 'Weekly demos', detail: 'Working software every week, so there are no surprises.' },
  { label: 'You own the code', detail: 'Full source, docs, and infrastructure access at handoff.' },
  { label: 'Fast replies', detail: 'A real answer within one business day.' },
]

export const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Redis',
  'GraphQL',
  'Tailwind CSS',
  'AWS',
  'Google Cloud',
  'Vercel',
  'Docker',
  'Stripe',
  'Twilio',
  'OpenAI',
  'Anthropic',
  'GitHub Actions',
  'Playwright',
  'Terraform',
]

export const industries = [
  { name: 'SaaS & B2B platforms', note: 'Multi-tenant apps, billing, admin tooling' },
  { name: 'E-commerce & marketplaces', note: 'Storefronts, checkout, order operations' },
  { name: 'Fintech & payments', note: 'Payment flows, reconciliation, reporting' },
  { name: 'Logistics & operations', note: 'Dispatch, tracking, internal dashboards' },
  { name: 'Media & creator platforms', note: 'Content workflows, memberships, analytics' },
  { name: 'AI & data products', note: 'Copilots, extraction pipelines, evaluations' },
]

export const engagements = [
  {
    name: 'Project delivery',
    tag: 'Fixed scope',
    description: 'A defined product or feature, scoped up front and shipped to production.',
    points: ['Clear scope, timeline, and estimate', 'Weekly demos and written updates', 'Launch, handoff, and documentation'],
    best: 'Best for MVPs, rebuilds, and well-defined features.',
    featured: false,
  },
  {
    name: 'Embedded team',
    tag: 'Monthly retainer',
    description: 'Senior engineers who plug into your team and ship alongside you, week after week.',
    points: ['Dedicated capacity at a predictable rate', 'Works in your repos, tools, and rituals', 'Scale up or down with 30 days notice'],
    best: 'Best for growing products with a steady roadmap.',
    featured: true,
  },
  {
    name: 'Advisory & audits',
    tag: 'Short engagements',
    description: 'Independent technical review and hands-on guidance for the decisions that matter.',
    points: ['Architecture and code reviews', 'Performance, security, and cost audits', 'Hiring and vendor guidance'],
    best: 'Best for teams at a crossroads or preparing to scale.',
    featured: false,
  },
]

export const steps = [
  {
    title: 'Discover',
    description: 'We start with your goals, users, constraints, and timeline, and pressure-test the idea before any code is written.',
    meta: 'Week 0',
  },
  {
    title: 'Plan',
    description: 'You get a clear scope, technical approach, milestones, and an estimate. No ambiguity about what ships and when.',
    meta: 'Week 1',
  },
  {
    title: 'Build',
    description: 'Short iterations with working software every week. Code is reviewed, tested, and deployed continuously.',
    meta: 'Weeks 2 to n',
  },
  {
    title: 'Launch & support',
    description: 'We handle deployment, monitoring, documentation, and handoff, and stay on for support if you want us.',
    meta: 'Ongoing',
  },
]

export const faqs = [
  {
    q: 'What size projects do you take on?',
    a: 'Anything from a focused two-week feature to a multi-month product build. If it needs thoughtful engineering and a clear owner, we can help. We will tell you honestly if we are not the right fit.',
  },
  {
    q: 'How do you price your work?',
    a: 'Project delivery is quoted at a fixed price after a short discovery phase. Embedded work is a monthly retainer, and advisory work is billed by the engagement. Every proposal is written down before work starts.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do. Everything we build is delivered to your repositories and cloud accounts, with documentation, so you are never locked in to us. We are happy to sign an NDA before we talk specifics.',
  },
  {
    q: 'Can you work with our existing team and codebase?',
    a: 'Yes. Plenty of engagements start inside an existing codebase. We follow your conventions, work through your pull request process, and leave things better than we found them.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We are pragmatic. Most work is TypeScript, React, Next.js, Node.js, and Python on top of Postgres and the major clouds, but we pick the right tool for the problem and your team.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Usually within one to two weeks of agreeing on scope. Send a short note about what you are building and we will reply within one business day.',
  },
]
