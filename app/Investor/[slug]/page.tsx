"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  notFound,
  useRouter,
  useSearchParams,
  usePathname,
} from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { investorDataMap } from "@/data/Investor";
import type {
  InvestorSubmenuGroup,
  InvestorContentBlock,
} from "@/data/Investor";

export default function InvestorSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const investor = investorDataMap[params.slug];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!investor) {
    notFound();
  }

  /* ================= HELPERS ================= */
  const getFirstId = (items: InvestorSubmenuGroup[]): string => {
    if (!items || items.length === 0) return "";

    const first = items[0];
    if ("items" in first && first.items.length > 0) {
      return first.items[0].id;
    }
    return first.id;
  };

  /* ================= STATE ================= */
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const activeSubmenu = searchParams.get("tab") ?? getFirstId(investor.submenu);

  /* ================= ESC CLOSE & PREVENT BODY SCROLL ================= */
  useEffect(() => {
    if (!selectedImage) return;

    // ป้องกัน scroll ของ body
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  const handleSubmenuClick = (id: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("tab", id);

    const query = current.toString();
    router.push(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });

    setMobileOpen(false);

    requestAnimationFrame(() => {
      if (!contentRef.current) return;

      // แยก offset สำหรับ desktop และ mobile
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 180 : 230;

      const top =
        contentRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  };

  const currentContent = investor.content[activeSubmenu];

  /* ================= ZOOM ================= */
  const handleWheelZoom = (e: React.WheelEvent<HTMLImageElement>) => {
    e.stopPropagation();

    setZoom((prev) => {
      const next = prev + (e.deltaY < 0 ? 0.1 : -0.1);
      return Math.min(Math.max(next, 1), 5);
    });
  };

  /* ================= DRAG (MOUSE) ================= */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;

    isDragging.current = true;
    startX.current = e.clientX - offsetX;
    startY.current = e.clientY - offsetY;
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || zoom <= 1) return;

    setOffsetX(e.clientX - startX.current);
    setOffsetY(e.clientY - startY.current);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  /* ================= DRAG (TOUCH) ================= */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom <= 1) return;

    const touch = e.touches[0];
    isDragging.current = true;
    startX.current = touch.clientX - offsetX;
    startY.current = touch.clientY - offsetY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || zoom <= 1) return;

    const touch = e.touches[0];
    setOffsetX(touch.clientX - startX.current);
    setOffsetY(touch.clientY - startY.current);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const resetZoom = () => {
    setZoom(1);
    setOffsetX(0);
    setOffsetY(0);
  };

  /* ================= SMART LINK ================= */
  const renderTextWithLinks = (text: string) => {
    const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: Array<
      | { type: "text"; value: string }
      | { type: "link"; label: string; url: string }
    > = [];

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          value: text.slice(lastIndex, match.index),
        });
      }

      parts.push({
        type: "link",
        label: match[1],
        url: match[2],
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push({
        type: "text",
        value: text.slice(lastIndex),
      });
    }

    if (parts.length === 0) {
      parts.push({ type: "text", value: text });
    }

    return (
      <>
        {parts.map((p, i) =>
          p.type === "link" ? (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 underline hover:text-red-600 transition"
            >
              {p.label}
            </a>
          ) : (
            <React.Fragment key={i}>
              {p.value.split(/(\*\*.*?\*\*)/).map((t, j) =>
                t.startsWith("**") && t.endsWith("**") ? (
                  <strong key={j} className="font-semibold text-gray-900">
                    {t.slice(2, -2)}
                  </strong>
                ) : (
                  t
                ),
              )}
            </React.Fragment>
          ),
        )}
      </>
    );
  };

  /* ================= CONTENT BLOCK ================= */
  const renderBlocks = (blocks: InvestorContentBlock[]) => {
    if (!blocks || blocks.length === 0) {
      return (
        <div className="text-center text-gray-500 py-16">
          ไม่มีข้อมูลในหัวข้อนี้
        </div>
      );
    }

    return (
      <div>
        {blocks.map((block, index) => {
          switch (block.type) {
            case "text": {
              const isHeading =
                block.content.startsWith("**") && block.content.endsWith("**");

              return (
                <p
                  key={index}
                  className={
                    isHeading
                      ? "text-xl font-bold text-gray-900 mt-10 mb-4"
                      : "text-md text-gray-700 leading-relaxed mb-3"
                  }
                >
                  {renderTextWithLinks(block.content)}
                </p>
              );
            }

            case "list":
              return (
                <ul key={index} className="space-y-3 mb-6">
                  {block.items.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {renderTextWithLinks(item)}
                    </li>
                  ))}
                </ul>
              );

            case "financial-list":
              return (
                <div key={index} className="mt-6">
                  <div className="flex items-center justify-between mb-4 ml-6 mr-9">
                    <h3 className="text-[18px] font-semibold text-gray-900">
                      รายการเอกสาร
                    </h3>
                    <span className="text-[18px] font-semibold text-gray-900">
                      ไฟล์
                    </span>
                  </div>

                  <div className="overflow-hidden">
                    {block.items.map((item, i) => (
                      <div
                        key={i}
                        className={`
                          flex items-center justify-between
                          px-6 py-4
                          transition
                          cursor-default
                          ${i % 2 === 0 ? "bg-gray-100" : "bg-white"}
                          hover:bg-gray-200
                        `}
                      >
                        <span className="text-base text-gray-900">
                          {item.label}
                        </span>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            bg-gray-900 text-white
                            text-[12px] font-medium
                            px-4 py-1.5
                            rounded-full
                            shrink-0
                            hover:bg-gray-700
                            transition
                          "
                        >
                          PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );

            case "image":
              return (
                <figure key={index} className="my-10 text-center">
                  <img
                    src={block.url}
                    alt={block.caption ?? ""}
                    onClick={() => {
                      resetZoom();
                      setSelectedImage(block.url);
                    }}
                    className="
                      mx-auto max-w-full
                      rounded-xl
                      shadow-[0_0_8px_rgba(0,0,0,0.12)]
                      cursor-zoom-in
                      hover:opacity-90
                      transition
                    "
                  />

                  {block.caption && (
                    <figcaption className="mt-4 text-sm text-gray-600">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  };

  return (
    <>
      <section className="pt-8 lg:pt-18 pb-8">
        <div className="max-w-[1430px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-3 lg:gap-6">
            {/* ================= MOBILE SIDEBAR ================= */}
            <div className="lg:hidden sticky top-24 z-20 bg-white rounded-xl border shadow-[0_0_10px_rgba(0,0,0,0.12)] mb-3">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`w-full flex items-center justify-between px-6 py-4 font-bold text-lg
                  ${mobileOpen ? "border-b border-gray-200 " : ""}
                `}
              >
                {investor.title}
                <ChevronDown
                  className={`transition-transform ${
                    mobileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileOpen && (
                <div className="px-2 pb-6 max-h-[60vh] overflow-y-auto">
                  <div className="mt-3 space-y-1">
                    {investor.submenu.map((item) =>
                      "items" in item ? (
                        <div key={item.id} className="mt-5">
                          <div className="px-4 my-4 font-semibold text-sm">
                            {item.label}
                          </div>

                          {item.items.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleSubmenuClick(sub.id)}
                              className={`w-full text-left px-6 py-2 text-sm rounded-lg ${
                                activeSubmenu === sub.id
                                  ? "bg-red-50 text-red-600 font-medium"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`}
                            >
                              • {sub.label}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <button
                          key={item.id}
                          onClick={() => handleSubmenuClick(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm rounded-lg ${
                            activeSubmenu === item.id
                              ? "bg-red-50 text-red-600 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          • {item.label}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ================= DESKTOP SIDEBAR ================= */}
            <aside className="hidden lg:block">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-24">
                <div className="py-4 pl-5 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {investor.title}
                  </h3>
                </div>

                <div className="p-2 overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar">
                  <div className="space-y-1">
                    {investor.submenu.map((item) =>
                      "items" in item ? (
                        <div key={item.id} className="mb-4 last:mb-0">
                          <h4 className="px-4 py-2 text-sm font-bold text-gray-900 mb-1">
                            {item.label}
                          </h4>
                          <div className="space-y-1">
                            {item.items.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => handleSubmenuClick(sub.id)}
                                className={`
                                  w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm pl-6
                                  ${
                                    activeSubmenu === sub.id
                                      ? "bg-red-50 text-red-700 font-medium"
                                      : "text-gray-600 hover:bg-gray-50"
                                  }
                                `}
                              >
                                • {sub.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          key={item.id}
                          onClick={() => handleSubmenuClick(item.id)}
                          className={`
                            w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm
                            ${
                              activeSubmenu === item.id
                                ? "bg-red-50 text-red-700 font-medium"
                                : "text-gray-600 hover:bg-gray-50"
                            }
                          `}
                        >
                          • {item.label}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </aside>

            {/* ================= CONTENT ================= */}
            <div className="min-w-0">
              <div
                ref={contentRef}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
              >
                <div className="flex justify-center mb-8 mt-2">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 inline-block text-center leading-tight max-w-4xl">
                    {currentContent?.title ?? "ไม่มีข้อมูล"}
                  </h2>
                </div>

                {currentContent ? (
                  renderBlocks(currentContent.blocks)
                ) : (
                  <div className="text-center text-gray-500 py-16">
                    ไม่มีข้อมูลในหัวข้อนี้
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed inset-0 z-50
            bg-black/80
            flex items-center justify-center
            p-6
          "
          style={{
            touchAction: "none",
            overscrollBehavior: "contain",
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="
    absolute top-6 right-6 
    text-white 
    bg-black/50 
    hover:bg-black/70
    rounded-full 
    p-2
    transition-all
    backdrop-blur-sm
    z-10
  "
          >
            <X size={24} />
          </button>

          <img
            src={selectedImage}
            alt=""
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheelZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={resetZoom}
            style={{
              transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`,
              cursor: isDragging.current
                ? "grabbing"
                : zoom > 1
                  ? "grab"
                  : "zoom-in",
              userSelect: "none",
            }}
            className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-xl
              shadow-2xl
              transition-none
            "
            draggable={false}
          />
        </div>
      )}
    </>
  );
}
