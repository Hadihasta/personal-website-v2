import React from 'react'
 
const Navbar = () => {
  return (
    <div className=" hidden lg:flex  justify-center z-100 mt-10 ">
      <div className='flex relative text-white text-end font-staat text-24 gap-8     border-muteGrey rounded-lg px-4     bg-linear-to-r from-muteGrey to-blueDark '>
      <div className='cursor-pointer hover:text-blueDisable'>HOME</div>
      <div className='cursor-pointer hover:text-blueDisable'>GOALS</div>
      <div className='cursor-pointer hover:text-blueDisable'>PROJECT</div>
      <div>|</div>
      <div className='cursor-pointer hover:text-blueDisable'>MORE</div>
      </div>
    </div>
  )
}

export default Navbar
