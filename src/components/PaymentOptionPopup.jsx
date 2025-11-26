import { Check, CircleX } from "lucide-react";
import React from "react";

export default function PaymentOptionPopup() {
  return (
    <div className="bg-secondary/60 w-full h-full flex justify-center items-center p-[20px]  fixed top-0 left-0 max-md:h-[auto] z-[99999] overflow-auto ">
      <div className="bg-white w-full max-w-[1120px] p-[24px] rounded-3xl border border-[#DFE0E4] max-md:h-[calc(100vh-40px)] max-md:overflow-auto">
        <div className="flex items-center gap-4">
          <CircleX />
          <p className=" text-[20px] font-semibold text-secondary">
            Your payment options
          </p>
        </div>
        <p className=" text-secondary/75 flex items-center gap-2 font-semibold my-[24px]">
          {" "}
          <Check />
          Fully Refundable before Thu, Nov 20
        </p>
        <div className=" my-[24px] flex gap-6 max-md:gap-4 max-md:flex-col">
          <div className="w-full bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900">
             Pay when you stay
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-secondary/75 list-disc pl-5">
              <li>
                Pay the property directly in their preferred currency (INR)
              </li>
            </ul>

            <div className="mt-6 text-right text-sm text-secondary/75">
              <p>$114 nightly</p>
              <p className="text-xl font-bold mt-1">$269 total</p>

              <div className="flex items-center justify-end gap-2 text-green-700 text-sm mt-2">
                <span>✔</span>
                <span>Total includes taxes and fees</span>
              </div>
            </div>

            <button className="btn-pri w-full mt-[70px] max-md:mt-4">
              Pay Now
            </button>

            <p className="text-center text-xs text-gray-500 mt-3">
              You will not be charged until you stay
            </p>
          </div>
          <div className="w-full bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Pay the total now
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-secondary/75 list-disc pl-5">
              <li>
                Option to pay over time with{" "}
                <span className="font-semibold">affirm</span>
              </li>
              <li>You can use a valid SolanaTravels coupon</li>
              <li>More ways to pay: use Debit/Credit card or Paypal</li>
            </ul>

            <div className="mt-6 text-right text-sm text-secondary/75">
              <p>$114 nightly</p>
              <p className="text-xl font-bold mt-1">$269 total</p>

              <div className="flex items-center justify-end gap-2 text-green-700 text-sm mt-2">
                <span>✔</span>
                <span>Total includes taxes and fees</span>
              </div>
            </div>

            <button className="btn-pri w-full mt-4">
              Pay Now
            </button>

            <p className="text-center text-xs text-gray-500 mt-3">
              You will not be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
