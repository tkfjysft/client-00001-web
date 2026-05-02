// src/app/layout.tsx
import { siteConfig } from "@/config/site";
import "@/app/globals.scss";
import { Header } from "@/components/Header";
import { Jost, Noto_Sans_JP } from "next/font/google";
import { Playfair_Display, Noto_Serif_JP } from 'next/font/google';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop  from "@/components/ScrollToTop";

// フォント設定
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 標準、中太、太字
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

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


//メタデータ
export const metadata = {
  title: {
    default: siteConfig.metaTitle,
    template: `%s | ${siteConfig.metaTitle}`,
  },
  description: siteConfig.metaDescription,
  // 1. 電話番号の自動リンクを「保険」としてオフにする
  formatDetection: {
    telephone: false,
  },
  // 2. SNSでシェアされた時の見え方 (OGP)
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    siteName: siteConfig.metaTitle,
    locale: "ja_JP",
    type: "website",
  },
  // 3. Twitter(X)用の設定
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
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
			className={`${playfair.variable} ${notoSerif.variable} ${zenKaku.variable} font-sans antialiased
			  bg-bgclr-startup-dark`}
			style={{
			fontFamily: `${jost.style.fontFamily}, ${notoSansJP.style.fontFamily}, sans-serif`,
			}}>
        <Header className="z-100" />
        <HeroSection className="-z-1" />
        {children}
		<Footer className="z-60" />
		<ScrollToTop className="z-60" />
      </body>
    </html>
  );
}
