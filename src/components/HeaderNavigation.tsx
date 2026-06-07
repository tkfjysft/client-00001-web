"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    if (isFirstAccess === null || (shouldAnimate && isFirstAccess)) {
      document.body.classList.add("bg-bgclr-startup-dark");
    } else {
      document.body.classList.remove("bg-bgclr-startup-dark");
    }

    return () => {
      document.body.classList.remove("bg-bgclr-startup-dark");
    };
  }, [isFirstAccess, shouldAnimate]);

  if (isFirstAccess === null) {
    return <div className="min-h-screen bg-bgclr-startup-dark" />; 
  }


  
  if (isFirstAccess === null) {
    return <div className="min-h-screen bg-black" />;
  }




  
  return (
    <>
      <Header className="z-[50]" 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isPosTop={isPosTop}
        isDarkBg={isDarkBg}
        shouldAnimate={shouldAnimate}
        isFirstAccess={isFirstAccess}
    />
      <HeroSection className={`z-[10] ${isOpen ? "pointer-events-none" : "block"}`} 
        shouldAnimate={shouldAnimate}
        isFirstAccess={isFirstAccess}
     />
    </>
  );
}



