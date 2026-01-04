export type Project = {
  title: string
  description: string
  cover: string
  tools: string[]
  href?: string
  repo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Hexcape',
    description: 'A game that combines iOS and physical puzzle game, using 3D, 360 world view, and AR.',
    cover: '/projects/hexcape.png',
    tools: ['Unity', 'ARKit', 'iOS'],
    href: '#',
    featured: true,
  },
  {
    title: 'Notiolink',
    description: 'Self-hostable branded link shortener built with Next.js & Notion API.',
    cover: '/projects/notiolink.png',
    tools: ['Next.js', 'Notion API'],
    href: '#',
    repo: '#',
  },
]
