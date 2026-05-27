"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeIn02Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const FadeIn_02 = ({ children, className = "", delay = 0 }: FadeIn02Props) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: -60,
        scale: 0.75, 
        rotateX: -35, 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateX: 0 
      }}
      viewport={{ once: true, margin: "-25% 0px" }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1200 }} 
      className={className}
    >
      {children}
    </motion.div>
  );
};