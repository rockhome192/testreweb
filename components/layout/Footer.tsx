'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Youtube, Twitter, Facebook } from 'lucide-react'
import { FaLine } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">

                    {/* Column 1: Logo & Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/logo-trinity.png"
                                alt="Trinity Logo"
                                width={140}
                                height={45}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="space-y-2 text-sm ">
                        <p className=" font-semibold mb-4 text-red-500">บทวิเคราะห์ล่าสุด</p>
                        <Link href="/analysis/reports" className="block hover:text-red-300 transition-colors">
                            บัจิชุยภาคกลคิน
                        </Link>
                        <Link href="/analysis/financial" className="block hover:text-red-300 transition-colors">
                            บัจิชุยการพื้นฐาน
                        </Link>
                        <Link href="/analysis/companies" className="block hover:text-red-300 transition-colors">
                            บทวิเคราะห์รายบริษัทหลักทรัพย์
                        </Link>
                        <Link href="/analysis/sector" className="block hover:text-red-300 transition-colors">
                            บทวิเคราะห์ราย sector
                        </Link>
                        <Link href="/analysis/quick-win" className="block hover:text-red-300 transition-colors">
                            Trinity Quick win
                        </Link>
                    </div>
                    {/* Column 2: Services */}
                    <div className="lg:col-span-1 text-sm">
                        <h3 className=" font-semibold mb-4 text-red-500">บริการ</h3>
                        <div className="space-y-2 ">
                            <Link href="/services/ssi-sca" className="block hover:text-red-300 transition-colors">
                                SSI-SCA (กองทุนเวียดนาม)
                            </Link>
                            <Link href="/services/investment-banking" className="block hover:text-red-300 transition-colors">
                                วาณิชยธนกิจ
                            </Link>
                            <Link href="/services/private-fund" className="block hover:text-red-300 transition-colors">
                                การกองทุนส่วนบุคคล
                            </Link>
                            <Link href="/services/securities" className="block hover:text-red-300 transition-colors">
                                ซื้อขายหลักทรัพย์และอนุพันธ์
                            </Link>
                            <Link href="/services/bonds" className="block hover:text-red-300 transition-colors">
                                ตราสารหนี้
                            </Link>
                            <Link href="/services/ipo" className="block hover:text-red-300 transition-colors">
                                จองซื้อหุ้นสามัญเพิ่มทุน
                            </Link>
                            <Link href="/services/representative" className="block hover:text-red-300 transition-colors">
                                ผู้แทนผู้ถือหุ้นกู้
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Investor Relations */}
                    <div className="lg:col-span-1 text-sm">
                        <h3 className=" font-semibold mb-4 text-red-500">นักลงทุนสัมพันธ์</h3>
                        <div className="space-y-2 text-sm">
                            <Link href="/ir/about" className="block hover:text-red-300 transition-colors">
                                รู้จักทรีนิตี้
                            </Link>
                            <Link href="/ir/financial" className="block hover:text-red-300 transition-colors">
                                งบการเงิน
                            </Link>
                            <Link href="/ir/news" className="block hover:text-red-300 transition-colors">
                                ข่าวแจ้งตลาดฯ
                            </Link>
                            <Link href="/ir/structure" className="block hover:text-red-300 transition-colors">
                                โครงสร้างการเงินและผู้ถือหุ้น
                            </Link>
                            <Link href="/ir/dividend" className="block hover:text-red-300 transition-colors">
                                การจ่ายเงินปันผล
                            </Link>
                            <Link href="/ir/annual-report" className="block hover:text-red-300 transition-colors">
                                รายงานประจำปี
                            </Link>
                            <Link href="/ir/esg" className="block hover:text-red-300 transition-colors">
                                ESG Report
                            </Link>
                        </div>
                    </div>

                    {/* Column 4: About Us */}
                    <div className="lg:col-span-1 text-sm">
                        <h3 className=" font-semibold mb-4 text-red-500">เกี่ยวกับเรา</h3>
                        <div className="space-y-2 text-sm">
                            <Link href="/about/vision" className="block hover:text-red-300 transition-colors">
                                ร่วมงานกับเรา
                            </Link>
                            <Link href="/about/contact" className="block hover:text-red-300 transition-colors">
                                ติดต่อเรา
                            </Link>
                        </div>

                        <h3 className="text-red-500 font-semibold mt-8 mb-4">ประกาศและข่าวสาร</h3>
                        <div className="space-y-2 text-sm">
                            <Link href="/news/announcement" className="block hover:text-red-300 transition-colors">
                                ประกาศ
                            </Link>
                            <Link href="/news" className="block hover:text-red-300 transition-colors">
                                ข่าวสาร
                            </Link>
                            <Link href="/news/promotions" className="block hover:text-red-300 transition-colors">
                                โปรโมชั่น
                            </Link>
                            <Link href="/news/seminar" className="block hover:text-red-300 transition-colors">
                                ปฏิทินหลักทรัพย์
                            </Link>
                        </div>
                    </div>

                    {/* Column 5: Knowledge */}
                    <div className="lg:col-span-1 text-sm">
                        <h3 className=" font-semibold mb-4 text-red-500">แหล่งความรู้</h3>
                        <div className="space-y-2 text-sm">
                            <Link href="/education/investment" className="block hover:text-red-300 transition-colors">
                                ความรู้ด้านการลงทุน
                            </Link>
                            <Link href="/education/video" className="block hover:text-red-300 transition-colors">
                                คลังวิดิโอความรู้
                            </Link>
                            <Link href="/education/guide" className="block hover:text-red-300 transition-colors">
                                คู่มือการใช้งาน
                            </Link>
                            <Link href="/education/articles" className="block hover:text-red-300 transition-colors">
                                บทความการลงทุน
                            </Link>
                            <Link href="/education/seminar" className="block hover:text-red-300 transition-colors">
                                สัมมนา
                            </Link>
                        </div>
                    </div>

                    {/* Column 7: Trinity Member */}
                    <div className="lg:col-span-1 text-sm">
                        <h3 className="text-red-500 font-semibold mb-4">Trinity Member</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="https://play.google.com" target="_blank">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <Link href="https://apps.apple.com" target="_blank">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="Download on App Store"
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>
                        <h3 className="text-red-500 font-semibold mt-4 mb-4">ติดตามเรา</h3>
                        <div className="flex gap-3 flex-wrap">
                            <Link
                                href="https://www.youtube.com/channel/UCO1YSETfqQgGYfpgMOv30Vg"
                                target="_blank"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors group"
                            >
                                <Youtube className="w-5 h-5 text-red-500 group-hover:text-white" />
                            </Link>
                            <Link
                                href="https://bit.ly/TrinitySec-Line"
                                target="_blank"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-green-500 transition-colors group"
                            >
                                <FaLine className="w-5 h-5 text-green-500 group-hover:text-white" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/Trinitysecuritiesgroup/"
                                target="_blank"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
                            >
                                <Facebook className="w-5 h-5 text-blue-500 group-hover:text-white" />
                            </Link>
                            <Link
                                href="https://www.tiktok.com/@trinitysecurities?_t=ZS-90o5TIxqGc4&_r=1"
                                target="_blank"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black transition-colors group"
                            >
                                <svg className="w-5 h-5 text-slate-900 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>© 2026 All right reserved. Trinity Securities Group.</p>
                        <div className="flex gap-6 mt-3 md:mt-0">
                            <Link href="/privacy" className="hover:text-red-300 transition-colors">
                                นโยบายการใช้คุกกี้
                            </Link>
                            <Link href="/terms" className="hover:text-red-300 transition-colors">
                                การคุ้มครองข้อมูลบุคคล
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}