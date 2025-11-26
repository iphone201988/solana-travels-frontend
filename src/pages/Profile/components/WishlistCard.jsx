import imageHotel from "../../../assets/images/hotelimage.jpg"

export default function WishlistCard() {
  return (
    <div className="border border-strokeColor rounded-[24px] overflow-auto ">
                    <div className="relative  h-[195px]">
                        <img src={imageHotel} alt="" className="w-full h-full object-cover" />
                        <button
                                  type="button"
                                  className="absolute left-[18px] bottom-4 -translate-y-1/2 bg-[#1C1C1C]/75 shadow p-3 rounded-full z-[1000]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
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
                                  className="absolute right-[18px]  bottom-4 -translate-y-1/2 bg-[#1C1C1C]/75 shadow p-3 rounded-full z-[1000]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
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
                    <div className="p-4">
                        <p className="font-semibold text-[18px] text-secondary">The London Crest Hotel</p>
                        <p className="font-regular text-[14px] text-secondary">London, United Kingdom</p>
                        <p className="font-semibold text-[22px] text-secondary">$299</p>
                        <p className="font-regular text-[14px] text-secondary">avg. nightly price</p>
                        <button className='btn-pri w-full mt-3'>Book now</button>
                    </div>
                </div>
  )
}
