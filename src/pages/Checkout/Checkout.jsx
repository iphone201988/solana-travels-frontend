import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import booking_calendar from "../../assets/icons/booking-calendar.png";
import HotelSummaryCard from "./components/HotelSummaryCard";
import PriceDetailsCard from "./components/PriceDetailsCard";
import payment_img_1 from "../../assets/images/payment-img-1.jpg";
import payment_img_2 from "../../assets/images/payment-img-2.jpg";
import payment_img_3 from "../../assets/images/payment-img-3.jpg";
import payment_img_4 from "../../assets/images/payment-img-4.jpg";
import payment_img_5 from "../../assets/images/payment-img-5.jpg";
import payment_img_6 from "../../assets/images/payment-img-6.jpg";

const Checkout = () => {
  return (
    <div>
      <Navbar />

      <div className=" max-w-[1020px] mx-auto p-[40px] max-lg:px-[20px]">
        <h5 className=" text-primary text-[28px] font-bold">Secure booking</h5>
        <div className="flex items-center rounded-3xl border border-[#DFE0E4] p-[16px] my-[20px] gap-2">
          <img src={booking_calendar} alt="" />
          <div className="">
            <p className=" text-[18px] font-semibold text-secondary max-md:text-[14px]">
              Fully refundable before Thu, Nov 20, 6:00pm (property local time)
            </p>
            <p className=" text-[18px] text-secondary max-md:text-[14px]">
              You can change or cancel this stay if plans change. Because
              flexibility matters.
            </p>
          </div>
        </div>

        <div className="flex gap-4 max-md:flex-col">
          <div className="w-[32%] max-md:w-full">
            <HotelSummaryCard />
            <PriceDetailsCard />
          </div>
          <div className="w-[68%] flex flex-col gap-4 max-md:w-full">
            {/* Who's checking in */}
            <div className="w-full bg-white rounded-3xl border border-[#DFE0E4] p-4">
              <h2 className="text-xl font-bold text-primary">
                Who's checking in?
              </h2>

              <p className="text-sm text-red-600 mt-1">
                * <span className=" text-secondary/75">Required</span>
              </p>

              <div className="mt-4 text-sm text-secondary">
                <p className="font-semibold">
                  Property 1:{" "}
                  <span className="font-normal">
                    2 Adults, 1 Large Twin Bed, Smoking
                  </span>
                </p>

                <div className="flex items-center gap-5 mt-3 text-[#346B08] font-medium">
                  <div className="flex items-center gap-1">
                    <span>✔</span> Breakfast included
                  </div>
                  <div className="flex items-center gap-1">
                    <span>✔</span> Free parking
                  </div>
                  <div className="flex items-center gap-1">
                    <span>✔</span> Free WiFi
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="text-sm font-medium text-secondary">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John"
                    className="mt-1 w-full p-2 border rounded-md "
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="text-sm font-medium text-secondary">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smith"
                    className="mt-1 w-full p-2 border rounded-md "
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-secondary">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Email for confirmation"
                    className="mt-1 w-full p-2 border rounded-md "
                  />
                </div>

                {/* Phone Row */}
                <div>
                  <label className="text-sm font-medium text-secondary">
                    Country/Territory Code *
                  </label>

                  <div className="flex items-center gap-2 mt-1">
                    <select className="p-2 border rounded-md w-full">
                      <option>USA +1</option>
                      <option>India +91</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-secondary">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smith"
                    className="mt-1 w-full p-2 border rounded-md "
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-4 flex items-start gap-2 text-sm text-secondary">
                <input type="checkbox" className="h-4 w-4 mt-1" />
                <span>
                  Receive text alerts about this trip. Message and data rates
                  may apply.
                </span>
              </div>
            </div>

            {/* payment */}
            <div className="w-full bg-white rounded-3xl border border-[#DFE0E4] p-4 ">
              <h3 className="text-xl font-bold text-primary">
                Payment method
              </h3>

              <p className="mt-3 text-sm text-[#346B08] flex items-center gap-2">
               ✔
                <span>
                  $0.00 due now. Payment information is only needed to hold your
                  reservation.
                </span>
              </p>

              <div className="mt-4 flex items-center gap-3">
               <img src={payment_img_1} alt="" />
               <img src={payment_img_2} alt="" />
               <img src={payment_img_3} alt="" />
               <img src={payment_img_4} alt="" />
               <img src={payment_img_5} alt="" />
               <img src={payment_img_6} alt="" />
              </div>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Name on Card*
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John"
                    className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Debit/Credit card number*
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="0000 0000 0000 0000"
                    className="mt-1 w-full p-3 border rounded-md tracking-widest text-sm focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      CVV *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 123"
                      className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="h-4 w-4 mt-1" />
                  <p className="text-sm text-secondary">
                    Receive text alerts about this trip. Message and data rates
                    may apply.
                  </p>
                </div>

            
              </form>
            </div>

            {/* Cancellation policy */}
            <div className="w-full bg-white rounded-3xl border border-[#DFE0E4] p-4 ">
              <h3 className="text-xl font-bold text-primary">
                Cancellation policy
              </h3>
    <ul className=" list-disc list-inside text-[12px] mt-2">
        <li className=" text-[#346B08]">Fully refundable before <span className=" font-semibold">Thu, Nov 20</span></li>
        <li className=" text-secondary/75">Cancellations or changes made after 6:00pm (property local time) on Nov 20, 2025 or no-shows are subject to a property fee equal to the first nights rate plus taxes and fees.</li>
    </ul>
             

             
            </div>

            {/* Important information */}
            <div className="w-full bg-white rounded-3xl border border-[#DFE0E4] p-4 ">
              <h3 className="text-xl font-bold text-primary">
                Important information
              </h3>
    <ul className=" list-disc list-inside text-[12px] mt-2">
        <li className=" text-secondary/75">This property offers transfers from the airport (surcharges may apply); to arrange pick-up, guests must contact the property 24 hours prior to arrival, using the contact information on the booking confirmation.</li>
        <li className=" text-secondary/75">Front desk staff will greet guests on arrival at the property.</li>
    </ul>
             <div className="mt-4 pt-4 border-t border-[#DFE0E4] text-[12px] text-secondary/75">
                    <div className="flex justify-between">
                        <div className="w-[50%]">
                            <p className=" font-semibold">Check-in:</p>
                        <p>Fri, Nov 21, noon</p>
                        </div>
                        <div className="w-[50%]">
                            <p className=" font-semibold">Check-out:</p>
                        <p>Sun, Nov 23, 1:00 PM (2-night stay)</p>
                        </div>
                    </div>
                    <p className="py-[16px]">By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules & Restrictions Opens in a new window. and Terms of Use Opens in a new window..</p>
                    <button className="btn-pri">Complete Booking</button>
             </div>

             
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
