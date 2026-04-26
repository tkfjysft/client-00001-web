// src/app/layout.tsx
import { Header } from "@/components/Header";
import "./globals.scss";
import { Jost, Noto_Sans_JP } from "next/font/google";
import { Playfair_Display, Noto_Serif_JP } from 'next/font/google';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
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

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
});

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['700', '900'],
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], // 誠実な太さを出すため、太めも含めます
  display: 'swap',
  variable: '--font-zen-kaku', // CSS変数として定義
});

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
			className={`${playfair.variable} ${notoSerif.variable} ${zenKaku.variable} font-sans antialiased`}
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
