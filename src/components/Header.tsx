"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import Link from 'next/link';
import { Logo } from './Logo';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


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
	  style={{ height: '80px' }}
    >
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* ロゴ部分 */}
<Link href="/" className="flex flex-col items-center justify-center overflow-visible">
      {/* ロゴの高さを 60px に固定。これで今の「半分」くらいになるはずです */}
      <Logo style={{ height: '60px', width: 'auto' }} className="block" />
    </Link>
	
        {/* デスクトップ用：グローバルナビ (md以上で表示) */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* スマホ用：ハンバーガーボタン (md未満で表示) */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* スマホ用：スライドメニュー */}
      <div className={`
        fixed inset-0 top-16 bg-black/95 z-40 transition-transform duration-300 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="flex flex-col items-center pt-10 gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-white font-light tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
	      </header>
  );
};
