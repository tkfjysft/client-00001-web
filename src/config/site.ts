// src/config/site.ts

export const siteConfig = {
  companyName: "仮の会社名",
  englishName: "Temp Tech Solutions",
  ownerName: "山田 太郎", // ← 追加しました！
  heroTagline: "Simplicity through Complexity.",
  description1: "革新的洗練されたアーキテクチャで、ビジネスの核心を支える。",
  description2:
    "私たちは、止まらないシステムと、終わらない進化を追求し続けます。",
  url: "https://example.com",
  contact: {
    email: "info@example.com",
    tel: "03-0000-0000",
    address: "東京都〇〇区...",
  },
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
