'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import InvestorHero from '@/components/Investor/InvestorHero'

const investorTabs = [
  { id: 'about-trinity', label: 'รู้จักทรีนีตี้' },
  { id: 'financial-statement', label: 'งบการเงิน' },
  { id: 'new-disclosure', label: 'ข่าวสารแจ้งตลาดหลักทรัพย์' },
  { id: 'capital-shareholding', label: 'โครงสร้างเงินทุนและผู้ถือหุ้น' },
  { id: 'dividend-payment', label: 'การจ่ายเงินปันผล' },
  { id: 'annual-report', label: 'รายงานประจำปี' },
  { id: 'esg-report', label: 'รายงาน ESG' },
]

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const currentSlug = pathname.split('/').pop() || investorTabs[0].id

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <InvestorHero />

      {/* ================= TABS / DROPDOWN ================= */}
      <div className="relative z-30 -mt-9">
        <div className="max-w-[1174px] mx-auto px-6 xl:px-4">
          <div className="xl:flex xl:justify-center">
            <div
              className="
                bg-white rounded-full border border-[#C5C5C5] shadow-lg px-3 py-2
                w-full
                xl:inline-flex xl:w-auto
              "
            >
              {/* ===== Dropdown (mobile / tablet) ===== */}
              <div className="xl:hidden">
                <select
                  value={currentSlug}
                  onChange={(e) =>
                    router.push(`/Investor/${e.target.value}`)
                  }
                  className="
                    w-full h-12 rounded-full
                    pl-5 pr-12
                    bg-white text-gray-900 font-medium
                    appearance-none focus:outline-none
                    bg-no-repeat bg-right
                  "
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1.25rem center',
                    backgroundSize: '18px',
                  }}
                >
                  {investorTabs.map((tab) => (
                    <option key={tab.id} value={tab.id}>
                      {tab.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ===== Tabs (desktop xl+) ===== */}
              <div className="hidden xl:flex gap-4 whitespace-nowrap">
                {investorTabs.map((tab) => {
                  const isActive = currentSlug === tab.id

                  return (
                    <Link
                      key={tab.id}
                      href={`/Investor/${tab.id}`}
                      className={`
                        px-6 py-3 rounded-full text-md font-medium
                        transition-all
                        ${
                          isActive
                            ? 'bg-[#E14045] text-white hover:bg-red-600'
                            : 'bg-white text-gray-700 hover:bg-gray-200'
                        }
                      `}
                    >
                      {tab.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <main>{children}</main>

      {/* ================= SCROLLBAR HIDE ================= */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
