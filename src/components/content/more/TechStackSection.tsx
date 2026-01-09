'use client'

import {
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiNodedotjs,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiFigma,
  SiVercel,
  SiDocker,
  SiGithub,
  SiGitlab,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

type TechItem = {
  name: string
  icon: React.ElementType
  color: string
}

type TechCategory = {
  title: string
  items: TechItem[]
}

const techStack: TechCategory[] = [
  {
    title: 'Programming Language',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'C#', icon: SiSharp, color: '#512BD4' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Vue', icon: SiVuedotjs, color: '#42B883' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Nuxt', icon: SiNuxtdotjs, color: '#00DC82' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { name: 'Azure', icon: VscAzure, color: '#0078D4' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    title: 'Database & ORM',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Prisma', icon: SiPrisma, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    title: 'Version Control & Management',
    items: [
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
    ],
  },
]

export default function TechStackSection() {
  return (
    <section className="py-24 bg-gradient-to-b to-transparent">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">Tech Stack</h2>

        <div className="space-y-16">
          {techStack.map((category) => (
            <div key={category.title}>
              <h3 className="mb-8 text-xl font-semibold text-white">{category.title}</h3>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.items.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.name}
                      className="
    flex aspect-square flex-col items-center justify-center
    rounded-2xl
    bg-white/5 backdrop-blur
    border border-white/10
    transition
    hover:scale-105
  "
                      style={{ boxShadow: '0 0 0 transparent' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 28px ${item.color}55`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 0 transparent'
                      }}
                    >
                      <Icon
                        className="mb-3 text-4xl"
                        style={{ color: item.color }}
                      />
                      <span className="text-sm font-medium text-neutral-200">{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
