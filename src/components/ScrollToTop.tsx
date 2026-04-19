'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. スクロール量を検知してボタンの表示/非表示を切り替える
  useEffect(() => {
    const toggleVisibility = () => {
      // 300px以上スクロールしたら表示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. 最上部へスムーススクロールする関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // これで「ふわっ」と戻ります
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          /* 3. デザインとアニメーション（Tailwind） */
          className="fixed bottom-4 right-4 z-50 p-4 bg-white border border-[#0ea5e9] border-[2px] text-[#0ea5e9] shadow-lg transition-all duration-300 ease-in-out hover:bg-white hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:ring-offset-2 rounded-full"
          aria-label="ページ最上部へ戻る"
        >
          {/* 4. 矢印アイコン（SVG） */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </>
  );
}