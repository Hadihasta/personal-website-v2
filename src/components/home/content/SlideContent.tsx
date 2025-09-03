'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import Image from 'next/image'

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
      className="relative layout h-110 w-full  overflow-hidden"
      ref={containerRef}
    >
      <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-[#EFE4D2] to-[#254D70] ">
        <div className="flex items-center justify-center font-rowdies text-[#EFE4D2] font-bold text-[200px]   h-1/3  pt-10 ">
          <i className="i-tabler-chevrons-left text-[200px]"></i> {`2025`}{' '}
          <i className="i-tabler-chevrons-right text-[200px]"></i>
        </div>
        <div className="flex  flex-row px-5 md:px-20 justify-evenly ">
          <div>
            {/* min-h-48  shrink-0 */}
            <Image
              src="/asset/content/Elabram2025_2.jpg"
              alt="Hadi_Slide1_1"
              width={250}
              height={250}
              // min-h-48  absolute
              className="  absolute mb-10  h-48 w-150 object-cover rounded-2xl"
            />
          </div>
          {/*min-h-48  shrink-0  */}
          <div>
            <Image
              src="/asset/content/Elabram2025_1.jpg"
              alt="Hadi_Slide1_2"
              width={250}
              height={250}
              //  h-full w-100 min-h-48 absolute
              className=" relative ml-50 mt-20 h-48 w-150   object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* slide 2 */}
      <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-[#239BA7] to-[#7ADAA5] ">
        {' '}
        <div className="flex items-center justify-center font-rowdies text-[#239BA7] font-bold text-[200px]   h-1/3  pt-10 ">
          <i className="i-tabler-chevrons-left text-[200px]"></i> {`2024`}{' '}
          <i className="i-tabler-chevrons-right text-[200px]"></i>
        </div>
        <div className="flex  flex-row px-5 md:px-20 justify-evenly ">
          <div>
            {/* min-h-48  shrink-0 */}
            <Image
              src="/asset/content/airport2.jpg"
              alt="Hadi_Slide1_1"
              width={250}
              height={250}
              // min-h-48  absolute
              className="  absolute mb-10  h-48 w-150 object-cover rounded-2xl"
            />
          </div>
          {/*min-h-48  shrink-0  */}
          <div>
            <Image
              src="/asset/content/airport.jpg"
              alt="Hadi_Slide1_2"
              width={250}
              height={250}
              //  h-full w-100 min-h-48 absolute
              className=" relative ml-50 mt-20 h-48 w-150   object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* slide 3*/}
      <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-[#239BA7] to-[#FCECDD] ">
        {' '}
        <div className="flex items-center justify-center font-rowdies text-[#239BA7] font-bold text-[200px]   h-1/3  pt-10 ">
          <i className="i-tabler-chevrons-left text-[200px]"></i> {`2023`}{' '}
          <i className="i-tabler-chevrons-right text-[200px]"></i>
        </div>
        <div className="flex  flex-row px-5 md:px-20 justify-evenly ">
          <div>
            {/* min-h-48  shrink-0 */}
            <Image
              src="/asset/content/2023_2.jpg"
              alt="Hadi_Slide1_1"
              width={250}
              height={250}
              // min-h-48  absolute
              className="  absolute mb-10  h-48 w-150 object-cover rounded-2xl"
            />
          </div>
          {/*min-h-48  shrink-0  */}
          <div>
            <Image
              src="/asset/content/2023.jpg"
              alt="Hadi_Slide1_2"
              width={250}
              height={250}
              //  h-full w-100 min-h-48 absolute
              className=" relative ml-50 mt-20 h-48 w-150   object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* slide 4*/}
      <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-[#FBF5DD] to-[#A6CDC6] ">
        {' '}
        <div className="flex items-center justify-center font-rowdies text-[#FBF5DD] font-bold text-[200px]   h-1/3  pt-10 ">
          <i className="i-tabler-chevrons-left text-[200px]"></i> {`2022`}{' '}
          <i className="i-tabler-chevrons-right text-[200px]"></i>
        </div>
        <div className="flex  flex-row px-5 md:px-20 justify-evenly ">
          <div>
            {/* min-h-48  shrink-0 */}
            <Image
              src="/asset/content/2022.jpg"
              alt="Hadi_Slide1_1"
              width={250}
              height={250}
              // min-h-48  absolute
              className="absolute mb-10  h-48 w-150 object-cover rounded-2xl"
            />
          </div>
          {/*min-h-48  shrink-0  */}
          <div>
            <Image
              src="/asset/content/2022_1.jpg"
              alt="Hadi_Slide1_2"
              width={250}
              height={250}
              //  h-full w-100 min-h-48 absolute
              className="relative ml-50 mt-20 h-48 w-150   object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideContent
