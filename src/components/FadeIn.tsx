// components/FadeIn.tsx
"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      // 初期状態：透明かつ少し下に配置
      initial={{ opacity: 0, y: 20 }}
      // 表示された時：不透明かつ元の位置へ
      whileInView={{ opacity: 1, y: 0 }}
      // 1回だけ実行（スクロールで戻っても再発火させない）
      viewport={{ once: true, margin: "-100px" }}
      // 動きの質：少し「ヌルッ」とした高級感のある動き
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] // 独自のイージング
      }}
    >
      {children}
    </motion.div>
  );
};