// components/StaggerContainer.tsx
"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export const StaggerContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col"> 
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.8, 
              // ★ indexを使って、上から 0.2s, 0.4s, 0.6s... と遅延させる
              delay: index * 0.2, 
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};