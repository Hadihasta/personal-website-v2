'use client'

import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { gsap } from 'gsap'
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
  SiLaravel,
  SiPhp,
  SiGo,
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
      { name: 'PHP', icon: SiPhp, color: '#8892BF' },
      { name: 'Golang', icon: SiGo, color: '#00ADD8' },
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
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
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

function TechCard({ item }: { item: TechItem }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = item.icon

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(el, {
      rotateY: x * 18,
      rotateX: -y * 18,
      transformPerspective: 600,
      ease: 'power2.out',
      duration: 0.3,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.6)',
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-white/5 backdrop-blur border border-white/10 transition hover:scale-[1.04] cursor-default"
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        boxShadow: '0 0 0 transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 28px ${item.color}55`
        e.currentTarget.style.borderColor = `${item.color}40`
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0 transparent'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
      }}
    >
      <Icon className="mb-3 text-4xl" style={{ color: item.color }} />
      <span className="text-sm font-medium text-white/70 font-staat">{item.name}</span>
    </div>
  )
}

export default function TechStackSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-3xl font-rowdies font-bold text-white md:text-4xl">
          Tech Stack
        </h2>
        <p className="text-center text-sm text-white/30 mb-16 font-staat tracking-widest uppercase">
          Tools & technologies I work with
        </p>

        <div className="space-y-16">
          {techStack.map((category) => (
            <div key={category.title}>
              <h3 className="mb-8 text-base font-semibold text-white/50 font-staat tracking-widest uppercase">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.items.map((item) => (
                  <TechCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
