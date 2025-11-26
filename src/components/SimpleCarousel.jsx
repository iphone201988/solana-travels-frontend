// src/components/SimpleCarousel.jsx
import React, { useRef, useEffect, useState } from "react";

export default function SimpleCarousel({
  children,
  scrollAmount: propScrollAmount = null, // optional override
  className = "flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar scrollbar-hide p-1",
  ariaLabel = "carousel",
}) {
  const scrollRef = useRef(null);
  const [computedScroll, setComputedScroll] = useState(propScrollAmount || 0);

  // compute scroll amount from first child if user didn't pass propScrollAmount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const compute = () => {
      // first direct child inside the scroll container
      const firstChild = el.querySelector(":scope > *");
      if (propScrollAmount) {
        setComputedScroll(propScrollAmount);
        return;
      }
      if (firstChild) {
        const rect = firstChild.getBoundingClientRect();
        // account for gap: read computed style gap if available (modern browsers)
        const style = getComputedStyle(el);
        let gap = 0;
        try {
          gap = parseFloat(style.columnGap || style.gap || "0") || 0;
        } catch (e) {
          gap = 0;
        }
        // use first child width + gap as default scroll amount
        setComputedScroll(Math.round(rect.width + gap));
      } else {
        // fallback: use one third of visible width
        setComputedScroll(Math.round(el.clientWidth / 3));
      }
    };

    compute();
    // recompute on window resize
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [propScrollAmount, children]);

  const safeScrollBy = (left) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* left button */}
      <button
        type="button"
        aria-label="scroll left"
        onClick={() => safeScrollBy(-computedScroll)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#A5AEC7] shadow p-3 rounded-full z-[1000]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* scrollable area (single scroll container) */}
      <div
        ref={scrollRef}
        className={`${className} w-full`}
        role="region"
        aria-label={ariaLabel}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {children}
      </div>

      {/* right button */}
      <button
        type="button"
        aria-label="scroll right"
        onClick={() => safeScrollBy(computedScroll)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#A5AEC7] shadow p-3 rounded-full z-[1000]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
