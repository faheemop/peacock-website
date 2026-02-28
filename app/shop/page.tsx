import { ShoppingBag, Coffee, Package, Flame, ArrowRight, ShoppingCart, Droplets, Sparkles } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Shop | Peacock Coffee",
    description: "Discover premium coffees, accessories, mugs, and more from Peacock Coffee Corps.",
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface CoffeeProduct {
    name: string;
    price: string;
    img: string;
}

interface BoxProduct {
    name: string;
    desc: string;
    badge: string;
    img: string;
}

interface MugProduct {
    name: string;
    desc: string;
    badge: string;
    img: string;
}

interface ToteProduct {
    name: string;
    img: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const coffeeProducts: CoffeeProduct[] = [
    { name: "Ethiopian Yirgacheffe", price: "$24.99", img: "/images/Kenya .png" },
    { name: "Colombian Supremo", price: "$22.99", img: "/images/Kenya .png" },
    { name: "Sumatra Mandheling", price: "$26.99", img: "/images/Kenya .png" },
    { name: "Costa Rican Tarrazu", price: "$25.99", img: "/images/Kenya .png" },
    { name: "Kenyan AA", price: "$27.99", img: "/images/Kenya .png" },
    { name: "Brazilian Santos", price: "$21.99", img: "/images/Kenya .png" },
];



const boxProducts: BoxProduct[] = [
    { name: "Design Your Box", desc: "Choose 3, 4, or 6 Coffee Corps bags", badge: "15% OFF", img: "/images/Image (Design Your Box).png" },
    { name: "Corps & Filters", desc: "Pre-set bundle with coffee filters + 3 Coffee Corps", badge: "15% OFF", img: "/images/Image (Corps & Filters).png" },
    { name: "Peacock Box", desc: "Premium bundle: 1 Coffee Corp + 1 Mug + 1 Mubkhara", badge: "10% OFF", img: "/images/Image (Hail Mubkhara).png" },
];

const mugProducts: MugProduct[] = [
    { name: "Premium Mug Collection", desc: "Handcrafted ceramic mugs + artisan coffee accessories", badge: "15% OFF", img: "/images/Image (Premium Mug Collection).png" },
    { name: "Travel & Tumblers", desc: "Insulated bottles + premium travel mugs for coffee on-the-go", badge: "15% OFF", img: "/images/Image (Travel & Tumblers).png" },
    { name: "Peacock Collection", desc: "Premium bundle: 1 Coffee Cup + 1 Mug + 1 Mubkhara", badge: "10% OFF", img: "/images/Image (Peacock Collection).png" },
];

const toteProducts: ToteProduct[] = [
    { name: 'Canvas Tote — "Coffee First"', img: "/images/Image (Canvas Tote - _Coffee First_).png" },
    { name: 'Canvas Tote — "Brew Beyond"', img: "/images/Image (Canvas Tote - _Coffee First_).png" },
    { name: 'Canvas Tote — "Corps Culture"', img: "/images/Image (Canvas Tote - _Coffee First_).png" },
    { name: 'Canvas Tote — "Coffee Corps"', img: "/images/Image (Canvas Tote - _Coffee First_).png" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ShopPage() {
    return (
        <div className="w-full bg-white">

            {/* ── Category Tabs ─────────────────────────────────────────── */}
            <nav className="w-full bg-[#faf7f2] border-t border-b border-[#e5e7eb]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 py-4 overflow-x-hidden">
                    <div className="flex flex-wrap gap-3 gap-y-3 items-center justify-center md:flex-nowrap md:gap-4">

                        {/* Shop All — Active */}
                        <div className="flex basis-[22%] md:basis-auto md:w-[105px] h-[80px] flex-col gap-2 items-center justify-center bg-[#803144] rounded-[14px] border-2 border-[#803144] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] shrink-0 cursor-pointer">
                            <ShoppingCart size={22} className="text-white" />
                            <span className="text-[12px] font-normal leading-[16px] text-white tracking-[-0.31px] text-center">Shop All</span>
                        </div>

                        {[
                            { label: "Coffee", Icon: Droplets },
                            { label: "Mugs", Icon: Coffee },
                            { label: "Boxes", Icon: Package },
                            { label: "Hail Mubkhara", Icon: Sparkles },
                            { label: "Tote Bags", Icon: ShoppingBag },
                        ].map(({ label, Icon }) => (
                            <div
                                key={label}
                                className="flex basis-[22%] md:basis-auto md:w-[105px] h-[76px] flex-col gap-2 items-center justify-center bg-white rounded-[14px] border-2 border-[#e5e7eb] shrink-0 cursor-pointer hover:border-[#803144] transition"
                            >
                                <Icon size={22} className="text-[#364153]" />
                                <span className="text-[12px] font-normal leading-[16px] text-[#364153] tracking-[-0.31px] text-center">{label}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </nav>

            {/* ── Coffee Corps ──────────────────────────────────────────── */}
            <section className="w-full bg-white py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-normal leading-[40px] text-[#0a0a0a] tracking-[0.37px]">Coffee Corps</h2>
                        <p className="text-[16px] font-normal leading-[24px] text-[#4a5565] tracking-[-0.31px] mt-4 max-w-[627px] mx-auto">
                            Discover our curated selection of premium single-origin coffees from around the world
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coffeeProducts.map((item, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-[16px] border border-[#f3f4f6] overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
                                <div className="relative h-[300px] md:h-[387px] bg-[#faf7f2] overflow-hidden">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="p-6 flex flex-col gap-2">
                                    <span className="text-[18px] font-medium leading-[27px] text-[#0a0a0a] tracking-[-0.44px]">{item.name}</span>
                                    <span className="text-[16px] font-normal leading-[24px] text-[#803144] tracking-[-0.31px]">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Build Your Perfect Box ───────────────────────────────── */}
            <section className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-medium leading-[40px] text-[#0a0a0a] tracking-[0.37px]">Build Your Perfect Box</h2>
                        <p className="text-[16px] font-normal leading-[24px] text-[#4a5565] tracking-[-0.31px] mt-4 max-w-[492px] mx-auto">
                            Create your custom coffee experience with our curated box options
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {boxProducts.map((item, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-[16px] overflow-hidden">
                                <div className="relative h-[292px] overflow-hidden">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                    <div className="absolute top-4 right-4 px-4 py-2 bg-[#803144] rounded-full">
                                        <span className="text-[14px] font-normal leading-[20px] text-white tracking-[-0.15px]">{item.badge}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-2 bg-white">
                                    <span className="text-[16px] font-normal leading-[24px] text-[#0a0a0a] tracking-[-0.31px]">{item.name}</span>
                                    <span className="text-[14px] font-normal leading-[20px] text-[#4a5565] tracking-[-0.15px]">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Mugs & Accessories ───────────────────────────────────── */}
            <section className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-normal leading-[40px] text-[#0a0a0a] tracking-[0.37px]">Mugs &amp; Accessories</h2>
                        <p className="text-[16px] font-normal leading-[24px] text-[#4a5565] tracking-[-0.31px] mt-4 max-w-[535px] mx-auto">
                            Create your custom coffee experience with our curated collection options
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mugProducts.map((item, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-[16px] overflow-hidden shadow-[0_4px_6px_0_rgba(0,0,0,0.1)]">
                                <div className="relative h-[292px] bg-[#faf7f2] overflow-hidden">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                    <div className="absolute top-4 right-4 px-4 py-2 bg-[#803144] rounded-full">
                                        <span className="text-[14px] font-medium leading-[20px] text-white tracking-[-0.15px]">{item.badge}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-2 bg-white">
                                    <span className="text-[20px] font-normal leading-[28px] text-[#0a0a0a] tracking-[-0.45px]">{item.name}</span>
                                    <span className="text-[14px] font-normal leading-[22.75px] text-[#4a5565] tracking-[-0.15px]">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Hail Mubkhara Promo ──────────────────────────────────── */}
            <section className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full aspect-[584/438] rounded-[24px] overflow-hidden shadow-[0_25px_50px_0_rgba(0,0,0,0.25)]">
                                <Image
                                    src="/images/Image (Hail Mubkhara).png"
                                    alt="Hail Mubkhara"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <span className="inline-block w-fit px-6 py-2 bg-[#803144] rounded-full text-[14px] font-normal leading-[20px] text-white tracking-[-0.15px]">
                                Hail Mubkhara
                            </span>
                            <h2 className="text-[36px] md:text-[60px] font-normal italic leading-tight text-[#803144] tracking-[-1.24px]">
                                Elevate Your Ritual
                            </h2>
                            <p className="text-[18px] font-normal leading-[29.25px] text-[#4a5565] tracking-[-0.44px] max-w-[479px]">
                                Experience the ancient tradition of incense with our handcrafted brass Mubkhara. Perfect for creating ambiance and complementing your coffee ceremony.
                            </p>
                            <button className="w-fit flex items-center gap-3 px-8 py-4 bg-[#803144] rounded-full shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] hover:bg-[#6a2b3c] transition">
                                <span className="text-[16px] font-normal leading-[24px] text-white tracking-[-0.31px]">Explore Mubkhara</span>
                                <ArrowRight size={20} className="text-white" />
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Tote Bags Promo ──────────────────────────────────────── */}
            <section className="w-full bg-[#faf7f2] py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">

                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full aspect-[584/438] rounded-[24px] overflow-hidden shadow-[0_25px_50px_0_rgba(0,0,0,0.25)]">
                                <Image
                                    src="/images/Image (Canvas Tote - _Coffee First_).png"
                                    alt="Tote Bags"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <span className="inline-block w-fit px-6 py-2 bg-[#803144] rounded-full text-[14px] font-normal leading-[20px] text-white tracking-[-0.15px]">
                                Tote Bags
                            </span>
                            <h2 className="text-[36px] md:text-[60px] font-normal italic leading-tight text-[#803144] tracking-[-1.24px]">
                                Carry Your Passion
                            </h2>
                            <p className="text-[18px] font-normal leading-[29.25px] text-[#4a5565] tracking-[-0.44px] max-w-[487px]">
                                Express your coffee love with our premium canvas tote bags. Each design features bold typography and sustainable materials.
                            </p>
                            <button className="w-fit flex items-center gap-3 px-8 py-4 bg-[#803144] rounded-full shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] hover:bg-[#6a2b3c] transition">
                                <span className="text-[16px] font-normal leading-[24px] text-white tracking-[-0.31px]">Shop Tote Bags</span>
                                <ArrowRight size={20} className="text-white" />
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Canvas Tote Cards ────────────────────────────────────── */}
            <section className="w-full bg-white py-16 md:py-[128px]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {toteProducts.map((item, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-[16px] border border-[#f3f4f6] overflow-hidden">
                                <div className="relative h-[200px] md:h-[288px] bg-[#faf7f2] overflow-hidden">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="p-3 md:p-4 flex flex-col gap-1 md:gap-2">
                                    <span className="text-[12px] md:text-[14px] font-medium leading-[18px] md:leading-[20px] text-[#0a0a0a] tracking-[-0.15px]">{item.name}</span>
                                    <span className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#803144] tracking-[-0.31px]">$24.99</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}