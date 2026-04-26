"use client";

import React from "react";

// 外部（Header）から受け取るデータの型定義
interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  borderChangeColor: string;
  lineColorTop?: string;
  lineColorMiddle?: string;
  lineColorBottom?: string;
}

const HamburgerButton = ({
  isOpen,
  setIsOpen,
  borderChangeColor,
  lineColorTop,
  lineColorMiddle,
  lineColorBottom,
}: HamburgerButtonProps) => {
  return (
    <div className="fixed left-[80%] w-[20%] px-8 py-4.5 flex justify-end z-10000">
      <button
        className={`lg:hidden cursor-pointer
          fixed top-3 right-3 flex py-4 px-3 items-center justify-center border ${borderChangeColor} backdrop-blur-md rounded-lg`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <div className="w-6 h-4.5 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-current transition-all duration-300 ${lineColorTop}`} />
          <span className={`w-full h-0.5 bg-current transition-all duration-300 ${lineColorMiddle}`} />
          <span className={`w-full h-0.5 bg-current transition-all duration-300 ${lineColorBottom}`} />
        </div>
      </button>
    </div>
  );
};

export default HamburgerButton;