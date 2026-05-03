"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FramerMotionSectionProps  {
	className? : string;
}

export default function FramerMotionSection ({
	className
}: FramerMotionSectionProps) {

	const containerRef = useRef(null);
  
  // 1. スクロール監視の設定
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"] // セクションが画面下から現れて、中央に来るまで
  });

  // 2. スクロール位置(0〜1)を、背景の不透明度(0〜1)に変換
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);


  return (
	<section
	  ref={containerRef}
      id="framermotion-section" 
      data-bg="dark" 
      className={`
		relative w-full py-32 overflow-hidden min-h-[300vh] ${className}
		`}
    >
	
    {/* 
      【魔法のレイヤー】
      画面全体を覆う「白の膜」。
      スクロールが進むと、じわじわとヒーロー背景を隠していきます。
    */}
    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 bg-clr-base-1 pointer-events-none z-40"
    />

    </section>
  );
}
