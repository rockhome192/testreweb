'use client'

import { Shield, Lock, FileCheck } from 'lucide-react'

export default function SecuritySection() {
    const features = [
        {
            title: 'กำกับดูแลโดย ก.ล.ต.',
            description: 'เปิดบัญชีซื้อขายหลักทรัพย์ได้อย่างสะดวกและปลอดภัย ด้วยระบบที่ได้รับการกำกับดูแลโดย ก.ล.ต. และอยู่ภายใต้มาตรฐานความปลอดภัยสูงสุด',
            icon: Lock
        },
        {
            title: 'คุ้มครองตามหลัก PDPA',
            description: 'เรามีความมุ่งมั่นในการปกป้องข้อมูลส่วนบุคคลของคุณ ด้วยการปฏิบัติตามมาตรฐาน PDPA อย่างเคร่งครัด เพื่อความมั่นใจและความปลอดภัยสูงสุด',
            icon: FileCheck
        },
        {
            title: 'ความปลอดภัยข้อมูล',
            description: 'เราใช้เทคโนโลยีการเข้ารหัสข้อมูลระดับสูงและระบบรักษาความปลอดภัยที่ทันสมัย เพื่อคุ้มครองข้อมูลและการทำธุรกรรมของคุณอย่างปลอดภัย',
            icon: Shield
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        เปิดพอร์ตลงทุน
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold">
                        อย่างปลอดภัยกับ <span className="text-red-600">Trinity</span>
                    </h3>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl p-8 bg-slate-900 hover:bg-slate-800 transition-all duration-300 group"
                        >
                            {/* Content */}
                            <div className="text-center">
                                {/* Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="w-20 h-20 rounded-full bg-red-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-10 h-10 text-red-600" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-white mb-4">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom Red Line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}