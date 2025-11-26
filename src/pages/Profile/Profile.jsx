import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Navbar from '../../components/Navbar';
import user_img from '../../assets/images/profileImage.png';
import camera_icon from '../../assets/icons/camera-icon.svg';
import { ChevronRight } from 'lucide-react';
import ProfileInfo from './components/ProfileInfo';
import PaymentMethod from './components/PaymentMethod';
import SecurityAndSetting from './components/SecurityAndSetting';
import HelpAndFeedback from './components/HelpAndFeedback';
import UpcomingBooking from './components/UpcomingBooking';
import PreviousBooking from './components/PreviousBooking';
import Wishlist from './components/Wishlist';
import profile_icon from '../../assets/icons/profile-icons/profile-black.svg';
import wishlist_icon from '../../assets/icons/profile-icons/wishlist-icon.svg';
import payment_icon from '../../assets/icons/profile-icons/payment-icon.svg';
import upcoming_icon from '../../assets/icons/profile-icons/upcoming-icon.svg';
import previous_icon from '../../assets/icons/profile-icons/previous-icon.svg';
import setting_icon from '../../assets/icons/profile-icons/setting-icon.svg';
import help_icon from '../../assets/icons/profile-icons/help-icon.svg';

export default function Profile() {
  return (
    <div className=' relative'>
        <Navbar/>
   <div className=" max-w-[1400px] mx-auto p-[40px] max-xl:px-[20px]">
        <Tabs className=" flex gap-6 max-md:flex-col max-lg:gap-3">
    <TabList className="bg-[#F4F4F6] p-[24px] rounded-3xl flex-col flex max-w-[334px] w-full max-lg:max-w-[280px] max-lg:gap-3 max-lg:p-[16px] max-md:max-w-full ">
        <div className="">
            <div className="w-[100px] mx-auto relative">
                <img className='w-full object-cover h-full' src={user_img} alt="" />
                <button className=' p-2 rounded-full bg-white absolute bottom-0 right-0 active:scale-90'>
                    <img src={camera_icon} alt="" />
                </button>
            </div>
            <h3 className=' text-primary font-bold text-[24px] text-center mt-4'>Hi, John Smith</h3>
            <p className=' text-secondary/75 text-center'>johnsmith123@gmail.com</p>
            <div className="my-[16px] w-full h-[1px] bg-white"></div>
        </div>
      <Tab><img src={profile_icon} alt="" />Profile<ChevronRight className='ml-auto' /></Tab>
      <Tab><img src={wishlist_icon} alt="" />Your Wishlist<ChevronRight className='ml-auto' /></Tab>
      <Tab><img src={payment_icon} alt="" />Payment Methods<ChevronRight className='ml-auto' /></Tab>
      <Tab><img src={upcoming_icon} alt="" />Upcoming Bookings<ChevronRight className='ml-auto' /></Tab>
      <Tab><img src={previous_icon} alt="" />Previous Bookings<ChevronRight className='ml-auto' /></Tab>
      <Tab><img src={setting_icon} alt="" />Security and settings<ChevronRight className='ml-auto' /></Tab>
      <Tab><img src={help_icon} alt="" />Help and feedback<ChevronRight className='ml-auto' /></Tab>
    </TabList>

    <TabPanel>
      <ProfileInfo/>
    </TabPanel>
    <TabPanel>
      <Wishlist/>
    </TabPanel>
    <TabPanel>
      <PaymentMethod/>
    </TabPanel>
    <TabPanel>
       <UpcomingBooking/>
    </TabPanel>
    <TabPanel>
      <PreviousBooking/>
    </TabPanel>
    <TabPanel>
      <SecurityAndSetting/>
    </TabPanel>
    <TabPanel>
      <HelpAndFeedback/>
    </TabPanel>
  </Tabs>
   </div>
   {/* <ConfirmEmailPopup/> */}
   {/* <MobileNumberPopup/> */}
   {/* <RateReviewPopup/> */}
    </div>
  )
}
