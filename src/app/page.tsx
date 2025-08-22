import Navbar from '@/components/global/Navbar'
import MainVektorBG from '@/components/vektorComponent/MainVektorBG'
import MainDisplay from '@/components/home/MainDisplay'
import RecentlyPost from '@/components/home/post/RecentlyPost'
import ElabramPost from '@/components/home/retro/ElabramPost'
import Footer from '@/components/home/footer/footer'

export default function Home() {
  return (
    <div className=" bg-linear-[171deg] from-blueDark to-muteGrey min-h-screen">
      <MainVektorBG />
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
        <MainDisplay />
        {/* secondary layout */}
        <div id='secondary_layout' className='px-20'>
        <div id="secondary_section">
          <div className=" font-rowdies text-blueDisable font-bold text-48 flex  justify-center mt-100 ">
            Recently Post
          </div>
          <div>
            <RecentlyPost />
          </div>
        </div>
        <div id="third_section">
          <div className="font-rowdies text-blueDisable font-bold text-48 flex   mt-100 ">Retro</div>
          <div><ElabramPost /></div>
        </div>
        </div>

       
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Footer/>
      </footer>
      </div>
    </div>
  )
}
