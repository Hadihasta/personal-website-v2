'use client'
import { useEffect, useRef } from 'react'
import ProjectGrid from '@/components/content/projects/ProjectGrid'
import EditorialBlock from '@/components/content/projects/EditorialBlock'
import { projects } from './data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPage() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.projects-title-char', {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.06,
          ease: 'expo.out',
          delay: 0.1,
        })
        gsap.from('.projects-subtitle', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.5,
        })
        gsap.from('#scroll-progress-projects', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      }, headingRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <main className="relative min-h-screen text-white">
      {/* scroll progress */}
      <div
        id="scroll-progress-projects"
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-blueDisable origin-left"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Page header */}
      <section ref={headingRef} className="px-6 pt-24 pb-10 max-w-7xl mx-auto overflow-hidden">
        <div className="overflow-hidden flex gap-[0.02em] flex-wrap">
          {'Projects'.split('').map((char, i) => (
            <span
              key={i}
              className="projects-title-char inline-block font-rowdies text-5xl md:text-7xl font-semibold tracking-tight"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <p className="projects-subtitle mt-5 text-white/50 max-w-xl text-base leading-relaxed">
          Selected works combining engineering, product thinking, and real-world use cases.
        </p>
      </section>

      {/* Editorial approach block */}
      <EditorialBlock />

      {/* Main project grid */}
      <ProjectGrid projects={projects} />
    </main>
  )
}
