import Navbar from '@/components/global/Navbar'
import MainVektorBG from '@/components/vektorComponent/MainVektorBG'
import MainDisplay from '@/components/home/MainDisplay'

export default function Home() {
  return (
    <div className=" bg-linear-[171deg] from-blueDark to-muteGrey min-h-screen">
      <div
        id="layout"
        className="px-20"
      >
        <div
          id="logo-main"
          className="flex"
        >
          <div className=" text-white font-staat text-36  cursor-pointer">HADI</div>
        </div>
        <div>
          <Navbar />
        </div>
        <MainVektorBG />
        <MainDisplay />

        {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>section main</div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="bg-white">
          <i className="i-tabler-brand-github "></i>
          <i className="i-tabler-brand-linkedin "></i>
          <i className="i-tabler-brand-twitter-filled "></i>
          <i className="i-tabler-mail "></i>
          <i className="i-tabler-file-cv "></i>
        </div>
      </footer> */}
      </div>
    </div>
  )
}
