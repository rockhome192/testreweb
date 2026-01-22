"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { analysisDataMap } from "@/data/analysis";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function AnalysisSlugPage({ params }: PageProps) {
  const { slug } = params;
  const items = analysisDataMap[slug];

  if (!items || items.length === 0) {
    notFound();
  }

  // mock state
  const [keyword, setKeyword] = useState("");
  const [analyst, setAnalyst] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <section className="pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TITLE ================= */}
        <h2 className="text-[56px] font-semibold tracking-[0.02em] text-center my-8">
          {getCategoryTitle(slug)}
        </h2>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-2xl shadow-[0_0_28px_rgba(0,0,0,0.12)] p-8 border border-[#C5C5C5]">
          {/* ================= FILTER ROW ================= */}
          <div className="grid grid-cols-12 gap-4 mb-8">
            {/* Search */}
            <div className="col-span-12 md:col-span-4">
              <input
                type="text"
                placeholder="ค้นหา"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full h-12 rounded-xl border border-gray-300 px-4
                           focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Analyst */}
            <div className="col-span-12 md:col-span-3">
              <select
                value={analyst}
                onChange={(e) => setAnalyst(e.target.value)}
                className={`
                  w-full h-12 rounded-xl border border-gray-300 px-4 bg-white
                  focus:outline-none focus:ring-2 focus:ring-red-500
                  ${analyst ? "text-gray-900" : "text-gray-400"}
                `}
              >
                <option value="" disabled>
                  นักวิเคราะห์
                </option>
                <option value="Trinity Research" className="text-gray-900">
                  Trinity Research
                </option>
              </select>
            </div>

            {/* ===== From + To (placeholder → mm/dd/yyyy ตอน focus) ===== */}
            <div className="col-span-12 md:col-span-4">
              <div
                className="flex h-12 rounded-xl border border-gray-300 overflow-hidden
               focus-within:ring-2 focus-within:ring-red-500"
              >
                {/* FROM */}
                <div className="relative w-1/2">
                  <input
                    type="date"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className={`
          peer w-full h-full px-4 outline-none bg-transparent
          ${from ? "text-gray-900" : "text-transparent focus:text-gray-900"}
        `}
                  />
                  {!from && (
                    <span
                      className="
            pointer-events-none absolute left-4 top-1/2 -translate-y-1/2
            text-gray-400
            peer-focus:hidden
          "
                    >
                      From
                    </span>
                  )}
                </div>

                <div className="w-px bg-gray-300" />

                {/* TO */}
                <div className="relative w-1/2">
                  <input
                    type="date"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className={`
          peer w-full h-full px-4 outline-none bg-transparent
          ${to ? "text-gray-900" : "text-transparent focus:text-gray-900"}
        `}
                  />
                  {!to && (
                    <span
                      className="
            pointer-events-none absolute left-4 top-1/2 -translate-y-1/2
            text-gray-400
            peer-focus:hidden
          "
                    >
                      To
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="col-span-12 md:col-span-1">
              <button
                className="w-full h-12 rounded-xl bg-[#E14045] text-white font-medium
                           hover:bg-red-600 transition"
              >
                ค้นหา
              </button>
            </div>
          </div>

          {/* ================= TABLE HEADER ================= */}
          <div className="grid grid-cols-12 px-6 py-4 text-[16px] font-semibold text-gray-800 border-b">
            <div className="col-span-2">วันที่</div>
            <div className="col-span-4">ชื่อเรื่อง</div>
            <div className="col-span-2">สัญลักษณ์</div>
            <div className="col-span-3">นักวิเคราะห์</div>
            <div className="col-span-1 text-center">ไฟล์</div>
          </div>

          {/* ================= ROWS ================= */}
          <div className="divide-y">
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 px-6 py-5 items-center
                           hover:bg-gray-50 transition rounded-xl"
              >
                <div className="col-span-2 text-gray-600">{item.date}</div>

                <div className="col-span-4 font-medium text-gray-900">
                  {item.title}
                </div>

                <div className="col-span-2 font-extrabold">{item.symbol}</div>

                <div className="col-span-3 text-gray-700">{item.analyst}</div>

                <div className="col-span-1 text-center">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center
                               px-4 py-1.5 rounded-full bg-gray-900
                               text-white text-xs font-medium
                               hover:bg-gray-800 transition"
                  >
                    PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function getCategoryTitle(slug: string) {
  switch (slug) {
    case "latest":
      return "บทวิเคราะห์ล่าสุด";
    case "technical":
      return "ปัจจัยทางเทคนิค";
    case "fundamental":
      return "ปัจจัยพื้นฐาน";
    case "asset":
      return "บทวิเคราะห์รายหลักทรัพย์";
    case "sector":
      return "บทวิเคราะห์ราย sector";
    case "quick-win":
      return "Trinity Quick win";
    default:
      return "บทวิเคราะห์";
  }
}
