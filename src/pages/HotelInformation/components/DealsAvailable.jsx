import { SlidersHorizontal } from 'lucide-react'
import React from 'react'
import DealsAvailableCard from './DealsAvailableCard'

const DealsAvailable = () => {
  return (
    <div className="bg-[#E3E5ED] p-[40px] max-lg:px-[20px]">
        <div className=' max-w-[1400px] mx-auto'>
          <h4 className='text-primary text-[34px] font-bold max-lg:text-[24px]'>11 room types | 35 room deals available</h4>
       {/* filter row */}
       <div className="filter-row mt-[24px]">
        <button className='filter-btn active'>Breakfast Included</button>
        <button className='filter-btn '>Free Cancellation </button>
        <button className='filter-btn '>Non-smoking</button>
        <button className='filter-btn active'>Twin</button>
        <button className='filter-btn '>Premium</button>
        <button className='filter-btn '> <SlidersHorizontal />Advanced Filters</button>
       </div>
    </div>
    <div className="mt-[36px] flex flex-col gap-[36px]">
      <DealsAvailableCard/>
      <DealsAvailableCard/>
    </div>
    </div>
  )
}

export default DealsAvailable 
