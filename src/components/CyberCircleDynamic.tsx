import React from 'react';
import { motion } from 'framer-motion';

// 型定義：どの子（パターン）を呼ぶか
type CirclePattern = 'patternA' | 'patternB' | 'patternC' | 'patternD' | 'patternE';

interface CyberCircleDynamicProps {
  type: CirclePattern;
  color?: string; // 共通で色を変えたい場合
}

export const CyberCircleDynamic: React.FC<CyberCircleDynamicProps> = ({ 
  type, 
  color = "var(--color-clr-primary-1)" 
}) => {

  // --- パターンごとの「設定」と「SVGそのもの」を定義 ---
  const CONFIG = {
    patternA: {
      wrapperClass: "w-[400px] top-[10%] left-[5%]",
      delay: 0.48,
      speed: 1.3,
      speedX: 1.4,
      stiffness: 100,
      // SVGタグごとここに記述（受け取ったcolorをstrokeに流し込む）
      component: (
        <svg viewBox="0 0 500 500" className="opacity-20 w-full h-full" fill="none" stroke={color} strokeWidth="1">
          <path d="M10 10..." />
        </svg>
      )
    },
    patternB: {
      wrapperClass: "w-[300px] bottom-[20%]",
      delay: 0.2,
      speed: 2.0,
      speedX: 0.8,
      stiffness: 120,
      component: (
        <svg viewBox="0 0 113 158" className="opacity-10 w-full h-full" fill="none" stroke={color} strokeWidth="1.5">
           <g opacity="0.5"><path d="M38 156..." /></g>
        </svg>
      )
    },
    // patternC, D, E も同様に svg ごと component に入れる
  };

  const selected = CONFIG[type];

  return (
    <motion.div
      className={`absolute ${selected.wrapperClass}`}
      // ここに共通の動くロジック（マウス追従や浮遊感）を書く
      // speed や stiffness は個別の値を使用
      animate={{ y: [0, -20, 0] }} 
      transition={{ 
        delay: selected.delay,
        duration: 5 / selected.speed, // スピード設定を反映
        repeat: Infinity 
      }}
    >
      {/* 登録されたSVGコンポーネントをそのまま表示 */}
      {selected.component}
    </motion.div>
  );
};