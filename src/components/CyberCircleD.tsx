import React, { useEffect, useState } from 'react';
import { FadeIn_01 } from "@/components/FadeIn_01";

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

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className} />; 
  }

  return (
  <FadeIn_01
    className={className} 
    delay={delay}         
    speed={speed}         
    speedX={speedX}       
    stiffness={stiffness} 
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
  </FadeIn_01>
);



};

