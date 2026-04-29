// src/config/site.ts

import { label } from "framer-motion/client";

export type NavItem = {
  label: string;
  href: string;
  // メインメニューへの掲載有無（コンポーネント側のfilter条件に使用）
  showInNav: boolean;
  children?: readonly { // 「?」をつけることで、あってもなくても良いことになります
    label: string;
    href: string;
	showInNav: boolean;
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
    { label: "Service", href: "#service", showInNav: true,
		children: [
			{label: "Integration", href: "#products", showInNav: true },
			{label: "Solutions", href: "#products", showInNav: true },
			{label: "as a Service", href: "#products", showInNav: true },
		]
	 },
    { label: "Products", href: "#products", showInNav: true,
		children: [
			{label: "Integration", href: "#products", showInNav: true },
			{label: "Oracle", href: "#products", showInNav: true },
			{label: "各種ハードウェア", href: "#products", showInNav: true },
		] },
    { label: "Company", href: "#company", showInNav: true,
		children: [
			{label: "Philosophy", href: "#products", showInNav: true },
			{label: "overview", href: "#products", showInNav: true },
		] },
    { label: "Recruit", href: "#recruit", showInNav: true },
    { label: "Privacy Policy", href: "#Privacy Policy", showInNav: false },
  ]as NavItem[],
  heroImages: [
    "/images/hero_cording.webp",
    "/images/hero_meeting.webp",
    "/images/hero_office.webp",
    "/", // あえて空にするセル
    "/",
    "/",
    "/images/hero_ceo.webp",
    "/images/hero_whiteboard.webp",
    "/images/hero_serverroom.webp",
  ],
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
