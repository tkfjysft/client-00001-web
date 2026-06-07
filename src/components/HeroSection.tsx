"use client";

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { siteConfig } from "@/config/site";
import { useEffect, useRef, useState } from 'react';
import { HeroParticles } from "@/components/HeroParticles";
import { HeroAnimatedChar } from "@/components/HeroAnimatedChar";
import { HeroAnimatedChar_02 } from "@/components/HeroAnimatedChar_02";
import { FaceSilhouette } from "@/components/FaceSilhouette";
import CyberCircleD from "@/components/CyberCircleD";
import CyberCircleF from "@/components/CyberCircleF";
import LogoCI from "@/components/LogoCI";



interface HeroSectionProps  {
	className? : string;
	shouldAnimate: boolean;
  isFirstAccess: boolean;
}



export default function HeroSection ({
	className,
	shouldAnimate,
	isFirstAccess,
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


  


// const [shouldAnimate, setShouldAnimate] = useState(false);

// useEffect(() => {
//   // リロードした瞬間のスクロール位置を確認
//   if (window.scrollY === 0) {
//     setShouldAnimate(true);
//   }
// }, []);






// // 初回かどうかを判定するステート（初期値は true = アニメーションする）
//   const [isFirstAccess, setIsFirstAccess] = useState<boolean | null>(null);

//   useEffect(() => {
//     // ブラウザ環境（window）が存在するか確認
//     const hasVisited = sessionStorage.getItem("has_seen_hero_anime");

//     if (hasVisited) {
//       // 2回目以降アクセスの場合は false にする
//       setIsFirstAccess(false);
//     } else {
//       // 初回アクセスの場合はメモ帳に記録を残し、true にする
//       sessionStorage.setItem("has_seen_hero_anime", "true");
//       setIsFirstAccess(true);
//     }
//   }, []);

//   // サーバーサイドとクライアントサイドでの表示のズレ（ハイドレーションエラー）を防ぐため、
//   // 状態が確定するまでは要素を隠すか、静的な状態にしておきます
//   if (isFirstAccess === null) {
//     return <div className="min-h-screen bg-black" />; // 読み込み中の一瞬のチラつき防止
//   }

  // 1回目用の「派手な初期状態」と、2回目用の「最初から表示された初期状態」を切り替える
  const initialAnimation = isFirstAccess
    ? { opacity: 0, y: -100, scale: 0.8, rotateX: -45 } // 1回目の派手な演出
    : { opacity: 1, y: 0, scale: 1, rotateX: 0 };       // 2回目以降は即表示


return (
	<>
  <section data-bg="dark" id="hero-section" className={`relative w-full h-[100dvh] flex items-center justify-center overflow-hidden ${className}`}>

		{/* --- isClient が true になってから中身を描画する --- */}
    {isClient && (
    <>

    {/* 背景グリッド */}
    <div className={`fixed inset-0 top-0 left-0 w-full h-screen -z-10 overflow-hidden bg-bgclr-startup-dark pointer-events-none
		${shouldAnimate && isFirstAccess ? "animate-bg-fadein" : "animate-bg-fadein-fast"}
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
      {shouldAnimate && isAnimating && isFirstAccess && <HeroParticles />}
    </div>

    {/* テキストレイヤー */}
    <div className="relative z-20 px-6 mt-[-9vh] pointer-events-none">
      <h1 className="text-clr-base-2 tracking-[-1] text-center" aria-label={siteConfig.heroTagline}>
		{(shouldAnimate && isFirstAccess) ? siteConfig.heroTagline.split("").map((char, index) => (
          <HeroAnimatedChar key={index} char={char} index={index} />
        ))
		:
		siteConfig.heroTagline.split("").map((char, index) => (
          <HeroAnimatedChar_02 key={index} char={char} index={index} />
        ))
		}
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


		{/* <img src={'/images/ci_logo_20.svg'} className={`absolute top-10 left-20 w-100 header-appearance
			${shouldAnimate && isFirstAccess ? "header-appearance" : "header-appearance-fast"}`} /> */}

      <div className="absolute top-10 left-20 w-100 max-w-[100px] md:max-w-[300px] flex fle-col items-center">
        <LogoCI className={`text-clr-base-1 overflow-visible ${shouldAnimate && isFirstAccess ? "header-appearance" : "header-appearance-fast"}`} 
          stroke="currentColor" 
          strokeWidth="0.5"
        />
      </div>

  </section>

        {/* ★ 暗くするタイミングを決めるターゲット要素（画面の下端付近に配置） */}
		
      {/* <div ref={triggerRef2} className=" mt-20 h-40 w-full"></div> */}
      {/* <div ref={triggerRef} className="mt-60 h-10 w-full"></div> */}
	  </>
);
};
