import Image from 'next/image'

const ElabramPost = () => {
  return (
    <div>
      {/*BARRIER  */}
      <div className="flex flex-row justify-center items-center text-blueDisable gap-3  h-50 ">
        <div>2025</div>
        <div className="h-px max-w-[30px] bg-blueDisable flex-1"></div>
        <div className="grow">Elabram Indonesia</div>
      </div>
      {/* PICTURE IMAGE */}
      <div className="flex flex-row justify-evenly ">
        <div>
          <div className=" mx-auto overflow-hidden rounded-2xl p-2 bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B]  shadow-md cursor-pointer">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  className="h-48 w-full  max-h-48 min-h-48 object-cover rounded-2xl md:h-full md:w-48"
                  src="/asset/post/Elabram_1.jpg"
                  alt="HADIHADI"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" mx-auto overflow-hidden rounded-2xl p-2 bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B]  shadow-md cursor-pointer">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  className="h-48 w-full   max-h-48 min-h-48 object-cover rounded-2xl md:h-full md:w-48"
                  src="/asset/post/Elabram_2.jpg"
                  alt="HADIHADI"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" mx-auto overflow-hidden rounded-2xl p-2 bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B]  shadow-md cursor-pointer">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  className="h-48 w-full max-h-48 min-h-48 object-cover rounded-2xl md:h-full md:w-48"
                  src="/asset/post/Elabram_3.jpg"
                  alt="HADIHADI"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="break-all text-base font-medium mt-10 text-white">{`During my time at a highly supportive and professional IT company, I had the privilege of working in an environment that valued both personal growth and collective excellence. The culture encouraged collaboration, and  innovation. allowing me to refine my skills while contributing meaningfully to impactful projects. This chapter of my journey will always hold a special place in my memory, not only for the experiences gained but also for the people who made the journey truly remarkable.`}</div>
    </div>
  )
}

export default ElabramPost
