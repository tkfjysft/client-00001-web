import React from 'react';
import { FadeIn_01 } from "@/components/FadeIn_01";

interface CyberCircleAProps {
	className?: string;
	classNameSvg?: string;
	delay?: number;
	speed?: number;
	speedX?: number;
	stiffness?: number
}
export default function CyberCircleA({
	className = "",
	classNameSvg = "",
	delay = 0.48,
	speed = 1.3,
	speedX= 1.4,
	stiffness = 100,
}:CyberCircleAProps) {

return (
	<FadeIn_01
      className={className} 
      delay={delay}          
      speed={speed}          
      speedX={speedX}           
      stiffness={stiffness}      
    >
	<svg
		viewBox="0 0 200 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${classNameSvg} animate-spin-A`}
	>
		<circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="2" strokeDasharray="360 240" strokeDashoffset="0" opacity="0.4" />
		<circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="300 300" strokeDashoffset="300" opacity="0.3" />
		<circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="12" strokeDasharray="80 520" strokeDashoffset="450" opacity="0.15" />

		<circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.8" strokeDasharray="400 200" strokeDashoffset="120" opacity="0.5" />
		<circle cx="100" cy="100" r="79" stroke="currentColor" strokeWidth="5" strokeDasharray="150 450" strokeDashoffset="400" opacity="0.3" />
		<circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="2.2" strokeDasharray="250 350" strokeDashoffset="50" opacity="0.6" />
		<circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.3" strokeDasharray="500 100" strokeDashoffset="280" opacity="0.4" />

		<circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="15" strokeDasharray="100 500" strokeDashoffset="180" opacity="0.1" />
		<circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="4" strokeDasharray="220 380" strokeDashoffset="350" opacity="0.5" />
		<circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1" strokeDasharray="300 300" strokeDashoffset="80" opacity="0.7" />
		<circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="8" strokeDasharray="120 480" strokeDashoffset="480" opacity="0.25" />

		<circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="180 180" strokeDashoffset="220" opacity="0.6" />
		<circle cx="100" cy="100" r="34" stroke="currentColor" strokeWidth="6" strokeDasharray="60 540" strokeDashoffset="10" opacity="0.4" />
		<circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="140 220" strokeDashoffset="150" opacity="0.5" />
		<circle cx="100" cy="100" r="24" stroke="currentColor" strokeWidth="10" strokeDasharray="40 560" strokeDashoffset="400" opacity="0.1" />

		<circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="3" strokeDasharray="60 30" strokeDashoffset="90" opacity="0.4" />
		<circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="5" strokeDasharray="20 30" strokeDashoffset="0" opacity="0.2" />
	</svg>
  </FadeIn_01>
);


};