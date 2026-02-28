"use client";

import Image from "next/image";
import { useRef } from "react";

interface BestSeller {
    name: string;
    price: string;
    img: string;
}

const bestSellers: BestSeller[] = [
    { name: "Ethiopian Yirgacheffe", price: "$24.99", img: "/images/Image (Ethiopian Yirgacheffe).png" },
    { name: "Colombian Supremo", price: "$22.99", img: "/images/Image (Colombian Supremo).png" },
    { name: "Cold Brew Blend", price: "$23.99", img: "/images/Image (Cold Brew Blend).png" },
    { name: "Brazil Santos", price: "$21.99", img: "/images/Image (Brazil Santos).png" },
    { name: "Kenyan AA", price: "$27.99", img: "/images/Kenya .png" },
    { name: "Guatemala Antigua", price: "$25.99", img: "/images/Kenya .png" },
];

function ChevronLeft() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );
}

export default function BestSellersSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "prev" | "next") => {
        const container = sliderRef.current;
        if (!container) return;
        const card = container.querySelector("div") as HTMLElement;
        if (!card) return;
        const amount = card.offsetWidth + 24; // card width + gap-6
        container.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
    };

    const btnBase =
        "w-10 h-10 rounded-full border border-[#803144] flex items-center justify-center text-[#803144] hover:bg-[#803144] hover:text-white transition-colors";

    return (
        <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mt-12 md:mt-20 px-6 2xl:px-12 mb-12 md:mb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-[36px] text-[#803144]">Our Best Sellers</h2>

                {/* Desktop nav buttons */}
                <div className="hidden md:flex gap-2">
                    <button onClick={() => scroll("prev")} className={btnBase} aria-label="Previous">
                        <ChevronLeft />
                    </button>
                    <button onClick={() => scroll("next")} className={btnBase} aria-label="Next">
                        <ChevronRight />
                    </button>
                </div>

                {/* Mobile nav buttons */}
                <div className="flex md:hidden justify-between w-full mt-4">
                    <button onClick={() => scroll("prev")} className={btnBase} aria-label="Previous">
                        <ChevronLeft />
                    </button>
                    <button onClick={() => scroll("next")} className={btnBase} aria-label="Next">
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div ref={sliderRef} className="flex gap-6 overflow-x-hidden scroll-smooth">
                {bestSellers.map((item, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[calc((100%-24px)/1.5)] sm:w-[calc((100%-48px)/2.5)] lg:w-[calc((100%-72px)/3.5)] bg-white rounded-2xl shadow-sm border border-transparent overflow-hidden"
                    >
                        <div className="relative h-[250px] md:h-[316px]">
                            <Image src={item.img} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-[18px] md:text-[20px] font-medium">{item.name}</h3>
                            <p className="text-[#803144] text-[16px] md:text-[18px] mt-2 font-semibold">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
