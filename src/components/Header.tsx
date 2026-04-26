"use client";

import { siteConfig } from "@/config/site";
import { useAutoAnimate } from "./hooks/useAutoAnimate";
import { useHeaderVisual } from "./hooks/useHeaderVisual"; // 自作フック
import Link from "next/link";
import Logo from "./Logo";
import NavList from "@/components/NavList";
import ContactButton from "@/components/ContactButton";
import HamburgerButton from "@/components/HamburgerButton";

export const Header = () => {
  useAutoAnimate();
  const { isOpen, setIsOpen, isDarkBg, isPosTop } = useHeaderVisual();

  // 色の定義を「変数」としてまとめておくと、JSXがスッキリします
  const navTextColor = isDarkBg ? "text-clr-base-2" : "text-clr-main-1";
  const ciLogoTextColor = isDarkBg ? "text-clr-base-2" : "text-clr-main-1/50";
  const borderChangeColor = isDarkBg && !isOpen ? "border-clr-base-2/30" : "border-clr-main-1/30";
  const lineColorTop = isOpen ? "rotate-45 translate-y-2 baseColor" : navTextColor;
  const lineColorMiddle = isOpen ? "hidden" : navTextColor;
  const lineColorBottom = isOpen
    ? "-rotate-45 -translate-y-2 baseColor"
    : navTextColor;

  return (
    <>
      <header id="header-section" className={`absolute top-3 left-0 lg:fixed lg:top-0 w-full z-50 flex flex-col items-center justify-center transition-all
		h-15 lg:h-20
		 ${isPosTop ? "bg-transparent" : "lg:backdrop-blur-xl"}`}>
        <div className="relative w-full max-w-7xl mx-auto pl-3 lg:px-8 flex items-center justify-between h-15 lg:h-15 z-99999">
          {/* ロゴ部分 */}
          <div className={`block static relative h-full`}>
            <Link
              href="/"
              className={`h-full flex items-start lg:items-center`}
            >
              <span
                className={`font-zen-kaku leading-[0.5] ${ciLogoTextColor}`}
              >
                <span className={`text-base lg:text-lg font-[900] pb-1`}>
                  {siteConfig.companyName1}
                </span>
                <br />
                <span
                  className={`block text-sm font-[500] pt-0 lg:mt-0 italic`}
                >
                  {siteConfig.enCompamyName}
                </span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-6">
              {/* 部品を呼び出す（PC版） */}
              <NavList navTextColor={navTextColor} />
            </nav>
            <ContactButton /> {/* お問い合わせボタンも部品化するとスッキリ */}
          </div>
        </div>
      </header>

      {/* ハンバーガーボタン */}
      <HamburgerButton isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} borderChangeColor={borderChangeColor} />

      {/* スマホメニュー */}
      <div className={`fixed top-0 right-0 bottom-0 z-[100] w-[80%] bg-clr-base-2/95 z-400 transition-transform duration-300 lg:hidden
		${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <NavList isMobile={true} />
      </div>
    </>
  );
};