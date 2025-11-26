import React from 'react'
import imageHotel from "../../../assets/images/hotelimage.jpg"

export default function PreviousBookingCard() {
  return (
    <div className="border border-strokeColor rounded-[24px] overflow-auto ">
                   <div className="relative  h-[195px]">
                       <img src={imageHotel} alt="" className="w-full h-full object-cover" />
                       
                   </div>
                   <div className="p-4">
                       <p className="font-semibold text-[18px] text-secondary">The London Crest Hotel</p>
                       <p className="font-regular text-[14px] text-secondary">London, United Kingdom</p>
                       <p className="font-semibold text-[22px] text-secondary">$299</p>
                       <p className="font-regular text-[14px] text-secondary">avg. nightly price</p>
                       <div className="flex gap-3">
                        <button className='btn-sec w-full mt-3'>Rate</button>
                        <button className='btn-pri w-full mt-3'>Rebook</button>
                       </div>
                   </div>
               </div>
  )
}
