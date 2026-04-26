"use client";

import { useEffect } from "react";

export const useAutoAnimate = () => {
  useEffect(() => {
    // 1. 監視対象のセレクタ（一括管理）、divとimgがズレてアニメーションするのでimgは対象外
    const selector = "h1, h2, h3, h4, p, span, li, a, svg, .reveal, .c-visual-box, .c-section-title";
    
    // 2. IntersectionObserverの定義
    const observer = new IntersectionObserver(
      (entries) => {
        // 交差した（画面に入った）要素だけを抽出
        const visibleEntries = entries.filter((e) => e.isIntersecting);

        visibleEntries.forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          if (element.classList.contains("is-visible")) return;

          // 表示の遅延を計算して付与
          element.style.transitionDelay = `${index * 0.1}s`;
          
          requestAnimationFrame(() => {
            element.classList.add("is-visible");
          });

          // 一度表示したら監視を解除（引き算の思想：無駄な監視を続けない）
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -200px 0px", // 150px〜250px程度が自然です
        threshold: 0,
      }
    );

    // 3. 実行（特定のIDではなく、特定のコンテナ内の要素を全スキャン）
    const timer = setTimeout(() => {
      // mainタグ内の対象要素をすべて取得
      const targets = document.querySelectorAll(`main ${selector}`);
      targets.forEach((t) => {
		// observer.observe(t)
	
		// ヒーローエリアのID（例: #hero または #message-section）を指定
        const isInsideHero = t.closest("#hero-section"); 
        // ★追加：ボタンの中にある要素（spanなど）は監視しない
  		const isInsideButton = t.closest("#header-section");

        if (isInsideHero || isInsideButton) {
          // ヒーローエリア内の要素は、監視せず即座に表示クラスを付ける
        //   t.classList.add("is-visible");
        } else {
          // ヒーローエリア以外は監視対象にする
          observer.observe(t);
        }

	});  
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []); // 空配列でマウント時のみ実行
};