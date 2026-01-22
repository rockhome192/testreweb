'use client'

import React from 'react'
import Image from 'next/image'

export default function ServicesHero() {
    return (
        <section className="relative h-[400px] md:h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-service.jpg"
                    alt="Services Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
            </div>

            {/* Optional: Glowing Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

            {/* Centered Content */}
            <div className="relative h-full flex items-center justify-center">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-white z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                            INSIGHT TO INVEST
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-blue-100/100 max-w-3xl mx-auto leading-relaxed">
                            เข้าถึงทุกโอกาสการลงทุนอย่างชัดเจน
                        </p>
                    </div>
                </div>
            </div>

            {/* Optional: Scroll Indicator */}
            {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div> */}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
            `}</style>
        </section>
    )
}