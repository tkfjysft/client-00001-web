"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const useHeaderVisual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const [isPosTop, setIsPosTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsPosTop(scrollY === 0);

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
    if (window.scrollY === 0) {
      setShouldAnimate(true);
    }
  }, []);

  const [isFirstAccess, setIsFirstAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("has_seen_hero_anime");

    if (hasVisited) {
      setIsFirstAccess(false);
    } else {
      sessionStorage.setItem("has_seen_hero_anime", "true");
      setIsFirstAccess(true);
    }
  }, []);

  const initialAnimation = isFirstAccess
    ? { opacity: 0, y: -100, scale: 0.8, rotateX: -45 } 
    : { opacity: 1, y: 0, scale: 1, rotateX: 0 }; 

  return {
    isOpen,
    setIsOpen,
    isDarkBg,
    isPosTop,
    shouldAnimate,
    isFirstAccess,
  };
};
