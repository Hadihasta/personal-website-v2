'use client'
import React, { useRef, useEffect } from 'react'
import { Text } from '@radix-ui/themes'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const RecentlyPost = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
          x: 100,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        })
      })
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <div ref={ref} className="mt-4">
      <div className="mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B] shadow-md cursor-pointer border border-white/5 transition hover:scale-[1.01] hover:border-blueDisable/30">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-36 w-full object-cover md:h-full md:w-48"
              src="/asset/useable/Path.jpg"
              alt="Modern building architecture"
              width={250}
              height={250}
            />
          </div>
          <div className="p-6 flex flex-col">
            <div>
              <Text size="1" className="font-medium text-white/60">June 20, 2025</Text>
              <a
                href="#"
                className="mt-1 block text-lg leading-tight font-medium text-white hover:text-blueLine transition"
              >
                Finding Path To My Favorite Stack
              </a>
            </div>
            <div className="hidden md:flex flex-col grow">
              <p className="mt-2 text-sm text-white/70">
                After completing the bootcamp I attended, I have always placed the technology stack I first learned in a
                special place. Although I have worked with various stacks depending on the demands of my projects, I
                often find myself returning to my primary stack, which consists of the following technologies.
              </p>
              <div className="mt-3 flex gap-2 text-sm text-blueLine/60">
                <i className="i-tabler-brand-tailwind" />
                <i className="i-tabler-brand-react" />
                <i className="i-tabler-brand-prisma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentlyPost
