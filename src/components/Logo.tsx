"use client";

import { useState, useEffect } from "react";

interface LogoProps {
  isOpen?: boolean; 
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ isOpen, className, style }: LogoProps) {
  const gradientId = "logo-gradient-balanced";

  const [isDarkBg, setIsDarkBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const x = window.innerWidth / 2;
      const y = 100;

      const elements = document.elementsFromPoint(x, y);
      const section = elements
        .find((el) => el.closest("[data-bg]"))
        ?.closest("[data-bg]");

      const bgType = section?.getAttribute("data-bg")?.trim();


      if (bgType === "dark") {
        setIsDarkBg(true);
			  console.log('isOpenの値__. ' + isOpen);

      } else {
        setIsDarkBg(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextColor = isDarkBg
  ? isOpen
    ? "text-clr-main-1/70 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]"
	:
	"text-clr-base-2/70 [text-shadow:_1px_1px_10px_rgba(38,48,118,0.5),_-1px_-1px_10px_rgba(38,48,118,0.5),_1px_-1px_10px_rgba(38,48,118,0.5),_-1px_1px_10px_rgba(38,48,118,0.5)]"
    : "text-clr-main-1/70 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]";

	console.log('Logo内での生の状態確認:', isOpen);


const hamburgerBorderChangeColor = isOpen 
  ? "border-clr-main-1/20"  
  : isDarkBg 
    ? "border-clr-base-1/20" 
    : "border-clr-main-1/20";
	
  const ciLogoTextColor = isDarkBg
  ?isOpen
  ? "text-clr-main-2 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]"
  : "text-clr-base-2 [text-shadow:_1px_1px_10px_rgba(38,48,118,0.5),_-1px_-1px_10px_rgba(38,48,118,0.5),_1px_-1px_10px_rgba(38,48,118,0.5),_-1px_1px_10px_rgba(38,48,118,0.5)]"
    : "text-clr-main-2 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]";

  return (

<>
	<span className={`font-zen leading-[0.5] text-center md:text-left italic ${ciLogoTextColor}`}>
	<span className={`text-sm md:text-lg md:border-b-1 ${hamburgerBorderChangeColor} font-[900] pb-1 md:tracking-widest`}>マインドシフトシステムズ<br className="md:hidden"/>株式会社</span><br />
	<span className={`block text-xs font-[500] pt-1 mt-1 border-t-1 md:pt-2 md:mt-0 md:border-0 ${hamburgerBorderChangeColor}`}>&nbsp;MindShiftSystems</span>
	</span>
	</>
  );
};
