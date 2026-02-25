import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <div className="w-full bg-[#803144] pt-12 md:pt-[80px] pb-[40px]">
            <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-8 md:gap-[40px] mb-10 md:mb-[60px] ]">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4 mt-16 md:mt-[60px]">
                        <h4 className="text-white font-semibold text-[16px]">Company</h4>
                        <div className="flex flex-col gap-3 text-[#e5e7eb] text-[14px]">
                            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
                            <Link href="#" className="hover:text-white transition-colors">Our Story</Link>
                            <Link href="#" className="hover:text-white transition-colors">Sustainability</Link>
                            <Link href="#" className="hover:text-white transition-colors">Careers</Link>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4 mt-16 md:mt-[60px]">
                        <h4 className="text-white font-semibold text-[16px]">Shop</h4>
                        <div className="flex flex-col gap-3 text-[#e5e7eb] text-[14px]">
                            <Link href="#" className="hover:text-white transition-colors">All Coffee</Link>
                            <Link href="#" className="hover:text-white transition-colors">Subscriptions</Link>
                            <Link href="#" className="hover:text-white transition-colors">Gift Sets</Link>
                            <Link href="#" className="hover:text-white transition-colors">Equipment</Link>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4 mt-16 md:mt-[60px]  ">
                        <h4 className="text-white font-semibold text-[16px]">Support</h4>
                        <div className="flex flex-col gap-3 text-[#e5e7eb] text-[14px]">
                            <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
                            <Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link>
                            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
                            <Link href="#" className="hover:text-white transition-colors">Brewing Guides</Link>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-4 mt-16 md:mt-[60px]  ">
                        <h4 className="text-white font-semibold text-[16px]">Connect</h4>
                        <span className="text-[#e5e7eb] text-[14px]">Follow us on social media</span>
                        <div className="flex gap-3 mt-2">
                            {/* Lucide Icons used here */}
                            <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all">
                                <Instagram size={18} className="text-white" />
                            </div>
                            <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all">
                                <Facebook size={18} className="text-white" />
                            </div>
                            <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all">
                                <Twitter size={18} className="text-white" />
                            </div>
                            <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all">
                                <Mail size={18} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/20 pt-10">
                    <p className="text-[#e5e7eb] text-[14px]">© 2025 Coffee Corps. All rights reserved.</p>
                    <div className="flex gap-4 md:gap-6 text-[#e5e7eb] text-[14px] pb-4 ">
                        <Link href="#" className="cursor-pointer hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="cursor-pointer hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="cursor-pointer hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}