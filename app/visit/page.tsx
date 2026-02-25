import React from "react";

export default function Main() {
    return (
        <div className="main-container w-full min-h-screen bg-[#fff] relative mx-auto my-0 font-inter">
            <div className="flex w-full flex-col items-start flex-nowrap bg-[#fff] relative">
                <div className="w-full self-stretch shrink-0 bg-[#faf7f2] relative z-[1]">

                    {/* Hero Section - Visit Us */}
                    <div className="w-full h-[400px] md:h-[617px] relative overflow-hidden z-[425]">
                        <div className="w-full h-full bg-[url('/images/visit-hero-mobile.png')] md:bg-[url('/images/visit-hero.png')] bg-cover bg-center bg-no-repeat absolute top-0 left-0 z-[426]" />
                        <div className="flex w-full h-full flex-col gap-[24px] justify-center items-center relative z-[427]">
                            <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 flex flex-col gap-[24px] items-center">
                                <div className="shrink-0 relative z-[428]">
                                    <h1 className="text-[40px] md:text-[72px] font-normal leading-tight text-[#fff] tracking-[0.12px] text-center">
                                        Visit Us
                                    </h1>
                                </div>
                                <div className="max-w-[721px] shrink-0 relative z-[430]">
                                    <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-[rgba(255,255,255,0.9)] tracking-[0.07px] text-center">
                                        Experience premium coffee at any of our carefully curated locations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Locations Content */}
                    <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 py-[40px] md:py-[80px] flex flex-col gap-[40px] md:gap-[64px] items-center relative z-[2]">

                        {/* Title Section */}
                        <div className="text-center flex flex-col gap-4 relative z-[3] w-full">
                            <h2 className="text-[28px] md:text-[36px] font-normal text-[#0a0a0a] tracking-[0.37px]">
                                Our Locations
                            </h2>
                            <p className="max-w-[672px] mx-auto text-[16px] md:text-[18px] font-normal leading-relaxed text-[#4a5565] tracking-[-0.44px]">
                                Each Coffee Corps location offers a unique atmosphere while maintaining our commitment to exceptional coffee
                            </p>
                        </div>

                        {/* Cards Container */}
                        <div className="w-full flex flex-col gap-8 relative z-[8]">

                            {/* Card 1 - Flagship (Horizontal on Desktop) */}
                            <div className="w-full flex flex-col md:flex-row bg-[#fff] rounded-[24px] overflow-hidden shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] z-[9]">
                                <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden shrink-0">
                                    <div className="w-full h-full bg-[url('/images/Group.png')] bg-cover bg-center bg-no-repeat" />
                                    <div className="absolute top-6 left-6 bg-[#803144] px-6 py-2 rounded-full z-[12] flex items-center justify-center">
                                        <span className="text-[12px] md:text-[14px] font-normal text-[#fff] tracking-[0.55px] uppercase">Flagship Store</span>
                                    </div>
                                </div>
                                <div className="flex flex-col p-6 md:p-[40px] gap-[24px] flex-grow">
                                    <h3 className="text-[24px] md:text-[30px] font-normal text-[#0a0a0a]">Downtown Flagship</h3>
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="flex gap-[16px] items-start text-[#364153]">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/UUYkfomrDe.png)] bg-cover shrink-0 mt-1" />
                                            <span className="text-[16px]">123 Main Street, Downtown<br />New York, NY 10001</span>
                                        </div>
                                        <div className="flex gap-[16px] items-center text-[#364153]">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/oLX2otFc8g.png)] bg-cover shrink-0" />
                                            <span className="text-[16px]">+1 (555) 123-4567</span>
                                        </div>
                                        <div className="flex gap-[16px] items-center text-[#364153]">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/hLaXpe3jdp.png)] bg-cover shrink-0" />
                                            <span className="text-[16px]">downtown@coffeecorps.com</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <div className="flex gap-[12px] items-center">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/boEhkUGwhc.png)] bg-cover shrink-0" />
                                            <span className="text-[18px] text-[#0a0a0a] font-medium">Opening Hours</span>
                                        </div>
                                        <div className="md:pl-[32px] flex flex-col gap-[8px]">
                                            <div className="flex justify-between w-full text-[14px] md:text-[16px]"><span className="text-[#4a5565]">Monday - Friday</span><span className="text-[#803144] font-medium">7:00 AM - 8:00 PM</span></div>
                                            <div className="flex justify-between w-full text-[14px] md:text-[16px]"><span className="text-[#4a5565]">Saturday</span><span className="text-[#803144] font-medium">8:00 AM - 9:00 PM</span></div>
                                            <div className="flex justify-between w-full text-[14px] md:text-[16px]"><span className="text-[#4a5565]">Sunday</span><span className="text-[#803144] font-medium">8:00 AM - 6:00 PM</span></div>
                                        </div>
                                    </div>
                                    <button className="h-[56px] w-full bg-[#803144] hover:bg-[#6B2838] transition-colors rounded-full flex items-center justify-center gap-[12px] text-[#fff] mt-4">
                                        <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/7263NC42Oi.png)] bg-cover" />
                                        <span className="text-[16px]">Get Directions</span>
                                        <div className="w-[16px] h-[16px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/HE0UF1ZRsD.png)] bg-cover" />
                                    </button>
                                </div>
                            </div>

                            {/* Two Cards Row (Stack on Mobile) */}
                            <div className="flex flex-col md:flex-row gap-8 w-full">
                                {/* Card 2 - Midtown */}
                                <div className="flex-1 bg-[#fff] rounded-[24px] overflow-hidden shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] flex flex-col">
                                    <div className="w-full h-[250px] md:h-[375px] bg-[url('/images/Image.png')] bg-cover bg-center shrink-0" />
                                    <div className="p-6 md:p-[40px] flex flex-col gap-[24px] flex-grow">
                                        <h3 className="text-[24px] md:text-[30px] font-normal text-[#0a0a0a]">Midtown Cafe</h3>
                                        <div className="flex flex-col gap-[16px]">
                                            <div className="flex gap-[16px] items-start text-[#364153]">
                                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/bCtFyGASAE.png)] bg-cover shrink-0 mt-1" />
                                                <span className="text-[16px]">456 Park Avenue, Midtown<br />New York, NY 10022</span>
                                            </div>
                                            <div className="flex gap-[16px] items-center text-[#364153]">
                                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/7Tt8rnnPLy.png)] bg-cover shrink-0" />
                                                <span className="text-[16px]">+1 (555) 234-5678</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-[16px] items-center text-[#364153]">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/hLaXpe3jdp.png)] bg-cover shrink-0" />
                                            <span className="text-[16px]">midtown@coffeecorps.com</span>
                                        </div>
                                        <div className="flex flex-col gap-[12px]">
                                            <div className="flex gap-[12px] items-center">
                                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/boEhkUGwhc.png)] bg-cover shrink-0" />
                                                <span className="text-[18px] text-[#0a0a0a] font-medium">Opening Hours</span>
                                            </div>
                                            <div className="md:pl-[32px] flex flex-col gap-[8px]">
                                                <div className="flex justify-between w-full text-[14px] md:text-[16px] pt-4"><span className="text-[#4a5565]">Monday - Friday</span><span className="text-[#803144] font-medium">7:00 AM - 8:00 PM</span></div>
                                                <div className="flex justify-between w-full text-[14px] md:text-[16px] pt-4"><span className="text-[#4a5565]">Saturday</span><span className="text-[#803144] font-medium">8:00 AM - 9:00 PM</span></div>
                                                <div className="flex justify-between w-full text-[14px] md:text-[16px] pt-4"><span className="text-[#4a5565]">Sunday</span><span className="text-[#803144] font-medium">8:00 AM - 6:00 PM</span></div>
                                            </div>
                                        </div>
                                        <button className="h-[56px] w-full bg-[#803144] rounded-full flex items-center justify-center gap-[12px] text-[#fff] mt-4">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/H79ajNTa7z.png)] bg-cover" />
                                            <span>Get Directions</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Card 3 - Brooklyn */}
                                <div className="flex-1 bg-[#fff] rounded-[24px] overflow-hidden shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] flex flex-col">
                                    <div className="w-full h-[250px] md:h-[375px] bg-[url('/images/Upper.png')] bg-cover bg-center shrink-0" />
                                    <div className="p-6 md:p-[40px] flex flex-col gap-[24px] flex-grow">
                                        <h3 className="text-[24px] md:text-[30px] font-normal text-[#0a0a0a]">Brooklyn Heights</h3>
                                        <div className="flex flex-col gap-[16px]">
                                            <div className="flex gap-[16px] items-start text-[#364153]">
                                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/EGuu5TjajV.png)] bg-cover shrink-0 mt-1" />
                                                <span className="text-[16px]">789 Brooklyn Bridge Blvd<br />Brooklyn, NY 11201</span>
                                            </div>
                                            <div className="flex gap-[16px] items-center text-[#364153]">
                                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/avpBHUdtKR.png)] bg-cover shrink-0" />
                                                <span className="text-[16px]">+1 (555) 345-6789</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-[16px] items-center text-[#364153]">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/hLaXpe3jdp.png)] bg-cover shrink-0" />
                                            <span className="text-[16px]">midtown@coffeecorps.com</span>
                                        </div>
                                        <div className="flex flex-col gap-[12px]">
                                            <div className="flex gap-[12px] items-center">
                                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/boEhkUGwhc.png)] bg-cover shrink-0" />
                                                <span className="text-[18px] text-[#0a0a0a] font-medium">Opening Hours</span>
                                            </div>
                                            <div className="md:pl-[32px] flex flex-col gap-[8px]">
                                                <div className="flex justify-between w-full text-[14px] md:text-[16px] pt-4"><span className="text-[#4a5565]">Monday - Friday</span><span className="text-[#803144] font-medium">7:00 AM - 8:00 PM</span></div>
                                                <div className="flex justify-between w-full text-[14px] md:text-[16px] pt-4"><span className="text-[#4a5565]">Saturday</span><span className="text-[#803144] font-medium">8:00 AM - 9:00 PM</span></div>
                                                <div className="flex justify-between w-full text-[14px] md:text-[16px] pt-4"><span className="text-[#4a5565]">Sunday</span><span className="text-[#803144] font-medium">8:00 AM - 6:00 PM</span></div>
                                            </div>
                                        </div>
                                        <button className="h-[56px] w-full bg-[#803144] rounded-full flex items-center justify-center gap-[12px] text-[#fff] mt-4">
                                            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/6kS2DCZxF2.png)] bg-cover" />
                                            <span>Get Directions</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="w-full bg-[#fff] py-12">
                        <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 flex flex-col gap-8 md:gap-12">
                            <div className="text-center flex flex-col gap-4">
                                <h2 className="text-[28px] md:text-[36px] font-normal text-[#0a0a0a]">Find Us on the Map</h2>
                                <p className="text-[16px] md:text-[18px] text-[#4a5565]">All our locations across the city</p>
                            </div>
                            <div className="w-full h-[400px] md:h-[600px] bg-[#faf7f2] rounded-[24px] border-2 border-[#e5e7eb] flex flex-col items-center justify-center shadow-inner">
                                <div className="w-[64px] h-[64px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/8iB3jUkape.png)] bg-cover mb-4 opacity-50" />
                                <span className="text-[18px] text-[#4a5565] font-medium">Interactive Map Coming Soon</span>
                                <span className="text-[14px] text-[#6a7282] mt-2">Click "Get Directions" on any location above</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA - Background Gradient class from tailwind.config */}
                    <div className="w-full py-16 md:py-[80px] bg-visit-gradient flex flex-col items-center px-4">
                        <h2 className="text-[32px] md:text-[48px] font-normal leading-tight text-[#fff] tracking-[0.35px] text-center">Can't Visit In Person?</h2>
                        <p className="text-[18px] md:text-[20px] text-[rgba(255,255,255,0.9)] mt-6 text-center max-w-lg">Get our premium coffee delivered straight to your door</p>
                        <button className="mt-10 px-10 py-4 bg-[#fff] hover:bg-gray-100 transition-colors rounded-full text-[#803144] text-[18px] font-medium shadow-lg">
                            Shop Online
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}