import React from 'react'
import Navbar from '../../components/Navbar'
import left_img from '../../assets/images/login-img.jpg'
import login_icon_1 from '../../assets/icons/login-icon-1.svg'
import login_icon_2 from '../../assets/icons/login-icon-2.svg'
import login_icon_3 from '../../assets/icons/login-icon-3.svg'
import login_by_1 from '../../assets/icons/login-by-1.svg'
import login_by_2 from '../../assets/icons/login-by-2.svg'
import login_by_3 from '../../assets/icons/login-by-3.svg'
import login_by_4 from '../../assets/icons/login-by-4.svg'
import login_by_5 from '../../assets/icons/login-by-5.svg'
import eye_open from '../../assets/icons/eye-open.svg'

const Signup = () => {
  return (
     <div>
         <Navbar/>
         <div className="min-h-[calc(100vh-68px)] p-[40px] flex gap-[40px] justify-center  max-md:p-[20px]">
           <div className="h-full max-lg:hidden">
           <img className='h-full rounded-3xl' src={left_img} alt="" />
           </div>
           <div className="min-w-[480px] max-w-[480px] max-sm:min-w-full flex flex-col gap-4">
               <div className=" bg-[#DFE0E4]/35 p-[40px] rounded-3xl  max-md:p-[16px]">
                   <h6 className=' text-secondary text-[18px] font-semibold mb-[12px]'>LOG IN TO</h6>
                   <div className="flex items-start gap-[6px] flex-col">
                       <p className='text-[14px] text-secondary/75 flex items-center gap-[4px]'><img src={login_icon_1} alt="" /> Access 100+ crypto payment options</p>
                       <p className='text-[14px] text-secondary/75 flex items-center gap-[4px]'><img src={login_icon_2} alt="" /> Get up to 10% back in rewards</p>
                       <p className='text-[14px] text-secondary/75 flex items-center gap-[4px]'><img src={login_icon_3} alt="" /> See exclusive member pricing</p>
                   </div>
               </div>
               <div className="p-[40px] rounded-3xl border border-[#DFE0E4] max-md:p-[16px]">
                   <h5 className=' text-primary font-bold text-[24px]'>Sign up</h5>
                   <p className=' text-[14px] text-secondary'>Create you new account</p>
                   <div className="flex gap-2 justify-between mt-[12px]">
                       <button className='bg-[#1D1C3C] rounded-xl w-[70px] flex justify-center items-center p-[15px] hover:bg-secondary'><img src={login_by_1} alt="" /></button>
                       <button className='bg-[#000000] rounded-xl w-[70px] flex justify-center items-center p-[15px] hover:bg-secondary'><img src={login_by_2} alt="" /></button>
                       <button className='bg-[#3C5995] rounded-xl w-[70px] flex justify-center items-center p-[15px] hover:bg-secondary'><img src={login_by_3} alt="" /></button>
                       <button className='bg-[#DB4D41] rounded-xl w-[70px] flex justify-center items-center p-[15px] hover:bg-secondary'><img src={login_by_4} alt="" /></button>
                       <button className='bg-[#54BF37] rounded-xl w-[70px] flex justify-center items-center p-[15px] hover:bg-secondary'><img src={login_by_5} alt="" /></button>
                   </div>
                   <div className="full-line">
                       <p>or Sign up with</p>
                   </div>
                   <div className="flex flex-col gap-4">
                    <div className="flex gap-4 max-sm:flex-col">
                        <label className='input-design' htmlFor="">
                           <span>First Name</span>
                           <input type="text" placeholder='Enter First Name' name="" id="" />
                       </label>
                       <label className='input-design' htmlFor="">
                           <span>Last Name</span>
                           <input type="text" placeholder='Enter Last Name' name="" id="" />
                       </label>
                    </div>
                       <label className='input-design' htmlFor="">
                           <span>Email</span>
                           <input type="text" placeholder='Enter Email' name="" id="" />
                       </label>
                       <label className='input-design' htmlFor="">
                           <span>Mobile number</span>
                           <input type="text" placeholder='Enter Mobile number' name="" id="" />
                       </label>
                       <label className='input-design' htmlFor="">
                           <span>Password</span>
                           <input type="text" placeholder='Enter Email' name="" id="" />
                           <button className=' absolute top-5 right-3'><img src={eye_open} alt="" /></button>
                       </label>
                       <button className='btn-pri w-full mt-[14px]'>Sign up</button>
                   </div>
                   <p className=' text-secondary/75 text-center mt-[18px]'>Already have an account, <a className=' font-semibold text-primary' href="">Log in</a></p>
               </div>
           </div>
         </div>
       </div>
  )
}

export default Signup
