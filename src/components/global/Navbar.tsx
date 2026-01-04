'use client'

import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  // helper untuk pindah page
  const handleNavigate = (path: string) => {
    router.push(path)
  }

  // helper class active
  const navItemClass = (path: string) => {
    const isActive = pathname === path

    return `
      cursor-pointer
      transition-colors
      duration-200
      ${
        isActive
          ? 'text-blueDisable font-semibold'
          : 'hover:text-blueDisable'
      }
    `
  }

  return (
    <div className="hidden lg:flex justify-center z-100 mt-10">
      <div className="flex relative text-white text-end font-staat text-24 gap-8 border-muteGrey rounded-lg px-4 bg-linear-to-r from-muteGrey to-blueDark">

        <div
          onClick={() => handleNavigate('/')}
          className={navItemClass('/')}
        >
          HOME
        </div>

        <div
          onClick={() => handleNavigate('/projects')}
          className={navItemClass('/projects')}
        >
          PROJECT
        </div>

         <div
          onClick={() => handleNavigate('/sight')}
          className={navItemClass('/sight')}
        >
          Sight
        </div>


        <div>|</div>

        <div
          onClick={() => handleNavigate('/more')}
          className={navItemClass('/more')}
        >
          MORE
        </div>

      </div>
    </div>
  )
}

export default Navbar
