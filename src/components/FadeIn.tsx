import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string; // Gridの配置クラスを受け取るために追加
}

export const FadeIn = ({ children, delay = 0, className }: FadeInProps) => {

	const variants = {
		hidden: { 
		opacity: 0, 
		y: 10 
		},
		visible: { 
		opacity: 1, 
		y: 0,
		transition: { 
			delay: delay,
type: "spring",     // 物理演算ベースの動き
  stiffness: 100,     // バネの硬さ（高いほど速い）
  damping: 20,        // 揺れを抑える力（低いほどぷるんとする）
  mass: 1,            // 重さ
  velocity: 2         // 初速
		}
		}
    } satisfies Variants; // 'satisfies' を使うと型安全かつエラーが出ません

  return (
    <motion.div
      className={className} // ここで grid-in-cols-1 などの配置情報を適用
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};