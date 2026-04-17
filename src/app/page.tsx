// src/app/page.tsx
"use client";

import { motion } from "framer-motion"; // ← これが必要です！
import { siteConfig } from "@/config/site";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  // 演出中（true）か、終了後（false）かを管理
  const [isAnimating, setIsAnimating] = useState(true);
  const items = Array.from({ length: 120 }, (_, i) => i);

  // 背景に使う写真の配列（4〜6枚程度がおすすめ）
  const backgroundImages = [
    "/images/hero_cording.webp", // 会議風景
    "/images/hero_meeting.webp", // コード画面
    "/images/hero_office.webp", // オフィス
    "/images/hero_ceo.webp", // PC操作
    "/images/hero_whiteboard.webp", // ホワイトボード
    "/images/hero_serverroom.webp", // デバイス
  ];

  useEffect(() => {
    // 文字が全部出終わるまで（1.8s + 文字数分）待つように少し延長
    const timer = setTimeout(() => setIsAnimating(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full bg-[#0F172A]">
      <section className="relative w-full h-[100dvh] flex items-center justify-center bg-[#0F172A] overflow-hidden">
        {/* --- 背景グリッドレイヤー --- */}
        <div className="absolute inset-0 z-0 animate-bg-fadein">
          {/* 写真のグリッド表示 */}
          <div className="grid grid-cols-2 md:grid-cols-3 w-full h-full gap-0">
            {backgroundImages.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full h-full overflow-hidden border-[0.5px] border-cyan-500/20"
              >
                <div
                  className="w-full h-full bg-cover bg-center contrast-[1.1]"
                  style={{
                    backgroundImage: `url(${src})`,
                    // grayscaleを削除し、青いフィルターを重ねる
                    filter:
                      "sepia(60%) hue-rotate(80deg) saturate(40%) brightness(0.6)",
                    // "sepia(100%) hue-rotate(190deg) saturate(150%) brightness(0.7)",
                  }}
                />
                {/* 写真の上に、さらに薄い青色の膜を張る */}
                <div className="absolute inset-0 bg-[#1e3a8a]/30 mix-blend-overlay" />
              </div>
            ))}
          </div>

          {/* 下部のグラデーションも「黒」ではなく「深い青」へ */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/40 via-transparent to-[#0f172a]/80" />

          {/* さらに質感を出すためのドットパターン（お好みで） */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(#22d3ee 0.5px, transparent 0.5px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        {/* 粒子レイヤー */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {/* --- 粒子（収束アニメーション） --- */}
          {isAnimating && (
            <div className="relative w-0 h-0">
              {items.map((i) => {
                const angle = i * 137.5;
                const radius = Math.sqrt(i) * 35;
                const sx = Math.cos(angle * (Math.PI / 180)) * radius;
                const sy = Math.sin(angle * (Math.PI / 180)) * radius;
                return (
                  <div
                    key={`p-${i}`}
                    className="particle"
                    style={
                      {
                        width: `${(i % 5) + 2}px`,
                        height: `${(i % 5) + 2}px`,
                        left: `${sx}px`,
                        top: `${sy}px`,
                        animationDelay: `${(i % 50) * 0.06}s`, // 少し速く
                        "--sx": `${sx}px`,
                        "--sy": `${sy}px`,
                      } as any
                    }
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* テキストレイヤー */}
        {/* --- テキストレイヤー --- */}
        <div
          className="relative z-20 text-center px-6 pointer-events-none"
          style={{ perspective: "1000px" }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-10">
            {siteConfig.heroTagline.split("").map((char, index) => {
              const angle = Math.random() * Math.PI * 2;
              const dist = 1200; // 飛来距離を少し伸ばしてスピード感を強調
              const fx = Math.cos(angle) * dist;
              const fy = Math.sin(angle) * dist;
              return (
                <span
                  key={`ht-${index}`}
                  className="animate-char-fly"
                  style={
                    {
                      /* 1.0s 開始だったのを 0.3s に大幅前倒し。
                       粒子が「パッ」と出た直後から文字が飛び込み始めます。
                    */
                      animationDelay: `${0.3 + index * 0.05}s`,
                      "--fx": `${fx}px`,
                      "--fy": `${fy}px`,
                    } as any
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </h1>

          <div className="space-y-4">
            {/* 全体のテンポに合わせて日本語の出現も早めます */}
            <p className="text-cyan-400 text-lg md:text-2xl tracking-[0.2em] font-medium">
              {siteConfig.description1.split("").map((char, index) => (
                <span
                  key={`d1-${index}`}
                  className="char-fade"
                  style={{ animationDelay: `${2.2 + index * 0.04}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
            <p className="text-white/60 text-sm md:text-lg tracking-[0.1em] font-light">
              {siteConfig.description2.split("").map((char, index) => (
                <span
                  key={`d2-${index}`}
                  className="char-fade"
                  style={{ animationDelay: `${3.2 + index * 0.04}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
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
