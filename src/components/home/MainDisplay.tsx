'use client'
import SectionRight from './SectionRight'
import Image from 'next/image'
import SecondarySectionRight from './SecondarySectionRight'
import { motion } from 'motion/react'
// import Typhography from './typhography/Typhography'

const MainDisplay = () => {
  return (
    <>
      <div className="relative flex justify-center drop-shadow-md  bg-blueDisable text-white h-100 rounded-50">
        <div className=" w-1/2 hidden md:flex flex-col justify-center items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-1/2 flex flex-col justify-center items-center break-all max-w-xs font-bold text-base"
          >{`I’m a front-end developer crafting modern web applications using React cycle, with a strong focus on clean code and intuitive UI/UX.`}</motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-1/2 flex flex-col justify-center items-end"
          >
            <Image
              src="/asset/personal/close-up-no-bg.svg"
              alt="Hadi"
              width={250}
              height={250}
              className="relative bottom-[4px] "
            ></Image>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className=" md:w-1/2"
        >
          <div className="h-1/2">
            <SectionRight />
          </div>
          <div className="h-1/2">
            <SecondarySectionRight />
          </div>
        </motion.div>
      </div>
      <div className='flex justify-center my-10 ' >
        <a href="#about_me">
        <div className="animate-bounce flex size-10  items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20">
          <i className="i-tabler-arrow-down font- cursor-pointer text-3xl text-blueDisable "></i>
        </div>
      </a>
      </div>
      {/* <Typhography/> */}
    </>
  )
}

export default MainDisplay
