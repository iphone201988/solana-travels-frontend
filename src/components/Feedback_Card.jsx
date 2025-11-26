import React from "react";
import starIcon from "../assets/icons/starIcon.svg";
import feedbackProfileImage from "../assets/images/profileImage.png";

export default function FeedbackCard() {
  return (
    <div className="bg-white rounded-[12px] p-6 pr-0 flex flex-col gap-4 w-[450px] shadow-[0px_0px_4.658823490142822px_0px_rgba(0,0,0,0.25)] relative">
                    <div className="flex flex-col gap-6 w-[300px]">
                        <p className="">Loved the rooftop view! The hotel was peaceful, well maintained, and perfect for a short weekend trip.</p>
                    </div>
                    <div className="w-full flex gap-6 z-[999] items-end">
                        {/* Ratings */}
                        <div className="flex flex-col gap-3 w-full">
                            <div className="w-full h-px bg-strokeColor"></div>
                            <div className="flex gap-2">
                                <img src={starIcon} alt="" className="" />
                                <img src={starIcon} alt="" className="" />
                                <img src={starIcon} alt="" className="" />
                                <img src={starIcon} alt="" className="" />
                                <img src={starIcon} alt="" className="" />
                            </div>
                        </div>

                        {/* Users name */}
                        <div className="flex flex-col items-end w-fit">
                            <div className="bg-primary text-white text-3 font-medium p-1 rounded-[6px] rounded-br-[0px] w-fit whitespace-nowrap">
                                Victoria Wotton
                            </div>
                            <div className="bg-fadeBlue text-white text-[10px] font-medium p-1 rounded-bl-[6px] w-fit">
                                2 months ago
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-full w-[110px] h-[110px] shadow-[0px_0px_4.658823490142822px_0px_rgba(0,0,0,0.25)] absolute right-0 top-[18%] translate-x-1/2 transform flex items-center justify-center z-[99]">
                        <img src={feedbackProfileImage} alt="" className="!w-[98px] !h-[98px]" />
                    </div>
                </div>
  );
}
