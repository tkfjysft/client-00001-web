"use client";

import { siteConfig } from "@/config/site";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import NavList from "@/components/NavList";
import ContactButton from "@/components/ContactButton";
import HamburgerButton from "@/components/HamburgerButton";

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

  return (

  <header
    id="header-section"
    className={`absolute top-3 left-0 lg:fixed lg:top-0 w-full flex flex-col items-center justify-center transition-all h-15 lg:h-20
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
	  className="z-10000"
    />


    <div
      className={`fixed top-0 right-0 bottom-0 w-[100%] bg-clr-base-2/95 z-9000 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >

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