"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AnalysisHero from "@/components/analysis/AnalysisHero";

const analysisTabs = [
  { id: "latest", label: "บทวิเคราะห์ล่าสุด" },
  { id: "technical", label: "ปัจจัยทางเทคนิค" },
  { id: "fundamental", label: "ปัจจัยพื้นฐาน" },
  { id: "asset", label: "บทวิเคราะห์รายหลักทรัพย์" },
  { id: "sector", label: "บทวิเคราะห์ราย sector" },
  { id: "quick-win", label: "Trinity Quick win" },
];

export default function AnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const currentSlug = pathname.split("/").pop() || "latest";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <AnalysisHero />
      {/* ================= TABS / DROPDOWN ================= */}
      <div className="relative z-30 -mt-9">
        <div className="max-w-[1174px] mx-auto px-4">
          <div className="bg-white rounded-full border border-[#C5C5C5] shadow-lg px-3 py-2">
            {/* ===== Dropdown (mobile + tablet + iPad + iPad Pro) ===== */}
            <div className="xl:hidden">
              <select
                value={currentSlug}
                onChange={(e) =>
                  router.push(`/analysis/${e.target.value}`)
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
                  backgroundPosition: "right 1.25rem center",
                  backgroundSize: "18px",
                }}
              >
                {analysisTabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>

            {/* ===== Tabs (desktop wide only) ===== */}
            <div className="hidden xl:flex gap-4 overflow-x-auto hide-scrollbar">
              {analysisTabs.map((tab) => {
                const isActive = currentSlug === tab.id;

                return (
                  <Link
                    key={tab.id}
                    href={`/analysis/${tab.id}`}
                    className={`
                      px-6 py-3 rounded-full text-md font-medium whitespace-nowrap transition-all
                      ${
                        isActive
                          ? "bg-[#E14045] text-white hover:bg-red-600"
                          : "bg-white text-gray-700 hover:bg-gray-200"
                      }
                    `}
                  >
                    {tab.label}
                  </Link>
                );
              })}
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
  );
}
