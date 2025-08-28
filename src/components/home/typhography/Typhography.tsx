import Image from 'next/image'

const Typhography = () => {
  return (
    <>
      <div className="mt-100">
        <div className="flex justify-end">
          <div >
            <Image
              src="/asset/typhography/simpleText.svg"
              alt="Hadi"
              width={250}
              height={250}
              className="relative bottom-[4px] "
            ></Image>
          </div>
          <div className='relative right-[15px] bottom-[40px]'>
            <Image
              src="/asset/typhography/shineLamp.svg"
              alt="Hadi"
              width={60}
              height={40}
            ></Image>
          </div>
        </div>
      </div>
    </>
  )
}

export default Typhography
