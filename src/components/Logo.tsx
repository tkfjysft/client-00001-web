// src/components/Logo.tsx
"use client";

import { useState, useEffect } from "react";

interface LogoProps {
  isOpen?: boolean; // ? をつけると、渡さなくてもエラーになりません
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ isOpen, className, style }: LogoProps) {
  const gradientId = "logo-gradient-balanced";

	// 背景が暗いか明るいか、セクションに記述されている'data-bg'をチェックして判定する
  const [isDarkBg, setIsDarkBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const x = window.innerWidth / 2;
      const y = 100;

      const elements = document.elementsFromPoint(x, y);
      const section = elements
        .find((el) => el.closest("[data-bg]"))
        ?.closest("[data-bg]");

      // trim() を追加して、余計な空白を消します
      const bgType = section?.getAttribute("data-bg")?.trim();

      // デバッグログをもう少し詳細にします
    //   console.log(
    //     `判定中... bgType: "${bgType}" / 比較結果: ${bgType === "dark"}`,
    //   );

      if (bgType === "dark") {
        setIsDarkBg(true);
			  console.log('isOpenの値__. ' + isOpen);

      } else {
        setIsDarkBg(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    //navの文字色、背景色の濃淡によって文字色を変える
  const navTextColor = isDarkBg
  ? isOpen
    ? "text-main---1/70 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]"
	:
	"text-base---2/70 [text-shadow:_1px_1px_10px_rgba(38,48,118,0.5),_-1px_-1px_10px_rgba(38,48,118,0.5),_1px_-1px_10px_rgba(38,48,118,0.5),_-1px_1px_10px_rgba(38,48,118,0.5)]"
    : "text-main---1/70 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]";

	console.log('Logo内での生の状態確認:', isOpen);


const borderChangeColor = isOpen 
  ? "border-main---1/20"  // メニューが開いている時はこの色に固定
  : isDarkBg 
    ? "border-base---1/20" // 閉じている時：背景が暗ければこの色
    : "border-main---1/20"; // 閉じている時：背景が明るければこの色
	
  const ciLogoTextColor = isDarkBg
  ?isOpen
  ? "text-main---2 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]"
  : "text-base---2 [text-shadow:_1px_1px_10px_rgba(38,48,118,0.5),_-1px_-1px_10px_rgba(38,48,118,0.5),_1px_-1px_10px_rgba(38,48,118,0.5),_-1px_1px_10px_rgba(38,48,118,0.5)]"
    : "text-main---2 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]";

  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 400 240"
    //   // overflow-visibleは維持して、絶対に欠けないようにします
    //   className={`overflow-visible ${props.className}`}
    //   {...props}
    // >
    //   <defs>
    //     <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
    //       <stop offset="0%" stopColor="#3b82f6" />
    //       <stop offset="50%" stopColor="#a855f7" />
    //       <stop offset="100%" stopColor="#ec4899" />
    //     </linearGradient>
    //   </defs>

    //   <g transform="translate(200, 23)">
    //     {/* 1. シンボルマーク：サイズを適正化 */}
    //     <g fill={`url(#${gradientId})`} transform="translate(-45, 0)">
    //       <rect x="0" y="8" width="28" height="28" rx="6" />
    //       <rect x="32" y="0" width="28" height="28" rx="6" />
    //       <rect x="64" y="8" width="28" height="28" rx="6" />
    //       <rect x="30" y="34" width="28" height="28" rx="6" opacity="0.8" />
    //       <rect x="0" y="60" width="28" height="28" rx="6" />
    //       <rect x="32" y="68" width="28" height="28" rx="6" />
    //       <rect x="64" y="60" width="28" height="28" rx="6" />
    //     </g>

    //     {/* 2. テキスト：読みやすく、かつ主張のあるサイズ */}
    //     <text
    //       x="0"
    //       y="160"
    //       fontFamily="Arial Black, Gadget, sans-serif"
    //       fontWeight="900"
    //       fontSize="70"
    //       /* ここで直接色を切り替えます */
    //       fill={isDarkBg ? "#ffffff" : "#1e293b"}
    //       textAnchor="middle"
    //       letterSpacing="-3"
    //     >
    //       SERVICTY
    //     </text>

    //     {/* 3. アクセントライン */}
    //     <rect
    //       x="-100"
    //       y="175"
    //       width="200"
    //       height="6"
    //       fill={`url(#${gradientId})`}
    //       rx="3"
    //     />
    //   </g>
    // </svg>
	<>
	<span className={`font-zen leading-[0.5] text-center md:text-left italic ${ciLogoTextColor}`}>
	<span className={`text-sm md:text-lg md:border-b-1 ${borderChangeColor} font-[900] pb-1 md:tracking-widest`}>マインドシフトシステムズ<br className="md:hidden"/>株式会社</span><br />
	<span className={`block text-xs font-[500] pt-1 mt-1 border-t-1 md:pt-2 md:mt-0 md:border-0 ${borderChangeColor}`}>&nbsp;MindShiftSystems</span>
	</span>
	</>
  );
};
