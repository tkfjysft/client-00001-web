// src/components/HeaderNavigation.tsx
"use client";

import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { useHeaderVisual } from "@/components/hooks/useHeaderVisual";

export default function HeaderNavigation() {
  const { 
    isOpen, 
    setIsOpen, 
    isDarkBg, 
    isPosTop, 
    shouldAnimate, 
    isFirstAccess, 
  } = useHeaderVisual();

  // 読み込み中のチラつき防止
  if (isFirstAccess === null) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <>
      <Header className="z-[100]" 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isPosTop={isPosTop}
        isDarkBg={isDarkBg}
        shouldAnimate={shouldAnimate}
        isFirstAccess={isFirstAccess}
    />
      <HeroSection
        shouldAnimate={shouldAnimate}
        isFirstAccess={isFirstAccess}
     />
    </>
  );
}



