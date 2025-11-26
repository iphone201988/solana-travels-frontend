import React from "react";

import hotelimage from '../../../assets/images/hotelimage.jpg'

export default function HotelSummaryCard() {
  return (
    <div className="w-full max-w-sm bg-white rounded-3xl border border-[#DFE0E4] ">
      <img
        src={hotelimage}
        alt="Hotel"
        className="w-full h-[195px] object-cover rounded-t-3xl"
      />

     <div className="p-[16px]">
         <h2 className=" text-[18px] text-secondary font-semibold">Empire Platinum Suites</h2>

      <div className="mt-3 flex items-center gap-3">
        <div className="bg-fadeBlue text-white px-2 py-1 rounded-lg font-semibold">
          9.2
        </div>
        <div>
          <p className="font-medium text-secondary">Wonderful</p>
          <p className="text-sm text-secondary">929 reviews</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-secondary/75 space-y-1">
        <p>
          <span className="font-bold">1 Property:</span> Luxury Studio Suite, 1
          Bedroom, Kitchenette, Executive Level
        </p>

        <p>
          <span className="font-bold">Check-in:</span> Fri, Nov 21
        </p>
        <p>
          <span className="font-bold">Check-out:</span> Sun, Nov 23
        </p>
        <p>2-night stay</p>
      </div>

      <button className="w-full pt-3 mt-3 border-t  border-[#DFE0E4] flex items-center justify-between text-left text-secondary font-medium ">
        Special Requests (optional)
        <span className="text-xl">›</span>
      </button>
     </div>
    </div>
  );
}
