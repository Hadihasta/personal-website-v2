import Navbar from '@/components/global/Navbar'
import MainVektorBG from '@/components/vektorComponent/MainVektorBG'
import MainDisplay from '@/components/home/MainDisplay'
import RecentlyPost from '@/components/home/post/RecentlyPost'
import ElabramPost from '@/components/home/retro/ElabramPost'
import FooterLayout from '@/components/home/footer/FooterLayout'

export default function Home() {
  return (
    <div className=" bg-linear-[171deg] from-blueDark to-muteGrey min-h-screen cursor-default">
      <MainVektorBG />
      <div
        id="layout"
        className="px-5 md:px-20"
      >
        <div
          id="logo-main"
          className="flex"
        >
          <div className="text-lg text-white font-staat md:text-36  cursor-pointer ">HADI</div>
        </div>
        <div>
          <Navbar />
        </div>
        <MainDisplay />
        {/* secondary layout */}
        <div
          id="secondary_layout"
          className="px-5  md:px-20"
        >
          <div id="secondary_section">
            <div className="text-center md:text-left! font-rowdies text-blueDisable font-bold text-48 flex   mt-100 ">
              Recently Post
            </div>
            <div>
              <RecentlyPost />
            </div>
          </div>
          <div id="third_section">
            <div className="font-rowdies text-blueDisable font-bold text-48 flex   mt-100 ">Retro</div>
            <div>
              <ElabramPost />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-50">
          <FooterLayout />
        </footer>
      </div>
    </div>
  )
}
