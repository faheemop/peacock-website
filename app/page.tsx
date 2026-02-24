"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'prev' | 'next') => {
    const container = sliderRef.current;
    if (!container) return;
    const card = container.querySelector('div') as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 24; // card width + gap-6 (24px)
    container.scrollBy({ left: direction === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="main-container w-full bg-[#fff] relative mx-auto my-0">
      {/* Header Section */}
      <div className="w-full bg-[#faf7f2] border-solid border-t border-t-[#e5e7eb] relative z-[163]">
        <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 py-4 flex flex-col">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[164]">
            <div className="flex items-center shrink-0 flex-nowrap relative z-[165]">
              <span className="  text-[24px] font-normal leading-[32px] text-[#803144] tracking-[-0.53px]">
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
              <Link href="/shop" className="  text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer hover:text-[#803144] transition-colors">
                Shop
              </Link>
              {["Visit Us", "About", "Subscription", "Contact"].map((item) => (
                <span key={item} className="  text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer">
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
              <Link href="/shop" className="  text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer hover:text-[#803144] transition-colors">
                Shop
              </Link>
              {["Visit Us", "About", "Subscription", "Contact"].map((item) => (
                <span key={item} className="  text-[16px] font-normal leading-[24px] text-[#364153] cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-start bg-[#faf7f2]">
        {/* Hero Section */}
        <div className="w-full h-[400px] md:h-[550px] lg:h-[720px] 2xl:h-[850px] relative overflow-hidden">
          {/* Mobile: hero-mobile.png, Desktop: hero-banner.png */}
          <div className="w-full h-full bg-[url('/images/hero-banner-mobile.png')] md:bg-[url('/images/hero-banner.png')] bg-cover bg-center absolute top-0 left-0" />
          <div className="w-full h-full bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-[10]" />
          <div className="flex w-full h-full justify-center items-center relative z-[20] px-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-[72px] 2xl:text-[84px]   text-white leading-tight">Craft Coffee, <br /> Delivered Fresh</h1>
              <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#e5e7eb] mt-4 md:mt-6 max-w-[614px] 2xl:max-w-[750px] mx-auto">Discover exceptional single-origin beans roasted to perfection. Elevate your daily ritual with our premium coffee selection.</p>
              <button className="mt-6 md:mt-8 px-8 md:px-10 py-3 md:py-4 bg-[#803144] text-white rounded-full text-[14px] md:text-[16px] 2xl:text-[18px]">Explore Collection</button>
            </div>
          </div>
        </div>

        {/* Best Sellers */}
        <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mt-12 md:mt-20 px-6 2xl:px-12 mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-[36px] text-[#803144]  ">Our Best Sellers</h2>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollSlider('prev')}
                className="w-10 h-10 rounded-full border border-[#803144] flex items-center justify-center text-[#803144] hover:bg-[#803144] hover:text-white transition-colors"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => scrollSlider('next')}
                className="w-10 h-10 rounded-full border border-[#803144] flex items-center justify-center text-[#803144] hover:bg-[#803144] hover:text-white transition-colors"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* Mobile Buttons Row */}
            <div className="flex md:hidden justify-between w-full mt-4">
              <button
                onClick={() => scrollSlider('prev')}
                className="w-10 h-10 rounded-full border border-[#803144] flex items-center justify-center text-[#803144]"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => scrollSlider('next')}
                className="w-10 h-10 rounded-full border border-[#803144] flex items-center justify-center text-[#803144]"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div ref={sliderRef} className="flex gap-6 overflow-x-hidden scroll-smooth">
            {[
              { name: "Ethiopian Yirgacheffe", img: "0CxVksT2fv.png" },
              { name: "Colombian Supremo", img: "AL6dvbOG2V.png" },
              { name: "Cold Brew Blend", img: "4PLODtpTGx.png" },
              { name: "Brazil Santos", img: "uF6jUJGnfk.png" },
              { name: "Kenyan AA", img: "0CxVksT2fv.png" },
              { name: "Guatemala Antigua", img: "AL6dvbOG2V.png" }
            ].map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[calc((100%-24px)/1.5)] sm:w-[calc((100%-48px)/2.5)] lg:w-[calc((100%-72px)/3.5)] bg-white rounded-2xl shadow-sm border border-transparent overflow-hidden">
                <div className="h-[250px] md:h-[316px] bg-cover bg-center" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-20/${item.img})` }} />
                <div className="p-6">
                  <h3 className="text-[18px] md:text-[20px] font-medium">{item.name}</h3>
                  <p className="text-[#803144] text-[16px] md:text-[18px] mt-2 font-semibold">$24.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROMOTION BANNERS SECTION */}
        <div className="w-full bg-[#faf7f2] pb-12 md:pb-[80px]">
          <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 flex flex-col gap-6 md:gap-[32px]">

            {/* Subscribe Banner */}
            <div className="h-[250px] md:h-[300px] w-full rounded-[24px] relative overflow-hidden bg-[#3a2a21]">
              {/* Mobile: subscribe-mobile.png, Desktop: subscribe-save.png */}
              <div className="absolute inset-0 bg-[url('/images/subscribe-save-mobile.png')] md:bg-[url('/images/subscribe-save.png')] bg-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative h-full flex items-center px-6 md:pl-12">
                <div>
                  <span className="bg-[#803144] text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">Save 20%</span>
                  <h2 className="text-white text-2xl md:text-4xl mb-3 md:mb-4">Subscribe & Save</h2>
                  <p className="text-[#e5e7eb] text-base md:text-xl max-w-[550px] mb-4 md:mb-6">Never run out of your favorite coffee. Get fresh beans delivered monthly.</p>
                  <button className="bg-[#803144] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base">Start Subscription</button>
                </div>
              </div>
            </div>

            {/* Perfect Your Brew Banner */}
            <div className="h-[250px] md:h-[300px] w-full rounded-[24px] relative overflow-hidden bg-[#4a4a4a]">
              <div className="absolute inset-0 bg-[url('/images/perfect-brew-mobile.png')] md:bg-[url('/images/perfect-brew.png')] bg-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center justify-start md:justify-end px-6 md:pr-12 text-left md:text-right">
                <div>
                  <h2 className="text-white text-2xl md:text-4xl mb-3 md:mb-4">Perfect Your Brew</h2>
                  <p className="text-[#e5e7eb] text-base md:text-xl mb-4 md:mb-6">Learn professional brewing techniques from our expert baristas.</p>
                  <button className="bg-[#803144] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base">View Brewing Guide</button>
                </div>
              </div>
            </div>

            {/* Curated Gift Sets Banner */}
            <div className="h-[250px] md:h-[300px] w-full rounded-[24px] relative overflow-hidden bg-[#5c2433]">
              <div className="absolute inset-0 bg-[url('/images/curated-gift-mobile.png')] md:bg-[url('/images/curated-gift.png')] bg-cover" />
              <div className="absolute inset-0 bg-[rgba(128,49,68,0.5)]" />
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div>
                  <h2 className="text-white text-2xl md:text-4xl mb-3 md:mb-4">Curated Gift Sets</h2>
                  <p className="text-[#f3f4f6] text-base md:text-xl mb-4 md:mb-6">Premium coffee collections beautifully packaged for any occasion.</p>
                  <button className="bg-white text-[#803144] px-8 md:px-10 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base">Shop Gifts</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="w-full bg-[#803144] pt-12 md:pt-[80px] pb-[40px]">
          <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[40px] mb-10 md:mb-[60px]">
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/20 pt-6">
              <p className="text-[#e5e7eb] text-[14px]">© 2025 Coffee Corps. All rights reserved.</p>
              <div className="flex gap-4 md:gap-6 text-[#e5e7eb] text-[14px]">
                <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                <span className="cursor-pointer hover:text-white">Terms of Service</span>
                <span className="cursor-pointer hover:text-white">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}