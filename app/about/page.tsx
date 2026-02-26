import Image from "next/image";
import React from "react";

export const valuesList = [
    {
        id: 1,
        title: "Passion",
        description:
            "We pour our heart into every aspect of coffee—from sourcing to serving. Our love for coffee drives us to constantly improve and innovate.",
        image: "/icons/passion.svg",
    },
    {
        id: 2,
        title: "Quality",
        description:
            "We never compromise on quality. From bean selection to brewing methods, excellence is our standard, not our goal.",
        image: "/icons/quality.svg",
    },
    {
        id: 3,
        title: "Community",
        description:
            "We believe in building connections. Our cafes are gathering places where relationships are forged over shared cups of coffee.",
        image: "/icons/community.svg",
    },
    {
        id: 4,
        title: "Craftsmanship",
        description:
            "Coffee is an art form. Our roasters and baristas are artisans who take pride in perfecting their craft every single day.",
        image: "/icons/crafts-man-ship.svg",
    },
    {
        id: 5,
        title: "Sustainability",
        description:
            "We are committed to ethical sourcing and environmental responsibility. Our future depends on taking care of our planet and people.",
        image: "/icons/sustainability.svg",
    },
    {
        id: 6,
        title: "Innovation",
        description:
            "While we honor tradition, we embrace innovation. We constantly explore new methods, flavors, and experiences.",
        image: "/icons/story-icon.svg",
    },
];

const socialIcons = [
    { src: "/icons/instagram.svg", alt: "Instagram" },
    { src: "/icons/facebook.svg", alt: "Facebook" },
    { src: "/icons/twitter.svg", alt: "Twitter" },
    { src: "/icons/mail.svg", alt: "Mail" },
];

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[600px] lg:h-[720px]">
                {/* Desktop Image */}
                <Image
                    src="/images/hero/about.png"
                    alt="Coffee Background"
                    fill
                    priority
                    className="object-cover hidden md:block"
                />

                {/* Mobile Image */}
                <Image
                    src="/images/hero/about-mobile.png"
                    alt="Coffee Background Mobile"
                    fill
                    priority
                    className="object-cover block md:hidden"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
                    <div className="max-w-5xl">
                        <h1 className="text-white text-[36px] md:text-[64px] lg:text-[72px] leading-tight font-light">
                            Crafting Exceptional <br className="hidden md:block" />
                            Coffee Experiences
                        </h1>

                        <p className="mt-6 text-white/90 text-[18px] md:text-[20px] lg:text-[20px]">
                            Rooted in passion, driven by quality, inspired by our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-16 md:py-24">

                <div className="text-center">
                    <img src="/icons/story-icon.svg" alt="Story" className="mx-auto w-12 md:w-auto" />

                    <h2 className="text-2xl md:text-4xl lg:text-5xl mt-6 font-light">
                        Our Story
                    </h2>

                    <div className="w-20 h-1 bg-[#803144] mx-auto mt-6" />
                </div>

                <div className="mt-10 space-y-6 text-base md:text-lg lg:text-xl text-[#364153] leading-relaxed">
                    <p>
                        Coffee Corps began with a simple belief: exceptional coffee should be accessible to everyone.
                        What started as a small roastery in downtown has grown into a community of coffee lovers.
                    </p>

                    <p>
                        Every bean we source tells a story—of farmers who nurture their crops with care.
                    </p>

                    <p>
                        Today, with four locations across the city, we continue to honor our founding principles.
                    </p>
                </div>
            </section>

            {/* VALUES */}
            <section className="bg-[#faf7f2] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">

                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-light">
                            Our Values
                        </h2>

                        <p className="mt-4 text-gray-600 text-base md:text-lg">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
                        {valuesList.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition"
                            >
                                <div className="w-14 h-14 bg-[#803144]/10 rounded-xl flex items-center justify-center">
                                    <Image src={item.image} alt={item.title} width={28} height={28} />
                                </div>

                                <h3 className="text-xl md:text-2xl mt-6 font-light">
                                    {item.title}
                                </h3>

                                <p className="text-sm md:text-base text-[#4A5565] mt-4 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                className="relative bg-center bg-cover py-16 md:py-24"
            >
                <img
                    src="/images/coffee.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover hidden md:block"
                />

                {/* Mobile Image (change if you have mobile image) */}
                <img
                    src="/images/coffee-mobile.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover block md:hidden"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative max-w-4xl mx-auto px-4 text-white space-y-6">
                    <img src="/icons/story-white-icon.svg" alt="" className="w-12" />

                    <h2 className="text-2xl md:text-4xl font-light">
                        Join Our Coffee Community
                    </h2>

                    <p className="text-base md:text-lg opacity-90">
                        Sign up for exclusive offers, brewing tips, and new roast announcements.
                    </p>

                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <input
                            placeholder="Enter your email"
                            className="flex-1 h-14 px-6 rounded-full text-black outline-none"
                        />

                        <button className="h-14 px-8 bg-[#803144] rounded-full text-white hover:bg-[#6a2b3c] transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#803144] text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-12">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        <div>
                            <h4 className="font-medium mb-4">Company</h4>
                            {["About Us", "Our Story", "Sustainability", "Careers"].map((item) => (
                                <p key={item} className="opacity-80 mb-2 text-sm">{item}</p>
                            ))}
                        </div>

                        <div>
                            <h4 className="font-medium mb-4">Shop</h4>
                            {["All Coffee", "Subscriptions", "Gift Sets", "Equipment"].map((item) => (
                                <p key={item} className="opacity-80 mb-2 text-sm">{item}</p>
                            ))}
                        </div>

                        <div>
                            <h4 className="font-medium mb-4">Support</h4>
                            {["Contact Us", "Shipping & Returns", "FAQ", "Brewing Guides"].map((item) => (
                                <p key={item} className="opacity-80 mb-2 text-sm">{item}</p>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-medium">Connect</h4>

                            <p className="opacity-80 text-sm">
                                Follow us on social media
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                {socialIcons.map((icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                                    >
                                        <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 mt-10 pt-6 text-xs md:text-sm opacity-80 flex flex-col md:flex-row justify-between gap-4">
                        <span>© 2025 Coffee Corps. All rights reserved.</span>

                        <div className="flex flex-wrap gap-4 md:gap-6">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span>Cookie Policy</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}