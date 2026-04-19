// src/config/site.ts

import { label } from "framer-motion/client";

export type NavItem = {
  label: string;
  href: string;
  children?: readonly { // 「?」をつけることで、あってもなくても良いことになります
    label: string;
    href: string;
  }[];
};

export const siteConfig = {
  companyName: "デジタルソリューションズ株式会社",
  englishName: "Temp Tech Solutions",
  ownerName: "山田 太郎", // ← 追加しました！
  heroTagline: "Simplicity/ through/ Complexity.",
  description1: "革新的洗練された/アーキテクチャで、/ビジネスの核心を/支える。",
  description2:
    "私たちは、/止まらないシステムと、/終わらない進化を/追求し続けます。",
  url: "https://example.com",
  contact: {
    postcode: "541-0041",
    address: "大阪市中央区北浜1丁目1番9号",
	    tel: "06-6232-3456",
    	fax: "06-6232-3457",
    	email: "info@example.com",
  },
  navItems: [
    { label: "Service", href: "#service",
		children: [
			{label: "Integration", href: "#products"},
			{label: "Solutions", href: "#products"},
			{label: "as a Service", href: "#products"},
		]
	 },
    { label: "Products", href: "#products" },
    { label: "Company", href: "#company" },
    { label: "Recruit", href: "#recruit" },
  ]as NavItem[],
  theme: {
    baseColor: "#F8FAFC",
    primaryColor: "#0F172A",
    accentColor: "#0EA5E9",
  },
  placeholder: {
    hero: "/hero.webp",
  },
  features: {
    showBlog: false,
    showCaseStudies: false,
    showMember: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
