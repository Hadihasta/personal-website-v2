import React from 'react'
import { Text } from '@radix-ui/themes'
import Image from 'next/image'


const RecentlyPost = () => {
  return (
    <div className="mt-4">
      <div className=" mx-auto overflow-hidden rounded-xl  bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B]  shadow-md cursor-pointer">
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
              <Text size="1" className='font-medium text-white'>June 20, 2025 </Text>
              <a
                href="#"
                className="mt-1 block text-lg leading-tight font-medium text-white"
              >
                Finding Path To My Favorite Stack
              </a>
            </div>
            <div
              className="hidden md:flex flex-col grow"
              // className={` grow ${isHovered ? 'block' : 'absolute'}`}
            >
              <p className="mt-2  text-sm text-white  ">
                After completing the bootcamp I attended, I have always placed the technology stack I first learned in a
                special place. Although I have worked with various stacks depending on the demands of my projects, I
                often find myself returning to my primary stack, which consists of the following technologies
              </p>
              <div className="text-blue-600 text-3xl">
                <i className="i-tabler-brand-tailwind  "></i>
                <i className="i-tabler-brand-react  "></i>
                <i className="i-tabler-brand-prisma  "></i>
              </div>
            </div>
            <div>
              {/* <Views counter={'3.590'} />
              <ReadTime minute={'1'} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentlyPost
