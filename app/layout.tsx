import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter, Kanit } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/* โหลดฟอนต์ Inter */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

/* โหลดฟอนต์ Kanit (รองรับภาษาไทย) */
const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-kanit',
})

/* Metadata สำหรับ SEO */
export const metadata: Metadata = {
  title: 'Trinity',
  description:
    'เปิดบัญชีซื้อขายหุ้นออนไลน์ ง่าย สะดวก ปลอดภัย พร้อมบริการให้คำปรึกษาการลงทุนจากผู้เชี่ยวชาญ',
}

/* Root Layout (ครอบทุกหน้า) */
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="th" className={`${inter.variable} ${kanit.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
