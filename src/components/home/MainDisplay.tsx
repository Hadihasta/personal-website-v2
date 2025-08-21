import SectionRight from './SectionRight'
import Image from 'next/image'
import SecondarySectionRight from './SecondarySectionRight'

const MainDisplay = () => {
  return (
    <div className="relative drop-shadow-md flex bg-blueDisable text-white h-100 rounded-50">
      <div className=" w-1/2 flex flex-col justify-center items-center">
        <div className="h-1/2 flex flex-col justify-center items-center break-all max-w-xs font-bold text-base">{`I’m a front-end developer crafting modern web applications using React cycle, with a strong focus on clean code and intuitive UI/UX.`}</div>
        <div className="h-1/2 flex flex-col justify-center items-end">
          <Image
            src="/asset/personal/close-up-no-bg.svg"
            alt="Hadi"
            width={250}
            height={250}
            className="relative bottom-[4px] "
          ></Image>
        </div>
      </div>
      <div className="w-1/2">
        <div className="h-1/2">
          <SectionRight />
        </div>
        <div className="h-1/2">
          <SecondarySectionRight />
        </div>
      </div>
    </div>
  )
}

export default MainDisplay
