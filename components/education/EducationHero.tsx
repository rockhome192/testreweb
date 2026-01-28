"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { educationData } from "@/data/education";

export default function EducationHero() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  // Check if we're on an article detail page (e.g., /education/vietnam/article-id)
  const isArticlePage = pathParts.length === 3 && pathParts[0] === "education";
  const categorySlug = pathParts[1];
  const articleId = pathParts[2];

  // Get category and article data for breadcrumb
  const category = categorySlug ? educationData[categorySlug] : null;
  const article = category?.cardItems?.find(item => item.id === articleId);

  return (
    <section className="relative h-[600px] md:h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/research-bg.png"
          alt="Trinity Education Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="max-w-[1440px] mx-auto w-full px-12 pt-8">
          {/* Breadcrumb - Show only on article page */}
          {isArticlePage && article && (
            <nav className="flex items-center gap-2 text-sm flex-wrap animate-fade-in">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                หน้าแรก
              </Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <Link href="/education" className="text-white/70 hover:text-white transition-colors">
                แหล่งความรู้
              </Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <Link href={`/education/${categorySlug}`} className="text-white/70 hover:text-white transition-colors">
                {category?.title}
              </Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-[#E14045] font-medium">
                {article.title}
              </span>
            </nav>
          )}
        </div>

        <div className="flex-1 flex items-center">
          <div className="max-w-[1440px] mx-auto w-full px-12">
            <div className={`max-w-[1000px] text-white ${isArticlePage ? "mx-auto text-center" : ""}`}>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-[72px] font-bold mb-6 animate-fade-in leading-tight">
                {isArticlePage && article ? article.title : "ความรู้ด้านการลงทุน"}
              </h1>

              {!isArticlePage && (
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in max-w-3xl">
                  ก้าวข้ามขีดจำกัดการลงทุนด้วยบทวิเคราะห์เจาะลึกจากผู้เชี่ยวชาญ
                  <br />
                  พร้อมโซลูซันทางการเงินครบวงจรที่ออกแบบมาเพื่อเป้าหมายของคุณโดยโดยเฉพาะ
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
