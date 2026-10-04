// components/Footer.js
'use client';

import Link from 'next/link';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsAppIcon from '@/components/icons/WhatsappIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import PinIcon from '@/components/icons/PinIcon';
import { brand, locations } from '@/data/menu';

export default function Footer() {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const top = section.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: 'Menu', href: 'menu' },
        { name: 'Adresses', href: 'adresses' },
        { name: 'À propos', href: 'apropos' },
        { name: 'Instagram', href: 'instagram' },
    ];

    return (
        <footer id="contact" className="relative bg-pablo-deep text-white pt-20 md:pt-28 pb-10 overflow-hidden">

            {/* ========== LAYERED BACKGROUND ========== */}
            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)',
                }}
            />
            {/* Teal glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-pablo-teal-light/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pablo-teal/20 rounded-full blur-3xl"></div>
            </div>
            {/* Watermark */}
            <div className="absolute inset-x-0 top-1/3 flex justify-center pointer-events-none select-none">
                <div className="text-[140px] md:text-[220px] lg:text-[280px] font-display font-bold text-white/[0.03] whitespace-nowrap leading-none">
                    Pablo
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

                {/* ============ TOP — BIG TAGLINE ============ */}
                <div className="pb-16 md:pb-20 border-b border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-px bg-white/40"></span>
                        <span className="text-[10px] tracking-widest2 uppercase text-white/60 font-medium">
                            Snack Pablo
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.05] tracking-[-0.02em] max-w-3xl">
                        Faim ? On s'occupe <span className="italic text-pablo-teal-light">du reste.</span>
                    </h2>
                </div>

                {/* ============ MIDDLE — COLUMNS ============ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 py-16">

                    {/* Column 1 — Brand */}
                    <div>
                        <h3 className="text-lg font-display font-bold text-white mb-4">
                            Snack <span className="text-pablo-teal-light">Pablo</span>
                        </h3>
                        <p className="text-sm font-light text-white/55 leading-relaxed mb-6 max-w-xs">
                            Fast food à Martil et Tétouan. Burgers, tacos, sandwichs,
                            pizza & naan — préparés à la minute.
                        </p>
                        <a
                            href={brand.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-xs tracking-widest2 uppercase font-medium text-white/60 hover:text-pablo-teal-light transition-colors"
                        >
                            <InstagramIcon className="w-4 h-4" />
                            Suivre sur Instagram
                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </div>

                    {/* Column 2 — Navigation */}
                    <div>
                        <h4 className="text-[10px] tracking-widest2 uppercase text-white/40 mb-5">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={`#${item.href}`}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className="text-sm font-light text-white/70 hover:text-pablo-teal-light transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Adresses */}
                    <div>
                        <h4 className="text-[10px] tracking-widest2 uppercase text-white/40 mb-5">
                            Adresses
                        </h4>
                        <ul className="space-y-4">
                            {locations.map((loc) => (
                                <li key={loc.id}>
                                    <p className="text-sm font-display text-white mb-1">
                                        {loc.city}
                                    </p>
                                    <p className="text-xs font-light text-white/50 leading-relaxed mb-2">
                                        {loc.address}
                                    </p>
                                    <a
                                        href={`tel:${loc.phoneLink}`}
                                        className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-pablo-teal-light transition-colors"
                                    >
                                        <PhoneIcon className="w-3 h-3" />
                                        {loc.phone}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Contact */}
                    <div>
                        <h4 className="text-[10px] tracking-widest2 uppercase text-white/40 mb-5">
                            Contact
                        </h4>

                        <a
                            href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-3 bg-white text-pablo-ink rounded-full text-[10px] tracking-widest2 uppercase font-medium hover:bg-pablo-cream transition-colors mb-6 shadow-lg shadow-black/20"
                        >
                            <WhatsAppIcon className="w-3.5 h-3.5" />
                            Commander
                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </a>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={locations[0].mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-pablo-teal-light transition-colors"
                                >
                                    <PinIcon className="w-4 h-4" />
                                    Itinéraire Martil
                                </a>
                            </li>
                            <li>
                                <a
                                    href={locations[1].mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-pablo-teal-light transition-colors"
                                >
                                    <PinIcon className="w-4 h-4" />
                                    Itinéraire Tétouan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ============ BOTTOM BAR ============ */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-light text-white/45">
                        © {new Date().getFullYear()} Snack Pablo. Tous droits réservés.
                    </p>
                    <p className="text-xs font-light text-white/35">
                        Site développé par{' '}
                        <a
                            href="https://instagram.com/mohamedtallal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-pablo-teal-light transition-colors"
                        >
                            @T4llal
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}