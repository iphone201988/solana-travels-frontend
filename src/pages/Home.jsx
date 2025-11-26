import calendarIcon from "../assets/icons/calendar.png"
import personIcon from "../assets/icons/person.png"
import searchIcon from "../assets/icons/search-rounded.svg"
import customerSupport from "../assets/icons/customerSupport.png"
import paymentOptions from "../assets/icons/paymentOptions.png"
import rewardsIcon from "../assets/icons/rewardsIcon.png"
import priceGuaranteeIcon from "../assets/icons/priceGuarantee.png"
import bellImage from "../assets/images/bell_Image.png"
import FeedbackCard from "../components/Feedback_Card"
import SimpleCarousel from "../components/SimpleCarousel"
import buildingsImage from "../assets/icons/buildings.svg"
import image1 from "../assets/images/image_2.png"
import arrowIcon from "../assets/icons/arrow.svg"
import TabBar from "../components/Tabbar"
import BannerContent from "../components/Ads.jsx"
import AccordionItem from "../components/Faq.jsx"
import DestinationTabs from "../components/DestinationTabBAr.jsx"
import newLetterImage from "../assets/icons/newsLetter.png"
import curveIcon from "../assets/icons/curveSVG.svg"
import { useRef } from "react"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"


export default function Home() {
    const scrollRef = useRef(null);

    // const scrollLeft = () => {
    //   scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    // };

    // const scrollRight = () => {
    //   scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    // };

    return (
        <section className="">
                <Navbar/>
            {/* Banner Section */}
            <div className="p-[40px] pt-0 max-lg:px-[20px]">
                <div
                    className="w-full min-h-[400px] bg-cover bg-center rounded-3xl flex items-center justify-center max-lg:p-[16px]"
                    style={{
                        backgroundImage:
                            "url('src/assets/images/main-banner.png')",
                    }}
                >
                    <div className="text-center text-white max-w-6xl">
                        {/* Heading */}
                        <h1 className="text-3xl md:text-[34px] font-bold leading-tight [text-shadow:0_0_32px_rgb(14_39_106_/_1)] max-lg:!text-[26px]">
                            BOOK HOTELS WITH CRYPTO & SAVE UP TO 75%
                        </h1>

                        {/* Subheading */}
                        <p className="mt-3 text-sm md:text-lg [text-shadow:0_0_32px_rgb(14_39_106_/_1)]">
                            Pay With Crypto for 2,200,000+ Hotels Worldwide. Best Prices Guaranteed
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white mt-8 p-4 md:p-[18px] rounded-2xl shadow-lg flex flex-col md:flex-row items-start justify-between md:items-center gap-4 md:gap-6  max-xl:!p-[12px] max-xl:!gap-2 max-lg:!text-[14px] max-lg:!flex-col max-lg:w-[340px] max-lg:mx-auto">

                            {/* Search input */}
                            <div className="flex items-center gap-[6px] w-full md:w-auto max-lg:h-[42px]">
                                <span className="text-[#B9C0D4] text-xl">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z" fill="#B9C0D4" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search for Properties or Places"
                                    className="outline-none w-full text-gray-600"
                                />
                            </div>

                            <div className="w-[1px] h-[50px] bg-strokeColor max-lg:hidden"></div>

                            {/* Check-in */}
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <img src={calendarIcon} alt="" className="w-8 h-8" />
                                <div>
                                    <p className="font-regular text-primary text-left">21 Nov 2025</p>
                                    <p className="text-sm text-darkGrey text-left">Friday</p>
                                </div>
                            </div>

                            <div className="w-[1px] h-[50px] bg-strokeColor max-lg:hidden"></div>

                            {/* Check-out */}
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <img src={calendarIcon} alt="" className="w-8 h-8" />
                                <div>
                                    <p className="font-regular text-primary text-left">21 Nov 2025</p>
                                    <p className="text-sm text-darkGrey text-left">Friday</p>
                                </div>
                            </div>

                            <div className="w-[1px] h-[50px] bg-strokeColor max-lg:hidden"></div>

                            {/* Guests */}
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <img src={personIcon} alt="" className="w-8 h-8" />
                                <div>
                                    <p className="font-regular text-primary text-left">2 Adults - 0 Child</p>
                                    <p className="text-sm text-darkGrey text-left">1 Room</p>
                                </div>
                            </div>

                            {/* Search Button */}
                            <button className="w-full md:w-auto bg-primary text-white font-[16px] px-3 py-3 rounded-xl font-regular flex gap-[6px]">
                                <img src={searchIcon} alt="" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full flex iten-center justify-center p-[40px] pt-0 max-lg:px-[20px]">
                <div className="flex gap-4 max-w-[1200px] max-lg:flex-wrap">
                    <div className="p-4 card-3d cursor-pointer rounded-[12px] border border-strokeColor flex flex-col gap-4 max-lg:w-[calc(100%-52%)] max-sm:w-[calc(100%-0%)]">
                        <div className="bg-[#DBDFE9] p-3 rounded-[8px] w-fit">
                            <img src={customerSupport} alt="" className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <h3 className="text-[18px] font-semibold text-primary">24/7 Customer Support</h3>
                            <p className="text-4 font-medium text-darkGrey">Contact our support team anytime via live chat or email</p>
                        </div>
                    </div>
                    <div className="p-4 card-3d cursor-pointer rounded-[12px] border border-strokeColor flex flex-col gap-4 max-lg:w-[calc(100%-52%)] max-sm:w-[calc(100%-0%)]">
                        <div className="bg-[#DBDFE9] p-3 rounded-[8px] w-fit">
                            <img src={paymentOptions} alt="" className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <h3 className="text-[18px] font-semibold text-primary">100+ Payment Options</h3>
                            <p className="text-4 font-medium text-darkGrey">Book with credit/debit cards and leading cryptocurrencies</p>
                        </div>
                    </div>
                    <div className="p-4 card-3d cursor-pointer rounded-[12px] border border-strokeColor flex flex-col gap-4 max-lg:w-[calc(100%-52%)] max-sm:w-[calc(100%-0%)]">
                        <div className="bg-[#DBDFE9] p-3 rounded-[8px] w-fit">
                            <img src={rewardsIcon} alt="" className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <h3 className="text-[18px] font-semibold text-primary">Rewards & Discounts</h3>
                            <p className="text-4 font-medium text-darkGrey">Get rewards and discounts with the AVA Smart Program</p>
                        </div>
                    </div>
                    <div className="p-4 card-3d cursor-pointer rounded-[12px] border border-strokeColor flex flex-col gap-4 max-lg:w-[calc(100%-52%)] max-sm:w-[calc(100%-0%)]">
                        <div className="bg-[#DBDFE9] p-3 rounded-[8px] w-fit">
                            <img src={priceGuaranteeIcon} alt="" className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <h3 className="text-[18px] font-semibold text-primary">Best Price Guarantee</h3>
                            <p className="text-4 font-medium text-darkGrey">If you find a cheaper hotel deal, we’ll refund the difference!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ads Section */}
            <div className="p-[40px] pt-0 max-lg:px-[20px]">
                <div className="w-full h-fit flex !bg-darkMustard rounded-[24px] p-0 overflow-hidden mx-auto max-w-[1400px] max-md:flex-col">
                    <div className="flex gap-4 rounded-[24px] bg-[#C89D7A] p-6 pb-0 max-lg:p-[16px]">
                        <div className="text-white flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <h2 className="font-baskervville text-[36px]  max-lg:text-[26px] max-xl:text-[28px]">Get up to 25% Credits Back on OKX Pay</h2>
                                <p className="text-4 !font-regular">No endless tabs. Compare your hotel options side by side in one place</p>
                            </div>
                            <a className="text-4 !font-regular underline">Get started</a>
                        </div>
                        <img src={bellImage} alt="" className="h-[250px] max-xl:hidden" />
                    </div>
                    <div className="flex gap-6 p-6">
                        <div className="text-white flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <h2 className="font-baskervville text-[36px]  max-lg:text-[26px] max-xl:text-[28px]">Stays that <br />
                                    deliver</h2>
                                <p className="text-4 !font-regular">Traveler-favorite VIP Access stays come with high ratings and perks for our top-tier members.</p>
                            </div>
                            <a className="text-4 !font-regular underline">Explore stays</a>
                        </div>
                        <div className="w-px h-[216px] bg-white"></div>
                        <div className="text-white flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <h2 className="font-baskervville text-[36px]  max-lg:text-[26px] max-xl:text-[28px]">Plans change. <br />
                                    We get it.</h2>
                                <p className="text-4 !font-regular">Flexible booking options so you can adjust or cancel easily.</p>
                            </div>
                            <a className="text-4 !font-regular underline">Explore stays</a>
                        </div>
                    </div>
                </div>
            </div>

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

            {/* Explore Section */}
            <div className="p-[40px] max-lg:px-[20px]">
                <div className="flex flex-col gap-2 ">
                    <p className="w-full text-center font-satisfy text-primary text-[28px] max-md:text-[22px]">Explore</p>
                    <p className="w-full text-center font-semibold text-[36px] text-secondary max-md:text-[26px]">Explore stays in popular destination</p>
                    <p className="w-full text-center font-medium text-[16px] text-darkGrey">Average prices based on current calendar month</p>
                </div>

                <TabBar />
            </div>

            {/* Ads-2 section */}
            <div className="p-[40px] max-lg:px-[20px] ">
                <BannerContent />
            </div>

            {/* FAQ's Section */}
            <div className="">
                <AccordionItem />
            </div>

            {/* Visiting Section */}
            <div className="p-[40px] max-lg:px-[20px]">
                <div className="flex flex-col gap-2 max-w-[1400px] mx-auto">
                    <p className="w-full text-center font-semibold text-[36px] text-secondary max-lg:text-[26px]">Explore the Best Hotels in the World</p>
                    <p className="w-full text-center text-darkGrey">Discover the best countries, regions and cities to visit</p>
                </div>

                <div className=" max-w-[1400px] mx-auto">
                    <DestinationTabs />
                </div>
            </div>

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

          
        </section>

    );
}
