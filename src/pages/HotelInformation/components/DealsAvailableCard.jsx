import React from "react";
import hotelimage from "../../../assets/images/hotelimage.jpg";
import { BedDouble, CircleCheck, Scaling, Users } from "lucide-react";

const DealsAvailableCard = () => {
  return (
    <div className="p-[24px] rounded-3xl bg-white  max-w-[1400px] mx-auto">
      <h4 className="text-primary text-[34px] font-bold  max-lg:text-[24px]">
        11 room types | 35 room deals available
      </h4>
      <div className="flex mt-[24px] gap-[36px] max-lg:gap-4 max-md:flex-col">
        <div className="w-[30%] max-lg:w-[50%] max-md:w-[100%]">
          <div className=" relative">
            <img className=" rounded-3xl object-cover h-full w-full" src={hotelimage} alt="" />
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
          </div>
          <div className="p-[16px]">
            <h6 className=" text-[24px] font-semibold text-primary">
              Room details and photos
            </h6>
            <p className=" text-[14px] font-semibold text-secondary">
              323 sq feet
            </p>
            <div className="flex flex-col gap-1  pb-[24px] border-b border-secondary/40">
              <p className="flex items-center text-secondary/75 text-[12px] gap-[6px]">
                <BedDouble size={16} />1 King Bed
              </p>
              <p className="flex items-center text-secondary/75 text-[12px] gap-[6px]">
                <Scaling size={16} />
                30 m2 / 323 ft2
              </p>
              <p className="flex items-center text-secondary/75 text-[12px] gap-[6px]">
                <CircleCheck size={16} />
                Pay with Card or Crypto
              </p>
            </div>
            <div className="flex flex-col gap-1  pt-[24px]">
              <p className="flex items-center text-secondary/75 text-[12px] gap-[6px]">
                <CircleCheck size={16} />
                Television
              </p>
              <p className="flex items-center text-secondary/75 text-[12px] gap-[6px]">
                <CircleCheck size={16} />
                Cable/satellite TV service
              </p>
              <p className="flex items-center text-secondary/75 text-[12px] gap-[6px]">
                <CircleCheck size={16} />
                Alarm clock
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%] max-lg:w-[50%] flex flex-col gap-4 max-md:w-[100%]">
            <div className=" bg-[#F3F3F3] p-[24px] rounded-3xl flex justify-between max-lg:flex-col">
                <div className="">
                    <div className="flex items-center gap-3">
                        <h5 className=" text-secondary text-[18px] font-bold">Room Only | Free Cancellation</h5>
                        <button className="bg-primary text-[12px] text-white px-[8px] py-[4px] rounded-full">Best price</button>
                    </div>
                    <p className="bg-primary/15 my-[14px] text-[12px] text-primary px-[10px] py-[4px] rounded flex w-max max-lg:w-auto">Free cancellation Until 20 November 2025 18:00 (GMT+00:00)</p>
                    <div className="flex flex-col gap-1 ">
              <p className="flex items-center text-primary text-[12px] gap-[6px]">
                <Users size={16}/>1 rooms | 2 adults
              </p>
              <p className="flex items-center text-primary text-[12px] gap-[6px]">
                <CircleCheck size={16}/>
                Pay with Card or Crypto
              </p>
            </div>
                </div>
                <div className="flex flex-col items-end">
                    <h4 className="text-primary text-[32px] font-bold flex items-center gap-1">US$1,101.75</h4>
                    <p className=" text-right max-w-[180px] text-[14px] text-secondary/75 leading-4">Cryptocurrency accepted Price per night, 1 room Including taxes and fees</p>
                    <p className="bg-primary/15 my-[14px] text-[12px] text-primary px-[10px] py-[4px] rounded flex max-w-[240px]">Approx. US$18.81 in AVA giveback with FREE Smart membership</p>
                    <button className="btn-pri w-full">Book Now</button>
                </div>
            </div>
            <div className=" bg-[#F3F3F3] p-[24px] rounded-3xl flex justify-between max-lg:flex-col">
                <div className="">
                    <div className="flex items-center gap-3">
                        <h5 className=" text-secondary text-[18px] font-bold">Room Only | Free Cancellation</h5>
                        <button className="bg-primary text-[12px] text-white px-[8px] py-[4px] rounded-full">Best price</button>
                    </div>
                    <p className="bg-primary/15 my-[14px] text-[12px] text-primary px-[10px] py-[4px] rounded flex w-max max-lg:w-auto">Free cancellation Until 20 November 2025 18:00 (GMT+00:00)</p>
                    <div className="flex flex-col gap-1 ">
              <p className="flex items-center text-primary text-[12px] gap-[6px]">
                <Users size={16}/>1 rooms | 2 adults
              </p>
              <p className="flex items-center text-primary text-[12px] gap-[6px]">
                <CircleCheck size={16}/>
                Pay with Card or Crypto
              </p>
            </div>
                </div>
                <div className="flex flex-col items-end">
                    <h4 className="text-primary text-[32px] font-bold flex items-center gap-1">US$1,101.75</h4>
                    <p className=" text-right max-w-[180px] text-[14px] text-secondary/75 leading-4">Cryptocurrency accepted Price per night, 1 room Including taxes and fees</p>
                    <p className="bg-primary/15 my-[14px] text-[12px] text-primary px-[10px] py-[4px] rounded flex max-w-[240px]">Approx. US$18.81 in AVA giveback with FREE Smart membership</p>
                    <button className="btn-pri w-full">Book Now</button>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default DealsAvailableCard;
