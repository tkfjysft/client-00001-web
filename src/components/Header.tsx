"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Logo from "./Logo";

export const Header = () => {
  //ハンバーガーメニューの開閉を判定
  const [isOpen, setIsOpen] = useState(false);

  // ブラウザのスクロールを監視する
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // 20px以上スクロールしたら true にする
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // ハンバーガーメニューの３本線ボタンの色設定
  const baseColor = isDarkBg ? "text-white" : "text-[#1e293b]";
  const lineColorTop = isOpen
    ? "rotate-45 translate-y-2 text-[#1e293b]"
    : baseColor;
  const lineColorMiddle = isOpen ? "hidden" : baseColor;
  const lineColorBottom = isOpen
    ? "-rotate-45 -translate-y-2 text-[#1e293b]"
    : baseColor;

  //ブラウザの画面が僅かでも下にスクロールしているかしていないか判定
  //スクロールしていない、画面を下へ動かしていないならTrue
  const [isPosTop, setIsPosTop] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 判定関数
    const checkScroll = () => {
      const currentScroll = window.scrollY;
      //   console.log("🔍 Checking scroll position:", currentScroll); // これが絶対に出るはずです
      setIsPosTop(currentScroll === 0);
    };

    // --- ここがポイント ---
    // リロード直後はスクロール復元に時間がかかるため、
    // 数フレーム（約0.5秒間）にわたって継続的にチェックをかけます。
    let frameId: number;
    let startTime = Date.now();

    const poll = () => {
      checkScroll();

      // 500ms（0.5秒）間は、毎フレーム判定を繰り返す
      if (Date.now() - startTime < 500) {
        frameId = requestAnimationFrame(poll);
      }
    };

    // 監視開始
    frameId = requestAnimationFrame(poll);
    window.addEventListener("scroll", checkScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  //navの文字色、背景色の濃淡によって文字色を変える
  const navTextColor = isDarkBg
    ? "text-base---2 [text-shadow:_1px_1px_10px_rgba(38,48,118,0.5),_-1px_-1px_10px_rgba(38,48,118,0.5),_1px_-1px_10px_rgba(38,48,118,0.5),_-1px_1px_10px_rgba(38,48,118,0.5)]"
    : "text-main---1 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]";

const borderChangeColor = isDarkBg
  ? isOpen
  ? "border-main---1/20" : "border-base---1/20"
	 : "border-main---1/20";
  const ciLogoTextColor = isDarkBg
  ?isOpen
  ? "text-main---2 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]"
  : "text-base---2 [text-shadow:_1px_1px_10px_rgba(38,48,118,0.5),_-1px_-1px_10px_rgba(38,48,118,0.5),_1px_-1px_10px_rgba(38,48,118,0.5),_-1px_1px_10px_rgba(38,48,118,0.5)]"
    : "text-main---2 [text-shadow:_1px_1px_10px_rgba(255,255,255,1),_-1px_-1px_10px_rgba(255,255,255,1),_1px_-1px_10px_rgba(255,255,255,1),_-1px_1px_10px_rgba(255,255,255,1)]";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 flex flex-col items-center justify-center transition-all
		h-15 md:h-20
		${
      isPosTop
        ? "bg-transparent" // スクロールしていない、トップにいる時の透明
        : "md:backdrop-blur-md" // スクロールしている、背景をぼかしてドロップシャドウいれる
    }`}
      >
        {/*  */}
        {/* PC版ヘッダー */}
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-15 md:h-15 z-99999">
          {/*  */}
          {/* ロゴ部分 */}
		  <div className={`hidden md:block md:static md:pl-2`}>
          <Link
            href="/"
            className={`h-full`}
          >
            <Logo />
          </Link>
		  </div>

          {/* 2. 右側グループ（ナビ + コンタクトボタン） */}
          {/* gap-8 または gap-12 くらいにすると、ボタンとの距離が程よく保たれます */}
          <div className="flex px-4 h-16 items-center gap-8 md:gap-5">
            {/*  */}
            {/* デスクトップ用：グローバルナビ (md以上で表示) */}
            <nav className={`hidden md:flex items-center gap-6`}>
              {siteConfig.navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {/* メインのリンク */}
                  <Link
                    href={item.href}
                    className={`font-light tracking-widest hover:scale-105 transition-all flex items-center gap-1 ${navTextColor}`}
                  >
                    {item.label}
                    {/* 子要素がある場合に下矢印アイコンなどを出す（任意） */}
                    {item.children && <span className="text-xs">▼</span>}
                  </Link>

                  {/* サブメニューがある場合のみレンダリング */}
                  {item.children && (
                    <div className="absolute left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <ul className="bg-white py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm text-main---1/55 hover:bg-gray-50 hover:text-black transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* --- お問い合わせボタン --- */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center
				   px-6 py-2.5 rounded-full 
                   bg-accent---1
                   text-base---2 font-bold 
                   hover:scale-105 transition-all active:scale-95"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* スマホ用：ハンバーガーボタン (md未満で表示) */}
      <div className="fixed left-[80%] w-[20%] px-8 py-4.5 flex justify-end z-10000">
        <button
          className={`md:hidden cursor-pointer
		  				fixed top-3 right-3 flex py-4 px-3 items-center justify-center border ${borderChangeColor} backdrop-blur-md rounded-lg`}
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
        fixed top-0 right-0 bottom-0 z-[100] w-[80%] bg-base---2/95 z-400 transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
		          {/* ロゴ部分 */}
          <Link
            href="/"
            className=" flex flex-col items-center justify-center pt-2 overflow-visible"
          >
            <Logo isOpen={isOpen} />
          </Link>
        <nav className="flex flex-col items-center pt-10 gap-8">
          <div>
            {siteConfig.navItems.map((item) => (
              <div key={item.label} className="mb-8">
                {/* メインのリンク */}
                <Link
                  href={item.href}
                  className={`hover:scale-125 transition-all`}
                >
                  {item.label}
                </Link>

                {/* サブメニューがある場合のみレンダリング */}
                {item.children && (
                  <div className="pt-2 transition-all duration-300 z-50">
                    <ul className="">
                      {item.children.map((child) => (
                        <li key={child.label} className="ml-3">
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-main---1/55 hover:bg-gray-50 hover:text-black transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
