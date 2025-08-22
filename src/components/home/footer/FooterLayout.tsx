import React from 'react'

const FooterLayout = () => {
  return (
    <div className="text-white " >
      <div className="h-px w-full bg-blueDisable flex-1"></div>

      <div className='my-2'>
        <div className='font-bold'>Hijri Ismail Hadi</div>
        <div>Front End Dev | React, Next.js</div>
      </div>

      <div className='my-2'>
        <div className="max-w-screen-xl mx-auto grid  grid-cols-2 md:grid-cols-3  ">
          {/* Navigasi - General */}
          <div>
            <h4 className="text-lg font-semibold mb-4">General</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Goals</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Navigasi - The Website */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Notion</a>
              </li>
              <li>
                <a href="#">Excalidraw</a>
              </li>
              <li>
                <a href="#">Chatgpt</a>
              </li>
              <li>
                <a href="#">unsplash</a>
              </li>
              {/* <li>
                <a href="#"> radix tailwind motion dev swipper</a>
              </li> */}
            </ul>
          </div>

          {/* Navigasi - Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4"> Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Hijrihadi@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-blueDisable flex-1"></div>

      <div className="text-center text-sm text-muted-foreground py-4">
        <p className="flex items-center justify-center gap-1">
          <i
            className="i-tabler-copyright"
            aria-hidden="true"
          ></i>
          <span>
            2025 <span>Hijri Ismail Hadi </span>. All rights reserved.
          </span>
        </p>
      </div>
    </div>
  )
}

export default FooterLayout
