// src/app/layout.tsx
import { Header } from "@/components/Header";
import "./globals.scss";
import { Jost, Noto_Sans_JP } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop  from "@/components/ScrollToTop";

// 1. 英字フォント：Jost (Futura系の幾何学的でモダンなフォント)
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 標準、中太、太字
  display: "swap",
});

// 2. 日本語フォント：Noto Sans JP (最も標準的で美しいゴシック体)
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  // ...既存のメタデータ
  formatDetection: {
    telephone: false, // これでブラウザの勝手なリンク化を止めます
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
		{/* - className="antialiased" で文字を滑らかに。
          - style属性で、英字(Jost)を先頭、日本語(Noto Sans)を次に指定。
          - これにより、英数字はJost、日本語はNoto Sansが自動で適用されます。
      	*/}
		<body 
			className="antialiased" 
			style={{
			fontFamily: `${jost.style.fontFamily}, ${notoSansJP.style.fontFamily}, sans-serif`,
			}}>
        <Header />
        <HeroSection />
        {children}
		<Footer />
		<ScrollToTop />
      </body>
    </html>
  );
}
