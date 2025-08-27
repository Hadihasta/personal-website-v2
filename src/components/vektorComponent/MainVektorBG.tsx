import Image from 'next/image'

const MainVektorBG = () => {
  return (
  <div className="flex justify-between ">
           <div className="absolute left-[-60px] top-[40px]">
             <Image
               src="/asset/vektor/left-vektor-main.svg"
               alt="vektor_left"
               width={250}
               height={250}
          
             ></Image>
           </div>
           <div className="absolute right-[0px] top-[40px]">
             <Image
               src="/asset/vektor/right-vektor-main.svg"
               alt="vektor_right"
               width={200}
               height={200}
             ></Image>
           </div>
         </div>
  )
}

export default MainVektorBG