"use client";

import { useEffect } from 'react';
import { siteConfig } from "@/config/site";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import NavList from "@/components/NavList";
import ContactButton from "@/components/ContactButton";
import HamburgerButton from "@/components/HamburgerButton";
import LogoCI from "@/components/LogoCI";


interface HeaderProps  {
	className? : string;
		isOpen: boolean;
        setIsOpen: Dispatch<SetStateAction<boolean>>;
		isPosTop: boolean;
        isDarkBg: boolean;
		shouldAnimate: boolean;
  isFirstAccess: boolean;
}

export const Header = ({
	className,
	isOpen,
    setIsOpen,
	isPosTop,
    isDarkBg,
	shouldAnimate,
  isFirstAccess,
}: HeaderProps) => {

  const navTextColor = isDarkBg ? "text-clr-base-2" : "text-clr-main-1/80";
  const ciLogoTextColor = isDarkBg ? "text-clr-base-2" : "text-clr-main-1/50";
  const hamburgerTextChangeColor = isDarkBg && !isOpen ? "text-clr-base-2" : "text-clr-main-1/80";
  const hamburgerBorderChangeColor = isDarkBg && !isOpen ? "border-clr-base-2/30" : "border-clr-main-1/30";
  const hamburgerLineColorTop = isOpen ? "rotate-45 translate-y-2 text-clr-main-1/80 ml-2" : navTextColor;
  const hamburgerLineColorMiddle = isOpen ? "hidden" : navTextColor;
  const hamburgerLineColorBottom = isOpen
    ? "-rotate-45 -translate-y-2 text-clr-main-1/80"
    : navTextColor;
  const headerBorderColor = isDarkBg
  	? (isPosTop ? "border-b-transparent" : "border-b-clr-base-1/10")
  	: "border-b-clr-main-1/10";
	const borderWeight = "border-b-0 md:border-b-0";





useEffect(() => {
  if (isOpen) {
    // 🚀 <html> タグ全体をロックし、スマホのタッチ操作（スクロール）を根こそぎフリーズさせる
    document.documentElement.classList.add('overflow-hidden', 'touch-none');
  } else {
    document.documentElement.classList.remove('overflow-hidden', 'touch-none');
  }

  return () => {
    document.documentElement.classList.remove('overflow-hidden', 'touch-none');
  };
}, [isOpen]);



  return (

  <header
    id="header-section"
    className={`absolute top-3 left-0 lg:fixed lg:top-0 w-full flex flex-col items-center justify-center transition-all h-15 lg:h-20 pointer-events-none
		${borderWeight} ${headerBorderColor}
	${
	shouldAnimate && isFirstAccess ? "header-appearance" : "header-appearance-fast"
    }
	 ${className}`}
  >


    <HamburgerButton
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
	  hamburgerTextChangeColor={hamburgerTextChangeColor}
      hamburgerBorderChangeColor={hamburgerBorderChangeColor}
      hamburgerLineColorTop={hamburgerLineColorTop}
      hamburgerLineColorMiddle={hamburgerLineColorMiddle}
      hamburgerLineColorBottom={hamburgerLineColorBottom}
	  className="z-[10000] pointer-events-auto"
    />


<div
  className={`fixed top-0 right-0 bottom-0 w-[100%] sm:w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] max-w-[500px] bg-clr-base-2/90 backdrop-blur-xl z-[9000] transition-transform duration-500 ease-out flex flex-col items-center justify-center pointer-events-auto ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* 背景の極細サイバーノイズライン */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

  {/* ロゴスペース：画面幅に応じて自然にスケール */}
  <Link
    href="/"
    className="flex flex-col items-center justify-center w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] max-w-[260px] mb-16 overflow-visible transition-transform duration-300 hover:scale-105"
  >
    <LogoCI className="text-clr-main-1 overflow-visible w-full h-auto" 
      stroke="currentColor" 
      strokeWidth="0"
      uniqueId="header"
    />
  </Link>

  {/* ナビゲーションリスト：スクロール可能にして画面縦が狭い端末にも対応 */}
  <div className="w-full max-w-[320px] mb-12 overflow-y-auto max-h-[55vh] px-6">
    <NavList isMobile={true} /> {/* 💡 常にドロワーなので true で統一します */}
  </div>

  {/* コンタクトボタン：常に表示し、クリックしやすい横幅に */}
  <ContactButton className="block mx-auto w-[65%] max-w-[260px] shadow-[0_0_30px_rgba(var(--clr-primary-1-rgb),0.2)] transition-transform active:scale-95"/>
</div>
  </header>

  );
};