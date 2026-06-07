import Link from 'next/link';
import { ReactNode } from 'react';

interface ArrowLinkProps {
  href: string;
  children?: ReactNode;
  className?: string;
  variant?: 'black' | 'white';
  align?: 'start' | 'end' | 'center';
}

export default function ArrowLink({ 
  href, 
  children = "Read more", 
  className = "", 
  variant = 'black', 
  align = 'end' 
}: ArrowLinkProps) {
  
  const styles = variant === 'black' 
    ? {
        text: "text-clr-main-1/60 group-hover:text-clr-main-1/20",
        line: "bg-clr-main-1/40 group-hover:bg-clr-main-1/20"
      }
    : {
        text: "text-clr-base-1/60 group-hover:text-clr-base-1/90", 
        line: "bg-clr-base-1/40 group-hover:bg-clr-base-1/90"
      };

  const alignClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end"
  };

  return (
    <div className={`w-full flex ${alignClasses[align]} ${className}`}>
      <Link 
        href={href}  
        className="group inline-flex flex-col items-start gap-1 font-medium transition-all duration-500"
      >
        <span className={`text-[10px] uppercase transition-colors duration-500 ${styles.text}`}>
          {children}
        </span>

        <div className="relative flex items-center">
          <span className={`h-[1px] w-24 transition-all duration-500 ease-in-out ${styles.line}`}></span>
          <span className={`absolute right-0 h-[1px] w-3 origin-right rotate-45 transition-all duration-500 ${styles.line}`}></span>
        </div>
      </Link>
    </div>
  );
}