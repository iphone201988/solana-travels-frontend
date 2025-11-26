import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function HelpAndFeedback() {
  return (
    <div className=" ">
          <div className="flex items-center justify-between ">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Help and feedback</h2>
              {/* <p className=' text-[12px] text-secondary'>Keep your account safe with a secure password and by signing out of devices you're not actively using.</p> */}
            </div>
           
          </div>

          <div className="mt-[24px] flex flex-col gap-4">
            
            <div className='bg-[#F4F4F6] rounded-2xl border border-[#DFE0E4] py-[8px] px-4 flex justify-between items-center max-w-[260px] h-[50px]'>
                <div className="">
                    <p className='text-sm font-semibold text-secondary'>Chat now</p>
                </div>
                <ChevronRight className='ml-auto' />
            </div>
            <div className='bg-[#F4F4F6] rounded-2xl border border-[#DFE0E4] py-[8px] px-4 flex justify-between items-center max-w-[260px] h-[50px]'>
                <div className="">
                    <p className='text-sm font-semibold text-secondary'>Visit the Help Center</p>
                </div>
                <ChevronRight className='ml-auto' />
            </div>
            <div className='bg-[#F4F4F6] rounded-2xl border border-[#DFE0E4] py-[8px] px-4 flex justify-between items-center max-w-[260px] h-[50px]'>
                <div className="">
                    <p className='text-sm font-semibold text-secondary'>Share your feedback</p>
                </div>
                <ChevronRight className='ml-auto' />
            </div>
          </div>
           
      
    </div>
  )
}
