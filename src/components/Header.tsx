"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // ブラウザのスクロールを監視する
  useEffect(() => {
    const handleScroll = () => {
      // 20px以上スクロールしたら true にする
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-md py-4 shadow-lg" // スクロール後の色
          : "bg-transparent py-8" // トップにいる時の透明
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* ロゴ：影(drop-shadow)をつけて視認性を確保 */}
        <div className="text-2xl font-black tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {siteConfig.companyName}
        </div>

        {/* メニュー：こちらも影をつけて背景に溶けないようにする */}
        <div className="hidden md:flex gap-8">
          {["Service", "About", "Message", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
