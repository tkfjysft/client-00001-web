"use client";

import { Container } from "./Container";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1e293b] text-[#f8fafc]">
      {/* 1. Google Maps エリア */}
      <div data-bg="light" className="relative w-full h-[400px] overflow-hidden grayscale-[0.8] contrast-[1.2] hover:grayscale-0 transition-all duration-700">
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
        <div className="absolute top-10 left-10 p-8 bg-[#1e293b] border-l-4 border-[#0ea5e9] hidden md:block">
          <h3 className="text-xl font-bold mb-2">Head Office</h3>
          <p className="text-[#f8fafc]/60 text-sm leading-relaxed">
            〒100-0005 <br />
            東京都千代田区丸の内1丁目
            <br />
            SERVICTYビル 8F
          </p>
        </div>
      </div>
      {/* ここからContainder */}
      <Container data-bg="dark">
        {/* 2. メインフッターエリア */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* ロゴ・会社概要 */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter">
                SERVICTY<span className="text-[#0ea5e9]">.</span>
              </h2>
              <p className="text-[#f8fafc]/40 text-sm leading-relaxed max-w-sm">
                多様な技術を駆使し、ビジネスの課題をシンプルな解決策へと導くデジタルパートナー。
                確かな技術力と柔軟な思考で、次世代のスタンダードを共創します。
              </p>
            </div>

            {/* リンク集 (2列) */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div className="space-y-4">
                <h4 className="font-bold text-[#0ea5e9]">Company</h4>
                <ul className="space-y-2 text-[#f8fafc]/60">
                  <li className="hover:text-white cursor-pointer">About Us</li>
                  <li className="hover:text-white cursor-pointer">Service</li>
                  <li className="hover:text-white cursor-pointer">Products</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#0ea5e9]">Support</h4>
                <ul className="space-y-2 text-[#f8fafc]/60">
                  <li className="hover:text-white cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Terms of Use
                  </li>
                  <li className="hover:text-white cursor-pointer">Contact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* コピーライトとSNSリンク */}
          <div className="mt-20 pt-8 border-t border-[#f8fafc]/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[#f8fafc]/30 text-xs font-mono">
            <p>© 2026 SERVICTY INC. ALL RIGHTS RESERVED.</p>

            <div className="flex gap-8 items-center">
              {/* 馴染みのあるSNSに最適化 */}
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">
                X (Twitter)
              </a>
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">
                LINE
              </a>
              {/* もし技術力をアピールするならGitHubもおすすめですが、なくてもOKです */}
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
