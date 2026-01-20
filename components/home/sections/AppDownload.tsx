'use client'

import { Download, QrCode } from 'lucide-react'
import Image from 'next/image'

export default function AppDownload() {
    return (
        <section className="bg-slate-950 py-20 overflow-hidden relative">
            {/* Geometric Triangle Patterns - Red Theme */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Top Left Red Triangle */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[300px] border-l-transparent border-t-[300px] border-t-red-900/50"></div>

                {/* Top Left Dark Triangle */}
                <div className="absolute top-0 left-[150px] w-0 h-0 border-l-[250px] border-l-transparent border-t-[250px] border-t-slate-900/80"></div>

                {/* Middle Left Red Triangle */}
                <div className="absolute top-[200px] left-0 w-0 h-0 border-l-[200px] border-l-transparent border-t-[200px] border-t-red-800/50"></div>

                {/* Bottom Right Red Triangle */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[350px] border-r-transparent border-b-[350px] border-b-red-900/50"></div>

                {/* Bottom Right Dark Red Triangle */}
                <div className="absolute bottom-[100px] right-[100px] w-0 h-0 border-r-[250px] border-r-transparent border-b-[250px] border-b-red-800/50"></div>

                {/* Bottom Right Dark Triangle */}
                <div className="absolute bottom-0 right-[200px] w-0 h-0 border-r-[200px] border-r-transparent border-b-[200px] border-b-slate-900/80"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Phone Mockup - Left Side */}
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <div className="relative w-64 md:w-80">
                            {/* Phone Frame */}
                            <div className="relative bg-slate-800 rounded-[3rem] border-[12px] border-slate-800 overflow-hidden shadow-2xl">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

                                {/* Screen Content */}
                                <div className="aspect-[9/19] bg-white relative overflow-hidden">
                                    {/* App Screenshot */}
                                    <Image
                                        src="/phone.png"
                                        alt="Trinity App Screenshot"
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    {/* Fallback gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="flex-1 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            แอปพลิเคชัน <span className="text-red-600">Trinity</span>
                        </h2>

                        <p className="text-gray-300 text-base mb-4 leading-relaxed">
                            แอปพลิเคชันที่เปลี่ยนการลงทุนให้กลายเป็นเรื่องง่าย ๆ โดยคุณสามารถซื้อขายและแลกเปลี่ยนหลักทรัพย์ประเภทต่าง ๆ ทั้งในและต่างประเทศได้อย่างสะดวกสบายในที่เดียว
                        </p>

                        <p className="text-gray-300 text-base mb-8 leading-relaxed">
                            นอกจากนี้ ยังสามารถรับคำปรึกษาจากผู้เชี่ยวชาญด้านการลงทุนของ trinity ที่ยินดีช่วยให้คุณประสบความสำเร็จด้านการเงินอย่างดีถึง
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            {/* QR Code */}
                            <div className="bg-white p-4 rounded-xl shadow-lg">
                                <div className="w-32 h-32 bg-gray-900 flex items-center justify-center">
                                    <QrCode className="w-28 h-28 text-white" />
                                </div>
                            </div>

                            {/* Download Buttons - Real Badge Style */}
                            <div className="space-y-3">
                                {/* Google Play Badge */}
                                <a
                                    href="https://play.google.com/store/apps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Get it on Google Play"
                                        className="h-14 hover:opacity-80 transition-opacity"
                                    />
                                </a>

                                {/* App Store Badge */}
                                <a
                                    href="https://apps.apple.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                        alt="Download on the App Store"
                                        className="h-14 hover:opacity-80 transition-opacity"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}