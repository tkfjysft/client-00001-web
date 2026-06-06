"use client";

import { useEffect, useState } from "react";

interface HeroAnimatedChar_02Props {
  char: string;
  index: number; 
}

export const HeroAnimatedChar_02 = ({ char, index }: HeroAnimatedChar_02Props) => {
  // 💡 ハイドレーションエラー（画面のガタつき）を防ぐためのフラグ
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    // 💡 50ミリ秒だけわざと遅らせて、最初は確実に「透明な状態」を画面に作ります
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);


  // 1. もし文字が「/」だったら、改行ポイントを返す（元のまま）
  if (char === "/" || char === "/ ") {
    return <br key={`wbr-${index}`} />;
  }

  // 2. それ以外の普通の文字の計算（元のまま）
  const angle = Math.random() * Math.PI * 2;
  const dist = 1200; 
  const fx = Math.cos(angle) * dist;
  const fy = Math.sin(angle) * dist;

  // 💡 2回目以降用の「左から順番にフワッ」とするためのインラインスタイル
  // 最初は透明で少し下に配置しておきます
  const subsequentStyle = isMounted && typeof window !== "undefined" && sessionStorage.getItem("has_seen_hero_anime")
    ? {
        animation: "none", // 飛来アニメーションを強制オフ
        opacity: 1,
        transform: "translateY(0px)",
        // 💡 左から1文字ずつ順番に表示させるディレイ（0.02秒ずつズラす）
        transition: "opacity 1.2s ease-out, transform 0.6s ease-out",
        transitionDelay: `${0.05 + index * 0.04}s`,
        animationDelay: "0s",
      }
    : {
        animation: "none", // 飛来アニメーションを強制オフ
        opacity: 0,
        transform: "translateY(30px)",
        // 💡 左から1文字ずつ順番に表示させるディレイ（0.02秒ずつズラす）
        transition: "opacity 1.2s ease-out, transform 0.6s ease-out",
        transitionDelay: `${0.05 + index * 0.04}s`,
        animationDelay: "0s",
      };

  return (
    <span
      key={`ht-${index}`}
      // 💡 クラス名は元々のものを1文字も変えずにそのまま採用しています
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
          /* 元のアニメーションスタイル（1ミリも変えていません） */
          // animationDelay: `${0.3 + index * 0.08}s`,
          "--fx": `${fx}px`,
          "--fy": `${fy}px`,
          whiteSpace: "normal",
          
          /* 💡 2回目以降の時だけ、このスタイルが上書き合体します */
          ...subsequentStyle
        } as any
      }
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
};