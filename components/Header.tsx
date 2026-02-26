"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
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
                        <div style={{ position: 'relative', width: '22px', height: '22px', margin: '9px' }}>
                            <ShoppingCart size={22} className="text-[#803144]" />
                            <span style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                transform: 'translate(50%, -50%)',
                                width: '17px',
                                height: '17px',
                                backgroundColor: '#803144',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}>
                                <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'white', lineHeight: 1 }}>3</span>
                            </span>
                        </div>
                        <button
                            className="w-[40px] h-[40px] flex items-center justify-center text-[#803144]"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                        <div style={{ position: 'relative', width: '22px', height: '22px', margin: '9px' }}>
                            <ShoppingCart size={22} className="text-[#803144]" />
                            <span style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                transform: 'translate(50%, -50%)',
                                width: '17px',
                                height: '17px',
                                backgroundColor: '#803144',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}>
                                <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'white', lineHeight: 1 }}>3</span>
                            </span>
                        </div>
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
