'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'

gsap.registerPlugin(Observer)

const SlideContent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current) return
    const sections = gsap.utils.toArray<HTMLElement>('.slide')
    const wrap = gsap.utils.wrap(0, sections.length)
    let currentIndex = 0
    let animating = false

    // Atur posisi awal: hanya slide pertama yang tampil
    gsap.set(sections, { xPercent: 100 })
    gsap.fromTo(
      sections[0],
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
      }
    )

    function gotoSection(index: number, direction: number): void {
      animating = true
      index = wrap(index) // loop index

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'expo.inOut' },
        onComplete: () => {
          animating = false
        },
      })

      // current slide keluar
      tl.to(
        sections[currentIndex],
        {
          xPercent: -100 * direction,
        },
        0
      )

      // slide baru masuk
      tl.fromTo(
        sections[index],
        {
          xPercent: 100 * direction,
        },
        {
          xPercent: 0,
        },
        0
      )

      currentIndex = index
    }

    Observer.create({
      target: containerRef.current,
      type: 'wheel,touch,pointer',
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => {
        if (animating) return
        gotoSection(currentIndex + 1, +1)
      },
      onDown: () => {
        if (animating) return
        gotoSection(currentIndex - 1, -1)
      },
      tolerance: 10,
    })
  }, [])

  return (
    <div
      className="relative layout h-100 w-full  overflow-hidden"
      ref={containerRef}
    >
      <div className="bg-red-500 slide absolute inset-0">slide 1</div>
      <div className="bg-blue-500 slide absolute inset-0">slide 2</div>
      <div className="bg-green-500 slide absolute inset-0">slide 3</div>
      <div className="bg-yellow-500 slide absolute inset-0">slide 4</div>
    </div>
  )
}

export default SlideContent
