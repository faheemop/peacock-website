"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Visit Us", href: "/visit" },
    { label: "About", href: "#" },
    { label: "Subscription", href: "#" },
    { label: "Contact", href: "#" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Scroll lock
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <>
            {/* ════════════════════ HEADER BAR ════════════════════ */}
            <header className="w-full bg-[#faf7f2] border-b border-[#e5e7eb] sticky top-0 z-[400]">
                <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="text-[24px] font-semibold text-[#803144] tracking-tight shrink-0">
                        Peacock
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                                className={`text-[16px] font-normal transition-colors ${pathname === link.href
                                    ? "text-[#803144]"
                                    : "text-[#364153] hover:text-[#803144]"
                                    }`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Cart */}
                    <div className="w-[40px] h-[40px] relative hidden md:flex items-center justify-center">
                        <div style={{ position: 'relative', display: 'inline-flex' }}>
                            <ShoppingCart size={22} className="text-[#803144]" />
                            <span style={{
                                position: 'absolute', top: 0, right: 0,
                                transform: 'translate(50%, -50%)',
                                width: 17, height: 17,
                                backgroundColor: '#803144', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', lineHeight: 1 }}>3</span>
                            </span>
                        </div>
                    </div>

                    {/* Mobile: Cart + Hamburger */}
                    <div className="flex md:hidden items-center gap-1">
                        {/* Mobile Cart */}
                        <div className="w-10 h-10 flex items-center justify-center">
                            <div style={{ position: 'relative', display: 'inline-flex' }}>
                                <ShoppingCart size={22} className="text-[#803144]" />
                                <span style={{
                                    position: 'absolute', top: 0, right: 0,
                                    transform: 'translate(50%, -50%)',
                                    width: 17, height: 17,
                                    backgroundColor: '#803144', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', lineHeight: 1 }}>3</span>
                                </span>
                            </div>
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                            className="w-10 h-10 flex items-center justify-center text-[#803144]"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ════════════════════ BACKDROP ════════════════════
                Clicking backdrop closes the drawer
            ══════════════════════════════════════════════════ */}
            <div
                aria-hidden="true"
                onClick={() => setOpen(false)}
                style={{
                    position: 'fixed', inset: 0,
                    zIndex: 998,
                    backgroundColor: 'rgba(0,0,0,0.45)',
                    transition: 'opacity 0.35s ease',
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? 'auto' : 'none',
                }}
            />

            {/* ════════════════════ SIDE DRAWER ════════════════════ */}
            <div
                role="dialog"
                aria-modal="true"
                style={{
                    position: 'fixed',
                    top: 0, right: 0,
                    height: '100dvh',
                    width: '65%',
                    maxWidth: '380px',
                    zIndex: 999,
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: open ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s ease',
                    boxShadow: '-2px 0 20px rgba(0,0,0,0.12)',
                }}
                className="md:hidden"
            >
                {/* Top bar: X close button — right */}
                <div style={{ padding: '18px 20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#803144' }}
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Nav Links — with separator lines */}
                <nav style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    padding: '16px 24px',
                                    borderBottom: '1px solid #f0f0f0',
                                    textDecoration: 'none',
                                    color: active ? '#803144' : '#364153',
                                    fontWeight: active ? 600 : 400,
                                    fontSize: '1rem',
                                    transition: 'color 0.2s',
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}

