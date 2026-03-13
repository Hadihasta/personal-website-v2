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
        className="relative flex items-center gap-1 rounded-2xl px-3 py-2 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(13,17,23,0.92) 0%, rgba(15,22,33,0.88) 100%)',
          border: '1px solid rgba(91,141,239,0.18)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 32px rgba(91,141,239,0.06), inset 0 1px 0 rgba(91,141,239,0.1)',
        }}
      >
        {/* sliding background pill */}
        <span
          ref={indicatorRef}
          className="absolute top-2 h-[calc(100%-16px)] rounded-xl pointer-events-none"
          style={{
            left: 0,
            width: 80,
            background: 'rgba(91,141,239,0.12)',
            border: '1px solid rgba(91,141,239,0.25)',
            boxShadow: '0 0 12px rgba(91,141,239,0.15)',
          }}
          aria-hidden
        />

        {/* logo mark */}
        <span className="mr-3 ml-1 flex items-center gap-1 select-none">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: 'linear-gradient(135deg,#5B8DEF,#38BDF8)', boxShadow: '0 0 6px rgba(91,141,239,0.6)' }}
          />
          <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(91,141,239,0.35)' }} />
        </span>

        {navLinks.map(({ label, path }) => {
          const isActive = pathname === path
          return (
            <button
              key={path}
              ref={(el) => { itemRefs.current[path] = el }}
              onClick={() => router.push(path)}
              onMouseEnter={() => setHovered(path)}
              onMouseLeave={() => setHovered(null)}
              className="relative z-10 px-5 py-2 rounded-xl font-staat text-[15px] tracking-widest transition-all duration-200"
              style={{
                color: isActive ? '#fff' : 'rgba(123,158,200,0.5)',
              }}
            >
              {label}
              {isActive && (
                <span
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: 'linear-gradient(90deg,#5B8DEF,#38BDF8)', boxShadow: '0 0 4px #38BDF8' }}
                />
              )}
            </button>
          )
        })}

        {/* divider + status */}
        <span className="ml-2 mr-1 h-4 w-px" style={{ background: 'rgba(91,141,239,0.2)' }} />
        <span className="flex items-center gap-1.5 px-3 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-staat text-[12px] tracking-widest uppercase" style={{ color: 'rgba(91,141,239,0.45)' }}>
            Available
          </span>
        </span>
      </nav>
    </div>
  )
}

export default NavbarDesktop
