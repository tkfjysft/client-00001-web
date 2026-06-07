import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn_01 } from "@/components/FadeIn_01";

interface CyberCircleFProps {
	className?: string;
	classNameSvg?: string;
	delay?: number;
	speed?: number;
	speedX?: number;
	stiffness?: number
  color?: string;
  className_inner?: string;
}
export default function CyberCircleF({
	className = "",
	classNameSvg = "",
	delay = 0.48,
	speed = 0,
	speedX= 0,
	stiffness = 0,
  color = "currentColor",
  className_inner = "",
}:CyberCircleFProps) {

  const centerStyle = {
    transformOrigin: "center",
    originX: "50%",
    originY: "50%"
  };

  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

const { scrollYProgress } = useScroll();

  const r1 = useTransform(scrollYProgress,  [0, 0.2, 0.4], [100, 100, 120]);
  const r2 = useTransform(scrollYProgress,  [0, 0.2, 0.4], [97,  97,  140]);
  const r3 = useTransform(scrollYProgress,  [0, 0.2, 0.4], [92,  92,  160]);
  const r4 = useTransform(scrollYProgress,  [0, 0.2, 0.4], [88,  88,  180]);
  const r5 = useTransform(scrollYProgress,  [0, 0.2, 0.4], [84,  84,  200]);
  const r6 = useTransform(scrollYProgress,  [0, 0.2, 0.4], [80,  80,  200]);
  const r7 = useTransform(scrollYProgress,  [0, 0.2, 0.4, 0.7], [0, 0, 0, 100]);
  const r8 = useTransform(scrollYProgress,  [0, 0.2, 0.4, 0.7], [0, 0, 0, 97]);
  const r9 = useTransform(scrollYProgress,  [0, 0.2, 0.4, 0.7], [0, 0, 0, 92]);
  const r10 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.7], [0, 0, 0, 88]);
  const r11 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.7], [0, 0, 0, 84]);
  const r12 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.7], [0, 0, 0, 80]);

const scale = useTransform(scrollYProgress, [0.4, 1], [1, 20]);
const scaleB = useTransform(scrollYProgress, [0.7, 1], [1, 20]);

  if (!isMounted) {
    return <div ref={containerRef} className={className} />;
  }

return (
	<FadeIn_01
      className={className} 
      delay={delay}         
      speed={speed}         
      speedX={speedX}       
      stiffness={stiffness} 
	  className_inner={className_inner}
    >

<svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${classNameSvg} overflow-visible`}
        style={{ transformBox: "fill-box" }}
      >
        <g stroke={color}>
          <motion.circle
            cx="110" cy="110"
            r={r1}
            strokeWidth="1" strokeDasharray="400 228" opacity="0.4"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r2}
            strokeWidth="6" strokeDasharray="300 310" strokeDashoffset="150" opacity="0.3"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r3}
            strokeWidth="16" strokeDasharray="80 500" strokeDashoffset="400" opacity="0.15"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r4}
            strokeWidth="2.5" strokeDasharray="250 300" strokeDashoffset="50" opacity="0.5"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r5}
            strokeWidth="9" strokeDasharray="180 350" strokeDashoffset="280" opacity="0.2"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r6}
            strokeWidth="4" strokeDasharray="420 100" opacity="0.4"
            animate={{ rotate: -360 }}
            transition={{ duration: 21, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r7}
            strokeWidth="0.5" strokeDasharray="400 228" opacity="0.4"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r8}
            strokeWidth="3" strokeDasharray="300 310" strokeDashoffset="150" opacity="0.3"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r9}
            strokeWidth="8" strokeDasharray="80 500" strokeDashoffset="400" opacity="0.15"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r10}
            strokeWidth="1.2" strokeDasharray="250 300" strokeDashoffset="50" opacity="0.5"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r11}
            strokeWidth="4.5" strokeDasharray="180 350" strokeDashoffset="280" opacity="0.2"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />

          <motion.circle
            cx="110" cy="110"
            r={r12}
            strokeWidth="2" strokeDasharray="420 100" opacity="0.4"
            animate={{ rotate: -360 }}
            transition={{ duration: 21, repeat: Infinity, ease: "linear" }}
            style={{...centerStyle, scale}}
          />



        </g>
      </svg>

  </FadeIn_01>
);






};