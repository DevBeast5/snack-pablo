// components/Header.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import WhatsAppIcon from '@/components/Icons/WhatsappIcon';
import { brand } from '@/data/menu';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const offset = 100;
            const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navItems = [
        { name: 'Menu', href: 'menu' },
        { name: 'Adresses', href: 'adresses' },
        { name: 'À propos', href: 'apropos' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <>
            {/* Floating pill header — teal, glassy */}
            <header className="fixed top-3 md:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <div
                    className={`pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-500 ${
                        isScrolled || isMenuOpen
                            ? 'bg-pablo-deep/40 backdrop-blur-2xl shadow-lg shadow-black/20 border border-white/15'
                            : 'bg-pablo-deep/25 backdrop-blur-xl border border-white/10'
                    }`}
                >
                    <div className="px-4 md:px-6">
                        <div className="flex items-center justify-between h-14 md:h-16">

                            {/* Logo */}
                            <a
                                href="#top"
                                onClick={(e) => scrollToSection(e, 'top')}
                                className="relative z-50 flex items-center h-8 md:h-10"
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="Snack Pablo"
                                    width={120}
                                    height={40}
                                    className="h-full w-auto object-contain"
                                    priority
                                />
                            </a>

                            {/* Desktop nav */}
                            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={`#${item.href}`}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className="text-xs tracking-widest2 uppercase font-medium text-white/75 hover:text-white transition-colors leading-none"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>

                            {/* Desktop CTA */}
                            <a
                                href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white text-pablo-teal rounded-full text-[10px] tracking-widest2 uppercase font-semibold hover:bg-pablo-cream transition-colors leading-none"
                            >
                                <WhatsAppIcon className="w-3.5 h-3.5" />
                                Commander
                            </a>

                            {/* Mobile hamburger — white on teal */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden w-6 h-6 flex flex-col justify-center items-end gap-1.5 relative z-50"
                                aria-label="Menu"
                            >
                                <span className={`h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                                <span className={`h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
                                <span className={`h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu — teal full screen */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-pablo-teal transition-all duration-500 ${
                    isMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="h-full flex flex-col justify-between px-6 pt-24 pb-8">
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item, i) => (
                            <a
                                key={item.name}
                                href={`#${item.href}`}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="py-4 border-b border-white/15 text-2xl font-display font-normal text-white hover:text-pablo-cream transition-colors"
                                style={{
                                    transitionDelay: isMenuOpen ? `${i * 50}ms` : '0ms'
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-4 mb-4">
                        <a
                            href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-pablo-teal rounded-full text-xs tracking-widest2 uppercase font-semibold hover:bg-pablo-cream transition-colors"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            Commander sur WhatsApp
                        </a>
                        <p className="text-center text-[10px] tracking-widest2 uppercase text-white/50">
                            Martil · Tétouan
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}