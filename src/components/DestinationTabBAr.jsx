import { useState } from "react";
import { Globe, MapPin, Building2, ArrowRight } from "lucide-react";
import arrowUp from "../assets/icons/arrow-up.svg"

const tabs = [
    "EUROPE",
    "NORTH AMERICA",
    "ASIA",
    "CENTRAL AMERICA",
    "OCEANIA",
    "SOUTH AMERICA",
    "AFRICA",
    "MIDDLE EAST",
];

const data = {
    Europe: {
        countries: ["Spain", "Germany", "Portugal", "Switzerland", "France", "Italy", "Poland", "United Kingdom"],
        regions: ["Catalonia", "Community of Madrid", "Andalusia", "Balearic Island"],
        cities: ["Madrid", "Alcala de Henares", "Torrejón de Ardoz", "Alcobendas"],
    },
    // Add more for other continents...
};

export default function DestinationTabs() {
    const [activeTab, setActiveTab] = useState("Europe");

    const activeData = data[activeTab] || {
        countries: [],
        regions: [],
        cities: [],
    };

    return (
        <div className="w-full pt-[40px]">

            {/* TOP TABS */}
            <div className="flex justify-center">
                <div className="flex flex-wrap gap-4 justify-start mb-8">
                    {tabs.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTab(t)}
                            className={`px-5 py-[6px] rounded-full border transition 
                            ${activeTab === t
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white text-darkGrey border-darkGrey"
                                }`}
                            >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* CARD SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* COUNTRIES CARD */}
                <div className="p-6 bg-white rounded-xl border border-gray-300 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-primary" />
                            <h3 className="font-semibold text-primary">Countries</h3>
                        </div>
                        <img src={arrowUp} alt="" className="w-[20px] h-[20px]" />
                    </div>

                    <div className="grid grid-cols-2 gap-y-2">
                        {activeData.countries.map((c) => (
                            <p key={c} className="text-darkGrey hover:text-primary cursor-pointer text-sm">
                                {c}
                            </p>
                        ))}
                    </div>
                </div>

                {/* REGIONS CARD */}
                <div className="p-6 bg-white rounded-xl border border-strokeColor shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <h3 className="font-semibold text-primary">Regions</h3>
                        </div>
                        <img src={arrowUp} alt="" className="w-[20px] h-[20px]" />
                    </div>

                    <div className="space-y-2">
                        {activeData.regions.map((r) => (
                            <p key={r} className="text-darkGrey hover:text-primary cursor-pointer text-sm">
                                {r}
                            </p>
                        ))}
                    </div>
                </div>

                {/* CITIES CARD */}
                <div className="p-6 bg-white rounded-xl border border-strokeColor shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-primary" />
                            <h3 className="font-semibold text-primary">Cities</h3>
                        </div>
                        <img src={arrowUp} alt="" className="w-[20px] h-[20px]" />
                    </div>

                    <div className="space-y-2">
                        {activeData.cities.map((city) => (
                            <p key={city} className="text-darkGrey hover:text-primary cursor-pointer text-sm">
                                {city}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
