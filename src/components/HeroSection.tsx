"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import { HeroParticles } from "@/components/HeroParticles";
import { HeroAnimatedChar } from "@/components/HeroAnimatedChar";

const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isClient, setIsClient] = useState(false);

	useEffect(() => {
    // 1. クライアント側の準備ができたことを知らせる
    setIsClient(true);
    
    // 2. 3秒後にアニメーション演出を終了させるタイマー
    const timer = setTimeout(() => setIsAnimating(false), 3000);
    
    // 3. コンポーネントが消える時にタイマーを掃除する
    return () => clearTimeout(timer);
  }, []);

  // 背景画像（siteConfig にあればそこから、なければ整理してここに置く）
  const backgroundImages = siteConfig.heroImages || [
    "/images/hero_cording.webp",
    "/images/hero_meeting.webp",
    "/images/hero_office.webp",
    "/images/hero_ceo.webp",
    "/images/hero_whiteboard.webp",
    "/images/hero_serverroom.webp",
  ];

//Header.tsxの表示がおかしくなるので使わない
//   if (!isClient) return null; // クライアント側でのみ描画（ハイドレーション対策）

// Gridのクラスを返すヘルパー関数（これでJSXが劇的にスリム化）
const getGridClass = (idx: number) => {
//   const classes = [
//     "col-start-1 col-end-4 row-start-1 row-end-10   lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-9",
//     "col-start-1 col-end-3 row-start-10 row-end-12  lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-10",
//     "col-start-1 col-end-5 row-start-12 row-end-21 lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-12",

//     "col-start-4 col-end-4 row-start-1 row-end-10   lg:col-start-1 lg:col-end-3 lg:row-start-9 lg:row-end-9",
//     "col-start-3 col-end-6 row-start-10 row-end-12  lg:col-start-3 lg:col-end-6 lg:row-start-10 lg:row-end-13",
//     "col-start-5 col-end-5 row-start-12 row-end-21 lg:col-start-6 lg:col-end-8 lg:row-start-12 lg:row-end-12",

//     "col-start-4 col-end-8 row-start-1 row-end-10   lg:col-start-1 lg:col-end-3 lg:row-start-9 lg:row-end-21",
//     "col-start-6 col-end-8 row-start-10 row-end-12  lg:col-start-3 lg:col-end-6 lg:row-start-13 lg:row-end-21",
//     "col-start-5 col-end-8 row-start-12 row-end-21 lg:col-start-6 lg:col-end-8 lg:row-start-12 lg:row-end-21",
//   ];
  const classes = [
    "col-start-1 col-end-4 row-start-1 row-end-10   lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-10",
    "col-start-1 col-end-3 row-start-10 row-end-12  lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-10",
    "col-start-1 col-end-5 row-start-12 row-end-21  lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-10",

    "col-start-4 col-end-4 row-start-1 row-end-10   lg:col-start-1 lg:col-end-4 lg:row-start-10 lg:row-end-13",
    "col-start-3 col-end-6 row-start-10 row-end-12  lg:col-start-4 lg:col-end-6 lg:row-start-10 lg:row-end-13",
    "col-start-5 col-end-5 row-start-12 row-end-21  lg:col-start-6 lg:col-end-8 lg:row-start-10 lg:row-end-13",

    "col-start-4 col-end-8 row-start-1 row-end-10   lg:col-start-1 lg:col-end-3 lg:row-start-13 lg:row-end-21",
    "col-start-6 col-end-8 row-start-10 row-end-12  lg:col-start-3 lg:col-end-5 lg:row-start-13 lg:row-end-21",
    "col-start-5 col-end-8 row-start-12 row-end-21  lg:col-start-5 lg:col-end-8 lg:row-start-13 lg:row-end-21",
  ];
  return classes[idx] || "";
};

return (
  <section data-bg="dark" id="hero-section" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">

		{/* --- isClient が true になってから中身を描画する --- */}
    {isClient && (
    <>

    {/* 背景グリッド */}
    <div className="absolute inset-0 z-0 animate-bg-fadein" aria-hidden="true">
      <div className="grid grid-cols-7 grid-rows-20 w-full h-full gap-2 grid-container">
        {backgroundImages.map((src, idx) => (
          <div key={idx} className={`relative overflow-hidden ${getGridClass(idx)}`}>
            <div
              className={`w-full h-full bg-cover bg-center brightness-[0.6] contrast-[140%] ${idx === 3 ? 'h-[160%]' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        ))}
      </div>
    </div>

    {/* 粒子レイヤー */}
    <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden="true">
      {isAnimating && <HeroParticles />}
    </div>

    {/* テキストレイヤー */}
    <div className="relative z-20 text-center px-6 mt-[-9vh] pointer-events-none">
      <h1 className="text-clr-base-2 tracking-[-2]" aria-label={siteConfig.heroTagline}>
        {siteConfig.heroTagline.split("").map((char, index) => (
          <HeroAnimatedChar key={index} char={char} index={index} />
        ))}
      </h1>
    </div>
		</>
    )}
  </section>
);
};

export default HeroSection;