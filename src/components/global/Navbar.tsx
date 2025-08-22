import React from 'react'

const Navbar = () => {
  return (
    <div className="flex relative text-white text-end font-staat text-24 gap-8 justify-end z-100 ">
      <div className='cursor-pointer hover:text-blueDisable'>HOME</div>
      <div className='cursor-pointer hover:text-blueDisable'>GOALS</div>
      <div className='cursor-pointer hover:text-blueDisable'>PROJECT</div>
      <div>|</div>
      <div className='cursor-pointer hover:text-blueDisable'>MORE</div>
    </div>
  )
}

export default Navbar
