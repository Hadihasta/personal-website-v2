'use client'
import { useEffect, useRef } from 'react'
import SectionRight from '@/components/home/SectionRight'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconCheck } from '@tabler/icons-react'
import TechStackSection from '@/components/content/more/TechStackSection'
import { SiNextdotjs, SiPrisma, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const whatIDo = [
  'Build full-stack web apps (Next.js + Node / .NET)',
  'Design scalable REST & tRPC APIs',
  'Integrate AI features (TensorFlow, OpenAI)',
  'Ship to production with Docker + Vercel + Azure',
]

const learningStack = ['Golang', 'System Design', 'Redis', 'AWS', 'gRPC']

export default function AboutMeSection() {
  const tickerRef = useRef<HTMLSpanElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // ── page entrance ──
        gsap.from('.about-col', {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'expo.out',
          delay: 0.1,
        })

        // ── "what I do" checkmarks stagger ──
        gsap.from('.do-item', {
          scrollTrigger: { trigger: '.do-list', start: 'top 82%' },
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        })

        // ── currently learning ticker ──
        if (!tickerRef.current) return
        let idx = 0
        const cycle = () => {
          const next = learningStack[idx % learningStack.length]
          gsap.to(tickerRef.current, {
            opacity: 0,
            y: -8,
            duration: 0.3,
            ease: 'power2.in',
            onComplete() {
              if (tickerRef.current) {
                gsap.set(tickerRef.current, { y: 8 })
                gsap.to(tickerRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
                tickerRef.current.textContent = next
              }
              idx++
            },
          })
        }
        cycle()
        const timer = setInterval(cycle, 2200)
        return () => clearInterval(timer)
      }, sectionRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen px-6 py-24 text-white md:px-16">
      {/* scroll progress */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-blueDisable origin-left"
        style={{ transform: 'scaleX(0)', animation: 'none' }}
        id="scroll-progress-more"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* avatar */}
        <div className="about-col relative flex justify-center md:justify-start">
          <div className="rounded-2xl bg-muteGrey p-4 shadow-xl rotate-[-3deg] transition-transform duration-500 hover:rotate-0 border border-white/5">
            <SectionRight />
          </div>
        </div>

        {/* bio */}
        <div className="about-col">
          <h1 className="text-4xl font-rowdies font-bold leading-tight md:text-5xl">Hijri</h1>

          <p className="mt-3 text-sm uppercase tracking-widest text-white/40 font-staat">
            Full-Stack Engineer · Builder · Writer
          </p>

          {/* currently learning ticker */}
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blueDisable/30 bg-blueDisable/5 text-xs font-staat tracking-widest uppercase text-blueLine/70">
            <span className="w-1.5 h-1.5 rounded-full bg-blueDisable animate-pulse" />
            Currently learning:&nbsp;
            <span ref={tickerRef} className="text-blueLine font-semibold">
              {learningStack[0]}
            </span>
          </div>

          <p className="mt-8 text-white/70 leading-relaxed">
            I started my journey in technology with a simple curiosity —
            <span className="text-white"> building things that people can actually use</span>. After graduating from a
            Computer Engineering program and completing an intensive bootcamp at Rakamin Academy, I decided to focus my
            career on software engineering with one clear goal: creating products that deliver real value, not just features.
          </p>

          <p className="mt-5 text-white/50 leading-relaxed">
            With a background in graphic design using Adobe Illustrator and Photoshop, I naturally developed a strong
            sensitivity toward visual design, UI, and user experience. This allows me to bridge the gap between design
            and engineering when building digital products.
          </p>

          <p className="mt-5 text-white/50 leading-relaxed">
            Today, I focus on building practical, scalable applications — especially MVPs — using a simple, measurable,
            and growth-oriented approach. I enjoy turning ideas into clean, functional systems that are ready to evolve
            with real user needs.
          </p>

          {/* What I Do */}
          <div className="do-list mt-10">
            <p className="text-xs uppercase tracking-widest text-white/30 font-staat mb-4">What I Do</p>
            <ul className="space-y-3">
              {whatIDo.map((item) => (
                <li key={item} className="do-item flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blueDisable/20 border border-blueDisable/40 flex items-center justify-center">
                    <IconCheck size={12} className="text-blueDisable" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Favorite stack */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-white/30 font-staat">Favorite Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-6">
              {[
                { icon: <SiNextdotjs size={26} className="text-white" />, label: 'Next.js' },
                { icon: <SiPrisma size={26} className="text-white" />, label: 'Prisma' },
                { icon: <SiTailwindcss size={26} className="text-[#38BDF8]" />, label: 'Tailwind' },
                { icon: <SiTypescript size={26} className="text-[#3178C6]" />, label: 'TypeScript' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  {icon}
                  <span className="text-sm text-white/60">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* social media */}
          <div className="mt-12 flex gap-6">
            {[
              { icon: IconBrandGithub, url: 'https://github.com/Hadihasta', label: 'GitHub' },
              { icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/hijri-hadi-22289b23a/', label: 'LinkedIn' },
              { icon: IconBrandTwitter, url: 'https://x.com/hadiasta_', label: 'Twitter' },
            ].map(({ icon: Icon, url, label }) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => openLink(url)}
                className="text-white/40 transition hover:text-white"
              >
                <Icon size={22} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="mt-20">
        <TechStackSection />
      </div>
    </section>
  )
}
