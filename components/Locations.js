// components/Locations.js
'use client';

import { useEffect, useRef } from 'react';
import PhoneIcon from '@/components/Icons/PhoneIcon';
import PinIcon from '@/components/Icons/PinIcon';
import WhatsAppIcon from '@/components/Icons/WhatsappIcon';
import { locations } from '@/data/menu';

export default function Locations() {
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

    return (
        <section id="adresses" className="relative py-20 md:py-32 bg-pablo-deep overflow-hidden">
            {/* ========== LAYERED BACKGROUND ========== */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)',
                }}
            />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pablo-teal-light/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pablo-teal/20 rounded-full blur-3xl"></div>
            </div>
            {/* Watermark */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none">
                <div className="text-[140px] md:text-[220px] lg:text-[280px] font-display font-bold text-white/[0.03] whitespace-nowrap leading-none">
                    Adresses
                </div>
            </div>

            <div
                ref={sectionRef}
                className="max-w-7xl mx-auto px-6 md:px-10 relative opacity-0 translate-y-8 transition-all duration-1000"
            >
                {/* ========== HEADER ========== */}
                <div className="mb-14 md:mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-px bg-white/40"></span>
                        <span className="text-[10px] tracking-widest2 uppercase text-white/60 font-medium">
                            Nous Trouver
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8 text-white">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.02] tracking-[-0.02em]">
                                Deux adresses, <br />
                                <span className="italic text-pablo-teal-light">même goût.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 lg:pb-3">
                            <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                                Ouvert 7j/7 — sur place, à emporter, ou via WhatsApp.
                                Choisissez l'adresse la plus proche.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ========== LOCATIONS — glass cards ============ */}
                <div className="space-y-6 md:space-y-8">
                    {locations.map((loc, index) => (
                        <div
                            key={loc.id}
                            className="group relative rounded-[2rem] overflow-hidden border border-white/10 hover:border-pablo-teal-light/30 transition-all duration-700 bg-white/[0.03] backdrop-blur-sm"
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-12 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

                                {/* Map side */}
                                <div className="lg:col-span-7 relative h-[280px] md:h-[380px] lg:h-auto lg:min-h-[440px] overflow-hidden bg-pablo-ink/20">
                                    <iframe
                                        src={loc.mapEmbed}
                                        className="w-full h-full grayscale-[55%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-1000"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Map of ${loc.city}`}
                                    />

                                    {/* Subtle gradient on the edges of the map */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-pablo-deep/40 via-transparent to-transparent" />

                                    {/* City tag */}
                                    <div className="absolute bottom-5 right-5 bg-pablo-deep/70 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-pablo-teal-light animate-pulse"></span>
                                        <span className="text-[10px] tracking-widest2 uppercase text-white font-medium">
                                            {String(index + 1).padStart(2, '0')} · {loc.city}
                                        </span>
                                    </div>
                                </div>

                                {/* Info side */}
                                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center text-white">

                                    {/* Number */}
                                    <span className="text-[10px] tracking-widest2 uppercase text-white/40 font-mono mb-6 block">
                                        Adresse {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* City */}
                                    <h3 className="text-4xl md:text-5xl font-display font-normal leading-[1] tracking-[-0.02em] mb-3">
                                        {loc.city}
                                    </h3>

                                    <p className="text-sm font-light text-white/55 mb-8 leading-relaxed">
                                        {loc.address}
                                    </p>

                                    {/* Divider */}
                                    <div className="w-12 h-px bg-white/20 mb-8"></div>

                                    {/* Phone */}
                                    <a
                                        href={`tel:${loc.phoneLink}`}
                                        className="flex items-center gap-4 group/row mb-10"
                                    >
                                        <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 group-hover/row:bg-pablo-teal-light group-hover/row:text-pablo-ink transition-all duration-300 border border-white/10">
                                            <PhoneIcon className="w-4 h-4" />
                                        </span>
                                        <span className="text-sm font-light text-white/70 group-hover/row:text-white transition-colors">
                                            {loc.phone}
                                        </span>
                                    </a>

                                    {/* CTAs */}
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={`https://wa.me/${loc.phoneLink.replace('+', '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn inline-flex items-center gap-2 px-6 py-3.5 bg-white text-pablo-ink rounded-full text-[10px] tracking-widest2 uppercase font-medium hover:bg-pablo-cream transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20"
                                        >
                                            <WhatsAppIcon className="w-3.5 h-3.5" />
                                            Commander
                                            <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                                        </a>
                                        <a
                                            href={loc.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/25 text-white rounded-full text-[10px] tracking-widest2 uppercase font-medium hover:border-white/60 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <PinIcon className="w-3.5 h-3.5" />
                                            Itinéraire
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}