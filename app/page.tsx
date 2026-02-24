"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="main-container w-[1536px] bg-[#fff] relative mx-auto my-0">
      {/* Header Section */}
      <div className="flex w-[1536px] h-[73px] pt-[16px] pr-[152px] pb-px pl-[152px] flex-col items-start flex-nowrap bg-[#faf7f2] border-solid border-t border-t-[#e5e7eb] relative z-[163]">
        <div className="flex h-[40px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[164]">
          <div className="flex w-[84.141px] h-[32px] items-center shrink-0 flex-nowrap relative z-[165]">
            <span className="font-['Inter'] text-[24px] font-normal leading-[32px] text-[#803144] tracking-[-0.53px]">
              Peacock
            </span>
          </div>
          <div className="flex w-[413.219px] h-[24px] gap-[32px] items-center shrink-0 flex-nowrap relative z-[168]">
            <Link href="/shop" className="font-['Inter'] text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer hover:text-[#803144] transition-colors">
              Shop
            </Link>
            {["Visit Us", "About", "Subscription", "Contact"].map((item) => (
              <span key={item} className="font-['Inter'] text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer">
                {item}
              </span>
            ))}
          </div>
          <div className="w-[40px] h-[40px] relative">
            <div className="flex w-[20px] h-[20px] justify-center items-center bg-[#803144] rounded-full absolute -top-1 -right-1 z-[182]">
              <span className="text-[12px] text-[#fff]">3</span>
            </div>
            <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/MGLUH6DTE3.png)] bg-cover mt-2 ml-2" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-start bg-[#faf7f2]">
        {/* Hero Section */}
        <div className="w-[1536px] h-[720.297px] relative overflow-hidden">
          <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/diM2gCLnBz.png)] bg-cover absolute top-0 left-0" />
          <div className="w-full h-full bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-[10]" />
          <div className="flex w-full h-full justify-center items-center relative z-[20]">
            <div className="text-center">
              <h1 className="text-[72px] font-['Inter'] text-white leading-tight">Craft Coffee, <br /> Delivered Fresh</h1>
              <p className="text-[20px] text-[#e5e7eb] mt-6 max-w-[614px] mx-auto">Discover exceptional single-origin beans roasted to perfection. Elevate your daily ritual with our premium coffee selection.</p>
              <button className="mt-8 px-10 py-4 bg-[#803144] text-white rounded-full text-[16px]">Explore Collection</button>
            </div>
          </div>
        </div>

        {/* Best Sellers */}
        <div className="w-[1280px] mx-auto mt-20 px-6 mb-20">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[36px] text-[#803144] font-['Inter']">Our Best Sellers</h2>
          </div>
          <div className="flex gap-6 overflow-hidden">
            {[
              { name: "Ethiopian Yirgacheffe", img: "0CxVksT2fv.png" },
              { name: "Colombian Supremo", img: "AL6dvbOG2V.png" },
              { name: "Cold Brew Blend", img: "4PLODtpTGx.png" },
              { name: "Brazil Santos", img: "uF6jUJGnfk.png" }
            ].map((item, i) => (
              <div key={i} className="min-w-[304px] bg-white rounded-2xl shadow-sm border border-transparent overflow-hidden">
                <div className="h-[316px] bg-cover" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/${item.img})` }} />
                <div className="p-6">
                  <h3 className="text-[20px] font-medium">{item.name}</h3>
                  <p className="text-[#803144] text-[18px] mt-2 font-semibold">$24.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROMOTION BANNERS SECTION */}
        <div className="flex w-[1536px] flex-col gap-[32px] items-center bg-[#faf7f2] pb-[80px]">

          {/* Subscribe Banner */}
          <div className="h-[300px] w-[1232px] rounded-[24px] relative overflow-hidden bg-[#3a2a21]">
            <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/VpGEKKTkWi.png)] bg-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative h-full flex items-center pl-12">
              <div>
                <span className="bg-[#803144] text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">Save 20%</span>
                <h2 className="text-white text-4xl mb-4">Subscribe & Save</h2>
                <p className="text-[#e5e7eb] text-xl max-w-[550px] mb-6">Never run out of your favorite coffee. Get fresh beans delivered monthly.</p>
                <button className="bg-[#803144] text-white px-8 py-3 rounded-full">Start Subscription</button>
              </div>
            </div>
          </div>

          {/* Perfect Your Brew Banner */}
          <div className="h-[300px] w-[1232px] rounded-[24px] relative overflow-hidden bg-[#4a4a4a]">
            <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/2GrPDqx0Mh.png)] bg-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center justify-end pr-12 text-right">
              <div>
                <h2 className="text-white text-4xl mb-4">Perfect Your Brew</h2>
                <p className="text-[#e5e7eb] text-xl mb-6">Learn professional brewing techniques from our expert baristas.</p>
                <button className="bg-[#803144] text-white px-8 py-3 rounded-full">View Brewing Guide</button>
              </div>
            </div>
          </div>

          {/* Curated Gift Sets Banner */}
          <div className="h-[300px] w-[1232px] rounded-[24px] relative overflow-hidden bg-[#5c2433]">
            <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/icqOrXYesM.png)] bg-cover" />
            <div className="absolute inset-0 bg-[rgba(128,49,68,0.5)]" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div>
                <h2 className="text-white text-4xl mb-4">Curated Gift Sets</h2>
                <p className="text-[#f3f4f6] text-xl mb-6">Premium coffee collections beautifully packaged for any occasion.</p>
                <button className="bg-white text-[#803144] px-10 py-3 rounded-full font-medium">Shop Gifts</button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="w-[1536px] bg-[#803144] pt-[80px] pb-[40px] px-[152px]">
          <div className="grid grid-cols-4 gap-[40px] mb-[60px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-[16px]">Company</h4>
              <div className="flex flex-col gap-3 text-[#e5e7eb] text-[14px]">
                <span>About Us</span><span>Our Story</span><span>Sustainability</span><span>Careers</span>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-[16px]">Shop</h4>
              <div className="flex flex-col gap-3 text-[#e5e7eb] text-[14px]">
                <span>All Coffee</span><span>Subscriptions</span><span>Gift Sets</span><span>Equipment</span>
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-[16px]">Support</h4>
              <div className="flex flex-col gap-3 text-[#e5e7eb] text-[14px]">
                <span>Contact Us</span><span>Shipping & Returns</span><span>FAQ</span><span>Brewing Guides</span>
              </div>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-[16px]">Connect</h4>
              <span className="text-[#e5e7eb] text-[14px]">Follow us on social media</span>
              <div className="flex gap-3 mt-2">
                {["vghTzDxcHm.png", "tggWWZdkzh.png", "GaNxmk4ALZ.png", "nJE9EMWSAW.png"].map((img, i) => (
                  <div key={i} className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                    <div className="w-[18px] h-[18px] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/${img})` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-between items-center border-t border-white/20 pt-6">
            <p className="text-[#e5e7eb] text-[14px]">© 2025 Coffee Corps. All rights reserved.</p>
            <div className="flex gap-6 text-[#e5e7eb] text-[14px]">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms of Service</span>
              <span className="cursor-pointer hover:text-white">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
