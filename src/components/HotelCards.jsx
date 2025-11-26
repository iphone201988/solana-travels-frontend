import { useState } from "react";
import imageHotel from "../assets/images/hotelimage.jpg"

export default function HotelCard({ title, location, price }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="border border-strokeColor rounded-[24px] overflow-auto w-[300px]">
            <div className="relative">
                <img src={imageHotel} alt="" className="w-[300px] h-[195px]" />
                <div className="absolute top-3 right-3">
                    <button
                        onClick={() => setLiked(!liked)}
                        className="p-2 rounded-full transition transform active:scale-90 bg-white "
                    >
                        {liked ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#BA8559"
                                viewBox="0 0 24 24"
                                className="w-7 h-7 transition-all duration-300"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#1c1c1c"
                                className="w-7 h-7 transition-all duration-300"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="font-semibold text-[18px] text-secondary">{title}</p>
                <p className="font-regular text-[14px] text-secondary">{location}</p>
                <p className="font-semibold text-[22px] text-secondary">${price}</p>
                <p className="font-regular text-[14px] text-secondary">avg. nightly price</p>
            </div>
        </div>
    );
}
