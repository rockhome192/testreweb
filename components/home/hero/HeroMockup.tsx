'use client'

import { TrendingUp } from 'lucide-react'

export default function HeroMockup() {
    return (
        <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-full max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                    {/* Screen */}
                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                        {/* Status Bar */}
                        <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 flex justify-between items-center">
                            <span className="text-white text-xs font-medium">9:41</span>
                            <div className="flex space-x-1">
                                <div className="w-1 h-3 bg-white rounded"></div>
                                <div className="w-1 h-3 bg-white rounded"></div>
                                <div className="w-1 h-3 bg-white/50 rounded"></div>
                            </div>
                        </div>

                        {/* Portfolio Value */}
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                            <p className="text-sm text-gray-600 mb-1">มูลค่าพอร์ตรวม</p>
                            <p className="text-3xl font-bold text-gray-900 mb-2">฿532,872.00</p>
                            <div className="flex items-center space-x-2">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span className="text-green-500 font-medium">+12,450.00 (2.4%)</span>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="px-6 py-4 grid grid-cols-4 gap-3">
                            {['ฝาก', 'ถอน', 'ซื้อ', 'ขาย'].map((action, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
                                        <span className="text-white text-lg">📊</span>
                                    </div>
                                    <p className="text-xs text-gray-600">{action}</p>
                                </div>
                            ))}
                        </div>

                        {/* Holdings */}
                        <div className="px-6 py-4">
                            <p className="text-sm font-semibold text-gray-900 mb-3">หุ้นในพอร์ต</p>
                            {[
                                { symbol: 'PTT', name: 'ปตท.', price: '32.50', change: '+2.5%', positive: true },
                                { symbol: 'KBANK', name: 'กสิกรไทย', price: '145.00', change: '+1.2%', positive: true },
                                { symbol: 'AOT', name: 'ท่าอากาศยาน', price: '68.25', change: '-0.8%', positive: false },
                            ].map((stock, i) => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                                            <span className="text-sm font-bold text-purple-600">{stock.symbol.slice(0, 2)}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{stock.symbol}</p>
                                            <p className="text-xs text-gray-500">{stock.name}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-gray-900">฿{stock.price}</p>
                                        <p className={`text-xs ${stock.positive ? 'text-green-500' : 'text-red-500'}`}>
                                            {stock.change}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
                    <p className="text-xs text-gray-600">กำไร</p>
                    <p className="text-lg font-bold text-green-500">+24%</p>
                </div>

                <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl p-4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                        <span className="text-purple-600">✓</span>
                    </div>
                    <p className="text-xs text-gray-600">ปลอดภัย</p>
                    <p className="text-xs font-semibold text-gray-900">100%</p>
                </div>
            </div>
        </div>
    )
}