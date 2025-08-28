'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin, Observer)

const DisplayContent = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const sections = gsap.utils.toArray<HTMLElement>('.slide')
    const images = gsap.utils.toArray<HTMLElement>('.image').reverse()
    const slideImages = gsap.utils.toArray<HTMLElement>('.slide__img')
    const outerWrappers = gsap.utils.toArray<HTMLElement>('.slide__outer')
    const innerWrappers = gsap.utils.toArray<HTMLElement>('.slide__inner')
    const count = document.querySelector('.count')
    const wrap = gsap.utils.wrap(0, sections.length)
    let animating = false
    let currentIndex = 0


    // set inner dan outer dikanan ( x = 100) dikiri (x = -100)
     gsap.set(outerWrappers, { xPercent: 100 })
    gsap.set(innerWrappers, { xPercent: -100 })
    // untuk index pertama dari inner dan outter set di tengah saat first load
    gsap.set('.slide:nth-of-type(1) .slide__outer', { xPercent: 0 })
    gsap.set('.slide:nth-of-type(1) .slide__inner', { xPercent: 0 })

   function gotoSection(index: number, direction: number): void {
  animating = true;
  index = wrap(index);

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "expo.inOut" },
    onComplete: () => {
      animating = false;
    }
  });

  const currentSection = sections[currentIndex];
  const heading = currentSection.querySelector(".slide__heading");
  const nextSection = sections[index];
  const nextHeading = nextSection.querySelector(".slide__heading");

  if (heading instanceof HTMLElement && nextHeading instanceof HTMLElement) {
    gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
    gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
    gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

    tl
      .set(count, { text: String(index + 1) }, 0.32)
      .fromTo(
        outerWrappers[index],
        { xPercent: 100 * direction },
        { xPercent: 0 },
        0
      )
      .fromTo(
        innerWrappers[index],
        { xPercent: -100 * direction },
        { xPercent: 0 },
        0
      )
      .to(
        heading,
        {
          "--width": 800,
          xPercent: 30 * direction
        },
        0
      )
      .fromTo(
        nextHeading,
        {
          "--width": 800,
          xPercent: -30 * direction
        },
        {
          "--width": 200,
          xPercent: 0
        },
        0
      )
      .fromTo(
        images[index],
        {
          xPercent: 125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
        0
      )
      .fromTo(
        images[currentIndex],
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        {
          xPercent: -125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        0
      )
      .fromTo(
        slideImages[index],
        { scale: 2 },
        { scale: 1 },
        0
      )
      .timeScale(0.8);
  }

  currentIndex = index;
}
    //  scroll mouse up and down
    Observer.create({
      target: containerRef.current,
      type: 'wheel,touch,pointer',
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => {
        if (animating) return
        gotoSection(currentIndex + 1, 1)
      },
      onDown: () => {
        if (animating) return
        gotoSection(currentIndex - 1, -1)
      },
      tolerance: 10,
    })

    // keyboard arrow  up down enter dan space trigger goto section
    const logKey = (e: KeyboardEvent) => {
      if ((e.code === 'ArrowUp' || e.code === 'ArrowLeft') && !animating) {
        gotoSection(currentIndex - 1, -1)
      }
      if (['ArrowDown', 'ArrowRight', 'Space', 'Enter'].includes(e.code) && !animating) {
        gotoSection(currentIndex + 1, 1)
      }
    }

    document.addEventListener('keydown', logKey)
    return () => document.removeEventListener('keydown', logKey)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Slide 1 */}
      <div className="slide relative flex justify-center drop-shadow-md bg-blueDisable text-white h-screen rounded-[50px]">
        <div className="slide__outer flex">
          <div className="slide__inner flex">
            <h2 className="slide__heading text-3xl font-bold mb-4">Slide One</h2>
            
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="slide relative flex justify-center drop-shadow-md bg-yellowTemp text-white h-screen rounded-[50px]">
        <div className="slide__outer">
          <div className="slide__inner">
            <h2 className="slide__heading text-3xl font-bold mb-4">Slide Two</h2>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="slide relative flex justify-center drop-shadow-md bg-greenTemplate text-white h-screen rounded-[50px]">
        <div className="slide__outer">
          <div className="slide__inner">
            <h2 className="slide__heading text-3xl font-bold mb-4">Slide Three</h2>
          </div>
        </div>
      </div>

      {/* Counter + Background Images */}
      <p className="overlay__count absolute bottom-4 right-4 text-white text-xl">
        0<span className="count">1</span>
      </p>
      <Image
        width={50}
        height={50}
        alt="Hadi"
        className="image absolute inset-0   -z-10"
        src="/asset/content/hadi_sea.jpg"
      />
      <Image
        width={50}
        height={50}
        alt="Hadi"
        className="image absolute inset-0   -z-20"
        src="/asset/content/hadi_airport.jpg"
      />
      <Image
        width={50}
        height={50}
        alt="Hadi"
        className="image absolute inset-0   -z-30"
        src="/asset/content/hadi.jpg"
      />
    </div>
  )
}

export default DisplayContent
