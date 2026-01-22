'use client'

import React from 'react'
import { Wallet, Building2, TrendingUp, FileText, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesSection() {
    const services = [
        {
            title: 'ซื้อขายหลักทรัพย์และอนุพันธ์',
            description: 'สมาชิก SET หมายเลข 22 ให้บริการเทรดหุ้นไทย (SET/mai) และ TFEX พร้อมระบบเทคโนโลยีการส่งคำสั่งที่รวดเร็วและแม่นยำ',
            icon: Wallet,
            href: '/services/brokerage',
            color: 'text-red-600',
            bg: 'bg-gradient-to-br from-red-50 to-red-100',
            hasImage: true,
            imageType: 'phone'
        },
        {
            title: 'บริหารความมั่งคั่ง',
            description: 'กองทุนส่วนบุคคล (Private Fund) และกองทุนรวม (Mutual Funds) จากหลากหลาย บลจ. ชั้นนำ',
            icon: Building2,
            color: 'text-red-600',
            bg: 'bg-gradient-to-br from-red-50 to-orange-50',
            hasImage: true,
            imageType: 'phone'
        },
        {
            title: 'กองทุนส่วนบุคคล',
            description: 'เชี่ยวชาญกว่า 20 ปี ในการบริหารพอร์ตแบบเฉพาะตัว พร้อมกองทุนยอดนิยมอย่าง SSI-SCA (กองทุนเวียดนาม) ที่คัดสรรมาเพื่อลูกค้าทรีนีตี้โดยเฉพาะ',
            icon: TrendingUp,
            color: 'text-red-600',
            bg: 'bg-gray-50',
            hasImage: false
        },
        {
            title: 'ตราสารหนี้',
            description: 'คัดสรรหุ้นกู้คุณภาพและพันธบัตร รวมถึงการเป็นผู้แทนผู้ถือหุ้นกู้ที่ได้รับความไว้วางใจมาอย่างยาวนาน',
            icon: FileText,
            color: 'text-red-600',
            bg: 'bg-gray-50',
            hasImage: false
        },
        {
            title: 'จองซื้อหุ้นสามัญเพิ่มทุน',
            description: 'สะดวก รวดเร็ว ผ่านระบบออนไลน์ ช่วยให้นักลงทุนไม่พลาดสิทธิในการบริหารจัดการสัดส่วนการถือหุ้นและการใช้สิทธิจองซื้อหุ้นใหม่',
            icon: Shield,
            color: 'text-red-600',
            bg: 'bg-gray-50',
            hasImage: false
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        บริการของเราสำหรับ
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        นักลงทุน <span className="text-red-600">Trinity</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {services.slice(0, 2).map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                        >
                            <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed relative z-10">
                                {service.description}
                            </p>

                            {service.hasImage && (
                                <div className="mt-6 relative h-64 flex items-center justify-center">
                                    {/* Phone mockup with actual image */}
                                    <div className="relative w-48 h-full">
                                        <Image
                                            src={index === 0 ? '/phone.png' : '/phone.png'}
                                            alt={service.title}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            onError={(e) => {
                                                // Fallback to placeholder if image not found
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                        {/* Fallback placeholder mockups */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20 -z-10">
                                            <div className="w-32 h-56 bg-gray-200 rounded-3xl transform -rotate-12"></div>
                                            <div className="w-32 h-56 bg-gray-300 rounded-3xl transform rotate-12 -ml-16"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.slice(2).map((service, index) => (
                        <div
                            key={index + 2}
                            className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                        >
                            <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-12 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Decorative triangles */}
                            <div className="absolute bottom-6 right-6 flex gap-2">
                                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[52px] border-b-red-200 border-r-[30px] border-r-transparent transform rotate-180"></div>
                                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[52px] border-b-red-300 border-r-[30px] border-r-transparent transform rotate-180"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}