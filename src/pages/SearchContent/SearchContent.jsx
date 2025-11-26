import Navbar from '../../components/Navbar'
import FilterSidebar from './components/FilterSidebar'
import calendarIcon from "../../assets/icons/calendar.png"
import curveIcon from "../../assets/icons/curveSVG.svg"
import personIcon from "../../assets/icons/person.png"
import searchIcon from "../../assets/icons/search-rounded-blue.svg"
import okx_img from "../../assets/images/okx-img.png"
import SearchListingCard from './components/SearchListingCard'
import { SlidersHorizontal } from 'lucide-react'

const SearchContent = () => {
  return (
    <div>
        <Navbar/>

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


        <div className="flex ">
            <FilterSidebar/>

            <div className=" w-full p-[40px] max-xl:px-[20px]">

                 <div className="flex items-center rounded-3xl border border-[#DFE0E4] p-[16px] px-[36px] gap-[36px] max-lg:gap-3 max-md:flex-col max-md:p-[16px]">
                          <img src={okx_img} alt="" />
                          <div className="">
                            <p className=" text-[18px] font-semibold text-primary max-md:text-[14px]">
                              For a limited time, OKX users earn an extra $20 in USDC for travel
                            </p>
                            <p className=" text-[18px] text-secondary max-md:text-[14px]">
                             Bonus USDC Travel funds expire within 30 days. Offer and OKX terms apply.
                            </p>
                          </div>
                        </div>

                <div className="flex items-center justify-between my-[24px]">
                    <h5 className=' text-[18px] font-semibold text-primary'>159 properties</h5>
                    <div className="flex gap-3 items-center">
                        <button className='for-filter-sidebar text-primary hidden max-lg:flex'>
                            <SlidersHorizontal />
                        </button>
                        <select name="" id="" className='px-[12px] py-[8px] border border-primary rounded-full text-primary text-sm'>
                        <option value="">Sort by recommended</option>
                        <option value="">new</option>
                        <option value="">old</option>
                    </select>
                    </div>
                    </div>

  <div className="flex flex-col gap-4">
                <SearchListingCard/>
                <SearchListingCard/>
                <SearchListingCard/>
                <SearchListingCard/>
                <SearchListingCard/>
                <SearchListingCard/>
                <SearchListingCard/>
            </div>
            </div>

          
        </div>

    </div>
  )
}

export default SearchContent
