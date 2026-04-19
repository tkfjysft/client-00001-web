"use client";

import { Container } from "./Container";
import {
  Monitor,
  Server,
  Lightbulb,
  Code,
  Database,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react";

export default function ServiceSection() {
  const serviceGroups = [
    {
      label: "GROUP 01",
      title: "Core Infrastructure",
      services: [
        { name: "Webシステム開発", icon: <Server /> },
        { name: "基幹システム構築", icon: <Database /> },
      ],
    },
    {
      label: "GROUP 02",
      title: "Experience Design",
      services: [
        { name: "UI/UXデザイン", icon: <Monitor /> },
        { name: "モバイルアプリ開発", icon: <Smartphone /> },
        { name: "フロントエンド開発", icon: <Code /> },
      ],
    },
    {
      label: "GROUP 03",
      title: "Consulting & Security",
      services: [
        { name: "DXコンサルティング", icon: <Lightbulb /> },
        { name: "クラウド移行支援", icon: <Cloud /> },
        { name: "セキュリティ診断", icon: <Shield /> },
      ],
    },
  ];

  return (
    <>
      {/* 背景: $bg-primary (#1e293b) */}
      <section data-bg="dark" className="relative py-32 w-full bg-[#1e293b] text-[#f8fafc] overflow-hidden"
	            style={{
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          }}>
        <Container>
          {/* --- 背景写真エリア (台形の角度をさらに寝かせる) --- */}

{/* 2. 背景ユニット：画面に完全に固定（fixed） */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 左側の紺色背景（画面の左60%くらいを占める） */}
        <div 
          className="absolute inset-0 bg-[#0f172a]" // 紺色
          style={{
            clipPath: "polygon(0 0, 70% 0, 20% 100%, 0 100%)",
          }}
        />

        {/* 右側の画像背景（斜めに重なる） */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 20% 100%)",
          }}
        />
      </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1730] via-[#0f172a]/90 to-transparent" />

          {/* </div> */}

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* 見出しエリア：MessageSectionに近い、線を使ったミニマルな構成 */}
            <div className="flex items-center gap-4 mb-24">
              <div className="w-12 h-[2px] bg-[#0ea5e9]" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Our Services
              </h2>
              <div className="flex-grow h-[1px] bg-[#f8fafc]/10" />
            </div>

            <div className="space-y-32">
              {serviceGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="relative">
                  {/* グループ見出し：横線で区切るスタイル */}
                  <div className="flex items-baseline gap-6 mb-12 border-b border-[#f8fafc]/10 pb-4">
                    <span className="text-[#0ea5e9] font-mono text-xs tracking-[0.4em]">
                      {group.label}
                    </span>
                    <h3 className="text-xl font-light tracking-widest text-[#f8fafc]/60">
                      {group.title}
                    </h3>
                  </div>

                  {/* サービスカード：MessageSectionのような「箱なし」デザイン */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {group.services.map((service, serviceIdx) => (
                      <div key={serviceIdx} className="group relative">
                        {/* 左側の垂直線（MessageSectionのA案的なアクセント） */}
                        <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col items-start space-y-6">
                          {/* --- サービス用写真スペース (正円) --- */}
                          <div className="w-24 h-24 rounded-full bg-[#f8fafc]/5 border border-[#f8fafc]/10 overflow-hidden flex-shrink-0 relative">
                            {/* ここに後で写真を挿入 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/20 to-transparent flex items-center justify-center text-[#0ea5e9] group-hover:scale-110 transition-transform duration-500">
                              {service.icon}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-xl font-bold tracking-tight group-hover:text-[#0ea5e9] transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-[#f8fafc]/50 text-sm leading-relaxed font-light">
                              最適な技術スタックを選定し、ビジネスの課題をシンプルかつ堅牢な解決策へと導きます。
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
