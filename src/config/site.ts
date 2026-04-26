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
  companyName1: "マインドシフトシステムズ株式会社",
  companyName2: "マインドシフトシステムズ\n株式会社",
  enCompamyName: "Mind Shift Systems",
  ownerName: "山田 太郎", // ← 追加しました！
  heroTagline: "Mind Shift/ソフトウェアでビジネスの常識を転換する",
  description1: "",
  description2:
    "",
  url: "https://example.com",
  contact: {
    postcode: "*******",
    address: "大阪市中央区北浜1丁目1番9号",
	    tel: "**-****-****",
    	fax: "**-****-****",
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
    { label: "Products", href: "#products",
		children: [
			{label: "Integration", href: "#products"},
			{label: "Oracle", href: "#products"},
			{label: "各種ハードウェア", href: "#products"},
		] },
    { label: "Company", href: "#company",
		children: [
			{label: "Philosophy", href: "#products"},
			{label: "overview", href: "#products"},
		] },
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
