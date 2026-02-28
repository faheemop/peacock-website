import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Visit Us | Peacock Coffee",
    description: "Find a Coffee Corps location near you. Visit us at Downtown, Midtown, or Brooklyn Heights.",
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface HoursEntry {
    day: string;
    time: string;
}

interface Location {
    name: string;
    address: string;
    phone: string;
    email: string;
    hours: HoursEntry[];
    img: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const commonHours: HoursEntry[] = [
    { day: "Monday - Friday", time: "7:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 9:00 PM" },
    { day: "Sunday", time: "8:00 AM - 6:00 PM" },
];

const branchLocations: Location[] = [
    {
        name: "Midtown Cafe",
        address: "456 Park Avenue, Midtown\nNew York, NY 10022",
        phone: "+1 (555) 234-5678",
        email: "midtown@coffeecorps.com",
        hours: commonHours,
        img: "/images/Image.png",
    },
    {
        name: "Brooklyn Heights",
        address: "789 Brooklyn Bridge Blvd\nBrooklyn, NY 11201",
        phone: "+1 (555) 345-6789",
        email: "brooklyn@coffeecorps.com",
        hours: commonHours,
        img: "/images/Upper.png",
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function HoursBlock({ hours }: { hours: HoursEntry[] }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
                <Clock className="w-5 h-5 text-[#803144]" />
                <span className="text-[18px] text-[#0a0a0a] font-medium">Opening Hours</span>
            </div>
            <div className="md:pl-8 flex flex-col gap-2">
                {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between w-full text-[14px] md:text-[16px]">
                        <span className="text-[#4a5565]">{day}</span>
                        <span className="text-[#803144] font-medium">{time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DirectionsButton() {
    return (
        <button className="h-14 w-full bg-[#803144] hover:bg-[#6B2838] transition-colors rounded-full flex items-center justify-center gap-3 text-white mt-4">
            <MapPin className="w-5 h-5" />
            <span className="text-[16px]">Get Directions</span>
            <ExternalLink className="w-4 h-4" />
        </button>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function VisitPage() {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative w-full h-[400px] md:h-[617px] overflow-hidden">
                {/* Desktop */}
                <Image
                    src="/images/visit-hero.png"
                    alt="Visit Us"
                    fill
                    priority
                    className="object-cover hidden md:block"
                />
                {/* Mobile */}
                <Image
                    src="/images/visit-hero-mobile.png"
                    alt="Visit Us"
                    fill
                    priority
                    className="object-cover block md:hidden"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col gap-6 items-center">
                        <h1 className="text-[40px] md:text-[72px] font-normal leading-tight text-white tracking-[0.12px]">
                            Visit Us
                        </h1>
                        <p className="max-w-[721px] text-[18px] md:text-[24px] font-normal leading-relaxed text-white/90 tracking-[0.07px]">
                            Experience premium coffee at any of our carefully curated locations
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Locations ────────────────────────────────────────────── */}
            <section className="w-full bg-[#faf7f2]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 py-10 md:py-20 flex flex-col gap-10 md:gap-16">

                    {/* Section Title */}
                    <div className="text-center flex flex-col gap-4">
                        <h2 className="text-[28px] md:text-[36px] font-normal text-[#0a0a0a] tracking-[0.37px]">
                            Our Locations
                        </h2>
                        <p className="max-w-[672px] mx-auto text-[16px] md:text-[18px] font-normal leading-relaxed text-[#4a5565] tracking-[-0.44px]">
                            Each Coffee Corps location offers a unique atmosphere while maintaining our commitment to exceptional coffee
                        </p>
                    </div>

                    {/* ── Flagship Card (horizontal on desktop) ───────── */}
                    <div className="w-full flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_4px_6px_0_rgba(0,0,0,0.1)]">
                        {/* Image */}
                        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto shrink-0 overflow-hidden">
                            <Image
                                src="/images/Group.png"
                                alt="Downtown Flagship"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-6 left-6 bg-[#803144] px-6 py-2 rounded-full">
                                <span className="text-[12px] md:text-[14px] font-normal text-white tracking-[0.55px] uppercase">
                                    Flagship Store
                                </span>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col p-6 md:p-10 gap-6 flex-grow">
                            <h3 className="text-[24px] md:text-[30px] font-normal text-[#0a0a0a]">Downtown Flagship</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4 items-start text-[#364153]">
                                    <MapPin className="w-5 h-5 text-[#803144] mt-1 shrink-0" />
                                    <span className="text-[16px]">123 Main Street, Downtown<br />New York, NY 10001</span>
                                </div>
                                <div className="flex gap-4 items-center text-[#364153]">
                                    <Phone className="w-5 h-5 text-[#803144] shrink-0" />
                                    <span className="text-[16px]">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex gap-4 items-center text-[#364153]">
                                    <Mail className="w-5 h-5 text-[#803144] shrink-0" />
                                    <span className="text-[16px]">downtown@coffeecorps.com</span>
                                </div>
                            </div>
                            <HoursBlock hours={commonHours} />
                            <DirectionsButton />
                        </div>
                    </div>

                    {/* ── Branch Cards ─────────────────────────────────── */}
                    <div className="flex flex-col md:flex-row gap-8 w-full">
                        {branchLocations.map((loc) => (
                            <div key={loc.name} className="flex-1 bg-white rounded-3xl overflow-hidden shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] flex flex-col">
                                {/* Image */}
                                <div className="relative w-full h-[250px] md:h-[375px] shrink-0 overflow-hidden">
                                    <Image src={loc.img} alt={loc.name} fill className="object-cover" />
                                </div>
                                {/* Content */}
                                <div className="p-6 md:p-10 flex flex-col gap-6 flex-grow">
                                    <h3 className="text-[24px] md:text-[30px] font-normal text-[#0a0a0a]">{loc.name}</h3>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4 items-start text-[#364153]">
                                            <MapPin className="w-5 h-5 text-[#803144] mt-1 shrink-0" />
                                            <span className="text-[16px] whitespace-pre-line">{loc.address}</span>
                                        </div>
                                        <div className="flex gap-4 items-center text-[#364153]">
                                            <Phone className="w-5 h-5 text-[#803144] shrink-0" />
                                            <span className="text-[16px]">{loc.phone}</span>
                                        </div>
                                        <div className="flex gap-4 items-center text-[#364153]">
                                            <Mail className="w-5 h-5 text-[#803144] shrink-0" />
                                            <span className="text-[16px]">{loc.email}</span>
                                        </div>
                                    </div>
                                    <HoursBlock hours={loc.hours} />
                                    <DirectionsButton />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Map ──────────────────────────────────────────────────── */}
            <section className="w-full bg-white py-12">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 flex flex-col gap-8 md:gap-12">
                    <div className="text-center flex flex-col gap-4">
                        <h2 className="text-[28px] md:text-[36px] font-normal text-[#0a0a0a]">Find Us on the Map</h2>
                        <p className="text-[16px] md:text-[18px] text-[#4a5565]">All our locations across the city</p>
                    </div>
                    <div className="w-full h-[220px] md:h-[600px] bg-[#faf7f2] rounded-3xl border-2 border-[#e5e7eb] flex flex-col items-center justify-center shadow-inner">
                        <MapPin className="w-16 h-16 text-[#803144] mb-4" />
                        <span className="text-[18px] text-[#4a5565] font-medium">Interactive Map Coming Soon</span>
                        <span className="text-[14px] text-[#6a7282] mt-2">Click &quot;Get Directions&quot; on any location above</span>
                    </div>
                </div>
            </section>

            {/* ── Footer CTA ───────────────────────────────────────────── */}
            <section className="w-full py-16 md:py-20 bg-gradient-to-b from-[#803144] to-[#6B2838] flex flex-col items-center px-4 text-center">
                <h2 className="text-[32px] md:text-[48px] font-normal leading-tight text-white tracking-[0.35px]">
                    Can&apos;t Visit In Person?
                </h2>
                <p className="text-[18px] md:text-[20px] text-white/90 mt-6 max-w-xl">
                    Get our premium coffee delivered straight to your door
                </p>
                <button className="mt-10 px-10 py-4 bg-white hover:bg-gray-100 transition-colors rounded-full text-[#803144] text-[18px] font-medium shadow-lg">
                    Shop Online
                </button>
            </section>

        </div>
    );
}