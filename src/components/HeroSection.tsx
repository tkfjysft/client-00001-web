// src/app/page.tsx
"use client";

// import { motion } from "framer-motion"; // ← これが必要です！
import { siteConfig } from "@/config/site";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  // 演出中（true）か、終了後（false）かを管理
  const [isAnimating, setIsAnimating] = useState(true);
  const items = Array.from({ length: 120 }, (_, i) => i);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

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
    <section
      data-bg="dark"
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* --- 背景グリッドレイヤー --- */}
      <div className="absolute inset-0 z-0 animate-bg-fadein">
        {/* 写真のグリッド表示 */}
        <div className="grid grid-cols-2 md:grid-cols-3 w-full h-full gap-0">
          {backgroundImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-full overflow-hidden border-[0.5px] border-clr-main-1"
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
              <div className="absolute inset-0 bg-clr-main-1/30 mix-blend-overlay" />
            </div>
          ))}
        </div>

        {/* 下部のグラデーションも「黒」ではなく「深い青」へ */}
        <div className="absolute inset-0 bg-gradient-to-b from-clr-main-1/40 via-transparent to-clr-main-1/80" />
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
                  suppressHydrationWarning={true} // ← ここにも追加！
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
        <h1 className="text-clr-base-2 text-5xl md:text-7xl font-extrabold tracking-tighter mb-10 drop-shadow-[0_2px_4px_var(--color-clr-main-2)]">
          {siteConfig.heroTagline.split("").map((char, index) => {
            // 1. もし文字が「/」だったら、改行ポイントを返す
            if (char === "/" || char === "/ ") {
              return <wbr key={`wbr-${index}`} />;
            }

            // 2. それ以外の普通の文字は、今まで通りアニメーション付きのspanで返す

            const angle = Math.random() * Math.PI * 2;
            const dist = 1200; // 飛来距離を少し伸ばしてスピード感を強調
            const fx = Math.cos(angle) * dist;
            const fy = Math.sin(angle) * dist;
            return (
              <span
                key={`ht-${index}`}
                className="animate-char-fly inline-block"
                suppressHydrationWarning={true}
                style={
                  {
                    /* 1.0s 開始だったのを 0.3s に大幅前倒し。
                       粒子が「パッ」と出た直後から文字が飛び込み始めます。
                    */
                    animationDelay: `${0.3 + index * 0.05}s`,
                    "--fx": `${fx}px`,
                    "--fy": `${fy}px`,
                    whiteSpace: "normal",
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
          {/* 背景だけを少し暗くし、ぼかすレイヤー */}
          <p className="text-clr-base-1/80 md:text-2xl font-bold drop-shadow-[0_2px_4px_var(--color-clr-main-2)]">
            {siteConfig.description1.split("").map((char, index) => {
              // 1. もし文字が「/」だったら、改行ポイントを返す
              if (char === "/") {
                return <wbr key={`wbr-${index}`} />;
              }
              // 2. それ以外の普通の文字は、今まで通りアニメーション付きのspanで返す
              return (
                <span
                  key={`d1-${index}`}
                  className="char-fade inline-block"
                  style={{
                    animationDelay: `${1 + index * 0.04}s`,
                    whiteSpace: "normal",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
