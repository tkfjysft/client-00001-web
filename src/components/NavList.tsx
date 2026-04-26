// "use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

interface NavListProps {
  isMobile?: boolean;
  navTextColor?: string;
}

const NavList = ({ isMobile = false, navTextColor = "" }: NavListProps) => {
  return (
    <>
      {siteConfig.navItems
        .filter((_, index) => index !== 4) // 5番目を除外
        .map((item) => (
          <div key={item.label} className={isMobile ? "mb-8 text-center" : "relative group"}>
            {/* メインリンク */}
            <Link
              href={item.href}
              className={
                isMobile
                  ? "hover:scale-125 transition-all block text-lg" // スマホ版スタイル
                  : `font-bold tracking-widest hover:scale-105 transition-all flex items-center gap-1 ${navTextColor}` // PC版スタイル
              }
            >
              {item.label}
              {!isMobile && item.children && <span className="text-xs">▼</span>}
            </Link>

            {/* サブメニュー */}
            {item.children && (
              <div
                className={
                  isMobile
                    ? "pt-2"
                    : "absolute left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                }
              >
                <ul className={isMobile ? "" : "bg-clr-base-1 py-2 min-w-[200px] shadow-xl"}>
                  {item.children.map((child) => (
                    <li key={child.label} className={isMobile ? "ml-3" : ""}>
                      <Link
                        href={child.href}
                        className={
                          isMobile
                            ? "block py-1 text-sm text-clr-main-1/55"
                            : "block px-4 py-2 text-sm text-clr-main-1/55 hover:bg-clr-main-1/55 hover:text-clr-base-2/95 transition-colors"
                        }
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

export default NavList; // ← これがあることで import NavList from ... が動きます