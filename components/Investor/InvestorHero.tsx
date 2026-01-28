"use client";

import React from "react";
import Image from "next/image";

export default function InvestorHero() {
  return (
    <section className="relative h-[600px] md:h-[600px] overflow-hidden">
      {/* ================= Background ================= */}
      <div className="absolute inset-0">
        <Image
          src="/research-bg.png"
          alt="Trinity Investor Relations Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ================= Content ================= */}
      <div className="relative h-full flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-12">
          <div className="max-w-[720px] text-white">
            <h1
              className="
  font-sans font-bold mb-6 animate-fade-in
  text-6xl md:text-7xl lg:text-[88px]
  lg:whitespace-nowrap
"
            >
              Investor Relations
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in">
              ซื้อขายหุ้นและอนุพันธ์ผ่านทางอินเทอร์เน็ต
              <br />
              ความคิดที่ชาญฉลาด การดำเนินการ และเทคโนโลยีเพื่อการเงินของคุณ
            </p>
          </div>
        </div>
      </div>

      {/* ================= Animations ================= */}
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
