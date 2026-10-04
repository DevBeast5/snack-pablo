// components/MenuPreview.js
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import WhatsAppIcon from '@/components/icons/WhatsappIcon';
import ArrowIcon from '@/components/Icons/ArrowIcon';
import { categories, menu, brand } from '@/data/menu';

export default function MenuPreview() {
    const [activeCategory, setActiveCategory] = useState('all');
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const filteredMenu =
        activeCategory === 'all'
            ? menu
            : menu.filter((item) => item.category === activeCategory);

    const orderLink = (dishName) => {
        const message = encodeURIComponent(`Salam, bghit ncommandi: ${dishName} 🍔`);
        return `https://wa.me/${brand.whatsapp.replace('+', '')}?text=${message}`;
    };

    const categoryCount = (id) =>
        id === 'all' ? menu.length : menu.filter((c) => c.category === id).length;

    return (
        <section
            id="menu"
            className="relative py-14 md:py-20 bg-pablo-deep overflow-hidden"
        >
            {/* Background layers */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 75% 55% at 50% 35%, rgba(34,165,170,0.15) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6) 100%)',
                }}
            />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pablo-teal-light/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pablo-teal/20 rounded-full blur-3xl" />
            </div>

            <div
                ref={sectionRef}
                className="relative opacity-0 translate-y-8 transition-all duration-1000 max-w-7xl mx-auto px-6 md:px-10"
            >
                {/* ========== HEADER ========== */}
                <div className="mb-8 md:mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-pablo-teal-light" />
                        <span className="text-[10px] tracking-widest2 uppercase text-pablo-teal-light font-semibold">
                            Notre Carte
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
                        <div className="lg:col-span-8">
                            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-[-0.02em] text-white">
                                Ce qu'on <br />
                                <span className="italic text-pablo-teal-light">prépare.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 lg:pb-1">
                            <p className="text-white/65 font-light text-xs md:text-sm leading-relaxed">
                                Tout est préparé à la minute — choisissez, on s'occupe du reste.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ========== TABS — with counts ========== */}
                <div className="mb-6 md:mb-8">
                    <div className="h-px bg-white/10 mb-5" />

                    <div className="flex flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-3">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className="group relative inline-flex items-center gap-2 py-1 transition-colors duration-300"
                                >
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                            isActive
                                                ? 'bg-pablo-teal-light scale-100 shadow-[0_0_10px_rgba(34,165,170,0.6)]'
                                                : 'bg-white/20 scale-75 group-hover:scale-100 group-hover:bg-white/45'
                                        }`}
                                    />
                                    <span
                                        className={`text-[11px] tracking-widest2 uppercase font-semibold transition-colors duration-300 ${
                                            isActive
                                                ? 'text-white'
                                                : 'text-white/40 group-hover:text-white/75'
                                        }`}
                                    >
                                        {cat.label}
                                    </span>
                                    <span
                                        className={`text-[9px] font-medium transition-colors ${
                                            isActive ? 'text-pablo-teal-light' : 'text-white/25'
                                        }`}
                                    >
                                        {categoryCount(cat.id)}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ========== DISH GRID ========== */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
                    {filteredMenu.map((dish) => (
                        <a
                            key={dish.id}
                            href={orderLink(dish.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-pablo-teal-light/40 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                                />

                                {/* Dark gradient for text legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                {/* Popular tag */}
                                {dish.popular && (
                                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-pablo-teal-light text-pablo-ink text-[9px] tracking-widest2 uppercase font-bold px-2.5 py-1 rounded-full">
                                        <span className="w-1 h-1 rounded-full bg-pablo-ink" />
                                        Populaire
                                    </div>
                                )}

                                {/* Commander pill — slides up on hover */}
                                <div
                                    className={`absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white text-pablo-ink text-[9px] tracking-widest2 uppercase font-bold px-3 py-1.5 rounded-full transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0`}
                                >
                                    <WhatsAppIcon className="w-3 h-3" />
                                    Commander
                                </div>
                            </div>

                            {/* Text overlay — bottom of card */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-sm md:text-base font-display font-medium text-white leading-tight mb-0.5 group-hover:text-pablo-teal-light transition-colors">
                                    {dish.name}
                                </h3>
                                <p className="text-[10px] md:text-xs font-light text-white/60 leading-relaxed line-clamp-1 mb-2">
                                    {dish.description}
                                </p>
                                <p className="text-sm md:text-base font-display font-bold text-pablo-teal-light">
                                    {dish.price}
                                    <span className="text-[10px] font-medium text-white/50 ml-1">DH</span>
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* ========== BOTTOM CTA — compact ========== */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                        <p className="text-[10px] tracking-widest2 uppercase text-pablo-teal-light font-semibold mb-1.5">
                            Une envie soudaine ?
                        </p>
                        <h3 className="font-display font-medium text-lg md:text-xl leading-tight tracking-[-0.01em] text-white">
                            Il ne reste plus qu'à <span className="italic text-pablo-teal-light">commander.</span>
                        </h3>
                    </div>

                    <a
                        href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between gap-3 px-5 py-2.5 bg-white text-pablo-ink rounded-xl text-[10px] tracking-widest2 uppercase font-semibold hover:bg-pablo-cream transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
                    >
                        <span className="inline-flex items-center gap-2">
                            <WhatsAppIcon className="w-3.5 h-3.5" />
                            Commander
                        </span>
                        <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}