import React from 'react';

export default function PriceDetailsCard() {
  return (
    <div className="max-w-sm w-full bg-white rounded-3xl border border-[#DFE0E4] overflow-hidden  mt-[16px]">
     
        <h3 className="text-[14px] font-semibold p-4 border-b border-[#DFE0E4]">Price details</h3>
      <div className="p-4">

        <div className=" space-y-4 text-sm text-secondary">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">1 room x 2 nights</div>
              <div className="text-secondary/75 text-xs">$114.04 average per night</div>

              <div className="mt-2 inline-flex items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-[#346B08] text-white px-1 py-1">
                  {/* simple tag icon */}
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.86426 7.64307H6.36426M5.11326 6.39307H5.11826M5.11426 8.89307H5.11926" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.25 1.84856C4.7665 3.39106 7.268 0.0620599 8.748 1.27006C9.5995 1.96506 9.33 3.50006 8.2245 4.50006" stroke="white" stroke-width="0.75" stroke-linecap="round"/>
<path d="M9.33204 3.28906C9.82354 3.37856 9.93404 3.67156 10.0805 4.48506C10.213 5.21806 10.25 6.09756 10.25 6.47206C10.235 6.61083 10.1758 6.74108 10.081 6.84356C9.05254 7.86106 7.01254 9.78256 5.98304 10.7371C5.57904 11.0776 4.96904 11.0851 4.54004 10.7721C3.66204 10.0266 2.81854 9.18306 1.99154 8.42156C1.65954 8.01756 1.66754 7.44356 2.02954 7.06306C3.11854 5.99556 5.08954 4.16856 6.20254 3.15956C6.31404 3.06956 6.45054 3.01256 6.59754 3.00006C6.84654 3.00006 7.27504 3.03156 7.69254 3.05456" stroke="white" stroke-width="0.75" stroke-linecap="round"/>
</svg>

                  <span className="ml-1 text-[10px]">40% off</span>
                </span>
              </div>
            </div>

            <div className="font-semibold text-secondary text-[14px]">$228.08</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-secondary">Taxes</div>
            <div className="font-medium">$41.05</div>
          </div>

          <div className="border-t pt-4 mt-2">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-sm font-semibold ">Total</div>
                <div className="mt-1 text-[#346B08] font-semibold">Pay now</div>
                <div className="mt-1 text-secondary/75 ">Pay at property</div>
              </div>

              <div className="text-right">
                <div className="text-sm font-semibold">$269.13</div>
                <div className="text-sm text-[#346B08] font-semibold mt-1">$0.00</div>
                <div className="text-xs text-secondary/75 mt-1"> $269.13</div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[10px] text-secondary/75 leading-relaxed">
            Rates quoted in US dollars are based on current exchange rates, which may vary at the time of travel. The property will charge you the full amount of $269.13 in Indian rupees (₹23,884.54). Your card issuer may charge a foreign transaction fee.
          </p>
        </div>
      </div>
    </div>
  );
}
