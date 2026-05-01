"use client";

interface HeroAnimatedCharProps {
//   key: number;
  char: string;
  index: number; 
}
export const HeroAnimatedChar = ({ char,index }: HeroAnimatedCharProps) => {

            // 1. もし文字が「/」だったら、改行ポイントを返す
            if (char === "/" || char === "/ ") {
              return <br key={`wbr-${index}`} />;
            }

            // 2. それ以外の普通の文字は、今まで通りアニメーション付きのspanで返す

            const angle = Math.random() * Math.PI * 2;
            const dist = 1200; // 飛来距離を少し伸ばしてスピード感を強調
            const fx = Math.cos(angle) * dist;
            const fy = Math.sin(angle) * dist;
				return (
					
				<span
					key={`ht-${index}`}
					className={`animate-char-fly inline-block text-center
					${(char.match(/^[a-z\s]/i)) ? "hero-maintext font-[500]" : "font-zen hero-description font-[900]"}
					${(char === "M" || char === "S") ? "hero-big-maintext text-clr-primary-3": ""}
						`}
					suppressHydrationWarning={true}
					aria-hidden="true"
					style={
					{
						/* 1.0s 開始だったのを 0.3s に大幅前倒し。
						粒子が「パッ」と出た直後から文字が飛び込み始めます。
						*/
						animationDelay: `${0.3 + index * 0.08}s`,
						"--fx": `${fx}px`,
						"--fy": `${fy}px`,
						whiteSpace: "normal",
					} as any
					}
				>
					{char === " " ? "\u00A0" : char}
				</span>


				);

};