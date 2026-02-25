"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-[#faf7f2] border-solid border-t border-t-[#e5e7eb] relative z-[163]">
            <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 py-4 flex flex-col">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[164]">
                    <div className="flex items-center shrink-0 flex-nowrap relative z-[165]">
                        <span className="text-[24px] font-normal leading-[32px] text-[#803144] tracking-[-0.53px]">
                            Peacock
                        </span>
                    </div>

                    {/* Mobile cart + menu */}
                    <div className="flex md:hidden items-center gap-2">
                        <div className="w-[40px] h-[40px] relative">
                            <div className="flex w-[20px] h-[20px] justify-center items-center bg-[#803144] rounded-full absolute -top-1 -right-1 z-[182]">
                                <span className="text-[12px] text-[#fff]">3</span>
                            </div>
                            <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/MGLUH6DTE3.png)] bg-cover mt-2 ml-2" />
                        </div>
                        <button
                            className="w-[40px] h-[40px] flex items-center justify-center text-[#803144]"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8 items-center flex-nowrap relative z-[168]">
                        <Link href="/shop" className="text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer hover:text-[#803144] transition-colors">
                            Shop
                        </Link>
                        {["Visit Us", "About", "Subscription", "Contact"].map((item) => (
                            <span key={item} className="text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Cart icon */}
                    <div className="w-[40px] h-[40px] relative hidden md:flex items-center justify-center">
                        <div className="flex w-[20px] h-[20px] justify-center items-center bg-[#803144] rounded-full absolute -top-1 -right-1 z-[182]">
                            <span className="text-[12px] text-[#fff]">3</span>
                        </div>
                        <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/MGLUH6DTE3.png)] bg-cover mt-2 ml-2" />
                    </div>
                </div>

                {/* Mobile Nav Dropdown */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-4 py-4 w-full">
                        <Link href="/shop" className="text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer hover:text-[#803144] transition-colors">
                            Shop
                        </Link>
                        {["Visit Us", "About", "Subscription", "Contact"].map((item) => (
                            <span key={item} className="text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer">
                                {item}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
