import { useState } from "react";
import SimpleCarousel from "../components/SimpleCarousel"
import HotelCard from "./HotelCards";
import imageHotel from "../assets/images/hotelimage.jpg"

export default function TabBar() {
  const [activeTab, setActiveTab] = useState("beach");  // 👈 Default active tab

  const tabs = [
    { id: "beach", label: "Beach" },
    { id: "culture", label: "Culture" },
    { id: "ski", label: "Ski" },
    { id: "family", label: "Family" },
    { id: "wellness", label: "Wellness and Relaxation" },
  ];

  return (
    <div className="w-full mx-auto mt-10 max-w-[1400px] ">
      {/* Tab Bar */}
      <div className="flex items-center gap-8 border-b border-strokeColor max-md:gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-fit py-2 text-center font-medium 
              ${activeTab === tab.id
                ? "text-primary font-semibold border-b-2 border-primary"
                : "text-darkGrey hover:text-primary"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-[40px] w-full max-w-[1600px] mx-auto">
        {activeTab === "beach" && (
          <SimpleCarousel
            scrollAmount={520}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar p-1"
          >
            <div className="min-w-[300px]">
              <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
            </div>

            <div className="min-w-[300px]">
              <HotelCard image={imageHotel} title="The London Crest" location="London, UK" price={299} />
            </div>

            <div className="min-w-[300px]">
              <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
            </div>

            <div className="min-w-[300px]">
              <HotelCard image={imageHotel} title="Maldives Paradise" location="Maldives" price={499} />
            </div>

            <div className="min-w-[300px]">
              <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
            </div>

            <div className="min-w-[300px]">
              <HotelCard image={imageHotel} title="The London Crest" location="London, UK" price={299} />
            </div>

            <div className="min-w-[300px]">
              <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
            </div>
          </SimpleCarousel>

        )}

        {activeTab === "culture" && (
          <div>
            <SimpleCarousel
              scrollAmount={520}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar p-1"
            >
              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Maldives Paradise" location="Maldives" price={499} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="The London Crest" location="London, UK" price={299} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
              </div>
            </SimpleCarousel>
          </div>
        )}

        {activeTab === "ski" && (
          <div>
            <SimpleCarousel
              scrollAmount={520}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar p-1"
            >
              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="The London Crest" location="London, UK" price={299} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
              </div>

            </SimpleCarousel>
          </div>
        )}

        {activeTab === "family" && (
          <div>
            <SimpleCarousel
              scrollAmount={520}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar p-1"
            >
              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="The London Crest" location="London, UK" price={299} />
              </div>
            </SimpleCarousel>
          </div>
        )}

        {activeTab === "wellness" && (
          <div>
            <SimpleCarousel
              scrollAmount={520}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar p-1"
            >
              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="The London Crest" location="London, UK" price={299} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Royal Bay Resort" location="Spain" price={199} />
              </div>

              <div className="min-w-[300px]">
                <HotelCard image={imageHotel} title="Maldives Paradise" location="Maldives" price={499} />
              </div>
            </SimpleCarousel>
          </div>
        )}
      </div>
    </div>
  );
}
