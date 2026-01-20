'use client'

import React from 'react'
import { BarChart2, Briefcase, FileText, LineChart, PieChart, TrendingUp } from 'lucide-react'

export default function WhyTrinity() {
    const features = [
        {
            title: 'สถาบันการเงินที่มั่นคง',
            description: 'มีรากฐานทางการเงินที่แข็งแกร่งและชำระเต็มจำนวนเพื่อความมั่นใจ',
            icon: BarChart2
        },
        {
            title: 'ประสบการณ์กว่า 26 ปี',
            description: 'ให้บริการอย่างมั่นคงและโปร่งใสเคียงข้างนักลงทุนไทยตั้งแต่ปี 2542',
            icon: LineChart
        },
        {
            title: 'ผู้นำด้านกองทุนส่วนบุคคล',
            description: 'เชี่ยวชาญการบริหารพอร์ตระดับสูงด้วยใบอนุญาตยาวนานเกิน 20 ปี',
            icon: Briefcase
        },
        {
            title: 'บริษัทสมาชิก SET อันดับ 22',
            description: 'หนึ่งในสมาชิกผู้ร่วมบุกเบิกตลาดหลักทรัพย์แห่งประเทศไทย',
            icon: TrendingUp
        },
        {
            title: 'CG Score ระดับ 5 ดาว',
            description: 'ได้รับการจัดอันดับบรรษัทภิยบาลดีเลิศจากสมาคมส่งเสริมสถาบันกรรมการบริษัทไทย',
            icon: PieChart
        },
        {
            title: 'รางวัล Deal of the Year',
            description: 'รางวัลยอดเยี่ยมจาก SET Awards 2020 ในฐานะที่ปรึกษา IPO',
            icon: FileText
        }
    ]

    return (
        <section id="why-trinity" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        ทำไมต้องเปิดพอร์ตหุ้นกับ <span className="text-red-600">Trinity</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
                        >
                            {/* Icon */}
                            <div className="mb-6 relative z-10">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                {feature.description}
                            </p>

                            {/* Decorative Shapes - Top Right */}
                            <div className="absolute top-6 right-6 flex gap-2 opacity-20">
                                {/* Gray Triangle */}
                                <svg width="28" height="28" viewBox="0 0 28 28" className="text-gray-300">
                                    <polygon points="14,4 26,24 2,24" fill="currentColor" />
                                </svg>
                                {/* Gray Diamond */}
                                <svg width="28" height="28" viewBox="0 0 28 28" className="text-gray-300">
                                    <polygon points="14,2 26,14 14,26 2,14" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Decorative Shapes - Bottom Right */}
                            <div className="absolute bottom-6 right-6 flex gap-2 opacity-20">
                                {/* Red Triangle */}
                                <svg width="32" height="32" viewBox="0 0 32 32" className="text-red-400">
                                    <polygon points="16,4 30,28 2,28" fill="currentColor" />
                                </svg>
                                {/* Gray Circle */}
                                <svg width="32" height="32" viewBox="0 0 32 32" className="text-gray-300">
                                    <circle cx="16" cy="16" r="12" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Curved Bottom Border */}
                            <div className="absolute bottom-0 left-0 right-0 h-2 overflow-hidden">
                                <svg
                                    viewBox="0 0 200 20"
                                    className="w-full h-full"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,10 Q50,0 100,10 T200,10 L200,20 L0,20 Z"
                                        fill="#0e0d0dff"
                                        className="group-hover:fill-red-700 transition-colors duration-300"
                                    />
                                </svg>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}