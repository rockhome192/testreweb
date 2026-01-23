'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [language, setLanguage] = useState('TH')
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

    const navigation = [
        {
            name: 'บทวิเคราะห์', href: '/analysis',
            submenu: [
                { name: 'บทวิเคราะห์ล่าสุด', href: '/analysis' },
                { name: 'ปัจจัยทางเทคนิค', href: '/analysis' },
                { name: 'ปัจจัยทางทางพื้นฐาน', href: '/analysis' },
                { name: 'บทวิเคราะห์รายหลักทรัพย์', href: '/analysis' },
                { name: 'บทวิเคราะห์ราย sector', href: '/analysis' },
                { name: 'Trinity Quick win', href: '/analysis' },
            ]
        },
        {
            name: 'บริการ',
            href: '/services',
            submenu: [
                { name: 'SSI-SCA (กองทุนเวียดนาม)', href: '/services/vietnam-fund' },
                { name: 'วาณิชธนกิจ', href: '/services/investment-banking' },
                { name: 'กองทุนส่วนบุคคล', href: '/services/private-fund' },
                { name: 'ซื้อขายหลักทรัพย์และอนุพันธ์', href: '/services/brokerage' },
                { name: 'ตราสารหนี้', href: '/services/bonds' },
                { name: 'จองซื้อหุ้นสามัญเพิ่มทุน', href: '/services/sec-deriv-trading' },
                { name: 'ผู้แทนผู้ถือหุ้นกู้', href: '/services/bond-product' },
            ]
        },
        {
            name: 'นักลงทุนสัมพันธ์', href: '/fees',
            submenu: [
                { name: 'รู้จักทรีนิตี้', href: '/fees' },
                { name: 'งบการเงิน', href: '/fees' },
                { name: 'ข่าวแจ้งตลาดฯ', href: '/fees' },
                { name: 'โครงสร้างการเงินและผู้ถือหุ้น', href: '/fees' },
                { name: 'การจ่ายเงินปันผล', href: '/fees' },
                { name: 'รายงานประจำปี', href: '/fees' },
                { name: 'ESG Report', href: '/fees' },
            ]
        },

        {
            name: 'แหล่งความรู้', href: '/education',
            submenu: [
                { name: 'ความรู้ด้านการลงทุน', href: '/education' },
                { name: 'คู่มือการใช้งาน', href: '/education' },
                { name: 'บทความการลงทุน', href: '/education' },
                { name: 'สัมมนา', href: '/education' },
            ]
        },
        { name: 'Trinity member', href: '/member' },
        { name: 'เกี่ยวกับเรา', href: '/about' },
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 gap-8">
                    {/* Logo */}
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

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center gap-1 text-[15px]"
                                >
                                    {item.name}
                                    {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                                </Link>

                                {/* Dropdown */}
                                {item.submenu && (
                                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                                            {item.submenu.map((subitem) => (
                                                <Link
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                >
                                                    {subitem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons - Desktop */}
                    <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                        {/* ปุ่มค้นหา */}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all p-2 rounded-lg"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* ปุ่มเปลี่ยนภาษา */}
                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all px-2.5 py-2 rounded-lg">
                                {language === 'TH' ? (
                                    <img src="https://flagcdn.com/w40/th.png" alt="Thai" className="w-6 h-4 object-cover rounded-sm" />
                                ) : (
                                    <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 object-cover rounded-sm" />
                                )}
                                <span className="text-sm font-medium">{language === 'TH' ? 'TH' : 'EN'}</span>
                            </button>

                            {/* Dropdown เลือกภาษา */}
                            <div className="absolute right-0 mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                                    <button
                                        onClick={() => setLanguage('TH')}
                                        className={`flex items-center gap-2.5 w-full text-left px-4 py-2 text-sm hover:bg-red-50 transition-colors ${language === 'TH' ? 'text-red-600 bg-red-50 font-medium' : 'text-gray-700'}`}
                                    >
                                        <img src="https://flagcdn.com/w40/th.png" alt="Thai" className="w-6 h-4 object-cover rounded-sm" />
                                        <span>ไทย</span>
                                    </button>
                                    <button
                                        onClick={() => setLanguage('EN')}
                                        className={`flex items-center gap-2.5 w-full text-left px-4 py-2 text-sm hover:bg-red-50 transition-colors ${language === 'EN' ? 'text-red-600 bg-red-50 font-medium' : 'text-gray-700'}`}
                                    >
                                        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 object-cover rounded-sm" />
                                        <span>English</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* เส้นแบ่ง */}
                        <div className="h-6 w-px bg-gray-300 mx-1"></div>

                        {/* ปุ่มเข้าสู่ระบบ */}
                        <Link
                            href="/login"
                            className="text-gray-700 hover:text-red-600 font-medium transition-colors px-3 py-2 text-[15px]"
                        >
                            เข้าสู่ระบบ
                        </Link>

                        {/* ปุ่มเปิดบัญชี */}
                        <Link
                            href="/account/register"
                            className="bg-gradient-to-r from-red-600 to-red-500 text-white font-medium px-5 py-2 rounded-lg hover:shadow-md hover:from-red-700 hover:to-red-600 transition-all text-[15px]"
                        >
                            เปิดบัญชี
                        </Link>
                    </div>

                    {/* Mobile Menu Buttons */}
                    <div className="flex lg:hidden items-center gap-3">
                        {/* ปุ่มค้นหาสำหรับมือถือ */}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* ปุ่มเปลี่ยนภาษาสำหรับมือถือ */}
                        <button
                            onClick={() => setLanguage(language === 'TH' ? 'EN' : 'TH')}
                            className="flex items-center gap-1.5 hover:bg-gray-100 px-2.5 py-1.5 rounded-lg transition-colors"
                            aria-label="Change Language"
                        >
                            {language === 'TH' ? (
                                <img src="https://flagcdn.com/w40/th.png" alt="Thai" className="w-6 h-4 object-cover rounded-sm" />
                            ) : (
                                <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 object-cover rounded-sm" />
                            )}
                            <span className="text-xs font-medium text-gray-700">{language === 'TH' ? 'TH' : 'EN'}</span>
                        </button>

                        {/* ปุ่มเมนู */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 p-2"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Search Bar สำหรับ Desktop */}
                {searchOpen && (
                    <div className="hidden lg:block py-4 border-t border-gray-100">
                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="ค้นหาบทวิเคราะห์, หุ้น, บทความ..."
                                className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-base shadow-sm"
                                autoFocus
                            />
                            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                )}

                {/* Search Bar สำหรับมือถือ */}
                {searchOpen && (
                    <div className="lg:hidden py-3 border-t border-gray-100">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ค้นหา..."
                                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                                autoFocus
                            />
                            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        {navigation.map((item) => (
                            <div key={item.name} className="py-2">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                                            className="flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium py-2"
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        {openSubmenu === item.name && (
                                            <div className="pl-4 space-y-2 mt-2">
                                                {item.submenu.map((subitem) => (
                                                    <Link
                                                        key={subitem.name}
                                                        href={subitem.href}
                                                        className="block text-sm text-gray-600 hover:text-red-600 py-1"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block text-gray-700 hover:text-red-600 font-medium py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
                            <Link
                                href="/account/login"
                                className="bg-white border-2 border-red-600 text-red-600 font-medium py-3 rounded-lg text-center hover:bg-red-50 transition-colors"
                            >
                                เข้าสู่ระบบ
                            </Link>
                            <Link
                                href="/account/register"
                                className="bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-3 rounded-lg text-center hover:shadow-lg transition-all"
                            >
                                เปิดบัญชี
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}