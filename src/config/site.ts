// src/config/site.ts

export const siteConfig = {
  companyName: "仮の会社名",
  englishName: "Temp Tech Solutions",
  ownerName: "山田 太郎", // ← 追加しました！
  description:
    "熟練のエンジニアリングと、次世代のスピードで、ビジネスを加速させる。",
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
