"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Logo } from "./Logo";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
const [isDarkBg, setIsDarkBg] = useState(false);

	const lineColorTop = (() => {
		if(isOpen){
			// alert('o' + isDarkBg);
			return "rotate-45 translate-y-2 text-[#1e293b]";
		} else {
			// alert('c' + isDarkBg);
			return isDarkBg ? "text-white" : "text-[#1e293b]";
		}
	})();

	const lineColorMiddle = (() => {
		if(isOpen){
			return "opacity-0";
		} else {
			return isDarkBg ? "text-white" : "text-[#1e293b]";
		}
	})();

		const lineColorBottom = (() => {
		if(isOpen){
			// alert('o' + isDarkBg);
			return "-rotate-45 -translate-y-2 text-[#1e293b]";
		} else {
			// alert('c' + isDarkBg);
			return isDarkBg ? "text-white" : "text-[#1e293b]";
		}
	})();

  // ブラウザのスクロールを監視する
  useEffect(() => {
    const handleScroll = () => {
      // 20px以上スクロールしたら true にする
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const x = window.innerWidth / 2;
    const y = 100; 

    const elements = document.elementsFromPoint(x, y);
    const section = elements.find(el => el.closest('[data-bg]'))?.closest('[data-bg]');
    
    // trim() を追加して、余計な空白を消します
    const bgType = section?.getAttribute('data-bg')?.trim();

    // デバッグログをもう少し詳細にします
    console.log(`判定中... bgType: "${bgType}" / 比較結果: ${bgType === 'dark'}`);

    if (bgType === 'dark') {
      setIsDarkBg(true);
    } else {
      setIsDarkBg(false);
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
	<>
    <header
	className={`fixed top-0 w-full z-50 flex flex-col items-center justify-center transition-all
		h-15 md:h-20
		${
        isScrolled
          ? "bg-primary/90 backdrop-blur-md shadow-lg" // スクロール後の色
          : "bg-transparent py-2" // トップにいる時の透明
      } ${isDarkBg ? 'text-white' : 'text-[#1e293b]'}`}
	  >
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-15 md:h-15 z-99999">
        {/* ロゴ部分 */}
        <Link
          href="/"
          className="h-12 md:h-16 md:pl-2 flex flex-col items-center justify-center overflow-visible"
        >
          <Logo style={{ height: "60px", width: "auto" }} className="block" />
        </Link>

        {/* 2. 右側グループ（ナビ + コンタクトボタン） */}
        {/* gap-8 または gap-12 くらいにすると、ボタンとの距離が程よく保たれます */}
        <div className="flex px-4 h-16 items-center gap-8 md:gap-8">
          {/* デスクトップ用：グローバルナビ (md以上で表示) */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:scale-105 transition-all active:scale-95"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* --- 追加：お問い合わせボタン --- */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center
				   px-6 py-2.5 rounded-full 
                   bg-[#0ea5e9]
                   text-white font-bold shadow-lg shadow-purple-500/20 
                   hover:scale-105 transition-all active:scale-95"
          >
            Contact
          </Link>
      </div>



		</div>
    </header>
        {/* スマホ用：ハンバーガーボタン (md未満で表示) */}
		<div className="fixed left-[25%] w-[75%] px-8 py-4.5 flex justify-end z-10000">
        	<button
       			className="md:hidden text-white cursor-pointer"
       			onClick={() => setIsOpen(!isOpen)}
       			aria-label="Menu"
        >
        		<div className="w-6 h-4.5 relative flex flex-col justify-between">
        		  <span
        		    className={`w-full h-0.5 bg-current transition-all ${lineColorTop}`}
        		  />
        		  <span
        		    className={`w-full h-0.5 bg-current transition-all ${lineColorMiddle}`}
        		  />
        		  <span
        		    className={`w-full h-0.5 bg-current transition-all ${lineColorBottom}`}
        		  />
        		</div>
        	</button>
		</div>


	      {/* スマホ用：スライドメニュー */}
      <div
        className={`
        fixed top-0 right-0 bottom-0 z-[100] w-[65%] bg-white/95 z-400 transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <nav className="flex flex-col items-center pt-10 gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-black font-light tracking-widest hover:scale-105 transition-all active:scale-95"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
	  </>
  );
};
