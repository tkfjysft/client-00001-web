'use client';

import { useState, useEffect } from 'react';

interface ScrollToTopProps {
	className?: string;
}

export default function ScrollToTop({
	className
}:ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const x = window.innerWidth / 2; 
      const y = window.innerHeight - 40; 
      const elements = document.elementsFromPoint(x, y);
      
      const section = elements.find((el) => el.closest("[data-bg]"))?.closest("[data-bg]");
      const bgType = section?.getAttribute("data-bg")?.trim();
      const sectionType = (elements.find((el) => el.closest("[id]"))?.closest("[id]"))?.getAttribute("id")?.trim();

      setIsDarkBg(bgType === "dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const colors = isDarkBg
    ? "bg-clr-base-1 text-clr-main-1" 
    : "bg-clr-main-1 text-clr-base-1";

  return (
    <button
      onClick={scrollToTop}
      aria-label="ページ最上部へ戻る"
      className={`
        fixed bottom-0 right-0 flex items-end justify-end cursor-pointer
        w-24 h-24 p-0 transition-all duration-500 ease-in-out
        [clip-path:polygon(100%_0,100%_100%,0_100%)]
        hover:translate-x-1 hover:translate-y-1
        ${colors}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        ${className}`}
    >
      <span className="absolute bottom-6 right-[-40px] block w-[150px] text-center transform -rotate-45 text-[12px] font-bold transition-transform duration-300 hover:scale-110">
        Page Top
      </span>
    </button>
  );
}