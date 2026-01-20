import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroContent() {
    return (
        <div className="text-white space-y-6">
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                สมัครพอร์ตหุ้น
                <br />
                <span className="text-gray-200">เริ่มลงทุนง่าย ๆ</span>
                <br />
                <span className="text-white">กับ </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    Trinity
                </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Trinity แอปพลิเคชันเพื่อการลงทุนที่คนยุคใหม่ต้องมี เปิดพอร์ตหุ้นออนไลน์
                เลือกลงทุนในหลักทรัพย์ที่หลากหลาย พร้อมอัปเดตข่าวสารทางการเงินและบทวิเคราะห์จากผู้เชี่ยวชาญ
                ได้ในแอปเดียวให้คุณไม่พลาดทุกความเคลื่อนไหวในโลกการเงิน
                และการลงทุนมุ่งสู่เป้าหมายการลงทุนที่วางไว้ได้อย่างมีประสิทธิภาพ
            </p>

            {/* CTA Button */}
            <div className="pt-4">
                <Link
                    href="/account/register"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    <span>เปิดบัญชี</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </div>
        </div>
    )
}