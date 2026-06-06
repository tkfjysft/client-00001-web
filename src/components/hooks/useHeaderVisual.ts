"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// 判定ロジックだけをこちらに集約（Header.tsxから引き算する）
export const useHeaderVisual = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 初期値は最優先で見せたい「true（白系）」のままでOK
  const [isDarkBg, setIsDarkBg] = useState(true);
  const [isPosTop, setIsPosTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 1. スクロール位置判定
      setIsPosTop(scrollY === 0);

      // 2. 背景色判定
      const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
      const bgType = elements.find(el => el.closest("[data-bg]"))?.closest("[data-bg]")?.getAttribute("data-bg")?.trim();
      
      // 💡 対策：もしロード直後で要素が何も取れなかった場合は、初期値（true）を維持するために判定をスキップする
      if (elements.length > 0) {
        setIsDarkBg(bgType === "dark");
      }
    };

    // 1. 即時実行（これでもダメな瞬間がある）
    handleScroll();

    // ⭐️ 2. 対策の核心：ブラウザの準備が整う 100ミリ秒後 にもう一度だけ強制判定を入れる
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    // 💡 画面サイズ変更時にも念のため判定させておくとより強固になります
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { isOpen, setIsOpen, isDarkBg, isPosTop };
};