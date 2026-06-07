"use client";

interface HeroAnimatedCharProps {
  char: string;
  index: number; 
}
export const HeroAnimatedChar = ({ char,index }: HeroAnimatedCharProps) => {

            if (char === "/" || char === "/ ") {
              return <br key={`wbr-${index}`} />;
            }


            const angle = Math.random() * Math.PI * 2;
            const dist = 1200; 
            const fx = Math.cos(angle) * dist;
            const fy = Math.sin(angle) * dist;
				return (
					
				<span
					key={`ht-${index}`}
					className={`animate-char-fly inline-block text-center
					${(char.match(/^[a-z\s]/i)) ? "hero-maintext font-[500]" : "font-zen hero-description font-[900]"}
					${(char === "M" || char === "S") ? "hero-big-maintext !text-clr-primary-3" : ""}
						`}
					suppressHydrationWarning={true}
					aria-hidden="true"
					style={
					{

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