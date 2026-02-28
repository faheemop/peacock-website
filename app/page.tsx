"use client";

import Image from "next/image";
import BestSellersSlider from "@/components/BestSellersSlider";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PromoBanner {
  bgDesktop: string;
  bgMobile: string;
  badge?: string;
  heading: string;
  body: string;
  cta: string;
  ctaStyle: "dark" | "light" | "white";
  align: "left" | "right" | "center";
  overlay: string;
}

const promoBanners: PromoBanner[] = [
  {
    bgDesktop: "/images/subscribe-save.png",
    bgMobile: "/images/subscribe-save-mobile.png",
    badge: "Save 20%",
    heading: "Subscribe & Save",
    body: "Never run out of your favorite coffee. Get fresh beans delivered monthly.",
    cta: "Start Subscription",
    ctaStyle: "dark",
    align: "left",
    overlay: "bg-black/30",
  },
  {
    bgDesktop: "/images/perfect-brew.png",
    bgMobile: "/images/perfect-brew-mobile.png",
    heading: "Perfect Your Brew",
    body: "Learn professional brewing techniques from our expert baristas.",
    cta: "View Brewing Guide",
    ctaStyle: "dark",
    align: "right",
    overlay: "bg-black/40",
  },
  {
    bgDesktop: "/images/curated-gift.png",
    bgMobile: "/images/curated-gift-mobile.png",
    heading: "Curated Gift Sets",
    body: "Premium coffee collections beautifully packaged for any occasion.",
    cta: "Shop Gifts",
    ctaStyle: "white",
    align: "center",
    overlay: "bg-[#803144]/50",
  },
];

// Banner Component for Animation logic
function AnimatedBanner({ banner }: { banner: PromoBanner }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Inverse Movement: Scroll down par content aur images up (-60) aur scroll up par down (60)
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const alignClass =
    banner.align === "right"
      ? "justify-start md:justify-end px-6 md:pr-12 text-left md:text-right"
      : banner.align === "center"
        ? "justify-center text-center px-6"
        : "justify-start px-6 md:pl-12";

  return (
    <div
      ref={ref}
      className="h-[250px] md:h-[300px] w-full rounded-3xl relative overflow-hidden"
    >
      {/* ANIMATED BACKGROUND IMAGES AND OVERLAY */}
      <motion.div
        style={{ y: contentY }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%]"
      >
        <Image
          src={banner.bgDesktop}
          alt={banner.heading}
          fill
          className="object-cover hidden md:block"
        />
        <Image
          src={banner.bgMobile}
          alt={banner.heading}
          fill
          className="object-cover block md:hidden"
        />
        <div className={`absolute inset-0 ${banner.overlay}`} />
      </motion.div>

      {/* ANIMATED CONTENT LAYER */}
      <motion.div
        style={{ y: contentY }}
        className={`relative z-10 h-full flex items-center ${alignClass}`}
      >
        <div>
          {banner.badge && (
            <span className="bg-[#803144] text-white px-4 py-1 rounded-full text-sm mb-4 inline-block font-medium">
              {banner.badge}
            </span>
          )}
          <h2 className="text-white text-2xl md:text-4xl mb-3 md:mb-4 font-normal">{banner.heading}</h2>
          <p className="text-[#e5e7eb] text-base md:text-xl max-w-[550px] mb-4 md:mb-6 font-normal">{banner.body}</p>
          <button
            className={
              banner.ctaStyle === "white"
                ? "bg-white text-[#803144] px-8 md:px-10 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-transform hover:scale-105"
                : "bg-[#803144] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base transition-transform hover:scale-105"
            }
          >
            {banner.cta}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-start bg-[#faf7f2]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="w-full h-[400px] md:h-[550px] lg:h-[720px] 2xl:h-[850px] relative overflow-hidden">
          <Image
            src="/images/hero-banner.png"
            alt="Craft Coffee Delivered Fresh"
            fill
            priority
            className="object-cover hidden md:block"
          />
          <Image
            src="/images/hero-banner-mobile.png"
            alt="Craft Coffee Delivered Fresh"
            fill
            priority
            className="object-cover block md:hidden"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-[72px] 2xl:text-[84px] text-white leading-tight font-normal">
                Craft Coffee, <br /> Delivered Fresh
              </h1>
              <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#e5e7eb] mt-4 md:mt-6 max-w-[614px] 2xl:max-w-[750px] mx-auto font-normal">
                Discover exceptional single-origin beans roasted to perfection. Elevate your daily ritual with our premium coffee selection.
              </p>
              <button className="mt-6 md:mt-8 px-8 md:px-10 py-3 md:py-4 bg-[#803144] text-white rounded-full text-[14px] md:text-[16px] 2xl:text-[18px] hover:bg-[#6a2b3c] transition-colors font-normal">
                Explore Collection
              </button>
            </div>
          </div>
        </section>

        <BestSellersSlider />

        {/* ── Promo Banners With Inverse Scroll Animation ────────── */}
        <div className="w-full bg-[#faf7f2] pb-12 md:pb-20">
          <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 flex flex-col gap-6 md:gap-8">
            {promoBanners.map((banner, i) => (
              <AnimatedBanner key={i} banner={banner} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}