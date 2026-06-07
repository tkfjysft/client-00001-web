import { siteConfig } from "@/config/site";
import "@/app/globals.scss";
import HeaderNavigation from "@/components/HeaderNavigation";
import { Header } from "@/components/Header";
import { Jost, Noto_Sans_JP } from "next/font/google";
import { Playfair_Display, Noto_Serif_JP } from 'next/font/google';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop  from "@/components/ScrollToTop";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
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
  weight: ['400', '500', '700', '900'], 
  display: 'swap',
  variable: '--font-zen-kaku', 
});


export const metadata = {
  title: {
    default: siteConfig.metaTitle,
    template: `%s | ${siteConfig.metaTitle}`,
  },
  description: siteConfig.metaDescription,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    siteName: siteConfig.metaTitle,
    locale: "ja_JP",
    type: "website",
  },
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
        - これにより、英数字はJost、日本語はNoto Sansが自動で適用。
      */}
	  <body 
			className={`${playfair.variable} ${notoSerif.variable} ${zenKaku.variable} font-sans antialiased
			  `}
			style={{
			fontFamily: `${jost.style.fontFamily}, ${notoSansJP.style.fontFamily}, sans-serif`,
			}}>
				<HeaderNavigation />
        {children}
		<Footer className="z-[30]" />
		<ScrollToTop className="z-[30]" />
      </body>
    </html>
  );
}
