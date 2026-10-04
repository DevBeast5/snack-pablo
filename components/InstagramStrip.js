// components/InstagramStrip.js
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { brand } from '@/data/menu';

const posts = [
    { id: 1,  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop' },
    { id: 2,  image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop' },
    { id: 3,  image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=600&fit=crop' },
    { id: 4,  image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=600&fit=crop' },
    { id: 5,  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop' },
    { id: 6,  image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=600&fit=crop' },
    { id: 7,  image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop' },
    { id: 8,  image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=600&fit=crop' },
    { id: 9,  image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=600&fit=crop' },
    { id: 10, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=600&fit=crop' },
    { id: 11, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=600&fit=crop' },
    { id: 12, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&h=600&fit=crop' },
];

export default function InstagramStrip() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [angle, setAngle] = useState(0);

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

    // Auto-rotate the cylinder
    useEffect(() => {
        let raf;
        let last = performance.now();
        const speed = 6; // degrees per second — lower = slower

        const tick = (now) => {
            const dt = (now - last) / 1000;
            last = now;
            setAngle((a) => (a - speed * dt) % 360);
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    // Geometry
    const CARD_W = 200;                 // card width in px (desktop)
    const CARD_H = 200;                 // card height
    const RADIUS = 420;                 // cylinder radius
    const TOTAL = posts.length;
    const stepAngle = 360 / TOTAL;      // angle between cards

    return (
        <section
            id="instagram"
            className="relative py-12 md:py-16 bg-pablo-deep overflow-hidden"
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
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pablo-teal-light/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pablo-teal/20 rounded-full blur-3xl" />
            </div>

            <div
                ref={sectionRef}
                className="relative opacity-0 translate-y-8 transition-all duration-1000"
            >
                {/* ========== HEADER ========== */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8 md:mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-pablo-teal-light" />
                        <span className="text-[10px] tracking-widest2 uppercase text-pablo-teal-light font-semibold">
                            @{brand.instagram.split('/').pop()}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
                        <div className="lg:col-span-8">
                            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-[-0.02em] text-white">
                                Sur <span className="italic text-pablo-teal-light">Instagram.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 lg:pb-1">
                            <p className="text-white/65 font-light text-xs md:text-sm leading-relaxed">
                                Nos dernières créations, nos coulisses, et les nouveautés — en direct.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ========== 3D CYLINDER CAROUSEL ========== */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{ height: '320px' }}
                >
                    {/* Scene with perspective */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            perspective: '1200px',
                            perspectiveOrigin: '50% 50%',
                        }}
                    >
                        {/* Rotating track */}
                        <div
                            ref={trackRef}
                            className="relative"
                            style={{
                                width: `${CARD_W}px`,
                                height: `${CARD_H}px`,
                                transformStyle: 'preserve-3d',
                                transform: `translateZ(-${RADIUS}px) rotateY(${angle}deg)`,
                            }}
                        >
                            {posts.map((post, i) => {
                                const cardAngle = i * stepAngle;
                                return (
                                    <a
                                        key={post.id}
                                        href={brand.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group absolute top-0 left-0"
                                        style={{
                                            width: `${CARD_W}px`,
                                            height: `${CARD_H}px`,
                                            transformStyle: 'preserve-3d',
                                            transform: `rotateY(${cardAngle}deg) translateZ(${RADIUS}px)`,
                                        }}
                                    >
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-pablo-teal-light/40 transition-colors duration-500">
                                            <Image
                                                src={post.image}
                                                alt="Instagram post"
                                                fill
                                                sizes="200px"
                                                className="object-cover"
                                            />

                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-pablo-deep/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                <InstagramIcon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Subtle vignette on the edges so cards fade out */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-52 bg-gradient-to-r from-pablo-deep via-pablo-deep/80 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-52 bg-gradient-to-l from-pablo-deep via-pablo-deep/80 to-transparent pointer-events-none" />
                </div>

                {/* ========== BOTTOM CTA — compact ========== */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 md:mt-12">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                        <div>
                            <p className="text-[10px] tracking-widest2 uppercase text-pablo-teal-light font-semibold mb-1.5">
                                Rejoignez-nous
                            </p>
                            <h3 className="font-display font-medium text-lg md:text-xl leading-tight tracking-[-0.01em] text-white">
                                Suivez le quotidien <span className="italic text-pablo-teal-light">Pablo.</span>
                            </h3>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0">
                            <a
                                href={brand.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-between gap-3 px-5 py-2.5 bg-white text-pablo-ink rounded-xl text-[10px] tracking-widest2 uppercase font-semibold hover:bg-pablo-cream transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span className="inline-flex items-center gap-2">
                                    <InstagramIcon className="w-3.5 h-3.5" />
                                    Suivre
                                </span>
                                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </a>

                            <div className="inline-flex items-center justify-between gap-3 px-5 py-2.5 border border-white/15 text-white rounded-xl text-[10px] tracking-widest2 uppercase font-medium">
                                <span className="text-white/50">Abonnés</span>
                                <span className="text-pablo-teal-light font-bold">48.7K</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-[10px] tracking-widest2 uppercase text-white/35 mt-4">
                        Posts quotidiens · Reels · Stories
                    </p>
                </div>
            </div>
        </section>
    );
}