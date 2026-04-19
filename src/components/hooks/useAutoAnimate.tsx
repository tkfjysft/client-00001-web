"use client";

import { useEffect } from "react";

export const useAutoAnimate = () => {
  useEffect(() => {
    const autoAnimate = (selector: string) => {
      // 1. parentの取得を少し確実にするため、少し待機するか、存在確認を徹底
      const parent = document.querySelector(selector);
      if (!parent) return;

      const targets = parent.querySelectorAll(
        'h1, h2, h3, h4, p, span, li, a, img, svg, .reveal, .c-visual-box, .c-section-title'
      );

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter((entry) => entry.isIntersecting);
          
          visibleEntries.forEach((entry, index) => {
            // ★ここを修正: entryそのものではなく entry.target を HTMLElement として扱う
            const element = entry.target as HTMLElement;

            if (element.classList.contains("is-visible")) return;

            // transitionDelay を直接付与
            element.style.transitionDelay = `${index * 0.1}s`;
            
            // クラス付与（ブラウザのレンダリングを強制的に待つため requestAnimationFrame を使うとより確実）
            requestAnimationFrame(() => {
              element.classList.add("is-visible");
            });

            observer.unobserve(element);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -10% 0px", // 少し甘めに設定
          threshold: 0,
        }
      );

      targets.forEach((target) => observer.observe(target));
      return observer;
    };

    // 実行
    const targetSections = ["#message-section", "#service-section", "#products-section", "#footer"];
    const observers: IntersectionObserver[] = [];

    // Next.jsのレンダリング完了を待つために少しだけ遅延させる
    const timer = setTimeout(() => {
      targetSections.forEach((section) => {
        const obs = autoAnimate(section);
        if (obs) observers.push(obs);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);
};