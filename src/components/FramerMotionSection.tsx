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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"] 
  });

  const opacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);


  return (
	<section
	  ref={containerRef}
      id="framermotion-section" 
      data-bg="light" 
      className={`
		relative w-full py-32 overflow-hidden min-h-[200vh] ${className}
		`}
    >
	

    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 bg-clr-base-1 pointer-events-none z-40"
    />

    </section>
  );
}
