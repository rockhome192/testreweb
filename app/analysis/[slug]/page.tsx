"use client";

import React, { useMemo, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { analysisDataMap } from "@/data/analysis";

type PageProps = {
  params: {
    slug: string;
  };
};

const ITEMS_PER_PAGE = 10;

export default function AnalysisSlugPage({ params }: PageProps) {
  const { slug } = params;
  const items = analysisDataMap[slug];

  if (!items) {
    notFound();
  }

  /* ================= INPUT STATE ================= */
  const [keyword, setKeyword] = useState("");
  const [analyst, setAnalyst] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  /* ================= APPLIED FILTER ================= */
  const [appliedKeyword, setAppliedKeyword] = useState("");
  const [appliedAnalyst, setAppliedAnalyst] = useState("");
  const [appliedFrom, setAppliedFrom] = useState("");
  const [appliedTo, setAppliedTo] = useState("");

  /* ================= PAGINATION ================= */
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= DATE FILTER FLAG ================= */
  const [isDateApplied, setIsDateApplied] = useState(false);

  /* ================= REALTIME KEYWORD ================= */
  useEffect(() => {
    setAppliedKeyword(keyword);
    setCurrentPage(1);
  }, [keyword]);

  /* ================= REALTIME ANALYST ================= */
  useEffect(() => {
    setAppliedAnalyst(analyst);
    setCurrentPage(1);
  }, [analyst]);

  /* ================= ANALYST OPTIONS ================= */
  const analystOptions = useMemo(() => {
    return Array.from(new Set(items.map((i) => i.analyst))).filter(Boolean);
  }, [items]);

  /* ================= FILTERED ITEMS ================= */
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const keywordMatch =
        !appliedKeyword ||
        item.title.toLowerCase().includes(appliedKeyword.toLowerCase()) ||
        item.symbol.toLowerCase().includes(appliedKeyword.toLowerCase());

      const analystMatch = !appliedAnalyst || item.analyst === appliedAnalyst;

      const itemDate = new Date(item.date.split("/").reverse().join("-"));
      const fromDate = appliedFrom ? new Date(appliedFrom) : null;
      const toDate = appliedTo ? new Date(appliedTo) : null;

      const fromMatch = !fromDate || itemDate >= fromDate;
      const toMatch = !toDate || itemDate <= toDate;

      return keywordMatch && analystMatch && fromMatch && toMatch;
    });
  }, [items, appliedKeyword, appliedAnalyst, appliedFrom, appliedTo]);

  /* ================= PAGINATED ================= */
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const hasData = paginatedItems.length > 0;

  /* ================= ACTIONS ================= */
  const handleSearch = () => {
    if (from && to) {
      setAppliedFrom(from);
      setAppliedTo(to);
      setIsDateApplied(true);
      setCurrentPage(1);
    }
  };

  const handleClearDate = () => {
    setFrom("");
    setTo("");
    setAppliedFrom("");
    setAppliedTo("");
    setIsDateApplied(false);
    setCurrentPage(1);
  };

  return (
    <section className="pb-16">
      <div className="max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[34px] sm:text-[42px] lg:text-[56px] font-semibold tracking-[0.02em] text-center my-8 leading-tight">
          {getCategoryTitle(slug)}
        </h2>

        <div className="bg-white rounded-2xl shadow-[0_0_28px_rgba(0,0,0,0.12)] p-8 border border-[#C5C5C5]">
          {/* ================= FILTER ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Search */}
            <div className="md:col-span-4 relative">
              <input
                type="text"
                placeholder="ค้นหา"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full h-12 rounded-xl border border-gray-300 px-4 pr-10
                           focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {keyword && (
                <button
                  onClick={() => setKeyword("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Analyst */}
            <div className="md:col-span-3 relative">
              <select
                value={analyst}
                onChange={(e) => setAnalyst(e.target.value)}
                className={`w-full h-12 rounded-xl border border-gray-300 px-4 pr-16 bg-white appearance-none
                            focus:outline-none focus:ring-2 focus:ring-red-500 ${
                              analyst ? "text-gray-900" : "text-gray-400"
                            }`}
              >
                <option value="">นักวิเคราะห์</option>
                {analystOptions.map((name) => (
                  <option key={name} value={name} className="text-gray-900">
                    {name}
                  </option>
                ))}
              </select>

              {!analyst && (
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}

              {analyst && (
                <button
                  onClick={() => setAnalyst("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* From + To */}
            <div className="md:col-span-5 lg:col-span-4">
              <div
                className="flex h-12 rounded-xl border border-gray-300 overflow-hidden
                           focus-within:ring-2 focus-within:ring-red-500 focus-within:outline-none"
              >
                <div className="relative w-1/2">
                  <input
                    type="date"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className={`peer w-full h-full px-4 outline-none bg-transparent ${
                      from
                        ? "text-gray-900"
                        : "text-transparent focus:text-gray-900"
                    }`}
                  />
                  {!from && (
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:hidden">
                      From
                    </span>
                  )}
                </div>

                <div className="w-px bg-gray-300" />

                <div className="relative w-1/2">
                  <input
                    type="date"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className={`peer w-full h-full px-4 outline-none bg-transparent ${
                      to
                        ? "text-gray-900"
                        : "text-transparent focus:text-gray-900"
                    }`}
                  />
                  {!to && (
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:hidden">
                      To
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="md:col-span-12 lg:col-span-1">
              {isDateApplied ? (
                <button
                  onClick={handleClearDate}
                  className="w-full h-12 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
                >
                  ล้าง
                </button>
              ) : (
                <button
                  onClick={handleSearch}
                  className="w-full h-12 rounded-xl bg-[#E14045] text-white font-medium hover:bg-red-600 transition"
                >
                  ค้นหา
                </button>
              )}
            </div>
          </div>

          {/* ================= TABLE HEADER ================= */}
          <div className="hidden lg:grid grid-cols-12 gap-x-12 lg:gap-x-8 px-6 py-4 text-[16px] font-semibold text-gray-800 border-b">
            <div className="col-span-2">วันที่</div>
            <div className="col-span-3">ชื่อเรื่อง</div>
            <div className="col-span-3">สัญลักษณ์</div>
            <div className="col-span-3">นักวิเคราะห์</div>
            <div className="col-span-1 text-center">ไฟล์</div>
          </div>

          {/* ================= CONTENT ================= */}
          {hasData ? (
            <div>
              {paginatedItems.map((item, index) => {
                const rowBg =
                  index % 2 === 0 ? "bg-[#F1F1F1]" : "bg-white";

                return (
                  <div key={index}>
                    {/* Desktop */}
                    <div
                      className={`hidden lg:grid grid-cols-12 gap-x-12 lg:gap-x-8
                                  px-6 py-5 items-center 
                                  ${rowBg} hover:bg-gray-200 transition`}
                    >
                      <div className="col-span-2 text-gray-600">
                        {item.date}
                      </div>
                      <div className="col-span-3 font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="col-span-3 font-extrabold">
                        {item.symbol}
                      </div>
                      <div className="col-span-3 text-gray-700">
                        {item.analyst}
                      </div>
                      <div className="col-span-1 text-center">
                        <a
                          href={item.file}
                          target="_blank"
                          className="px-4 py-1.5 rounded-full bg-gray-900 text-white text-xs"
                        >
                          PDF
                        </a>
                      </div>
                    </div>

                    {/* Mobile */}
                    <div
                      className={`lg:hidden px-4 py-4 space-y-2
                                  ${rowBg} hover:bg-gray-200 transition`}
                    >
                      <div className="text-sm text-gray-500">
                        {item.date}
                      </div>
                      <div className="font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="font-extrabold text-gray-900">
                        {item.symbol}
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <div className="text-sm text-gray-600">
                          {item.analyst}
                        </div>
                        <a
                          href={item.file}
                          target="_blank"
                          className="px-4 py-1.5 rounded-full bg-gray-900 text-white text-xs"
                        >
                          PDF
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-gray-500">
              ไม่มีข้อมูลในตาราง
            </div>
          )}

          {/* ================= PAGINATION ================= */}
          {hasData && totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="flex items-center gap-1 text-gray-800 disabled:opacity-40"
              >
                ‹ Previous
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl font-medium ${
                      currentPage === page
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="flex items-center gap-1 text-gray-800 disabled:opacity-40"
              >
                Next ›
              </button>
            </div>
          )}
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
