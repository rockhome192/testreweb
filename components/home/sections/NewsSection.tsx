'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

import { MOCK_NEWS } from '@/data/newsData'

export default function NewsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        ประกาศและข่าวสาร
                    </h2>
                    <Link
                        href="/news"
                        className="text-gray-500 hover:text-red-600 transition-colors text-sm font-medium mb-1"
                    >
                        See more
                    </Link>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {MOCK_NEWS.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                {/* 
                     NOTE: Using generic placeholder images for now. 
                     In a real app, these would be from the CMS/API.
                 */}
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay gradient for text readability if text were on image, but here design has text below */}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                                    {item.title}
                                </h3>
                                {/* Optional: Description if needed, but screenshot mainly showed title */}
                                {/* <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p> */}

                                <div className="flex items-center text-gray-400 text-xs mt-4">
                                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
