'use client'

import { useRouter, usePathname } from 'next/navigation'

const NavbarDesktop = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigate = (path: string) => {
    router.push(path)
  }

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
    <div className="hidden lg:flex justify-center z-50 mt-10">
      <div className="flex text-white font-staat text-24 gap-8 rounded-lg px-4 py-2
        bg-linear-to-r from-muteGrey to-blueDark border border-muteGrey">

        <div onClick={() => handleNavigate('/')} className={navItemClass('/')}>
          HOME
        </div>

        <div onClick={() => handleNavigate('/projects')} className={navItemClass('/projects')}>
          PROJECT
        </div>

        <div onClick={() => handleNavigate('/sight')} className={navItemClass('/sight')}>
          SIGHT
        </div>

        <div className="opacity-40">|</div>

        <div onClick={() => handleNavigate('/more')} className={navItemClass('/more')}>
          MORE
        </div>
      </div>
    </div>
  )
}

export default NavbarDesktop
