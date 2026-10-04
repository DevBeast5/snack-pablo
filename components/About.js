// components/About.js
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
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

    const stats = [
        { value: '48.7K', label: 'Sur Instagram' },
        { value: '2', label: 'Adresses' },
        { value: '7j/7', label: 'Ouvert' },
    ];

    return (
        <section id="apropos" className="relative py-14 md:py-20 bg-pablo-deep overflow-hidden">
            {/* Background layers */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
                }}
            />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pablo-teal-light/12 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pablo-teal/18 rounded-full blur-3xl" />
            </div>

            <div
                ref={sectionRef}
                className="max-w-6xl mx-auto px-6 md:px-10 relative opacity-0 translate-y-8 transition-all duration-1000"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                    {/* ============ LEFT — Image ============ */}
                    <div className="relative">
                        {/* Teal blob behind */}
                        <div className="absolute -inset-2 md:-inset-3 bg-pablo-teal-light/12 rounded-[2rem] -rotate-2" />

                        <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1000&h=1200&fit=crop"
                                alt="Snack Pablo en cuisine"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />

                            {/* Bottom gradient + caption */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <span className="text-[10px] tracking-widest2 uppercase text-white/60 block mb-1">
                                    Fait maison
                                </span>
                                <p className="text-base font-display font-normal leading-tight">
                                    Frais, généreux, préparé à la minute.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ============ RIGHT — Text ============ */}
                    <div className="text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-px bg-white/40" />
                            <span className="text-[10px] tracking-widest2 uppercase text-white/60 font-medium">
                                À Propos
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.05] tracking-[-0.02em] mb-5">
                            Le snack <br />
                            <span className="italic text-pablo-teal-light">qui rassemble.</span>
                        </h2>

                        <div className="w-10 h-px bg-white/20 mb-5" />

                        <p className="text-sm md:text-base font-light text-white/70 leading-relaxed mb-4">
                            Chez <span className="text-white font-medium">Snack Pablo</span>, on ne fait pas
                            juste à manger — on fait plaisir. Des recettes pensées pour être
                            partagées, un service rapide, et un goût qui reste.
                        </p>

                        <p className="text-sm font-light text-white/55 leading-relaxed mb-7">
                            Deux adresses pour vous accueillir — à Martil et à Tétouan —
                            toujours la même envie : vous servir le meilleur.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/15">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-2xl md:text-3xl font-display font-bold text-pablo-teal-light leading-none mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-[9px] tracking-widest2 uppercase text-white/50">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}