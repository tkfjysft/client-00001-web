import React, { useEffect, useState } from 'react';
import { FadeIn } from "@/components/FadeIn";

interface CyberCircleDProps {
	className?: string;
	classNameSvg?: string;
	delay?: number;
	speed?: number;
	speedX?: number;
	stiffness?: number
}
export default function CyberCircleD({
	className = "",
	classNameSvg = "",
	delay = 0.72,
	speed = 0.9,
	speedX= 1.3,
	stiffness = 100,
}:CyberCircleDProps) {

  // ハイドレーションが終わったかどうかを管理するステート
  const [isMounted, setIsMounted] = useState(false);

  // マウント時に一度だけ実行
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // サーバーサイド（またはマウント前）では何も表示しない、
  // もしくはランダム値を含まないスケルトンを表示する
  if (!isMounted) {
    return <div className={className} />; // もしくは空の <svg>
  }

  return (
  <FadeIn
    className={className} // absolute などの配置クラスを受け取る
    delay={delay}           // 固定したい delay (layouts.delay.shapesD)
    speed={speed}           // 固定の speed
    speedX={speedX}           // 固定の speedX
    stiffness={stiffness}       // 固定の stiffness
  >
	<svg viewBox="-20 -20 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"
		className={`${classNameSvg} overflow-visible animate-spin-D`}>
		{[98, 94, 90, 82, 78, 74, 66, 62, 58, 48, 44, 40, 30, 26, 22].map((radius, i) => (
		<circle
			key={i}
			cx="100"
			cy="100"
			r={radius}
			stroke="currentColor"
			strokeWidth={i % 3 === 0 ? 3 : 0.5}
			strokeDasharray={`${Math.random() * 200 + 100} ${Math.random() * 300 + 100}`}
			strokeDashoffset={Math.random() * 600}
			opacity={Math.random() * 0.5 + 0.2}
		/>
		))}
		<circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="4" opacity="0.3" />
	</svg>
  </FadeIn>
);



};

