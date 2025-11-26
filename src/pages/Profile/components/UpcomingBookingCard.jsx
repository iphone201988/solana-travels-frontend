import imageHotel from "../../../assets/images/hotelimage.jpg"


export default function UpcomingBookingCard() {
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
                    <p className="font-regular text-[12px] text-[#346B08]">Fully refundable before Thu, Nov 20</p>
                    <button className='btn-pri !bg-[#BA8559] w-full mt-3'>Cancel Bookings</button>
                </div>
            </div>
  )
}
