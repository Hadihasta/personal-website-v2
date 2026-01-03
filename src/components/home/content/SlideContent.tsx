'use client'
import Overlay from '@/components/ui/Overlay'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import Image from 'next/image'

gsap.registerPlugin(Observer)

const SlideContent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current) return
    const sections = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.slide'))
    const image = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.image_slide'))
    const imageZoomin = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.image_zoom'))
    const count = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.count'))
    const countFirst = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.count_first'))
    const countSecond = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.count_second'))
    const countThird = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.count_third'))

    const wrap = gsap.utils.wrap(0, sections.length)
    let currentIndex = 0
    let animating = false

    // Atur posisi awal: hanya slide pertama yang tampil
    gsap.set(sections, { xPercent: 300 })
    gsap.set(image, { xPercent: 300 })

    gsap.fromTo(
      sections[0],
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
      }
    )
    gsap.fromTo(
      image[0],
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
      }
    )

    gotoSection(0, 1)
    function gotoSection(index: number, direction: number): void {
      animating = true
      index = wrap(index) // loop index

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'expo.inOut' },
        onComplete: () => {
          animating = false
        },
      })

      gsap.set([image], { zIndex: 0, autoAlpha: 0 })
      gsap.set(image[index], { zIndex: 1, autoAlpha: 1 })

      tl.to(
        sections[currentIndex],
        {
          xPercent: -100 * direction,
        },
        0
      )
        .to(
          image[currentIndex],
          {
            xPercent: -100 * direction,
          },
          0
        )

        // slide baru masuk
        .fromTo(
          sections[index],
          {
            xPercent: 100 * direction,
          },
          {
            xPercent: 0,
          },
          0
        )
        .fromTo(
          image[index],
          {
            xPercent: 100 * direction,
          },
          {
            xPercent: 0,
          },
          0
        )
        .fromTo(imageZoomin[index], { scale: 3 }, { scale: 1 }, 0)
        .fromTo(count[index], { scale: 0 }, { scale: 1 }, 0.4)
        .fromTo(countFirst[index], { scale: 0 }, { scale: 1 }, 0.1)
        .fromTo(countSecond[index], { scale: 0 }, { scale: 1 }, 0.2)
        .fromTo(countThird[index], { scale: 0 }, { scale: 1 }, 0.3)
        .timeScale(0.7)

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
    <>
        <div
          className="relative layout h-110 w-full  overflow-hidden rounded-2xl mt-5"
          ref={containerRef}
          >
       <Overlay  />
          <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-muteGrey to-blueDark ">
            <div className="flex items-center justify-center font-rowdies text-[#EFE4D2] font-bold text-8xl xl:text-[200px] h-1/3  pt-10 z-[1]">
              <i className="i-tabler-chevrons-left "></i>
              <span className="count_first">2</span> <span className="count_second">0</span>{' '}
              <span className="count_third">2</span>
              <span className="count">5</span>
              <i className="i-tabler-chevrons-right "></i>
            </div>
            <div className="flex  flex-row px-5 md:px-20 justify-start ">
              <div>
                {/* min-h-48  shrink-0 */}
                <Image
                  src="/asset/content/Elabram2025_2.jpg"
                  alt="Hadi_Slide1_1"
                  width={250}
                  height={250}
                  // min-h-48  absolute
                  className=" image_zoom absolute  mb-10  h-48 w-48 xl:w-150 object-cover rounded-2xl"
                />
              </div>
              {/*min-h-48  shrink-0  */}
            </div>
          </div>
          {/* slide 2 */}
          <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-muteGrey to-blueDark ">
            {' '}
            <div className="flex items-center justify-center font-rowdies text-[#EFE4D2] font-bold text-8xl xl:text-[200px] h-1/3  pt-10 z-[1]">
              <i className="i-tabler-chevrons-left "></i>
              <span className="count_first">2</span> <span className="count_second">0</span>{' '}
              <span className="count_third">2</span>
              <span className="count">4</span>
              <i className="i-tabler-chevrons-right "></i>
            </div>
            <div className="flex  flex-row px-5 md:px-20 justify-start ">
              <div>
                {/* min-h-48  shrink-0 */}
                <Image
                  src="/asset/content/airport2.jpg"
                  alt="Hadi_Slide1_1"
                  width={250}
                  height={250}
                  // min-h-48  absolute
                  className="  image_zoom absolute mb-10   h-48 w-48 xl:w-150 object-cover rounded-2xl"
                />
              </div>
              {/*min-h-48  shrink-0  */}
            </div>
          </div>
          {/* slide 3*/}
          <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-muteGrey to-blueDark ">
            {' '}
            <div className="flex items-center justify-center font-rowdies text-[#239BA7] font-bold text-8xl xl:text-[200px] h-1/3  pt-10 z-[1]">
              <i className="i-tabler-chevrons-left "></i> <span className="count_first">2</span>{' '}
              <span className="count_second">0</span> <span className="count_third">2</span>
              <span className="count">3</span>
              <i className="i-tabler-chevrons-right "></i>
            </div>
            <div className="flex  flex-row px-5 md:px-20 justify-start ">
              <div>
                {/* min-h-48  shrink-0 */}
                <Image
                  src="/asset/content/2023_2.jpg"
                  alt="Hadi_Slide1_1"
                  width={250}
                  height={250}
                  // min-h-48  absolute
                  className=" image_zoom absolute mb-10  h-48 w-48 xl:w-150 object-cover rounded-2xl"
                />
              </div>
              {/*min-h-48  shrink-0  */}
            </div>
          </div>
          {/* slide 4*/}
          <div className="slide absolute inset-0 flex   flex-col bg-linear-to-t from-muteGrey to-blueDark ">
            {' '}
            <div className="flex items-center justify-center font-rowdies text-[#80CBC4] font-bold text-8xl xl:text-[200px] h-1/3  pt-10 z-[1]">
              <i className="i-tabler-chevrons-left "></i> <span className="count_first">2</span>{' '}
              <span className="count_second">0</span> <span className="count_third">2</span>
              <span className="count">2</span>
              <i className="i-tabler-chevrons-right "></i>
            </div>
            <div className="flex  flex-row px-5 md:px-20 justify-start ">
              <div>
                {/* min-h-48  shrink-0 */}
                <Image
                  src="/asset/content/2022.jpg"
                  alt="Hadi_Slide1_1"
                  width={250}
                  height={250}
                  // min-h-48  absolute
                  className="image_zoom absolute mb-10  h-48 w-48 xl:w-150 object-cover rounded-2xl"
                />
              </div>
              {/*min-h-48  shrink-0  */}
            </div>
          </div>
          <div className="flex justify-center items-center h-full ">
            <div className="flex flex-row ">
              <Image
                src="/asset/content/Elabram2025_1.jpg"
                alt="Hadi_Slide1_2"
                width={250}
                height={250}
                className="image_slide absolute xl:left-130  h-48 w-48 xl:w-150   object-cover rounded-2xl"
              />
              <Image
                src="/asset/content/airport.jpg"
                alt="Hadi_Slide1_2"
                width={250}
                height={250}
                className=" image_slide absolute  xl:left-130   h-48 w-48 xl:w-150  object-cover rounded-2xl"
              />
              <Image
                src="/asset/content/2023.jpg"
                alt="Hadi_Slide1_2"
                width={250}
                height={250}
                className="image_slide absolute  xl:left-130  h-48 w-48 xl:w-150  object-cover rounded-2xl"
              />
              <div>
                <Image
                  src="/asset/content/2022_1.jpg"
                  alt="Hadi_Slide1_2"
                  width={250}
                  height={250}
                  className="image_slide absolute  xl:left-130  h-48 w-48 xl:w-150  object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SlideContent
