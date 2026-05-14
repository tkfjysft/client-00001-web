"use client";

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { siteConfig } from "@/config/site";
import { useEffect, useRef, useState } from 'react';
import { HeroParticles } from "@/components/HeroParticles";
import { HeroAnimatedChar } from "@/components/HeroAnimatedChar";
import { FaceSilhouette } from "@/components/FaceSilhouette";
import CyberCircleD from "@/components/CyberCircleD";
import CyberCircleF from "@/components/CyberCircleF";


interface HeroSectionProps  {
	className? : string;
}



export default function HeroSection ({
	className
}: HeroSectionProps) {
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



//スクロールしたら、背景画像のptかつpbの値を動的に変化させる
//and、スクロールしたら背景を暗くする
const [isNarrow, setIsNarrow] = useState(false);
const [isDark, setIsDark] = useState(false);

  // スクロール位置を取得
  const { scrollY } = useScroll();

  // scrollY の値が変化した時に実行されるイベント
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      // 300px以上スクロールしたら true
      if (!isNarrow) setIsNarrow(true);
    } else {
      // 300px未満に戻ったら false
      if (isNarrow) setIsNarrow(false);
    }

    if (latest > 300) {
      // 300px以上スクロールしたら true
      if (!isDark) setIsDark(true);
    } else {
      // 300px未満に戻ったら false
      if (isDark) setIsDark(false);
    }
  });



useEffect(() => {
  console.log("現在の状態:", { dark: isDark, narrow: isNarrow });
}, [isDark, isNarrow]);


  


const [shouldAnimate, setShouldAnimate] = useState(false);

useEffect(() => {
  // リロードした瞬間のスクロール位置を確認
  if (window.scrollY === 0) {
    setShouldAnimate(true);
  }
}, []);





return (
	<>
  <section data-bg="dark" id="hero-section" className={`relative w-full h-[100dvh] flex items-center justify-center overflow-hidden ${className}`}>

		{/* --- isClient が true になってから中身を描画する --- */}
    {isClient && (
    <>

    {/* 背景グリッド */}
    <div className={`fixed inset-0 top-0 left-0 w-full h-screen -z-10 overflow-hidden bg-bgclr-startup-dark pointer-events-none
		${shouldAnimate ? "animate-bg-fadein" : "animate-bg-fadein-fast"}
		`} aria-hidden="true">



{/* 上段：左から右へ */}
    {/* <div className="flex h-1/2 w-[200%] animate-slide-slow-forward">
      <div className="flex w-1/2 justify-around">
        <img src="/images/hero_cording.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pb-1" : "pb-20"}
			`} />
        <img src="/images/hero_meeting.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pb-1" : "pb-20"}
			`}  />
        <img src="/images/hero_office.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pb-1" : "pb-20"}
			`}  />
      </div>
      <div className="flex w-1/2 justify-around">
        <img src="/images/hero_cording.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pb-1" : "pb-20"}
			`}  />
        <img src="/images/hero_meeting.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pb-1" : "pb-20"}
			`}  />
        <img src="/images/hero_office.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pb-1" : "pb-20"}
			`}  />
      </div>
    </div> */}

    {/* 下段：右から左へ */}
    {/* <div className="flex h-1/2 w-[200%] animate-slide-slow-backward">
      <div className="flex w-1/2 justify-around">
        <img src="/images/hero_ceo.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pt-1" : "pt-20"}
			`}  />
        <img src="/images/hero_whiteboard.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pt-1" : "pt-20"}
			`}  />
        <img src="/images/hero_serverroom.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pt-1" : "pt-20"}
			`}  />
      </div>
      <div className="flex w-1/2 justify-around">
        <img src="/images/hero_ceo.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pt-1" : "pt-20"}
			`}  />
        <img src="/images/hero_whiteboard.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pt-1" : "pt-20"}
			`}  />
        <img src="/images/hero_serverroom.webp" className={`w-1/3 h-full object-cover brightness-[0.6] contrast-[140%] px-1 transition-all duration-700 ease-in-out
			${isNarrow ? "pt-1" : "pt-20"}
			`}  />
      </div>
    </div>     */}
	
			<CyberCircleF className={`absolute inset-0 m-auto w-fit h-fit`} classNameSvg="size-200 text-clr-primary-1/52 z-20" />

	        {/* ★ 暗くするための膜：isDark が true になると不透明度が上がる */}
        <div 
          className={`absolute inset-0 bg-clr-main-1 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            isDark ? 'opacity-50' : 'opacity-0'
          }`}
        />
	



	</div>

    {/* 粒子レイヤー */}
    <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden="true">
      {shouldAnimate && isAnimating && <HeroParticles />}
    </div>

    {/* テキストレイヤー */}
    <div className="relative z-20 px-6 mt-[-9vh] pointer-events-none">
      <h1 className="text-clr-base-2 tracking-[-1] text-center" aria-label={siteConfig.heroTagline}>
		{siteConfig.heroTagline.split("").map((char, index) => (
          <HeroAnimatedChar key={index} char={char} index={index} />
        ))}
		{/* {shouldAnimate ? (
        siteConfig.heroTagline.split("").map((char, index) => (
          <HeroAnimatedChar key={index} char={char} index={index} />
        ))
		
	):(
		siteConfig.heroTagline
		)} */}
      </h1>
    </div>
		</>
    )}



		{/* <FaceSilhouette startColor="color-mix(in srgb, var(--color-clr-main-1), white 50%)" endColor="var(--color-clr-main-1)" flip={true}
		className='absolute top-20 left-20' size='w-64' /> */}

		{/* <FaceSilhouette startColor="color-mix(in srgb, var(--color-clr-main-1), white 20%)" endColor="var(--color-clr-base-1)" 
		className='absolute bottom-0 right-10' size='w-70' /> */}

			{/* <CyberCircleF className={`absolute inset-0 m-auto w-fit h-fit`} classNameSvg="size-200 text-clr-primary-1/52 z-20" /> */}
			{/* <CyberCircleF className={`absolute right-20 bottom-80`} classNameSvg="size-30 text-clr-primary-1/52 z-20" />
			<CyberCircleF className={`absolute right-40 bottom-90`} classNameSvg="size-50 text-clr-primary-1/52 z-20" />
			<CyberCircleF className={`absolute right-35 bottom-140`} classNameSvg="size-20 text-clr-primary-1/52 z-20" /> */}


		<img src={'/images/ci_logo_10.svg'} className='absolute top-10 left-20 w-100' />


  </section>

        {/* ★ 暗くするタイミングを決めるターゲット要素（画面の下端付近に配置） */}
		
      {/* <div ref={triggerRef2} className=" mt-20 h-40 w-full"></div> */}
      {/* <div ref={triggerRef} className="mt-60 h-10 w-full"></div> */}
	  </>
);
};
