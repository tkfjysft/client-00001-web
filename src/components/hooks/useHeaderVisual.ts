"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// 判定ロジックだけをこちらに集約（Header.tsxから引き算する）
export const useHeaderVisual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isPosTop, setIsPosTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 1. スクロール位置判定
      setIsPosTop(scrollY === 0);

      // 2. 背景色判定（元のロジックを継承）
      const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
      const bgType = elements.find(el => el.closest("[data-bg]"))?.closest("[data-bg]")?.getAttribute("data-bg")?.trim();
      setIsDarkBg(bgType === "dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isOpen, setIsOpen, isDarkBg, isPosTop };
};