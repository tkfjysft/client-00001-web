"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// 外部（Header）から受け取るデータの型定義
interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  hamburgerTextChangeColor: string;
  hamburgerBorderChangeColor: string;
  hamburgerLineColorTop?: string;
  hamburgerLineColorMiddle?: string;
  hamburgerLineColorBottom?: string;
  className?: string;
}

const HamburgerButton = ({
  isOpen,
  setIsOpen,
  hamburgerTextChangeColor,
  hamburgerBorderChangeColor,
  hamburgerLineColorTop,
  hamburgerLineColorMiddle,
  hamburgerLineColorBottom,
  className = "", 
}: HamburgerButtonProps) => {
  return (
    // <div className={`lg:hidden fixed left-[80%] w-[20%] px-8 py-4.5 flex justify-end ${className}`}>
<div className={`fixed top-6 right-8 z-50 flex items-center backdrop-blur-sm rounded-lg py-4 px-4 ${className}`}>
  {/* 1. Menuのテキスト */}


  {/* 2. ハンバーガーボタン（fixedを削除し、親のflexで並べる） */}
  <button
    className={`cursor-pointer flex items-center justify-center gap-2`}
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Menu"
  >
  {/* 👇 文字の切り替わりアニメーションエリア */}
  {/* 👇 文字エリア： w-12 などの固定幅を持たせ、中身を absolute にします */}
  <div className="relative w-12 h-5 overflow-hidden flex items-center justify-center">
    <AnimatePresence mode="wait">
		<motion.span
		key={isOpen ? "close" : "menu"}
		initial={{ y: 12, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		exit={{ y: -12, opacity: 0 }}
		transition={{ duration: 0.2, ease: "easeInOut" }}
		className={`absolute font-light text-sm tracking-wider transition-colors duration-300 ${hamburgerTextChangeColor}`}
		>
		{isOpen ? "Close" : "Menu"}
		</motion.span>
    </AnimatePresence>
  </div>
    <div className="w-6 h-[17px] relative flex flex-col justify-between">
      <span className={`w-full h-[1px] bg-current transition-all duration-300 ${hamburgerLineColorTop}`} />
      <span className={`w-full h-[1px] bg-current transition-all duration-300 ${hamburgerLineColorMiddle} ml-1`} />
      <span className={`w-full h-[1px] bg-current transition-all duration-300 ${hamburgerLineColorBottom} ml-2`} />
    </div>
  </button>
</div>
  );
};

export default HamburgerButton;