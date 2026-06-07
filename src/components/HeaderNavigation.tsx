// src/components/HeaderNavigation.tsx
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

    // 💡 ここに body のクラスを動的にコントロールする処理を追加
  useEffect(() => {
    // ロード中、または初回アクセスのアニメーション中だけ body に背景色をつける
    if (isFirstAccess === null || (shouldAnimate && isFirstAccess)) {
      document.body.classList.add("bg-bgclr-startup-dark");
    } else {
      // アニメーションが終わったら、アドレスバーに干渉しないように綺麗さっぱり消す
      document.body.classList.remove("bg-bgclr-startup-dark");
    }

    // クリーンアップ処理（コンポーネントが消えるとき用）
    return () => {
      document.body.classList.remove("bg-bgclr-startup-dark");
    };
  }, [isFirstAccess, shouldAnimate]);

  if (isFirstAccess === null) {
    return <div className="min-h-screen bg-bgclr-startup-dark" />; // 💡 チラつき防止用のここには色を残す
  }


  
  // 読み込み中のチラつき防止
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



