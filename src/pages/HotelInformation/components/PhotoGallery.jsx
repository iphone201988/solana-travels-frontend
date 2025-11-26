import React from 'react'
import gallery_1 from "../../../assets/images/gallery-1.jpg"
import gallery_2 from "../../../assets/images/gallery-2.jpg"
import gallery_3 from "../../../assets/images/gallery-3.jpg"
import gallery_4 from "../../../assets/images/gallery-4.jpg"

const PhotoGallery = () => {
  return (
    <div className=' max-w-[1400px] mx-auto p-[40px] max-lg:px-[20px]'>
      <div className="flex gap-4 justify-between">
        <div className="w-[40%] max-md:w-[50%] max-sm:w-full">
            <img className='w-full h-full object-cover rounded-3xl' src={gallery_1} alt="" />
        </div>
        <div className="w-[40%] flex justify-between flex-col gap-4 max-md:w-[50%] max-sm:hidden">
            <div className="">
                <img className='w-full h-full object-cover rounded-3xl' src={gallery_2} alt="" />
            </div>
            <div className="flex justify-between gap-4">
                 <div className=" w-[50%]">
                    <img className='w-full h-full object-cover rounded-3xl' src={gallery_3} alt="" />
                 </div>
                 <div className=" relative w-[50%]">
                    <div className=" cursor-pointer absolute top-0 right-0 w-full h-full bg-black/35 rounded-3xl flex justify-center items-center">
                    <p className=' text-[18px] font-semibold text-white'>+10 Photos</p>
                    </div>
                    <img className='w-full h-full object-cover rounded-3xl' src={gallery_3} alt="" />
                 </div>
            </div>
        </div>
        <div className="w-[20%] max-md:hidden">
            <img className='w-full h-full object-cover rounded-3xl' src={gallery_4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
