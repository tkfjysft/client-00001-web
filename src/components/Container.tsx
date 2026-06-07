import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "main"; 
  className?: string; 
}

export const Container = ({ 
  children, 
  as: Component = "div", 
  className = "" 
}: ContainerProps) => {
  return (
    <Component className={`max-w-[1480px] mx-auto px-[8vw] md:px-[60px] xl:px-[100px] ${className}`}>
      {children}
    </Component>
  );
};