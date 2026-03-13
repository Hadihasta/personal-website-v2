'use client'
import { useState, useRef, useEffect } from 'react'
import type { MouseEvent } from 'react'
import styles from './FirstSection.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import {
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandGithub,
  IconBrandUpwork,
  IconBrandLinkedin,
  IconFile,
  IconBrandTwitter,
  IconArrowUpRight,
} from '@tabler/icons-react'

gsap.registerPlugin(TextPlugin)

// ── Terminal Mockup ───────────────────────────────────────────────────
function TerminalMockup() {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = [
        { id: '#term-line-1', text: '$ npx create-next-app@latest my-app', delay: 0.5 },
        { id: '#term-line-2', text: '✔ TypeScript? … Yes', delay: 1.8 },
        { id: '#term-line-3', text: '✔ Tailwind CSS? … Yes', delay: 2.6 },
        { id: '#term-line-4', text: '✔ App Router? … Yes', delay: 3.4 },
        { id: '#term-line-5', text: '▶ Installing dependencies...', delay: 4.2 },
        { id: '#term-line-6', text: '✓ Done! cd my-app && npm run dev', delay: 5.4 },
      ]

      lines.forEach(({ id, text, delay }) => {
        gsap.set(id, { text: '' })
        gsap.to(id, {
          text: { value: text, delimiter: '' },
          duration: text.length * 0.035,
          ease: 'none',
          delay,
        })
      })
    }, terminalRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={terminalRef} className={styles.terminalMockup}>
      <div className={styles.terminalBar}>
        <span className={styles.dot} style={{ background: '#ff5f57' }} />
        <span className={styles.dot} style={{ background: '#febc2e' }} />
        <span className={styles.dot} style={{ background: '#28c840' }} />
        <span className={styles.terminalTitle}>bash — zsh</span>
      </div>
      <div className={styles.terminalContent}>
        <p id="term-line-1" className={styles.termLine} />
        <p id="term-line-2" className={`${styles.termLine} ${styles.termSuccess}`} />
        <p id="term-line-3" className={`${styles.termLine} ${styles.termSuccess}`} />
        <p id="term-line-4" className={`${styles.termLine} ${styles.termSuccess}`} />
        <p id="term-line-5" className={`${styles.termLine} ${styles.termMuted}`} />
        <p id="term-line-6" className={`${styles.termLine} ${styles.termDone}`} />
        <span className={styles.termCursor} />
      </div>
    </div>
  )
}

// ── Dashboard Mockup (browser) ────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className={styles.browserMockup}>
      <div className={styles.browserBar}>
        <span className={styles.dot} style={{ background: '#ff5f57' }} />
        <span className={styles.dot} style={{ background: '#febc2e' }} />
        <span className={styles.dot} style={{ background: '#28c840' }} />
        <div className={styles.urlBar}>hadiasta.dev/dashboard</div>
      </div>
      <div className={styles.browserContent}>
        {/* sidebar + main */}
        <div className={styles.dashLayout}>
          {/* sidebar */}
          <div className={styles.dashSidebar}>
            <div className={styles.dashLogo} />
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`${styles.dashSideItem} ${i === 1 ? styles.dashSideActive : ''}`}
              />
            ))}
          </div>
          {/* main */}
          <div className={styles.dashMain}>
            {/* metric cards */}
            <div className={styles.dashCards}>
              {[
                { color: '#4e74a7' },
                { color: '#28c840' },
                { color: '#febc2e' },
              ].map((c, i) => (
                <div key={i} className={styles.dashCard}>
                  <div
                    className={styles.dashCardBar}
                    style={{ background: c.color, opacity: 0.7 }}
                  />
                  <div className={`${styles.fakeBlock} w-3/4 h-2 mt-1`} />
                  <div className={`${styles.fakeBlock} w-1/2 h-1.5 mt-1`} />
                </div>
              ))}
            </div>
            {/* table rows */}
            <div className={styles.dashTable}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.dashRow}>
                  <div className={`${styles.fakeBlock} w-4 h-2`} />
                  <div className={`${styles.fakeBlock} flex-1 h-2`} />
                  <div className={`${styles.fakeBlock} w-3 h-2`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 3D Tilt Mockup ────────────────────────────────────────────────────
function TiltMockup() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(el, {
      rotateY: x * 22,
      rotateX: -y * 22,
      transformPerspective: 900,
      ease: 'power2.out',
      duration: 0.4,
    })
    gsap.to('.mockup-shine', {
      opacity: 0.12 + Math.abs(x) * 0.18,
      x: x * 60,
      y: y * 40,
      duration: 0.4,
    })
  }

  const handleMouseLeave = () => {
    const el = containerRef.current
    if (!el) return
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.6)',
    })
    gsap.to('.mockup-shine', { opacity: 0, duration: 0.4 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.tiltContainer}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className={`mockup-shine ${styles.shine}`}
        style={{ pointerEvents: 'none', opacity: 0 }}
      />
      {/* terminal top */}
      <TerminalMockup />
      {/* dashboard bottom */}
      <div className={styles.dashboardWrap} style={{ transform: 'translateZ(50px)' }}>
        <DashboardMockup />
        {/* phone overlay */}
        <div className={styles.phoneMockup}>
          <div className={styles.phoneNotch} />
          <div className={styles.phoneScreen}>
            <div className={styles.phoneStatus}>
              <span className="text-[5px] opacity-50">9:41</span>
              <div className="flex gap-0.5 items-center">
                <div className="w-2 h-1 rounded-sm bg-current opacity-40" />
              </div>
            </div>
            <div className="px-2 pt-1 space-y-1.5">
              <div className={`${styles.fakeBlock} w-1/2 h-2`} />
              <div className={`${styles.fakeBlock} w-full h-1.5`} />
              <div className={`${styles.fakeBlock} w-3/4 h-1.5`} />
            </div>
            <div className="px-2 pt-2 space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={styles.phoneFakeCard}>
                  <div className={`${styles.fakeBlock} w-4 h-4 rounded`} />
                  <div className="flex-1 space-y-1">
                    <div className={`${styles.fakeBlock} w-full h-1.5`} />
                    <div className={`${styles.fakeBlock} w-2/3 h-1`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.homeBar} />
        </div>
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────
const FirstSection = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const router = useRouter()
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.hero-line', {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'expo.out',
          delay: 0.2,
        })
        gsap.from('.hero-social', {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
          delay: 0.7,
        })
        gsap.from('.hero-mockup', {
          x: 60,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          delay: 0.4,
        })
      }, textRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`${styles.layout} lg:max-w-[72rem] mx-auto`}>
      {/* ── Left: text content ── */}
      <div ref={textRef} className={styles.leftCol}>
        {/* Eyebrow */}
        {/* <div className="hero-line flex items-center gap-2 mb-4">
          <span className={styles.badge}>Available for work</span>
          <span className={styles.pulseDot} />
        </div> */}

        {/* Heading */}
        <h1 className="hero-line font-rowdies text-5xl lg:text-6xl font-bold leading-tight text-blueDisable">
          {`I'm Hadi`}
        </h1>
        <h2 className="hero-line font-rowdies text-2xl lg:text-3xl font-bold text-blueDisable/40 mt-1">
          Fullstack Developer
        </h2>

        {/* Description */}
        <p className={`hero-line ${styles.paragraf} mt-5 text-base leading-relaxed`}>
          Passionate Fullstack Web Developer with over 2 years of professional experience specializing in TypeScript,
          React.js, and Next.js. Experienced in building, optimizing, and deploying scalable web applications —
          from secure payment integrations to real-time systems with SignalR and AI-assisted workflows.
        </p>

        {/* CTA */}
        <div className="hero-line flex gap-3 mt-8">
          <button
            className={styles.buttonPrimary}
            onClick={() => router.push('/more')}
          >
            More About Me
          </button>
          <button
            className={styles.buttonBorder}
            onClick={() =>
              openLink('https://drive.google.com/file/d/1P4_2IXgwQNzxJqsqu9GoLf3YRJHaIiCa/view?usp=sharing')
            }
          >
            <IconFile size={15} />
            Resume
          </button>
        </div>

        {/* Social icons */}
        <div
          id="sosial-media"
          onMouseMove={handleMove}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={`mt-8 flex w-fit gap-2 relative ${styles.hideCursor}`}
        >
          <IconArrowUpRight
            className={`${styles.cursorArrow} ${active ? styles.show : ''}`}
            style={{ left: cursor.x, top: cursor.y }}
          />
          {[
            { icon: <IconBrandGithub size={18} />, url: 'https://github.com/Hadihasta', label: 'GitHub' },
            { icon: <IconBrandLinkedin size={18} />, url: 'https://www.linkedin.com/in/hijri-hadi-22289b23a/', label: 'LinkedIn' },
            { icon: <IconBrandTwitter size={18} />, url: 'https://x.com/hadiasta_', label: 'Twitter' },
          ].map(({ icon, url, label }) => (
            <button
              key={label}
              aria-label={label}
              onClick={() => openLink(url)}
              className={`hero-social ${styles.hideCursor} ${styles.socialBtn}`}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Tech stack orbit burst */}
        {/* <div className={`${styles.iconArea} hero-line`}>
          <div className={styles.icons}>
            <IconBrandUpwork className={`${styles.icon} ${styles.icon1}`} />
            <IconBrandTypescript className={`${styles.icon} ${styles.icon2}`} />
            <IconBrandNextjs className={`${styles.icon} ${styles.icon3}`} />
            <IconBrandTailwind className={`${styles.icon} ${styles.icon4}`} />
          </div>
          <Image
            src="../asset-v2/vektor/matrix_left.svg"
            alt="Matrix"
            width={100}
            height={100}
            className={`${styles.matrix} absolute`}
          />
          <Image
            src="../asset-v2/vektor/matrix_right.svg"
            alt="Matrix_right"
            width={100}
            height={100}
            className={`${styles.matrix} relative bottom-26 left-5`}
          />
        </div> */}
      </div>

      {/* ── Right: 3D tilt mockup ── */}
      <div className={`${styles.rightCol} hero-mockup`}>
        <TiltMockup />
      </div>
    </div>
  )
}

export default FirstSection
