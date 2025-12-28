'use client'

import { useEffect } from 'react'
import Navbar from '@/components/global/Navbar'
import MainVektorBG from '@/components/vektorComponent/MainVektorBG'
import MainDisplay from '@/components/home/MainDisplay'
import RecentlyPost from '@/components/home/post/RecentlyPost'
import ElabramPost from '@/components/home/retro/ElabramPost'
import FooterLayout from '@/components/home/footer/FooterLayout'
import SlideContent from '@/components/home/content/SlideContent'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MainSection from '@/components/home-v2/MainSection'
import FirstSection from '@/components/content/home/FirstSection'


gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
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

    gsap.from('.wait-second-in', {
      scrollTrigger: {
        trigger: '.wait-second-in',
        start: 'top center',
      },
      opacity: 0,
      y: 50,
      duration: 3,
    })
  }, [])


  return (
    <div className=" bg-linear-[171deg] from-blueDark to-muteGrey min-h-screen cursor-default">
      {/* <MainVektorBG /> */}
      <div
        id="layout"
        className="fade-in px-5 md:px-20"
      >
        <div
          id="logo-main"
          className="flex"
        >
          <div className="text-2xl text-white font-staat md:text-36  cursor-pointer ">HADI</div>
        </div>
        <div>
          <Navbar />
        </div>
        {/* <MainDisplay /> */}
        {/* <MainSection /> */}
<FirstSection/>
      </div>

      <div >
      <div  id='about_me' className="  flex text-center  justify-center font-rowdies text-blueDisable font-bold text-48  mt-100 ">
      Spotlight
      </div>
      <SlideContent />
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
          <div id="secondary_section" className='wait-scroll-in'>
            <div className="text-center md:text-left! font-rowdies text-blueDisable font-bold text-48 flex   mt-100 ">
              Recently Post
            </div>
            <div>
              <RecentlyPost />
            </div>
          </div>
          <div id="third_section" className='wait-second-in '>
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
