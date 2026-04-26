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

    // 背景が暗いか明るいか、セクションに記述されている'data-bg'をチェックして判定する
  const [isDarkBg, setIsDarkBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const x = window.innerWidth / 2;
      const y = window.innerHeight-50;
		// console.log(y);
      const elements = document.elementsFromPoint(x, y);
		//   console.log(elements);

      const section = elements
        .find((el) => el.closest("[data-bg]"))
        ?.closest("[data-bg]");

      // trim() を追加して、余計な空白を消します
      const bgType = section?.getAttribute("data-bg")?.trim();

      // デバッグログをもう少し詳細にします
      // console.log(`判定中... bgType: "${bgType}" / 比較結果: ${bgType === 'dark'}`);

      if (bgType === "dark") {
        setIsDarkBg(true);
      } else {
        setIsDarkBg(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const bgChangeColor = isDarkBg
  ? "bg-clr-base-1" : "bg-clr-main-1";
 const textChangeColor = isDarkBg
  ? "text-clr-main-1" : "text-clr-base-1";

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          /* 3. デザインとアニメーション（Tailwind） */
          className={`fixed bottom-0 right-0 z-50 transition-all duration-300 ease-in-out ${bgChangeColor} ${textChangeColor}
			/* ▼ここから追加・修正するクラス ▼ */
			w-20 h-20         /* 1. 正方形の土台を作る */
			p-0               /* 2. 余白をなくす（文字を角に寄せるため） */
			flex items-end justify-end /* 3. 文字を右下に配置 */
			[clip-path:polygon(100%_0,100%_100%,0_100%)] /* 4. 右下の直角三角形に切り抜く */
			
			/* ホバー時の動きを「引き算」デザインに調整 */
			hover:translate-x-0.5 hover:translate-y-0.5 /* 右下に少し沈む動き */
`}
          aria-label="ページ最上部へ戻る"
        >
          <span className="absolute bottom-5 right-[-46px] block w-[150px] text-center transform -rotate-45 text-xs font-bold tracking-tighter leading-none group-hover:scale-110 transition-transform">
    Page Top
  </span>
        </button>
      )}
    </>
  );
}