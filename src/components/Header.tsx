"use client";

import { siteConfig } from "@/config/site";
import { useAutoAnimate } from "./hooks/useAutoAnimate";
import { useHeaderVisual } from "./hooks/useHeaderVisual"; // 自作フック
import Link from "next/link";
import Logo from "./Logo";
import NavList from "@/components/NavList";
import ContactButton from "@/components/ContactButton";
import HamburgerButton from "@/components/HamburgerButton";

interface HeaderProps  {
	className? : string;
}

export const Header = ({
	className
}: HeaderProps) => {
  //画面スクロール連動フェードインアニメーション
//   useAutoAnimate();

  const { isOpen, setIsOpen, isDarkBg, isPosTop } = useHeaderVisual();

  // 色の定義を「変数」としてまとめておくと、JSXがスッキリします
  const navTextColor = isDarkBg ? "text-clr-base-2" : "text-clr-main-1/80";
  const ciLogoTextColor = isDarkBg ? "text-clr-base-2" : "text-clr-main-1/50";
  const borderChangeColor = isDarkBg && !isOpen ? "border-clr-base-2/30" : "border-clr-main-1/30";
  const lineColorTop = isOpen ? "rotate-45 translate-y-2 baseColor" : navTextColor;
  const lineColorMiddle = isOpen ? "hidden" : navTextColor;
  const lineColorBottom = isOpen
    ? "-rotate-45 -translate-y-2 baseColor"
    : navTextColor;
  // スクロール時のborder-bのちらつき防止のために、切り替え時、透明度を変化させる
  const headerBorderColor = isDarkBg
  	? (isPosTop ? "border-b-transparent" : "border-b-clr-base-1/10")
  	: "border-b-clr-main-1/10";
	// スクロール時のborder-bのちらつき防止のために、スマホでは 0、PCでは 1px と明示的に分ける
	const borderWeight = "border-b-0 md:border-b-[1px]";

  return (

  <header
    id="header-section"
    className={`absolute top-3 left-0 lg:fixed lg:top-0 w-full z-50 flex flex-col items-center justify-center transition-all h-15 lg:h-20
		${borderWeight} ${headerBorderColor}
	${
      isPosTop ? "bg-transparent" : "lg:backdrop-blur-xl"
    }
	header-appearance
	`}
  >
    {/* 1. メインバー（ロゴ・PCナビ・ボタン） */}
    <div className="relative w-full max-w-7xl mx-auto pl-3 lg:px-8 flex items-center justify-between h-15 lg:h-15 z-999">
      {/* CIロゴ部分 */}
      <div className="block static relative h-full">
        <Link href="/" className="h-full flex items-start lg:items-center">
          <span className={`font-zen-kaku !leading-[1] ${ciLogoTextColor}`}>
            <span className="text-base !leading-[1] lg:text-lg font-[900] pb-1">
              {siteConfig.companyName1}
            </span>
            <br />
            <span className="block text-sm font-[500] pt-0 lg:mt-0 italic">
              {siteConfig.enCompamyName}
            </span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-6">
          <NavList navTextColor={navTextColor} />
        </nav>
        <ContactButton className="hidden lg:inline-flex" />
      </div>
    </div>

    {/* 2. ハンバーガーボタン（header内部に移動） */}
    <HamburgerButton
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      borderChangeColor={borderChangeColor}
      lineColorTop={lineColorTop}
      lineColorMiddle={lineColorMiddle}
      lineColorBottom={lineColorBottom}
	  className="z-10000"
    />

    {/* 3. スマホメニュー（header内部に移動） */}
    <div
      className={`fixed top-0 right-0 bottom-0 w-[100%] bg-clr-base-2/95 z-9000 transition-transform duration-300 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
			{/* スマホ版CIロゴ部分 */}
      <Link
        href="/"
        className="flex flex-col items-center justify-center pt-4 pb-[18px] mb-6 border-b-[1px] border-clr-main-1/10 overflow-visible"
      >
        <span className="font-zen-kaku !leading-[1] text-center text-clr-main-1/50">
          <span className="text-base font-[900] pb-1 whitespace-pre-wrap">
            {siteConfig.companyName1}
          </span>
          <br />
          <span className="block !leading-[1] text-xs italic text-center font-[500] pt-1 lg:mt-0">
            {siteConfig.enCompamyName}
          </span>
        </span>
      </Link>
      <NavList isMobile={true} />
			<ContactButton className="block mx-auto w-[50%] lg:hidden"/>
    </div>
  </header>

  );
};