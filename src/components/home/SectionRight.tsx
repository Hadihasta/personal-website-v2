import Image from 'next/image'

const SectionRight = () => {
  return (
    <div className="flex justify-center ">
      <Image
        src="/asset/personal/Hadi.svg"
        alt="vektor_left"
        width={250}
        height={250}
        className="fixed top-[240px]"
      ></Image>
      <Image
        src="/asset/personal/MediumChair-no-bg.svg"
        alt="vektor_left"
        width={250}
        height={250}
        className="fixed"
      ></Image>
    </div>
  )
}

export default SectionRight
