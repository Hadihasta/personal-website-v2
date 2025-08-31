'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin, Observer)

const SlideContent = () => {
  useEffect(() => {
    if (!containerRef.current) return
    const sections = gsap.utils.toArray<HTMLElement>('.slide')
    const wrap = gsap.utils.wrap(0, sections.length)
    let currentIndex = 0

    let animating = false

    // set awal x  position 100
    gsap.set(sections, { xPercent: 100, zIndex: 0 })
    // gsap.set(sections, { xPercent: 0 })
    gsap.fromTo(sections[0], { xPercent: 100 }, { xPercent: 0, duration: 1, ease: 'expo.inOut' })

    function gotoSection(index: number, direction: number): void {
      console.log(index, '----', direction)
      animating = true
      // kalau index 3 + 1 loop to 0 | kalau 0 -1 loop  to 3
      index = wrap(index)

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'expo.inOut' },
        onComplete: () => {
          animating = false
        },
      })

      tl.to(sections[currentIndex], { xPercent: -100 * direction }, 0)

      // 👇 move IN the new slide
      .fromTo(sections[index], { xPercent: 100 * direction }, { xPercent: 0 }, 0)

      currentIndex = index
    }
    Observer.create({
      target: containerRef.current,
      type: 'wheel,touch,pointer',
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => {
        // if (animating) return
        gotoSection(currentIndex + 1, 1)
        // console.log('up')
      },
      onDown: () => {
        // if (animating) return
        gotoSection(currentIndex - 1, -1)
        // console.log('down')
      },
      tolerance: 10,
    })
  }, [])
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <div
      className="flex flex-row layout h-100 my-10   overflow-hidden mx-auto" 
      ref={containerRef}
    >
      <div className="bg-red-500 slide flex-shrink-0  h-full w-screen ">slide 1</div>
      <div className="bg-blue-500 slide flex-shrink-0  h-full w-screen  ">slide 2</div>
      <div className="bg-green-500 slide flex-shrink-0  h-full w-screen  ">slide 3</div>
      <div className="bg-yellow-500 slide flex-shrink-0  h-full w-screen   ">slide 4</div>
    </div>
  )
}

export default SlideContent
