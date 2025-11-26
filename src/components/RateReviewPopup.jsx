import starIcon from '../assets/icons/starIcon.svg'

export default function RateReviewPopup() {
  return (
    <div className='bg-secondary/60 w-full h-full flex justify-center items-center p-[20px]  fixed top-0 left-0 '>
      <div className="bg-white w-full max-w-[400px] p-[24px] rounded-3xl border border-[#DFE0E4]">
        <div className="">
            <h5 className=' text-[24px] text-primary font-bold'>Rate and review</h5>
            <p className=' text-secondary/75 text-[12px]'>Rate the hotel room and services</p>
        </div>
        <div className="flex justify-center gap-2 my-[24px]">
            <img className='w-[48px]' src={starIcon} alt="" />
            <img className='w-[48px]' src={starIcon} alt="" />
            <img className='w-[48px]' src={starIcon} alt="" />
            <img className='w-[48px]' src={starIcon} alt="" />
            <img className='w-[48px]' src={starIcon} alt="" />
        </div>
        <div className=" my-[24px]">
                       <textarea className='h-[140px] p-[12px] rounded-md border border-secondary/40px w-full' name="" id="">This is the most comfortable and affordable hotel...</textarea>
        </div>
        <div className="flex gap-3 mt-4">
        <button className='btn-sec w-full '>Cancel</button>
             <button className='btn-pri w-full'>Rate</button>
        </div>
      </div>
    </div>
  )
}
