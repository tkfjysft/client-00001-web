import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "main"; // タグを動的に変更可能に
  className?: string; // 追加の余白などを外部から足せるように
}

export const Container = ({ 
  children, 
  as: Component = "div", // デフォルトは div
  className = "" 
}: ContainerProps) => {
  return (
    <Component className={`max-w-[1480px] mx-auto px-[8vw] md:px-[60px] xl:px-[100pxZ] ${className}`}>
      {children}
    </Component>
  );
};