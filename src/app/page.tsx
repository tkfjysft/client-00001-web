// src/app/page.tsx
"use client";

import { motion } from "framer-motion"; // ← これが必要です！
import { siteConfig } from "@/config/site";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  // 200個の粒子のインデックス配列を作成
  const items = useMemo(() => Array.from({ length: 200 }, (_, i) => i), []);

  return (
    <main className="relative w-full bg-[#0F172A]">
      <section className="relative w-full h-[100dvh] flex items-center justify-center bg-[#0F172A] overflow-hidden">
        {/* 1. 背景画像レイヤー */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${siteConfig.placeholder?.hero || ""})`,
          }}
        />

        {/* 2. 粒子レイヤー */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-0 h-0">
            {items.map((i) => {
              const angle = i * 137.5;
              const radius = Math.sqrt(i) * 35;
              const sx = Math.cos(angle * (Math.PI / 180)) * radius;
              const sy = Math.sin(angle * (Math.PI / 180)) * radius;

              // i を使って固定の散らばり（終了地点）を作る
              // これなら Math.random() なしで中心が塊になりません
              const ex = ((i % 11) - 5) * 4;
              const ey = ((i % 7) - 3) * 4;

              const particleStyle = {
                width: `${(i % 4) + 2}px`,
                height: `${(i % 4) + 2}px`,
                animationDelay: `${(i % 50) * 0.03}s`,
                "--sx": `${sx}px`,
                "--sy": `${sy}px`,
                "--ex": `${ex}px`,
                "--ey": `${ey}px`,
              } as React.CSSProperties;
              return <div key={i} className="particle" style={particleStyle} />;
            })}
          </div>
        </div>

        {/* 3. テキストレイヤー */}
        <div className="relative z-20 text-center px-6 pointer-events-none">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl">
            {siteConfig.companyName}
          </h1>
          <p className="text-cyan-400 mt-4 text-sm md:text-xl tracking-[0.3em] font-light">
            {siteConfig.description}
          </p>
        </div>
      </section>
      {/* 紹介セクション */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#0EA5E9] font-bold mb-4">
          About Us
        </h2>
        <p className="text-3xl md:text-4xl font-semibold leading-tight mb-8">
          {siteConfig.englishName}
        </p>
        <div className="h-1 w-20 bg-[#0EA5E9] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          最新のテクノロジーと長年の経験を融合させ、
          <br className="hidden md:block" />
          お客様のビジネスに最適なソリューションを提供します。
        </p>
      </section>
      {/* 代表メッセージセクション */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-base p-10 md:p-16 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>

            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent"></span>
              Message
            </h2>

            <p className="text-xl italic leading-relaxed text-primary/80 mb-10 relative z-10">
              「{siteConfig.description}」
            </p>

            <div className="flex items-center justify-end gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Representative</p>
                <p className="text-xl font-bold tracking-wider">
                  {siteConfig.ownerName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
