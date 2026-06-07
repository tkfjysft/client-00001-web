"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

interface NavListProps {
  isMobile?: boolean;
  navTextColor?: string;
  className?: string; 
}

export default function NavList({ 
  isMobile = false, 
  navTextColor = "", 
  className = "" 
}: NavListProps) {

  // ナビゲーション項目を取得（特定の項目を除外する場合はここでフィルタリング）
  const navigationItems = siteConfig.navItems.filter(item => item.showInNav !== false);

  return (
    <>
      {navigationItems
        .map((item) => (
<div key={item.label} className="w-full border-b border-clr-main-1/5 last:border-none py-5">
  {/* メインリンク */}
  <Link
    href={item.href}
    className="font-bold tracking-[0.25em] text-clr-main-1/70 active:text-clr-primary-1 hover:text-clr-main-1 transition-colors block text-base md:text-lg relative group/item"
  >
    {item.label}
    
    {/* タップ・ホバー時に文字の左に現れるサイバーなアクティブドット */}
    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-clr-primary-1 rounded-full opacity-0 scale-0 transition-all group-hover/item:opacity-100 group-hover/item:scale-100 group-active/item:opacity-100 group-active/item:scale-100" />
  </Link>

  {/* サブメニュー */}
  {item.children && (
    <div className="mt-3 rounded-lg py-2 pl-4">
      <ul className="flex flex-col gap-2">
        {item.children.map((child) => (
          <li key={child.label}>
            <Link
              href={child.href}
              className="block py-2 text-[14px] md:text-base font-medium tracking-widest text-clr-main-1/45 border-b-2 border-clr-main-1/20 border-dotted hover:text-clr-main-1 active:text-clr-primary-1 transition-colors"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
        ))}
    </>
  );
};

