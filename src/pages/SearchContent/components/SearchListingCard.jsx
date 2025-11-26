import { CircleCheck, Users } from 'lucide-react'
import hotelimage from "../../../assets/images/hotelimage.jpg";
import feature_1 from "../../../assets/icons/feature-1.svg";
import feature_2 from "../../../assets/icons/feature-4.svg";

export default function SearchListingCard() {
  return (
     <div className=" bg-[#fff] border border-[#DFE0E4] rounded-3xl flex justify-between max-md:flex-col ">
        <div className=" relative max-w-[310px] max-md:max-w-full">
                                <img className=" rounded-l-3xl w-full h-full object-cover max-md:rounded-3xl" src={hotelimage} alt="" />
                                <button
                                  type="button"
                                  className="absolute left-[18px] top-1/2 -translate-y-1/2 bg-[#1C1C1C]/75 shadow p-3 rounded-full z-[1000]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15 19l-7-7 7-7"
                                    />
                                  </svg>
                                </button>
                                <button
                                  type="button"
                                  className="absolute right-[18px] top-1/2 -translate-y-1/2 bg-[#1C1C1C]/75 shadow p-3 rounded-full z-[1000]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </button>
                                <div className="absolute top-3 right-3">
                    <button
                        className="p-2 rounded-full transition transform active:scale-90 bg-white "
                    >
                       <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#BA8559"
                                viewBox="0 0 24 24"
                                className="w-7 h-7 transition-all duration-300"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                    </button>
                </div>
                              </div>
                <div className="flex w-full justify-between gap-8 p-[24px] max-xl:flex-col">
                    <div className="">
                    
                    <div className="">
                        <h5 className=" text-secondary text-[18px] font-semibold">Hilton Garden Inn Dallas/Market Center</h5>
                    </div>
                    <p className="mb-[16px] mt-[6px] text-[12px] text-secondary ">Dallas</p>
                    <div className="flex flex-col gap-1 ">
              <div className="flex gap-8 flex-wrap">
                <p className="flex items-center text-secondary text-[12px] gap-[6px]">
               <img className='w-[16px]' src={feature_2} alt="" />Dining Services
              </p>
              <p className="flex items-center text-secondary text-[12px] gap-[6px]">
                <img className='w-[16px]' src={feature_1} alt="" />
                Free WiFi
              </p>
              </div>
              <p className=' text-[#346B08] text-sm font-medium mt-[12px]'>Reserve now, pay later</p>
               <div className="mt-3 flex items-center gap-3">
        <div className="bg-fadeBlue text-white px-2 text-[20px] py-1 rounded-lg font-semibold">
          9.2
        </div>
        <div>
          <p className="font-medium text-secondary">Wonderful</p>
          <p className="text-sm text-secondary">929 reviews</p>
        </div>
      </div>
            </div>
                </div>
                <div className="mt-auto">
                    <div className="flex flex-col gap-[6px] items-end">
                    <p className="bg-[#346B08] text-[12px] text-white px-[10px] py-[4px] rounded flex max-w-[240px]">We have 2 left at</p>
                    <p className=" text-right max-w-[180px] text-[14px] text-secondary/75 leading-4">$129 nightly</p>
                    <p className=" text-right max-w-[180px] text-[14px] text-secondary/75 leading-4 font-semibold">$303 total</p>
                    <p className=" text-right  text-[14px] text-[#346B08] leading-4 font-medium"><span>✔</span> Total includes taxes and fees</p>
                </div>
                </div>
                </div>
            </div>
  )
}
