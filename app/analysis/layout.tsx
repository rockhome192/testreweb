"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const currentSlug = pathname.split("/").pop() || "latest";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <AnalysisHero />

      {/* ================= TABS (FLOAT ON HERO) ================= */}
      <div className="relative z-30 -mt-9">
        <div className="max-w-[1268px] mx-auto px-4">
          <div className="bg-white rounded-full border border-[#C5C5C5] shadow-lg px-3 py-2">
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {analysisTabs.map((tab) => {
                const isActive = currentSlug === tab.id;

                return (
                  <Link
                    key={tab.id}
                    href={`/analysis/${tab.id}`}
                    className={`
                      px-6 py-3 rounded-full text-lg font-medium whitespace-nowrap transition-all
                      ${
                        isActive
                          ? "bg-[#E14045] text-white hover:bg-red-600 transition"
                          : "bg-white text-gray-700 hover:bg-gray-200 transition"
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
