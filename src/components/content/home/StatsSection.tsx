'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: 'Years of Experience', value: 3, suffix: '+', prefix: '' },
  { label: 'Projects Shipped', value: 7, suffix: '+', prefix: '' },
  { label: 'Technologies in Stack', value: 15, suffix: '+', prefix: '' },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.stat-card', {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 82%',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: 'power3.out',
        })

        stats.forEach((stat, i) => {
          const el = document.querySelector(`#stat-num-${i}`)
          if (!el) return
          const obj = { val: 0 }
          gsap.to(obj, {
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 82%',
            },
            val: stat.value,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate() {
              el.textContent = `${stat.prefix}${Math.round(obj.val)}${stat.suffix}`
            },
          })
        })
      }, ref)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <div ref={ref} className="my-16 px-5 md:px-20">
      <div className="lg:max-w-[72rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card backdrop-blur-md bg-white/5 border border-blueLine/20 rounded-2xl px-8 py-7 flex flex-col gap-2 transition hover:scale-[1.02] hover:border-blueDisable/40"
            >
              <span
                id={`stat-num-${i}`}
                className="font-rowdies text-5xl font-bold text-blueDisable"
              >
                0{stat.suffix}
              </span>
              <span className="text-sm text-white/50 tracking-widest uppercase font-staat">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
