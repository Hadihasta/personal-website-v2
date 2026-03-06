import Image from 'next/image'

const SectionRight = () => {
  return (
    <div className="flex justify-center mt-10 ">
      <Image
        src="/asset/personal/Hadi.svg"
        alt="vektor_left"
        width={250}
        height={250}
        className="absolute top-[205px]"
      ></Image>
      <Image
        src="/asset/personal/MediumChair-no-bg.svg"
        alt="vektor_left"
        width={300}
        height={300}
        className="relative top-[-35px] right-[4px]"
      ></Image>
    </div>
  )
}

export default SectionRight
