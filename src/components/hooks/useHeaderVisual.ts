"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// 判定ロジックだけをこちらに集約（Header.tsxから引き算する）
export const useHeaderVisual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const [isPosTop, setIsPosTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // スクロール位置判定
      setIsPosTop(scrollY === 0);

      // 背景色判定
      const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
      const bgType = elements
        .find((el) => el.closest("[data-bg]"))
        ?.closest("[data-bg]")
        ?.getAttribute("data-bg")
        ?.trim();

      if (elements.length > 0) {
        setIsDarkBg(bgType === "dark");
      }
    };

    handleScroll();

    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    // リロードした瞬間のスクロール位置を確認
    if (window.scrollY === 0) {
      setShouldAnimate(true);
    }
  }, []);

  // 初回かどうかを判定するステート（初期値は true = アニメーションする）
  const [isFirstAccess, setIsFirstAccess] = useState<boolean | null>(null);

  useEffect(() => {
    // ブラウザ環境（window）が存在するか確認
    const hasVisited = sessionStorage.getItem("has_seen_hero_anime");

    if (hasVisited) {
      // 2回目以降アクセスの場合は false にする
      setIsFirstAccess(false);
    } else {
      // 初回アクセスの場合はメモ帳に記録を残し、true にする
      sessionStorage.setItem("has_seen_hero_anime", "true");
      setIsFirstAccess(true);
    }
  }, []);

  // 1回目用の「派手な初期状態」と、2回目用の「最初から表示された初期状態」を切り替える
  const initialAnimation = isFirstAccess
    ? { opacity: 0, y: -100, scale: 0.8, rotateX: -45 } // 1回目の派手な演出
    : { opacity: 1, y: 0, scale: 1, rotateX: 0 }; // 2回目以降は即表示

  return {
    isOpen,
    setIsOpen,
    isDarkBg,
    isPosTop,
    shouldAnimate,
    isFirstAccess,
  };
};
