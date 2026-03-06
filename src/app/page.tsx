'use client'

import { useEffect } from 'react'
import MainVektorBG from '@/components/vektorComponent/MainVektorBG'
import RecentlyPost from '@/components/home/post/RecentlyPost'
import ElabramPost from '@/components/home/retro/ElabramPost'
import FooterLayout from '@/components/home/footer/FooterLayout'
import SlideContent from '@/components/home/content/SlideContent'
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FirstSection from '@/components/content/home/FirstSection'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in', {
        scrollTrigger: {
          trigger: '.fade-in',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      gsap.from('.wait-scroll-in', {
        scrollTrigger: {
          trigger: '.wait-scroll-in',
          start: 'top center',
        },
        opacity: 0,
        y: 100,
        duration: 3,
      })
    })

    return () => ctx.revert()
  }, [pathname])

  return (
    <div>
      {/* <MainVektorBG /> */}
      <div
        id="layout"
        className="fade-in px-5 md:px-20"
      >
        <div
          id="logo-main"
          className="flex"
        ></div>
        <FirstSection />
      </div>

      <div
        id="body_layout"
        className="px-5 md:px-20"
      >
        {/* secondary layout */}
        <div
          id="secondary_layout"
          className=" px-5  md:px-20  "
        >
          <div
            id="secondary_section"
            className="wait-scroll-in"
          >
            <div className="text-center md:text-left! font-rowdies text-blueDisable font-bold text-48 flex   mt-100 ">
              Recently Post
            </div>
            <div>
              <RecentlyPost />
            </div>
          </div>

          {/* <div>
            <div
              id="about_me"
              className=" flex text-center  justify-center font-rowdies text-blueDisable font-bold text-48  mt-100 "
            >
              Spotlight
            </div>
            <SlideContent />
          </div> */}

          <div
            id="third_section"
            className="wait-second-in "
          >
            <div className="font-rowdies text-blueDisable font-bold text-48 flex   mt-100 ">Retro</div>
            <div>
              <ElabramPost />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-50">
          <FooterLayout />
        </footer>
      </div>
    </div>
  )
}
