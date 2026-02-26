import React from "react";

export default function Main() {
    return (
        <div className="main-container w-full bg-[#fff] relative mx-auto my-0">
            {/* Category Tabs */}
            <div className="w-full bg-[#faf7f2] border-solid border-t border-t-[#e5e7eb] border-b border-b-[#e5e7eb]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 py-4 overflow-x-hidden">
                    <div className="flex flex-wrap gap-3 gap-y-3 items-center justify-center md:flex-nowrap md:gap-4">
                        {/* Shop All - Active */}
                        <div className="flex basis-[22%] md:basis-auto md:w-[105px] h-[80px] flex-col gap-2 items-center justify-center bg-[#803144] rounded-[14px] border-2 border-[#803144] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] shrink-0">
                            <div className="w-[25px] h-[25px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/ZtsUetqcYs.png)] bg-cover bg-no-repeat" />
                            <span className="text-[12px] font-normal leading-[16px] text-[#fff] tracking-[-0.31px] text-center">Shop All</span>
                        </div>
                        {/* Coffee */}
                        <div className="flex basis-[22%] md:basis-auto md:w-[100px] h-[76px] flex-col gap-2 items-center justify-center bg-[#fff] rounded-[14px] border-2 border-[#e5e7eb] shrink-0">
                            <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/a7ASDk8nL0.png)] bg-cover bg-no-repeat" />
                            <span className="text-[12px] font-normal leading-[16px] text-[#364153] tracking-[-0.31px] text-center">Coffee</span>
                        </div>
                        {/* Mugs */}
                        <div className="flex basis-[22%] md:basis-auto md:w-[100px] h-[76px] flex-col gap-2 items-center justify-center bg-[#fff] rounded-[14px] border-2 border-[#e5e7eb] shrink-0">
                            <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/8cidGFubfA.png)] bg-cover bg-no-repeat" />
                            <span className="text-[12px] font-normal leading-[16px] text-[#364153] tracking-[-0.31px] text-center">Mugs</span>
                        </div>
                        {/* Boxes */}
                        <div className="flex basis-[22%] md:basis-auto md:w-[100px] h-[76px] flex-col gap-2 items-center justify-center bg-[#fff] rounded-[14px] border-2 border-[#e5e7eb] shrink-0">
                            <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/WH3pBEpL44.png)] bg-cover bg-no-repeat" />
                            <span className="text-[12px] font-normal leading-[16px] text-[#364153] tracking-[-0.31px] text-center">Boxes</span>
                        </div>
                        {/* Hail Mubkhara */}
                        <div className="flex basis-[22%] md:basis-auto md:w-[113px] h-[76px] flex-col gap-2 items-center justify-center bg-[#fff] rounded-[14px] border-2 border-[#e5e7eb] shrink-0">
                            <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/u93sE5v4cb.png)] bg-cover bg-no-repeat" />
                            <span className="text-[12px] font-normal leading-[16px] text-[#364153] tracking-[-0.31px] text-center">Hail Mubkhara</span>
                        </div>
                        {/* Tote Bags */}
                        <div className="flex basis-[22%] md:basis-auto md:w-[100px] h-[76px] flex-col gap-2 items-center justify-center bg-[#fff] rounded-[14px] border-2 border-[#e5e7eb] shrink-0">
                            <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/LTB8FbCKQK.png)] bg-cover bg-no-repeat" />
                            <span className="text-[12px] font-normal leading-[16px] text-[#364153] tracking-[-0.31px] text-center">Tote Bags</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== COFFEE CORPS SECTION ===== */}
            <div className="w-full bg-[#fff] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-normal leading-[40px] text-[#0a0a0a] tracking-[0.37px]">Coffee Corps</h2>
                        <p className="text-[16px] font-normal leading-[24px] text-[#4a5565] tracking-[-0.31px] mt-4 max-w-[627px] mx-auto">
                            Discover our curated selection of premium single-origin coffees from around the world
                        </p>
                    </div>

                    {/* Coffee Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Ethiopian Yirgacheffe", price: "$24.99", img: "Kenyan.png" },
                            { name: "Colombian Supremo", price: "$22.99", img: "Kenyan.png" },
                            { name: "Sumatra Mandheling", price: "$26.99", img: "Kenyan.png" },
                            { name: "Costa Rican Tarrazu", price: "$25.99", img: "Kenyan.png" },
                            { name: "Kenyan AA", price: "$27.99", img: "Kenyan.png" },
                            { name: "Brazilian Santos", price: "$21.99", img: "Kenyan.png" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col bg-[#fff] rounded-[16px] border border-[#f3f4f6] overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
                                <div className="h-[300px] md:h-[387px] bg-[#faf7f2] overflow-hidden">
                                    {/* Local public folder se image call karne ka sahi tareeqa */}
                                    <div
                                        className="w-full h-full bg-cover bg-no-repeat bg-center"
                                        style={{ backgroundImage: `url(/images/${item.img})` }}
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-2">
                                    <span className="text-[18px] font-medium leading-[27px] text-[#0a0a0a] tracking-[-0.44px]">{item.name}</span>
                                    <span className="text-[16px] font-normal leading-[24px] text-[#803144] tracking-[-0.31px]">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== BUILD YOUR PERFECT BOX ===== */}
            <div className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-16 mt-16">
                        <h2 className="text-[36px] font-medium leading-[40px] text-[#0a0a0a] tracking-[0.37px]">Build Your Perfect Box</h2>
                        <p className="text-[16px] font-normal leading-[24px] text-[#4a5565] tracking-[-0.31px] mt-4 max-w-[492px] mx-auto">
                            Create your custom coffee experience with our curated box options
                        </p>
                    </div>

                    {/* Box Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Design Your Box */}
                        <div className="flex flex-col bg-[#fff] rounded-[16px] overflow-hidden">
                            <div className="relative h-[292px] bg-[#fff] overflow-hidden">
                                <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/npWLO6dvCF.png)` }} />
                                <div className="absolute top-4 right-4 px-4 py-2 bg-[#803144] rounded-full">
                                    <span className="text-[14px] font-normal leading-[20px] text-[#fff] tracking-[-0.15px]">15% OFF</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-2 bg-[#fff]">
                                <span className="text-[16px] font-normal leading-[24px] text-[#0a0a0a] tracking-[-0.31px]">Design Your Box</span>
                                <span className="text-[14px] font-normal leading-[20px] text-[#4a5565] tracking-[-0.15px]">Choose 3, 4, or 6 Coffee Corps bags</span>
                            </div>
                        </div>
                        {/* Corps & Filters */}
                        <div className="flex flex-col bg-[#fff] rounded-[16px] overflow-hidden">
                            <div className="relative h-[292px] bg-[#fff] overflow-hidden">
                                <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/W4CYbUrGzY.png)` }} />
                                <div className="absolute top-4 right-4 px-4 py-2 bg-[#803144] rounded-full">
                                    <span className="text-[14px] font-normal leading-[20px] text-[#fff] tracking-[-0.15px]">15% OFF</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-2 bg-[#fff]">
                                <span className="text-[16px] font-normal leading-[24px] text-[#0a0a0a] tracking-[-0.31px]">Corps & Filters</span>
                                <span className="text-[14px] font-normal leading-[20px] text-[#4a5565] tracking-[-0.15px]">Pre-set bundle with coffee filters + 3 Coffee Corps</span>
                            </div>
                        </div>
                        {/* Peacock Box */}
                        <div className="flex flex-col bg-[#fff] rounded-[16px] overflow-hidden">
                            <div className="relative h-[292px] bg-[#fff] overflow-hidden">
                                <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/ZLmrj0afTc.png)` }} />
                                <div className="absolute top-4 right-4 px-4 py-2 bg-[#803144] rounded-full">
                                    <span className="text-[14px] font-normal leading-[20px] text-[#fff] tracking-[-0.15px]">10% OFF</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-2 bg-[#fff]">
                                <span className="text-[16px] font-normal leading-[24px] text-[#0a0a0a] tracking-[-0.31px]">Peacock Box</span>
                                <span className="text-[14px] font-normal leading-[20px] text-[#4a5565] tracking-[-0.15px]">Premium bundle: 1 Coffee Corp + 1 Mug + 1 Mubkhara</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== MUGS & ACCESSORIES ===== */}
            <div className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-normal leading-[40px] text-[#0a0a0a] tracking-[0.37px]">Mugs & Accessories</h2>
                        <p className="text-[16px] font-normal leading-[24px] text-[#4a5565] tracking-[-0.31px] mt-4 max-w-[535px] mx-auto">
                            Create your custom coffee experience with our curated collection options
                        </p>
                    </div>

                    {/* Mugs Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Premium Mug Collection", desc: "Handcrafted ceramic mugs + artisan coffee accessories", badge: "15% OFF", img: "KOv2VmNmqP.png" },
                            { name: "Travel & Tumblers", desc: "Insulated bottles + premium travel mugs for coffee on-the-go", badge: "15% OFF", img: "taBRyQLLat.png" },
                            { name: "Peacock Collection", desc: "Premium bundle: 1 Coffee Cup + 1 Mug + 1 Mubkhara", badge: "10% OFF", img: "kJBrRXHFT6.png" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col bg-[#fff] rounded-[16px] overflow-hidden shadow-[0_4px_6px_0_rgba(0,0,0,0.1)]">
                                <div className="relative h-[292px] bg-[#faf7f2] overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/${item.img})` }} />
                                    <div className="absolute top-4 right-4 px-4 py-2 bg-[#803144] rounded-full">
                                        <span className="text-[14px] font-medium leading-[20px] text-[#fff] tracking-[-0.15px]">{item.badge}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-2 bg-[#fff]">
                                    <span className="text-[20px] font-normal leading-[28px] text-[#0a0a0a] tracking-[-0.45px]">{item.name}</span>
                                    <span className="text-[14px] font-normal leading-[22.75px] text-[#4a5565] tracking-[-0.15px]">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== HAIL MUBKHARA PROMO ===== */}
            <div className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="w-full aspect-[584/438] rounded-[24px] overflow-hidden shadow-[0_25px_50px_0_rgba(0,0,0,0.25)]">
                                <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/UhqN8Zfeks.png)] bg-cover bg-no-repeat bg-center" />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <span className="inline-block w-fit px-6 py-2 bg-[#803144] rounded-full text-[14px] font-normal leading-[20px] text-[#fff] tracking-[-0.15px]">Hail Mubkhara</span>
                            <h2 className="text-[36px] md:text-[60px] font-normal leading-tight text-[#803144] tracking-[-1.24px]">Elevate Your Ritual</h2>
                            <p className="text-[18px] font-normal leading-[29.25px] text-[#4a5565] tracking-[-0.44px] max-w-[479px]">
                                Experience the ancient tradition of incense with our handcrafted brass Mubkhara. Perfect for creating ambiance and complementing your coffee ceremony.
                            </p>
                            <button className="w-fit flex items-center gap-3 px-8 py-4 bg-[#803144] rounded-full shadow-[0_4px_6px_0_rgba(0,0,0,0.1)]">
                                <span className="text-[16px] font-normal leading-[24px] text-[#fff] tracking-[-0.31px]">Explore Mubkhara</span>
                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/Qax9JMZEp9.png)] bg-cover bg-no-repeat" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== TOTE BAGS PROMO ===== */}
            <div className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="w-full aspect-[584/438] rounded-[24px] overflow-hidden shadow-[0_25px_50px_0_rgba(0,0,0,0.25)]">
                                <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/NRcfaeaoUO.png)] bg-cover bg-no-repeat bg-center" />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <span className="inline-block w-fit px-6 py-2 bg-[#803144] rounded-full text-[14px] font-normal leading-[20px] text-[#fff] tracking-[-0.15px]">Tote Bags</span>
                            <h2 className="text-[36px] md:text-[60px] font-normal leading-tight text-[#803144] tracking-[-1.24px]">Carry Your Passion</h2>
                            <p className="text-[18px] font-normal leading-[29.25px] text-[#4a5565] tracking-[-0.44px] max-w-[487px]">
                                Express your coffee love with our premium canvas tote bags. Each design features bold typography and sustainable materials.
                            </p>
                            <button className="w-fit flex items-center gap-3 px-8 py-4 bg-[#803144] rounded-full shadow-[0_4px_6px_0_rgba(0,0,0,0.1)]">
                                <span className="text-[16px] font-normal leading-[24px] text-[#fff] tracking-[-0.31px]">Shop Tote Bags</span>
                                <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/vCftc1a5RK.png)] bg-cover bg-no-repeat" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== CANVAS TOTE CARDS ===== */}
            <div className="w-full bg-[#fff] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { name: 'Canvas Tote - "Coffee First"', img: "cuEKV7YA72.png" },
                            { name: 'Canvas Tote - "Brew Beyond"', img: "er7cOodQ4b.png" },
                            { name: 'Canvas Tote - "Corps Culture"', img: "OkgCNoXfVR.png" },
                            { name: 'Canvas Tote - "Coffee Corps"', img: "qRiSbp17s4.png" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col bg-[#fff] rounded-[16px] border border-[#f3f4f6] overflow-hidden">
                                <div className="h-[200px] md:h-[288px] bg-[#faf7f2] overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/${item.img})` }} />
                                </div>
                                <div className="p-3 md:p-4 flex flex-col gap-1 md:gap-2">
                                    <span className="text-[12px] md:text-[14px] font-medium leading-[18px] md:leading-[20px] text-[#0a0a0a] tracking-[-0.15px]">{item.name}</span>
                                    <span className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#803144] tracking-[-0.31px]">$24.99</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}