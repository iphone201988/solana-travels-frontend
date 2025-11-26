import { Search } from "lucide-react";
import map from "../../../assets/images/map.jpg";
import feature_1 from "../../../assets/icons/feature-1.svg";
import feature_2 from "../../../assets/icons/feature-2.svg";
import feature_3 from "../../../assets/icons/feature-3.svg";
import feature_4 from "../../../assets/icons/feature-4.svg";
import feature_5 from "../../../assets/icons/feature-5.svg";
import feature_6 from "../../../assets/icons/feature-6.svg";
import feature_7 from "../../../assets/icons/feature-7.svg";
import feature_8 from "../../../assets/icons/feature-8.svg";


export default function FilterSidebar() {
  return (
    <div className="min-w-[320px] max-w-[320px] bg-[#F4F4F6] p-6 overflow-y-auto max-lg:hidden">

      {/* Map Box */}
      <div className="w-full">
        <div className="bg-white border border-white rounded-xl overflow-hidden">
            <img className="h-[120px] object-cover" src={map} alt="" />
              <button className="text-left w-full  p-2 font-medium text-secondary/75">
          Show on maps
        </button>
        </div>
      
      </div>

      {/* Search */}
      <div className="mt-6">
        <label className="text-secondary font-medium">Search by property name</label>
        <div className="mt-2 relative">
          <input
            type="text"
            placeholder="e.g. Marriott"
            className="w-full border border-secondary/40 rounded-xl py-2 pl-10 pr-3 text-sm h-[48px]"
          />
          <span className="absolute left-3 top-3 text-secondary/75 text-lg"><Search /></span>
        </div>
      </div>

      {/* Filters */}
      <h3 className="mt-6 text-lg font-bold text-primary">Filters</h3>

      {/* Traveler Experience */}
      <div className="mt-4">
        <h4 className="font-semibold text-secondary">Traveler experience</h4>

        {[
          "Eco-certifications",
          "LGBTQ welcoming",
          "Business friendly",
          "Family friendly",
        ].map((item) => (
          <label key={item} className="flex items-center gap-3 mt-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-fadeBlue" />
            {item}
          </label>
        ))}
      </div>

      {/* Guest Rating */}
      <div className="mt-6">
        <h4 className="font-semibold text-secondary">Guest rating</h4>
        {["Any", "Wonderful 9+", "Very good 8+", "Good 7+"].map((item) => (
          <label key={item} className="flex items-center gap-3 mt-2 text-sm">
            <input type="radio" name="rating" className="h-4 w-4 accent-fadeBlue" />
            {item}
          </label>
        ))}
      </div>

      {/* Star Rating */}
      <div className="mt-6">
        <h4 className="font-semibold text-secondary">Star rating</h4>

        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="flex items-center gap-3 mt-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-fadeBlue" />
            {star} star
          </label>
        ))}
      </div>

      {/* One Key Benefits */}
      <div className="mt-6">
        <h4 className="font-semibold text-secondary">One Key benefits and discounts</h4>

        <label className="flex items-start gap-3 mt-3 text-sm">
          <input type="checkbox" className="h-4 w-4 mt-1 accent-fadeBlue" />
          Discounted properties
        </label>

        <label className="flex items-start gap-3 mt-2 text-sm">
          <input type="checkbox" className="h-4 w-4 mt-1 accent-fadeBlue" />
          <span>
            Member Prices <br />
            <span className="text-gray-500 text-xs">
              Get instant savings when you're signed in
            </span>
          </span>
        </label>

        <label className="flex items-start gap-3 mt-2 text-sm">
          <input type="checkbox" className="h-4 w-4 mt-1 accent-fadeBlue" />
          <span>
            VIP Access properties <br />
            <span className="text-gray-500 text-xs">
              Top-rated stays with member perks
            </span>
          </span>
        </label>
      </div>

      {/* Property Type */}
      <div className="mt-6">
        <h4 className="font-semibold text-secondary">Property type</h4>

        {[
          "Ranch",
          "Pousada",
          "Pousada (Brazil)",
          "Safari",
          "Hostel/Backpacker accommodation",
          "TownHouse",
          "Hotel",
          "Pension",
          "Bed & breakfast",
          "Ryokan",
          "Castle",
        ].map((item) => (
          <label key={item} className="flex items-center gap-3 mt-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-fadeBlue" />
            {item}
          </label>
        ))}
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h4 className="font-semibold text-secondary mb-3">Amenities</h4>

        <div className="grid grid-cols-2 gap-3">
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_1} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Free WiFi
            </button>
            </div>
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_2} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Parking Available
            </button>
            </div>
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_3} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Airport transfers
            </button>
            </div>
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_4} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Dining Services
            </button>
            </div>
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_8} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Kitchen
            </button>
            </div>
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_6} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Concierge
            </button>
            </div>
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_7} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Spa
            </button>
            </div>
          <div className="border border-secondary/75 rounded-xl py-3 px-1 flex items-center justify-center flex-col">
                <img src={feature_1} alt="" />
                <button
              className=" text-sm  text-secondary"
            >
              Free WiFi
            </button>
            </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-6">
        <h4 className="font-semibold text-secondary">Price</h4>

        <label className="flex items-center gap-3 mt-3 text-sm">
          <input type="radio" name="price" className="h-4 w-4 accent-fadeBlue" />
          Nightly price
        </label>
        <label className="flex items-center gap-3 mt-2 text-sm">
          <input type="radio" name="price" className="h-4 w-4 accent-fadeBlue" />
          Total price
        </label>

        {/* Range Inputs */}
        <div className="flex justify-between mt-4 text-sm gap-3">
          <div className="border border-secondary/75 rounded-xl py-3 px-4 flex items-start justify-center flex-col w-full">
            <p className="text-secondary/75 text-xs">Min</p>
            <p className="font-semibold text-[18px]">$0</p>
          </div>
          <div className="text-right border border-secondary/75 rounded-xl py-3 px-4 flex items-start justify-center flex-col w-full">
            <p className="text-secondary/75 text-xs">Max</p>
            <p className="font-semibold text-[18px]">$1,000+</p>
          </div>
        </div>

        <input type="range" className="w-full mt-3 accent-fadeBlue" />
      </div>
    </div>
  );
}
