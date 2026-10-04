// components/Hero.js
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import WhatsAppIcon from '@/components/icons/WhatsappIcon';
import { brand, menu } from '@/data/menu';

const marqueeItems = [
    '48.7K SUR INSTAGRAM',
    'FAIT MAISON',
    'OUVERT 7J/7',
    'COMMANDE EN LIGNE',
    'MARTIL · TÉTOUAN',
    'PRODUITS FRAIS',
];

export default function Hero() {
    const contentRef = useRef(null);

    const popularDishes = menu.filter((d) => d.popular).slice(0, 3);
    const previewDishes = popularDishes.length === 3 ? popularDishes : menu.slice(0, 3);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-6');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (contentRef.current) observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, []);

    const scrollToMenu = (e) => {
        e.preventDefault();
        const section = document.getElementById('menu');
        if (section) {
            const top = section.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="top"
            className="relative min-h-screen flex flex-col overflow-hidden bg-pablo-deep sticky top-0 z-0"
        >
            {/* ============ FULL-BLEED BACKGROUND ============ */}
            <div className="absolute inset-0 z-0">

                {/* Mobile — portrait crop */}
                <div className="absolute inset-0 md:hidden">
                    <Image
                        src="/images/hero-dish-mobile.jpg"
                        alt="Snack Pablo signature dish"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 40%' }}
                    />
                </div>

                {/* Desktop — landscape crop */}
                <div className="absolute inset-0 hidden md:block">
                    <Image
                        src="/images/hero-dish.jpg"
                        alt="Snack Pablo signature dish"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                        style={{ objectPosition: '50% center' }}
                    />
                </div>

                {/* Vignette */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.85) 100%)',
                    }}
                />

                {/* Sweet-spot glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(ellipse 45% 45% at 55% 50%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)',
                    }}
                />

                {/* Left darkening */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Top fade */}
                <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/45 to-transparent" />

                {/* Teal tint */}
                <div className="absolute inset-0 bg-pablo-deep/20 mix-blend-multiply" />
            </div>

            {/* ============ MAIN CONTENT ============ */}
            <div
                ref={contentRef}
                className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-6 opacity-0 translate-y-6 transition-all duration-1000"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[58vh]">

                    {/* ============ LEFT — Text ============ */}
                    <div className="lg:col-span-7">
                        {/* Top mini-bar */}
                        <div className="flex items-center gap-3 mb-7 md:mb-9">
                            <span className="w-8 h-px bg-white/40" />
                            <span className="text-[10px] tracking-widest2 uppercase text-white/60 font-medium">
                                Martil · Tétouan
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="text-white mb-7">
                            <h1 className="font-display font-normal text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[0.98] tracking-[-0.02em]">
                                <span className="block">Le goût</span>
                                <span className="block pl-[8%] md:pl-[10%]">
                                    du <span className="italic">vrai</span>
                                </span>
                                <span className="block pl-[2%] md:pl-[3%]">snack.</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base font-light text-white/75 max-w-md leading-relaxed mb-7">
                            Burgers, tacos, sandwichs, pizza & naan — préparés à la minute.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-pablo-ink rounded-full text-[11px] tracking-widest2 uppercase font-semibold hover:bg-pablo-cream transition-all hover:-translate-y-0.5"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                Commander
                                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </a>

                            <a
                                href="#menu"
                                onClick={scrollToMenu}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded-full text-[11px] tracking-widest2 uppercase font-medium hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
                            >
                                Voir le menu
                            </a>
                        </div>
                    </div>

                    {/* ============ RIGHT — Menu Preview Card ============ */}
                    {/* Anchored to the bottom-right, bleeding outside the container on desktop */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end items-end mt-8 lg:mt-0 lg:pb-8 lg:mr-[-2.5rem] xl:mr-[-5rem]">
                        <div className="w-full max-w-[340px] lg:max-w-[380px] rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/50 rotate-[2deg] hover:rotate-0 transition-transform duration-500 bg-pablo-deep/55 backdrop-blur-2xl border border-white/15">

                            {/* Card header */}
                            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
                                <span className="text-[10px] tracking-widest2 uppercase text-white/60 font-semibold">
                                    Nos best-sellers
                                </span>
                                <span className="flex items-center gap-1.5 text-[9px] tracking-widest2 uppercase text-pablo-teal-light font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-pablo-teal-light animate-pulse" />
                                    Populaire
                                </span>
                            </div>

                            {/* Dish rows — 3-column grid for perfect alignment */}
                            <div className="p-2">
                                {previewDishes.map((dish) => (
                                    <a
                                        key={dish.id}
                                        href={`https://wa.me/${brand.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Salam, bghit ncommandi: ${dish.name} 🍔`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/15">
                                            <Image
                                                src={dish.image}
                                                alt={dish.name}
                                                fill
                                                sizes="96px"
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Name + price */}
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-white leading-tight truncate">
                                                {dish.name}
                                            </p>
                                            <p className="text-[10px] tracking-widest2 uppercase text-pablo-teal-light font-semibold leading-tight mt-0.5">
                                                {dish.price} DH
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        <span className="text-pablo-teal-light text-sm font-bold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                                            →
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Footer CTA */}
                            <a
                                href="#menu"
                                onClick={scrollToMenu}
                                className="group flex items-center justify-between w-full px-5 py-3.5 border-t border-white/10 text-[10px] tracking-widest2 uppercase font-semibold text-white hover:bg-white/5 transition-colors"
                            >
                                Voir le menu complet
                                <span className="text-pablo-teal-light inline-block transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============ FULL-WIDTH MARQUEE ============ */}
            <div className="relative z-10 border-t border-white/15 overflow-hidden py-4 bg-black/20 backdrop-blur-sm">
                <div className="flex gap-10 animate-hero-marquee whitespace-nowrap w-max">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 flex-shrink-0">
                            <span className="w-1 h-1 rounded-full bg-pablo-teal" />
                            <span className="text-[10px] tracking-widest2 uppercase text-white/65 font-medium">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}