'use client'

import { useEffect, useRef } from 'react'
import RecentlyPost from '@/components/content/home/RecentlyPost'
import ElabramPost from '@/components/content/home/ElabramPost'
import FooterLayout from '@/components/content/home/FooterLayout'
import StatsSection from '@/components/content/home/StatsSection'
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { Observer } from 'gsap/Observer'
import FirstSection from '@/components/content/home/FirstSection'

gsap.registerPlugin(ScrollTrigger, TextPlugin, Observer)

export default function Home() {
  const pathname = usePathname()
  const heroRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // ── Hero entrance ──────────────────────────────────────
        const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } })
        heroTl
          .from('#layout', { opacity: 0, y: 60, duration: 1.2 })
          .from('#noise-overlay', { opacity: 0, duration: 0.8 }, '<')
          .from(
            '.decor-line',
            { scaleX: 0, transformOrigin: 'left', duration: 0.8, stagger: 0.15 },
            '-=0.4',
          )
          .from(
            '.decor-circle',
            { scale: 0, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
            '-=0.5',
          )

        // ── Floating decorations parallax ──────────────────────
        gsap.to('.float-slow', {
          y: -40,
          scrollTrigger: { trigger: '#layout', start: 'top top', end: 'bottom top', scrub: 1.5 },
        })
        gsap.to('.float-fast', {
          y: -90,
          scrollTrigger: { trigger: '#layout', start: 'top top', end: 'bottom top', scrub: 0.8 },
        })

        // ── Section label reveal ───────────────────────────────
        gsap.utils.toArray<HTMLElement>('.section-label').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 85%' },
            x: -60,
            opacity: 0,
            duration: 0.9,
            ease: 'power4.out',
          })
        })

        // ── Recently Post section ──────────────────────────────
        const recentlyTl = gsap.timeline({
          scrollTrigger: { trigger: '#secondary_section', start: 'top 75%' },
        })
        recentlyTl
          .from('#recently-heading', { y: 80, opacity: 0, duration: 1, ease: 'expo.out' })
          .from(
            '#recently-heading .heading-underline',
            { scaleX: 0, transformOrigin: 'left', duration: 0.6 },
            '-=0.3',
          )

        // ── Retro section ──────────────────────────────────────
        const retroTl = gsap.timeline({
          scrollTrigger: { trigger: '#third_section', start: 'top 80%' },
        })
        retroTl
          .from('#retro-heading', { y: 80, opacity: 0, duration: 1, ease: 'expo.out' })
          .from(
            '#retro-content',
            { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out' },
            '-=0.2',
          )
          .from(
            '.retro-decor',
            { scale: 0, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)' },
            '<',
          )

        // ── Footer ─────────────────────────────────────────────
        gsap.from('#footer-inner', {
          scrollTrigger: { trigger: '#footer-inner', start: 'top 90%' },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })

        // ── Marquee ────────────────────────────────────────────
        gsap.to('.marquee-inner', { x: '-50%', duration: 18, repeat: -1, ease: 'none' })

        // ── Scroll-progress bar ───────────────────────────────
        gsap.to('#scroll-progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      })
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [pathname])

  return (
    <>
      {/* ── Scroll progress bar ───────────────────────── */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left"
        style={{
          transform: 'scaleX(0)',
          background: 'linear-gradient(90deg, #5B8DEF, #38BDF8, #818CF8)',
        }}
      />

      {/* ── Noise overlay ──────────────────────────────── */}
      <div
        id="noise-overlay"
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      {/* ── Decorative floating elements ──────────────── */}
      <div
        ref={decorRef}
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        {/* primary glow — top right, blue */}
        <div
          className="float-slow absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(91,141,239,0.12) 0%, transparent 70%)' }}
        />
        {/* secondary glow — bottom left, cyan */}
        <div
          className="float-fast absolute bottom-1/4 -left-32 h-80 w-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)' }}
        />
        {/* tertiary glow — center, indigo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)' }}
        />
        {/* decorative lines */}
        <div className="decor-line absolute top-24 left-0 h-[1px] w-1/3"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(91,141,239,0.4), rgba(56,189,248,0.2), transparent)' }} />
        <div className="decor-line absolute top-1/2 right-0 h-[1px] w-1/4"
          style={{ background: 'linear-gradient(270deg, transparent, rgba(129,140,248,0.3), transparent)' }} />
        {/* decorative circles */}
        <div className="decor-circle absolute top-1/3 right-16 h-3 w-3 rounded-full"
          style={{ border: '1px solid rgba(91,141,239,0.5)', boxShadow: '0 0 8px rgba(91,141,239,0.3)' }} />
        <div className="decor-circle absolute top-2/3 left-24 h-2 w-2 rounded-full"
          style={{ background: 'rgba(56,189,248,0.4)' }} />
        <div className="decor-circle absolute bottom-1/4 right-1/3 h-4 w-4 rounded-full"
          style={{ border: '1px solid rgba(129,140,248,0.3)' }} />
      </div>

      {/* ── Main content ──────────────────────────────── */}
      <div className="relative z-10">
        {/* ── Hero ── */}
        <div
          id="layout"
          ref={heroRef}
          className="relative px-5 md:px-20 overflow-hidden"
        >
          <FirstSection />
        </div>

        {/* ── Ambient marquee strip ── */}
        <div
          className="relative overflow-hidden py-3 my-8 select-none"
          style={{ borderTop: '1px solid rgba(91,141,239,0.12)', borderBottom: '1px solid rgba(91,141,239,0.12)' }}
        >
          <div className="marquee-inner flex gap-16 whitespace-nowrap w-max">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="flex gap-16 font-rowdies text-sm tracking-widest uppercase"
                style={{ color: 'rgba(91,141,239,0.25)' }}
              >
                {['Personal', '·', 'Blog', '·', 'Retro', '·', 'Code', '·', 'Design', '·', 'Ideas', '·'].map(
                  (w, j) => <span key={j}>{w}</span>,
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ── Stats section ── */}
        <StatsSection />

        {/* ── Body ── */}
        <div id="body_layout" className="px-5 md:px-20">
          <div id="secondary_layout" className="px-5 md:px-20">

            {/* Recently Post */}
            <div id="secondary_section">
              <div
                id="recently-heading"
                className="section-label relative flex items-center gap-4 mt-24"
              >
                <span className="font-rowdies font-bold text-48 gradient-text">
                  Recently Post
                </span>
                <span
                  className="heading-underline absolute -bottom-2 left-0 block h-[2px] w-full origin-left"
                  style={{ background: 'linear-gradient(90deg, #5B8DEF, #38BDF8, transparent)' }}
                />
              </div>
              <div id="recently-content">
                <RecentlyPost />
              </div>
            </div>

            {/* Work Experience @ Elabram */}
            <div id="third_section" className="relative">
              <div className="pointer-events-none absolute -left-6 top-24 flex flex-col gap-1.5" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="retro-decor h-1.5 w-1.5 rounded-full bg-blueDisable/30" />
                ))}
              </div>

              <div id="retro-heading" className="section-label relative flex items-center gap-4 mt-24">
                <span className="font-rowdies font-bold text-48 gradient-text">
                  Work Experience
                </span>
                <span
                  className="heading-underline absolute -bottom-2 left-0 block h-[2px] w-40 origin-left"
                  style={{ background: 'linear-gradient(90deg, #5B8DEF, #818CF8, transparent)' }}
                />
              </div>
              <p className="mt-3 text-sm font-staat tracking-widest uppercase" style={{ color: 'rgba(91,141,239,0.5)' }}>@ Elabram Systems</p>
              <div id="retro-content">
                <ElabramPost />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-24">
            <div id="footer-inner">
              <FooterLayout />
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
