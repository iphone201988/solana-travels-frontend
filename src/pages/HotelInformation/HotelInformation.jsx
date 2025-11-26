import React from "react";
import Navbar from "../../components/Navbar";
import calendarIcon from "../../assets/icons/calendar.png";
import personIcon from "../../assets/icons/person.png";
import searchIcon from "../../assets/icons/search-rounded-blue.svg";
import curveIcon from "../../assets/icons/curveSVG.svg";
import PhotoGallery from "./components/PhotoGallery";
import feature_1 from "../../assets/icons/feature-1.svg";
import feature_2 from "../../assets/icons/feature-2.svg";
import feature_3 from "../../assets/icons/feature-3.svg";
import feature_4 from "../../assets/icons/feature-4.svg";
import feature_5 from "../../assets/icons/feature-5.svg";
import MapView from "./components/MapView";
import DealsAvailable from "./components/DealsAvailable";
import SimpleCarousel from "../../components/SimpleCarousel";
import FeedbackCard from "../../components/Feedback_Card";
import buildingsImage from "../../assets/icons/buildings.svg"
import image1 from "../../assets/images/image_2.png"
import arrowIcon from "../../assets/icons/arrow.svg"
import Footer from "../../components/Footer";
import newLetterImage from "../../assets/icons/newsLetter.png"
import HotelDescription from "./components/HotelDescription";
import PaymentOptionPopup from "../../components/PaymentOptionPopup";

const HotelInformation = () => {
  return (
    <div>
      <Navbar />

      {/* Search Bar */}
      <div className=" bg-fadeBlue p-[20px]">
        <div className=" max-w-[1400px] mx-auto flex justify-center max-md:flex-col max-md:gap-2">
          {/* Search input */}
          <div className="flex items-center gap-[6px] w-full max-w-[600px] max-xl:max-w-[200px] bg-white px-4 py-[14px] rounded-[20px] max-md:max-w-full">
            <span className="text-[#B9C0D4] text-xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
                  fill="#B9C0D4"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for Properties or Places"
              className="outline-none w-full text-gray-600"
            />
          </div>
          <img src={curveIcon} alt="" className=" max-md:hidden" />

          {/* <div className="w-[1px] h-[50px] bg-strokeColor"></div> */}

          {/* Check-in */}
          <div className="flex bg-white px-4 py-[14px] rounded-[20px] gap-4 max-xl:text-[14px]">
            <div className="flex items-center gap-2 w-full md:w-auto ">
              <img src={calendarIcon} alt="" className="w-8 h-8" />
              <div>
                <p className="font-regular text-primary text-left whitespace-nowrap max-lg:whitespace-normal">
                  21 Nov 2025
                </p>
                <p className="text-sm text-darkGrey text-left">Friday</p>
              </div>
            </div>

            <div className="w-[1px] h-[50px] bg-strokeColor"></div>

            {/* Check-out */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <img src={calendarIcon} alt="" className="w-8 h-8" />
              <div>
                <p className="font-regular text-primary text-left whitespace-nowrap max-lg:whitespace-normal">
                  21 Nov 2025
                </p>
                <p className="text-sm text-darkGrey text-left">Friday</p>
              </div>
            </div>
          </div>

          <img src={curveIcon} alt="" className=" max-md:hidden" />

          {/* Guests */}
          <div className="flex items-center gap-2 w-full md:w-auto bg-white px-4 py-[14px] rounded-[20px] max-xl:text-[14px]">
            <img src={personIcon} alt="" className="w-8 h-8" />
            <div>
              <p className="font-regular text-primary text-left whitespace-nowrap max-lg:whitespace-normal">
                2 Adults - 0 Child
              </p>
              <p className="text-sm text-darkGrey text-left">1 Room</p>
            </div>
          </div>
          <img src={curveIcon} alt="" className=" max-md:hidden" />
          {/* Search Button */}
          <button className="w-full md:w-auto bg-white text-primary font-[16px] px-5 py-3 rounded-[20px] items-center font-regular flex gap-[6px]">
            <img className="w-[24px]" src={searchIcon} alt="" />
            Search
          </button>
        </div>
      </div>

      <PhotoGallery />
      {/* Select Room */}
      <div className=" max-w-[1400px] mx-auto p-[40px] pt-0 max-lg:px-[20px] flex justify-between items-center max-lg:pb-0">
        <div className="flex gap-10 items-center max-lg:gap-3 max-lg:flex-col max-lg:items-start">
          <h3 className=" text-primary text-[34px] font-bold max-lg:text-[26px]">
            Shangri-La The Shard, London
          </h3>
          <div className="flex items-center gap-[6px]">
            <h6 className=" bg-fadeBlue p-[10px] rounded-lg text-[34px] font-medium text-white w-max max-lg:text-[24px]">
              9.2
            </h6>
            <div className="">
              <p className=" text-[20px] text-secondary font-medium">
                Wonderful
              </p>
              <p className=" text-[18px] text-secondary/75">929 reviews</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col mb-[12px]">
            <h4 className="text-primary text-[32px] font-bold flex items-center gap-1 max-lg:text-[24px]">
              <span className="text-secondary text-[20px] font-medium">
                from
              </span>
              US$1,101.75
            </h4>
            <p className="text-secondary text-[16px] text-right font-medium">
              Price per night, 1 room
            </p>
          </div>
          <button className="btn-pri w-full">SELECT ROOM</button>
        </div>
      </div>

      {/* feature */}
      <div className="max-w-[1400px] mx-auto py-[30px] px-[40px]  max-lg:px-[20px]">
        <div className="flex gap-[32px] max-lg:gap-4 max-md:gap-2 flex-wrap">
          <div className="p-[8px] rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <img src={feature_1} alt="" />{" "}
            <span className=" text-secondary/75">Free WiFi</span>
          </div>
          <div className="p-[8px] rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <img src={feature_2} alt="" />{" "}
            <span className=" text-secondary/75">Parking Available</span>
          </div>
          <div className="p-[8px] rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <img src={feature_3} alt="" />{" "}
            <span className=" text-secondary/75">Airport transfers</span>
          </div>
          <div className="p-[8px] rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <img src={feature_4} alt="" />{" "}
            <span className=" text-secondary/75">Dining Services</span>
          </div>
          <div className="p-[8px] rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <img src={feature_5} alt="" />{" "}
            <span className=" text-secondary/75">Concierge</span>
          </div>
          <div className="p-[8px] rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <img src={feature_1} alt="" />{" "}
            <span className=" text-secondary/75">Free WiFi</span>
          </div>
          <div className="p-[8px] rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <img src={feature_2} alt="" />{" "}
            <span className=" text-secondary/75">Parking Available</span>
          </div>
          <div className="px-[20px] py-[8px] cursor-pointer rounded-xl shadow gap-2 flex flex-col items-center justify-center w-max">
            <span className=" text-[#2560FF] text-[18px] font-medium">
              +47 <br />
              more
            </span>
          </div>
        </div>
      </div>

      <MapView />
      <DealsAvailable />

       {/* Customer Reviews Section  */}
            <div className="bg-[#E3E5ED] w-full relative p-[-20px]">
                           <div className="p-[40px] pb-0 z-[9999]  max-w-[1800px] mx-auto max-lg:px-[20px]">
                               <div className="flex flex-col gap-2 pb-5">
                                   <p className="w-full text-center font-satisfy text-primary text-[28px] max-md:text-[22px]">Customer Reviews</p>
                                   <p className="w-full text-center font-semibold text-[36px] text-secondary max-md:text-[26px]">What our customers say</p>
                               </div>
           
                               <SimpleCarousel className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar p-1">
                                   <div className="min-w-[520px]">
                                       <FeedbackCard />
                                   </div>
                                   <div className="min-w-[520px]">
                                       <FeedbackCard />
                                   </div>
                                   <div className="min-w-[520px]">
                                       <FeedbackCard />
                                   </div>
                                   <div className="min-w-[520px]">
                                       <FeedbackCard />
                                   </div>
                               </SimpleCarousel>
           
                           </div>
           
                           {/* Background Image */}
                           <div className="w-full overflow-hidden">
                               <img src={buildingsImage} alt="" className="w-full" />
                           </div>
                       </div>

 {/* Crypto Options Section */}
            <div className="bg-fadeBlue p-[40px] flex flex-col gap-[30px] max-lg:px-[20px]">
           
                           <div className="flex flex-col gap-2  ">
                               <p className="w-full text-center text-darkMustard">Crypto-friendly Bookings</p>
                               <p className="w-full text-center font-semibold text-[36px] text-white">Your money is valued here.</p>
                           </div>
                           <div className="w-full flex items-center justify-center max-w-[1400px] mx-auto">
                               <SimpleCarousel className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar p-1" >
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                                   <img src={image1} alt="" className="w-[96px] h-[96px]" />
                               </SimpleCarousel>
                           </div>
                           <div className="w-full flex items-center justify-center">
                               <div className="max-w-[900px] w-full flex justify-between">
                                   <p className="max-w-[400px] text-darkMustard">
                                       We’re proud to be the leading crypto-native travel platform, enabling you to book trips worldwide using over 100+ cryptocurrencies or traditional payment methods—quickly and seamlessly.
                                   </p>
           
                                   <div className="rounded-[12px] border-[1px] text-white flex gap-3 p-2 w-fit h-fit">
                                       See All Payment Options
                                       <img src={arrowIcon} alt="" className="w-6 h-6" />
                                   </div>
                               </div>
                           </div>
                       </div>
         
         <HotelDescription/>

 {/* NewsLetter Section */}
          <div className="p-[40px] max-w-[1000px] mx-auto max-lg:px-[20px]">
                          <div className="bg-primary justify-between p-[12px] flex items-center rounded-3xl max-md:flex-col max-md:gap-3 max-md:items-start">
                      <div className="flex gap-3 max-lg:flex-col max-lg:items-start">
                          <div className="flex items-center justify-center p-2 rounded-[12px] bg-[#566897]">
                              <img src={newLetterImage} alt="" className="w-[36px] h-[36px]" />
                          </div>
                          <div className="flex flex-col gap-1 text-white">
                              <p className="font-semibold text-[20px]">Join our newsletter</p>
                              <p className="font-medium text-[16px]">Sign up and we’ll send the best deals to you</p>
                          </div>
                      </div>
          
                      <div className="flex gap-0">
                          <input
                              type="text"
                              placeholder="Your Email"
                              className="outline-none w-full text-gray-600 p-[12px]  min-w-[280px] rounded-[12px] max-md:min-w-[120px] max-md:w-full "
                          />
                          <img src={curveIcon} alt="" className="" />
                          <button className="bg-white text-primary p-[14px] rounded-[12px]">Subscribe</button>
                      </div>
                      </div>
                      </div>
      <Footer/>

      {/* <PaymentOptionPopup/> */}
    </div>
  );
};

export default HotelInformation;
