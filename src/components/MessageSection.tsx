"use client";

import { Container } from "./Container";
import { useAutoAnimate } from "./hooks/useAutoAnimate";

export default function MessageSection() {
useAutoAnimate();

  return (
    <>
      {/* 背景: $bg-base (#f8fafc) */}
      <section id="message-section" data-bg="light" className="py-24 w-full bg-[#f8fafc] border-y border-[#1e293b]/5"
	            style={{
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
      >
        <Container>


{/* 2. 背景ユニット：画面に完全に固定（fixed） */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        {/* 左側の紺色背景（画面の左60%くらいを占める） */}
        <div 
          className="absolute inset-0 bg-transparent z-2" // 紺色
          style={{
			            clipPath: "polygon(90% 0%, 100% 0%, 100% 100%, 15% 100%)",
          }}
        />

        {/* 右側の画像背景（斜めに重なる） */}
		<div className="bg-white opacity-100 z-3 w-full h-full"
		          style={{
            clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}>
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: 'url("/images/bg_01.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}
        />
		</div>
      </div>


		  {/* 背景にドットのあしらい */}
          <div
            className="absolute inset-0 opacity-[0.1] pointer-events-none z-0 bg-[#f8fafc] "
            style={{
              backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="max-w-6xl mx-auto relative px-6 z-10 reveal">
			            {/* 上部の装飾：細い直線とアクセントカラーの小さな矩形 */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[2px] bg-[#0ea5e9]" />
              <span className="text-[#1e293b] font-mono text-xs tracking-[0.4em] uppercase">
                Mission Statement
              </span>
              <div className="flex-grow h-[1px] bg-[#1e293b]/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* 左側：キャッチコピー (4カラム) */}
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-4.5xl font-bold text-[#1e293b] leading-[1.5] tracking-tighter">
                  テクノロジーで、
                  <br />
                  ビジネスの「次」を
                  <br />
                  <span className="text-[#0ea5e9]">形にする。</span>
                </h2>
              </div>

              {/* 右側：本文 (7カラム) - 直線によるセパレート */}
              <div className="lg:col-span-7 lg:border-l lg:border-[#1e293b]/10 lg:pl-16 space-y-10">
                <div className="space-y-6">
                  <p className="text-[#1e293b] text-xl md:text-2xl leading-relaxed font-light">
                    私たちは、単にコードを書く集団ではありません。
                    お客様のビジネスの本質を理解し、最新のテクノロジーを駆使して、
                    真に価値のあるデジタル体験を共創するパートナーです。
                  </p>
                  <p className="text-[#1e293b]/60 text-lg leading-relaxed">
                    堅牢な設計による安定した基盤と、洗練されたインターフェースによる快適な操作性。
                    高度な専門性と確かな実装力をもって、複雑なビジネス課題を最適なデジタルソリューションへと導きます。
                  </p>
                </div>

                {/* 下部の署名的な装飾：アクセントカラーのライン */}
                <div className="pt-8 border-t border-[#1e293b]/5 flex justify-between items-center">
                  <span className="text-[#1e293b]/40 font-mono text-xs italic">
                    Established 2026 / SERVICTY
                  </span>
                  <div className="w-24 h-px bg-[#0ea5e9] reveal" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
