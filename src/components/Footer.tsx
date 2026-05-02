import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Container } from "@/components/Container";
import SnsLinks from "@/components/SnsLinks";

// 1. 連絡先情報を表示する小さな部品（ファイル内で定義）
const ContactInfo = ({ className = "" }: { className?: string }) => (
  <ul className={`${className} text-clr-base-1/80 whitespace-pre-wrap`}>
    <li>〒{siteConfig.contact.postcode}</li>
    <li>{siteConfig.contact.address}</li>
    <li>
      tel : <a href={`tel:${siteConfig.contact.tel}`} className="hover:opacity-70">{siteConfig.contact.tel}</a>
    </li>
    <li>fax : {siteConfig.contact.fax}</li>
  </ul>
);

interface FooterProps  {
	className? : string;
}

export default function Footer({
	className
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
	<>
	{/* グラデ背景は透明が僅かにあるのでそのさらに背景に不透明の色を配置する必要がある */}
    <footer id="footer-section" className={`relative w-full text-clr-base-1 overflow-hidden bg-clr-main-1 ${className}`}
		  style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
	>
      <div className="fixed inset-0 -z-10 bg-bgclr-startup-dark" />

      {/* 1. Google Maps エリア */}
      <div
        data-bg="light"
        className="relative w-full h-[400px] overflow-hidden grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
      >
        <iframe
          src={siteConfig.location.googleMapsUrl} 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="absolute top-12 left-10 p-7 bg-clr-main-1 border-l-4 border-clr-primary-1 hidden md:block">
          <h3 className="text-clr-base-1/90 font-bold mb-2">{siteConfig.companyName1}</h3>
          <ContactInfo className="text-clr-base-1/90 text-sm" />
        </div>
      </div>

      <Container>
        <div className="mx-auto py-16" data-bg="dark">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px]"> {/* md:px-15に合わせgapも調整 */}
            
            {/* 2. ロゴ・会社概要 */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="text-lg font-bold">
                {siteConfig.companyName1}
              </h2>
              <ContactInfo className="text-clr-base-1/90" />
              <p className="text-clr-base-1/65 text-sm max-w-sm pt-3">
                {siteConfig.description1}
              </p>
            </div>

            <div className="md:col-span-1" />

            {/* 3. リンク集 */}
            <div className="md:col-span-6 grid grid-flow-col grid-rows-2 md:gap-y-0 gap-y-8 mt-[-50px] md:mt-0">
              {siteConfig.navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  <Link
                    href={item.href}
                    className="text-clr-base-1/80 font-bold tracking-widest hover:text-clr-base-1/100 transition-colors"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <ul className="border-l border-clr-base-1/20 pl-4 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="text-clr-base-1/60 hover:text-clr-base-1/100 transition-colors block py-0.5"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

		  {/* snsアイコン */}
          <div className="w-full flex justify-start md:justify-end mt-20">
            <SnsLinks />
          </div>

		  {/* サブリンク集 */}
          <div className="flex justify-start md:justify-end gap-4 pt-4">
            {siteConfig.subNavItems.map((item) => (
              <div key={item.label} className="">
                <Link
                  href={item.href}
                  className="text-clr-base-1/60 text-sm hover:text-clr-base-1/100 transition-colors"
                >
                  {item.label}
                </Link>  
              </div>
            ))}
          </div>

          {/* 4. コピーライト */}
          <div className="mt-20 pt-8 border-t border-clr-base-1/8 w-full flex justify-start md:justify-end text-clr-base-1/50 text-sm font-mono">
            <small>© {currentYear} {siteConfig.enCompamyName.toUpperCase()} <br className="inline-block sm:hidden" />ALL RIGHTS RESERVED.</small>
          </div>
        </div>
      </Container>
    </footer>
	</>
  );
}