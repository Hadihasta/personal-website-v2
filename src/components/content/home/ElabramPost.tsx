'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ElabramPost = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.elabram-photo', {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'back.out(1.4)',
        })
      }, ref)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <div ref={ref}>
      {/* barrier */}
      <div className="flex flex-row justify-center items-center text-blueDisable gap-3 h-50">
        <div className="font-bold">2025</div>
        <div className="h-px max-w-[30px] bg-blueDisable flex-1" />
        <div className="grow font-extrabold">Elabram Indonesia</div>
      </div>

      {/* photos */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          '/asset/post/Elabram_1.jpg',
          '/asset/post/Elabram_2.jpg',
          '/asset/post/Elabram_3.jpg',
        ].map((src, i) => (
          <div key={i} className="elabram-photo">
            <div className="mx-auto max-w-48 overflow-hidden rounded-2xl p-2 bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B] shadow-md cursor-pointer border border-white/5 transition hover:scale-[1.02] hover:border-blueDisable/30">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    className="h-48 w-full max-h-48 max-w-48 min-h-48 object-cover rounded-2xl md:h-full md:w-44"
                    src={src}
                    alt="Elabram"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* text */}
      <div className="hidden md:flex break-all text-base font-medium mt-10 text-white/80 leading-relaxed">
        During my time at a highly supportive and professional IT company, I had the privilege of working in an
        environment that valued both personal growth and collective excellence. The culture encouraged collaboration
        and innovation — allowing me to refine my skills while contributing meaningfully to impactful projects. This
        chapter of my journey will always hold a special place in my memory, not only for the experiences gained but
        also for the people who made the journey truly remarkable.
      </div>
    </div>
  )
}

export default ElabramPost
