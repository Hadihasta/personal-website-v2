import React from 'react'

const SecondarySectionRight = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>
        <a
          href="resume/HIJRI ISMAIL HADI_CV Des.pdf"
          target="_blank"
        >
          <button className="glass-card p-2 cursor-pointer  ">Download CV</button>
        </a>
      </div>
      <div className="mt-2 flex gap-[24px] flex-wrap items-center justify-center  opacity-0">
        <i className="i-tabler-brand-github cursor-pointer  "></i>
        <i className="i-tabler-brand-linkedin cursor-pointer "></i>
        <i className="i-tabler-brand-twitter-filled cursor-pointer  "></i>
        <i className="i-tabler-mail  cursor-pointer "></i>
        <i className="i-tabler-file-cv  cursor-pointer "></i>
      </div>
    </div>
  )
}

export default SecondarySectionRight
