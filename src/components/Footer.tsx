"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Container } from "./Container";
import SnsLinks from "@/components/SnsLinks";

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full text-clr-base-1 overflow-hidden">
	{/* 💡 固定背景レイヤー */}
  	<div className="fixed inset-0 -z-10 bg-bgclr_startup-dark" />
      {/* 1. Google Maps エリア */}
      <div
        data-bg="light"
        className="relative w-full h-[400px] overflow-hidden grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611234!3d35.6812361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x44c8309623e03!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* マップの上に浮かぶ拠点カード (MessageSectionのデザインを継承) */}
        <div className="absolute top-12 left-10 p-7 bg-clr-main-1 border-l-4 border-clr-primary-1 hidden md:block">
          <h3 className="text-clr-base-1/90 font-bold mb-2">{siteConfig.companyName1}</h3>
          <p className="text-clr-base-1/90 text-sm leading-relaxed">
            〒{siteConfig.contact.postcode}
            <br />
            {siteConfig.contact.address}
            <br />
            <span className="text-xs">tel</span>&nbsp;&nbsp;<a href={`tel:${siteConfig.contact.tel}`}>{siteConfig.contact.tel}</a>
            <br />
            <span className="text-xs">fax</span>&nbsp;&nbsp;{siteConfig.contact.fax}
          </p>
        </div>
      </div>

      {/* ここからContainder */}
      <Container>
        {/* 2. メインフッターエリア */}
        <div className="mx-auto py-32" data-bg="dark">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-19">
            {/* ロゴ・会社概要 */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="text-lg font-bold tracking-tighter">
                {siteConfig.companyName1}
              </h2>
              <ul className="text-clr-base-1/90 leading-relaxed max-w-sm">
                <li>〒{siteConfig.contact.postcode}</li>
                <li>{siteConfig.contact.address}</li>
                <li>tel&nbsp;:&nbsp;<a href={`tel:${siteConfig.contact.tel}`}>{siteConfig.contact.tel}</a></li>
                <li>fax&nbsp;:&nbsp;{siteConfig.contact.fax}</li>
              </ul>
              <p className="text-clr-base-1/65 text-sm leading-relaxed max-w-sm pt-3">
                多様な技術を駆使し、ビジネスの課題をシンプルな解決策へと導くデジタルパートナー。
                確かな技術力と柔軟な思考で、次世代のスタンダードを共創します。
              </p>
            </div>
			{/* 空白 */}
			<div className="md:col-span-1"></div>
            {/* リンク集 (右側 6カラム分) */}
            <div className="md:col-span-6 grid grid-cols-2 md:gap-y-0 gap-y-8">
              {siteConfig.navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  {/* 親メニュー：少し太字にする */}
                  <Link
                    href={item.href}
                    className="text-clr-base-1/80 font-bold tracking-wider hover:text-clr-base-1/100"
                  >
                    {item.label}
                  </Link>

                  {/* 子メニュー：最初からリストとして展開して見せる */}
                  {item.children && (
                    <ul className="border-l border-clr-base-1/20 pl-4">
                      {item.children.map((child) => (
                        <li key={child.label} style={{paddingBottom:'3px'}}>
                          <Link
                            href={child.href}
                            className="text-clr-base-1/60 hover:text-clr-base-1/100 transition-colors block"
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

          <div className="w-full flex justify-end mt-20">
            <SnsLinks />
          </div>

          {/* コピーライトとSNSリンク */}
          <div className="mt-20 pt-8 border-t border-clr-base-1/8 w-full flex justify-end text-clr-base-1/50 text-sm font-mono">
            <small>© 2026 SERVICTY INC. ALL RIGHTS RESERVED.</small>
          </div>
        </div>
      </Container>
    </footer>
  );
}
