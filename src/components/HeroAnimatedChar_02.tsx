"use client";

import { useEffect, useState } from "react";

interface HeroAnimatedChar_02Props {
  char: string;
  index: number; 
}

export const HeroAnimatedChar_02 = ({ char, index }: HeroAnimatedChar_02Props) => {
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);


  if (char === "/" || char === "/ ") {
    return <br key={`wbr-${index}`} />;
  }

  const angle = Math.random() * Math.PI * 2;
  const dist = 1200; 
  const fx = Math.cos(angle) * dist;
  const fy = Math.sin(angle) * dist;

  const subsequentStyle = isMounted && typeof window !== "undefined" && sessionStorage.getItem("has_seen_hero_anime")
    ? {
        animation: "none", 
        opacity: 1,
        transform: "translateY(0px)",
        transition: "opacity 1.2s ease-out, transform 0.6s ease-out",
        transitionDelay: `${0.05 + index * 0.04}s`,
        animationDelay: "0s",
      }
    : {
        animation: "none", 
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 1.2s ease-out, transform 0.6s ease-out",
        transitionDelay: `${0.05 + index * 0.04}s`,
        animationDelay: "0s",
      };

  return (
    <span
      key={`ht-${index}`}
      className={`animate-char-fly inline-block text-center
      ${(char.match(/^[a-z\s]/i)) ? "hero-maintext font-[500]" : "font-zen hero-description font-[900]"}
      ${(char === "M" || char === "S") ? "hero-big-maintext text-clr-primary-3" : ""}
      
      [html[data-visitor='subsequent']_&]:opacity-100
      [html[data-visitor='subsequent']_&]:transform-none
      `}
      suppressHydrationWarning={true}
      aria-hidden="true"
      style={
        {
          "--fx": `${fx}px`,
          "--fy": `${fy}px`,
          whiteSpace: "normal",
          
          ...subsequentStyle
        } as any
      }
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
};