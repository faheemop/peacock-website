import { Coffee, Heart, Award, Users, Leaf, Target } from "lucide-react";
import Image from "next/image";
import React from "react";

export const valuesList = [
    {
        id: 1,
        title: "Passion",
        description:
            "We pour our heart into every aspect of coffee—from sourcing to serving. Our love for coffee drives us to constantly improve and innovate.",
        icon: Heart,
    },
    {
        id: 2,
        title: "Quality",
        description:
            "We never compromise on quality. From bean selection to brewing methods, excellence is our standard, not our goal.",
        icon: Award,
    },
    {
        id: 3,
        title: "Community",
        description:
            "We believe in building connections. Our cafes are gathering places where relationships are forged over shared cups of coffee.",
        icon: Users,
    },
    {
        id: 4,
        title: "Craftsmanship",
        description:
            "Coffee is an art form. Our roasters and baristas are artisans who take pride in perfecting their craft every single day.",
        icon: Target
    },
    {
        id: 5,
        title: "Sustainability",
        description:
            "We are committed to ethical sourcing and environmental responsibility. Our future depends on taking care of our planet and people.",
        icon: Leaf,
    },
    {
        id: 6,
        title: "Innovation",
        description:
            "While we honor tradition, we embrace innovation. We constantly explore new methods, flavors, and experiences.",
        icon: Coffee
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
                    src="/images/about.png"
                    alt="Coffee Background"
                    fill
                    priority
                    className="object-cover hidden md:block"
                />

                {/* Mobile Image */}
                <Image
                    src="/images/about-mobile.png"
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
                    <Coffee size={30} className="text-[#803144] text-center mx-auto" />

                    <h2 className="text-2xl md:text-4xl lg:text-5xl mt-6 font-light">
                        Our Story
                    </h2>

                    <div className="w-20 h-1 bg-[#803144] mx-auto mt-6" />
                </div>

                <div className="mt-10 space-y-6 text-base md:text-lg lg:text-xl text-[#364153] leading-relaxed">
                    <p>
                        Coffee Corps began with a simple belief: exceptional coffee should be accessible to everyone. What started as a small roastery in downtown has grown into a community of coffee lovers, united by our commitment to quality and sustainability.
                    </p>

                    <p>
                        Every bean we source tells a story—of farmers who nurture their crops with care, of roasters who perfect their craft, and of baristas who create moments of connection with every cup. We're not just in the business of coffee; we're in the business of creating experiences.
                    </p>

                    <p>
                        Today, with four locations across the city, we continue to honor our founding principles: sourcing ethically, roasting expertly, and serving passionately.
                    </p>
                </div>
            </section>

            {/* VALUES */}
            <section className="bg-[#faf7f2] py-16 md:py-24">
                <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">

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
                                    <item.icon size={28} className="text-[#803144]" />
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
                className="relative bg-center bg-cover py-16 md:py-24 min-h-[400px]"
            >
                <img
                    src="/images/Container-mobile.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover hidden md:block"
                />

                {/* Mobile Image (change if you have mobile image) */}
                <img
                    src="/images/Container.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover block md:hidden"
                />
                <div className="absolute inset-0" />

                <div className="relative max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 text-white space-y-6">
                    <Coffee className="w-10 h-10" />

                    <h2 className="text-[30px] leading-[36px] tracking-[0.4px] md:text-[48px] md:leading-[48px] md:tracking-[0.35px] font-normal">
                        Join Our Coffee Community
                    </h2>

                    <p className="max-w-[500px] text-[14px] leading-[20px] tracking-[-0.15px] md:text-[18px] md:leading-[28px] md:tracking-[-0.44px] font-normal opacity-90">
                        Sign up for exclusive offers, brewing tips, and new roast announcements from all our locations.
                    </p>

                    <div className="flex flex-wrap lg:flex-nowrap gap-4 max-w-[680px] w-full">
                        <input
                            placeholder="Enter your email address"
                            className="flex-1 h-14 px-6 rounded-full text-black outline-none text-[14px] leading-[100%] tracking-[-0.15px] md:text-[16px] md:tracking-[-0.31px] font-normal"
                        />

                        <button className="w-full lg:w-auto h-14 px-8 bg-[#803144] rounded-full text-white hover:bg-[#6a2b3c] transition text-center text-[14px] leading-[20px] tracking-[-0.15px] md:text-[16px] md:leading-[24px] md:tracking-[-0.31px] font-normal">
                            Subscribe
                        </button>
                    </div>
                    <p className="max-w-[680px] text-[14px] leading-[20px] tracking-[-0.15px] font-normal opacity-90">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </section>


        </div>
    );
}