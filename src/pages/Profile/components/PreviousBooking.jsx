import React from 'react'
import PreviousBookingCard from './PreviousBookingCard'

export default function PreviousBooking() {
  return (
   <div className=" ">
                 <div className="flex items-center justify-between ">
                   <div>
                     <h2 className="text-2xl font-bold text-blue-900">Bookings Cancellation</h2>
                   </div>           
                 </div>
                 <div className="mt-6 grid  grid-cols-3 gap-6 max-xl:grid-cols-2 max-lg:gap-3 max-md:grid-cols-1 ">
                   <PreviousBookingCard/>
                   <PreviousBookingCard/>
                   <PreviousBookingCard/>
                 </div>
             </div>
  )
}
