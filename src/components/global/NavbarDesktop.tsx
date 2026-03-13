'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'PROJECT', path: '/projects' },
  { label: 'SIGHT', path: '/sight' },
  { label: 'MORE', path: '/more' },
]

const NavbarDesktop = () => {
  const router = useRouter()
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // entrance animation
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'expo.out',
        delay: 0.1,
      })
    })
    return () => mm.revert()
  }, [])

  // move sliding indicator to active or hovered item
  useEffect(() => {
    const target = hovered ?? pathname
    const el = itemRefs.current[target]
    const indicator = indicatorRef.current
    const nav = navRef.current
    if (!el || !indicator || !nav) return

    const navRect = nav.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()

    gsap.to(indicator, {
      x: elRect.left - navRect.left,
      width: elRect.width,
      duration: 0.35,
      ease: 'power3.out',
    })
  }, [hovered, pathname])

  return (
    <div className="hidden lg:flex justify-center z-50 mt-8 px-6">
      <nav
        ref={navRef}
        className="relative flex items-center gap-1 rounded-2xl px-3 py-2 border border-white/8 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(30,41,59,0.85) 0%, rgba(45,62,80,0.75) 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        {/* sliding background pill */}
        <span
          ref={indicatorRef}
          className="absolute top-2 h-[calc(100%-16px)] rounded-xl bg-blueDisable/20 border border-blueDisable/30 pointer-events-none"
          style={{ left: 0, width: 80 }}
          aria-hidden
        />

        {/* dot — logo mark */}
        <span className="mr-3 ml-1 flex items-center gap-1.5 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-blueDisable" />
          <span className="w-1 h-1 rounded-full bg-blueDisable/40" />
        </span>

        {navLinks.map(({ label, path }, idx) => {
          const isActive = pathname === path
          return (
            <button
              key={path}
              ref={(el) => { itemRefs.current[path] = el }}
              onClick={() => router.push(path)}
              onMouseEnter={() => setHovered(path)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative z-10 px-5 py-2 rounded-xl font-staat text-[15px] tracking-widest transition-colors duration-200
                ${isActive ? 'text-white' : 'text-white/40 hover:text-white/80'}
              `}
            >
              {label}
              {/* active dot */}
              {isActive && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blueDisable" />
              )}
            </button>
          )
        })}

        {/* right divider + status */}
        <span className="ml-2 mr-1 h-4 w-px bg-white/10" />
        <span className="flex items-center gap-1.5 px-3 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-staat text-[12px] tracking-widest text-white/30 uppercase">Available</span>
        </span>
      </nav>
    </div>
  )
}

export default NavbarDesktop
