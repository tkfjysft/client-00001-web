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
  enCompamyName: "Mind Shift Systems Co., Ltd.",
  ownerName: "山田 太郎", // ← 追加しました！
  metaTitle: "",
  metaDescription: "多様な技術を駆使し、ビジネスの課題をシンプルな解決策へと導くデジタルパートナー。確かな技術力と柔軟な思考で、次世代のスタンダードを共創します。",
  heroTagline: "Mind Shift/ソフトウェアでビジネスの常識を転換する",
  description1: "多様な技術を駆使し、ビジネスの課題をシンプルな解決策へと導くデジタルパートナー。確かな技術力と柔軟な思考で、次世代のスタンダードを共創します。",
  description2: "",
  url: "https://example.com",
  contact: {
    postcode: "*******",
    address: "大阪市中央区北浜1丁目1番9号",
	    tel: "0600000000",
		// 数字の間に \u200c (ゼロ幅非接合子のコード) を入れる
    	fax: "00\u200c0000\u200c0000",
    	email: "info@example.com",
  },
  location: {
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611234!3d35.6812361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x44c8309623e03!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp",
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
