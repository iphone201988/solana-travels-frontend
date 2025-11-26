import React from 'react'

export default function ConfirmEmailPopup() {
  return (
    <div className='bg-secondary/60 w-full h-full flex justify-center items-center p-[20px]  fixed top-0 left-0 '>
      <div className="bg-white w-full max-w-[400px] p-[24px] rounded-3xl border border-[#DFE0E4]">
        <div className="">
            <h5 className=' text-[24px] text-primary font-bold'>Let’s confirm your email</h5>
            <p className=' text-secondary/75 text-[12px]'>To continue, enter the secure code we sent to vishuchauhan543@gmail.com. Check junk mail if it’s not in your inbox.</p>
        </div>
        <div className=" my-[24px]">
            <input className='p-[12px] rounded-md border border-secondary/40px w-full' placeholder='6-digit code' type="text" />
        </div>
        <button className='btn-pri w-full'>Confirm</button>
        <a className=' text-primary text-center mt-[24px] block text-[14px]' href="">Request Another Source Code</a>
      </div>
    </div>
  )
}
