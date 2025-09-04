import { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {

    setShowOverlay(true)
  }, [])

  const handleClose = () => {
    setShowOverlay(false)
  }

  return (
    <>
      {showOverlay && (
        <div
          onClick={handleClose}
          className="absolute  inset-0 bg-white/70 flex items-center justify-center z-50 cursor-pointer h-110"
        >
          <div className="bg-black p-6 rounded-xl shadow-lg text-center max-w-sm">
            <p className="text-white">
              
           Scroll UP and Down for Slide this section
            </p>

            <DotLottieReact
                src="/asset/lottie/MouseScroll.lottie"
                loop
                autoplay
              />
          </div>
        </div>
      )}
    </>
  )
}

export default Overlay
