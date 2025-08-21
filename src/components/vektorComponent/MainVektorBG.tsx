import Image from 'next/image'

const MainVektorBG = () => {
  return (
  <div className="flex justify-between ">
           <div className="fixed left-[-40px]">
             <Image
               src="/asset/vektor/left-vektor-main.svg"
               alt="vektor_left"
               width={250}
               height={250}
               className=""
             ></Image>
           </div>
           <div className="fixed right-[-40px]">
             <Image
               src="/asset/vektor/right-vektor-main.svg"
               alt="vektor_right"
               width={250}
               height={250}
             ></Image>
           </div>
         </div>
  )
}

export default MainVektorBG