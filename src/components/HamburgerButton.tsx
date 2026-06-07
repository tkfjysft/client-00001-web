"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
<div className={`fixed  top-4 right-[2vw] sm:top-8 sm:right-[4vw] z-50 flex items-center backdrop-blur-sm rounded-lg py-4 px-4 ${className}`}>


  <button
    className={`cursor-pointer flex items-center justify-center gap-2`}
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Menu"
  >
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