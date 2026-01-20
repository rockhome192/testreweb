'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ServicesHero from '@/components/services/ServicesHero'
import { servicesData } from '@/data/servicesData'

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    // Extract slug from pathname: /services/[slug] -> [slug]
    const currentSlug = pathname.split('/').pop() || ''

    const categories = Object.values(servicesData)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Persistent */}
            <ServicesHero />

            {/* Category Tabs - Persistent */}
            <section className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto hide-scrollbar">
                        <div className="flex gap-2 py-4 min-w-max">
                            {categories.map((category) => {
                                const Icon = category.icon
                                const isActive = currentSlug === category.id
                                return (
                                    <Link
                                        key={category.id}
                                        href={`/services/${category.id}`}
                                        className={`
                                            flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap
                                            ${isActive
                                                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }
                                        `}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {category.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Page Content */}
            {children}

            <style jsx global>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}
