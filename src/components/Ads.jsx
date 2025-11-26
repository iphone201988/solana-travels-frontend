import React, { useRef, useState, useEffect } from "react";
import ad1 from "../assets/images/ad-1.png";

const bannerData = [
    { id: 1, imageUrl: ad1 },
    { id: 2, imageUrl: ad1 },
    { id: 3, imageUrl: ad1 },
    { id: 4, imageUrl: ad1 },
    { id: 5, imageUrl: ad1 },
];

const App = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Track scroll to update dots
    useEffect(() => {
        const container = scrollRef.current;

        const handleScroll = () => {
            const index = Math.round(container.scrollLeft / (container.clientWidth / 2));
            setActiveIndex(index);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full flex flex-col items-center max-w-[1400px] mx-auto">

            {/* SCROLLABLE SLIDER */}
            <div
                ref={scrollRef}
                className="w-full max-w-6xl overflow-x-auto scroll-smooth no-scrollbar flex p-1"
            >
                {bannerData.map((banner) => (
                    <div
                        key={banner.id}
                        className="min-w-1/2 w-1/2 px-3 max-md:w-full max-md:min-w-full"
                    >
                        <div
                            className="h-[120px] w-[560px] bg-cover bg-center rounded-xl max-md:w-full"
                            style={{ backgroundImage: `url(${banner.imageUrl})` }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* DOTS */}
            <div className="mt-4 flex gap-3">
                {bannerData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            const container = scrollRef.current;
                            const scrollAmount = (container.clientWidth / 2) * index;
                            container.scrollTo({ left: scrollAmount, behavior: "smooth" });
                            setActiveIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition ${index === activeIndex ? "bg-primary" : "bg-strokeColor"
                            }`}
                    ></button>
                ))}
            </div>

        </div>
    );
};

export default App;
