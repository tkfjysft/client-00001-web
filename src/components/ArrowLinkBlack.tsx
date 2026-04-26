import Link from 'next/link';
import { ReactNode } from 'react';

interface ArrowLinkProps {
  href: string;
  children?: ReactNode;
  className?: string; // 追加のスタイル調整用
}

export default function ArrowLinkBlack({ href, children = "Read more", className = "" }: ArrowLinkProps) {
  return (
	<>
	<div className="w-full flex justify-end">
    <Link 
      href={href}  
      className="group inline-flex flex-col items-start gap-1 font-medium tracking-widest transition-all duration-500"
    >
      {/* 1. 文字（矢印の上に配置） */}
      <span className="text-[10px] uppercase text-slate-400 transition-colors text-clr-main-1/60 group-hover:text-clr-main-1/20">
        {children}
      </span>

      {/* 2. アスキーアートを再現した「ライン矢印」 */}
      <div className="relative flex items-center">
        {/* メインの横線：ホバーで右に伸びる */}
        <span className="h-[1px] w-24 bg-clr-main-1/40 transition-all duration-500 ease-in-out group-hover:bg-clr-main-1/20"></span>
        
        {/* 先端のナナメ線（\） */}
        <span className="absolute right-0 h-[1px] w-3 origin-right rotate-45 bg-clr-main-1/40 group-hover:bg-clr-main-1/20 transition-transform duration-500"></span>
      </div>
    </Link>
	</div>
	</>
  );
}