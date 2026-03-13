'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  IconBrandNextjs,
  IconDatabase,
  IconApi,
  IconBrandDocker,
  IconDeviceMobile,
  IconCode,
} from '@tabler/icons-react'

gsap.registerPlugin(ScrollTrigger)

const blocks = [
  {
    icon: IconBrandNextjs,
    title: 'Architecture',
    description:
      'App Router with server + client components, typed API routes, and Prisma ORM for type-safe database access. Every layer is designed to scale.',
    tags: ['App Router', 'API Routes', 'Prisma ORM', 'TypeScript'],
    accent: '#4e74a7',
  },
  {
    icon: IconDeviceMobile,
    title: 'Design',
    description:
      'Tailwind v4 CSS-first config, component-driven UI, and mobile-first responsive layouts. Performance and aesthetics in every pixel.',
    tags: ['Tailwind v4', 'Component-Driven', 'Mobile-First', 'Accessible'],
    accent: '#28c840',
  },
  {
    icon: IconBrandDocker,
    title: 'Engineering',
    description:
      'Strict TypeScript, automated CI/CD pipelines, containerized with Docker, and deployed on Vercel & Azure for zero-downtime releases.',
    tags: ['TypeScript Strict', 'CI/CD', 'Docker', 'Vercel · Azure'],
    accent: '#febc2e',
  },
]

export default function EditorialBlock() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.editorial-block', {
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
        })
      }, ref)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section ref={ref} className="px-6 py-24 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-white/30 font-staat mb-2">My Approach</p>
        <h2 className="text-3xl font-rowdies font-semibold text-white">
          How I Build Products
        </h2>
        <p className="mt-3 text-white/50 max-w-xl text-sm leading-relaxed">
          From architecture decisions to deployment — every project follows a consistent, scalable, and thoughtful process.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blocks.map(({ icon: Icon, title, description, tags, accent }) => (
          <div
            key={title}
            className="editorial-block group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:scale-[1.02] hover:border-white/20"
            style={{ willChange: 'transform' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
            >
              <Icon size={20} style={{ color: accent }} />
            </div>
            <h3 className="font-rowdies font-semibold text-lg text-white mb-2">{title}</h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40 font-staat"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
