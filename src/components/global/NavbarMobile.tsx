'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const NavbarMobile = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navigate = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  const navItemClass = (path: string) => {
    const isActive = pathname === path
    return `
      py-3 text-lg tracking-wide
      ${isActive ? 'text-blueDisable font-semibold' : 'text-white'}
    `
  }

  return (
    <>
      {/* Top bar */}
      <div className="lg:hidden fixed top-4 left-0 right-0 z-50 px-4">
    <div
  className="
    inline-flex w-fit
    items-center justify-center
    bg-linear-to-r from-muteGrey to-blueDark
    border border-muteGrey rounded-lg
    px-4 py-3
  "
>
  <button
    onClick={() => setOpen(!open)}
    className="flex flex-col gap-1"
    aria-label="Toggle menu"
  >
    <span
      className={`h-[2px] w-6 bg-white transition-transform duration-300
        ${open ? 'rotate-45 translate-y-[6px]' : ''}`}
    />
    <span
      className={`h-[2px] w-6 bg-white transition-opacity duration-200
        ${open ? 'opacity-0' : 'opacity-100'}`}
    />
    <span
      className={`h-[2px] w-6 bg-white transition-transform duration-300
        ${open ? '-rotate-45 -translate-y-[6px]' : ''}`}
    />
  </button>
</div>
      </div>

     
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
        />
      )}


      <div
        className={`lg:hidden fixed top-20 left-4 right-4 z-50
        bg-linear-to-b from-muteGrey to-blueDark
        rounded-xl border border-muteGrey
        transition-all duration-300
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center font-staat">
          <button onClick={() => navigate('/')} className={navItemClass('/')}>
            HOME
          </button>
          <button onClick={() => navigate('/projects')} className={navItemClass('/projects')}>
            PROJECT
          </button>
          <button onClick={() => navigate('/sight')} className={navItemClass('/sight')}>
            SIGHT
          </button>
          <div className="w-full h-px bg-white/20 my-2" />
          <button onClick={() => navigate('/more')} className={navItemClass('/more')}>
            MORE
          </button>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile
