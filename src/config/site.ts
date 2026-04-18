// src/config/site.ts

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
    email: "info@example.com",
    tel: "03-0000-0000",
    address: "東京都〇〇区...",
  },
  navItems: [
    { label: "Service", href: "#service" },
    { label: "Products", href: "#products" },
    { label: "Company", href: "#company" },
    { label: "Recruit", href: "#recruit" },
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
