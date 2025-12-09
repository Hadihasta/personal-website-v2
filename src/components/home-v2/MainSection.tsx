import React from 'react'
import Image from 'next/image'

const MainSection = () => {
  return (
    <div>
      <div className="text-group relative flex justify-center drop-shadow-md  text-white h-100  " >
        <div>
         {` I’m a front-end developer crafting modern web applications using React cycle, with a strong focus on clean
          code and intuitive UI/UX.`}
        </div>
        <div>
            Services
          {/* <i className="i-tabler-brand-github "></i>
          <i className="i-tabler-brand-linkedin "></i>
          <i className="i-tabler-brand-twitter-filled "></i>
          <i className="i-tabler-mail "></i>
          <i className="i-tabler-file-cv "></i> */}
        </div>
      </div>
      <Image
        src="/asset/personal/close-up-no-bg.svg"
        alt="Hadi"
        width={250}
        height={250}
        className="relative bottom-[4px] "
      ></Image>
    </div>
  )
}

export default MainSection
