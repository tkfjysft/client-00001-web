"use client";

import { Container } from "./Container";
import { useAutoAnimate } from "./hooks/useAutoAnimate";

export default function MessageSection() {
useAutoAnimate();

  return (
    <>
      {/* 背景: $bg-base (#f8fafc) */}
      <section id="message-section" data-bg="light" className="py-32 w-full bg-clr-base-1"
	            style={{
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
      >
        <Container>


{/* 2. 背景ユニット：画面に完全に固定（fixed） */}
      <div className="fixed inset-0 z-1 pointer-events-none
		">
        {/* 右側 */}
        <div 
          className="absolute inset-0 bg-transparent z-2"
        />

        {/* 左側 */}
		<div className="bg-clr-base-1 opacity-100 z-3 w-full h-full
			[clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
		  md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]
		  "
		          style={{
            // clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}>
        <div
          className="absolute inset-0 opacity-8
		  	bg-[url('/images/bg_01.webp')]
		  	[background-position:-180px_-30px]
			md:[background-position:0px_0px]
			[clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
		  	md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]
		  "
          style={{
            // backgroundImage: 'url("/images/bg_01.webp")',
            backgroundSize: "cover",
            // backgroundPosition: "center",
            // clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}
        />
		</div>
      </div>


		  {/* 背景にドットのあしらい */}
          <div
            className="fixed inset-0 opacity-[0.1] pointer-events-none z-0 bg-clr-base-1 "
            style={{
              backgroundImage: `radial-gradient(var(--color-clr-main-1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="mx-auto relative z-10 reveal">
			            {/* 上部の装飾：細い直線とアクセントカラーの小さな矩形 */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[2px] bg-clr-primary-1" />
              <span className="text-clr-main-1 font-mono text-xs tracking-[0.4em] uppercase">
                Mission Statement
              </span>
              <div className="flex-grow h-[1px] bg-clr-main-1/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* 左側：キャッチコピー (4カラム) */}
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-4.5xl font-bold text-clr-main-1 leading-[1.5] tracking-tighter">
                  テクノロジーで、
                  <br />
                  ビジネスの「次」を
                  <br />
                  <span className="text-clr-primary-1">形にする。</span>
                </h2>
              </div>

              {/* 右側：本文 (7カラム) - 直線によるセパレート */}
              <div className="lg:col-span-7 lg:border-l lg:border-clr-main-1/10 lg:pl-16 space-y-10">
                <div className="space-y-6">
                  <p className="text-clr-main-1 text-xl md:text-2xl leading-relaxed font-light">
                    私たちは、単にコードを書く集団ではありません。
                    お客様のビジネスの本質を理解し、最新のテクノロジーを駆使して、
                    真に価値のあるデジタル体験を共創するパートナーです。
                  </p>
                  <p className="text-clr-main-1/60 text-lg leading-relaxed">
                    堅牢な設計による安定した基盤と、洗練されたインターフェースによる快適な操作性。
                    高度な専門性と確かな実装力をもって、複雑なビジネス課題を最適なデジタルソリューションへと導きます。
                  </p>
                </div>

                {/* 下部の署名的な装飾：アクセントカラーのライン */}
                <div className="pt-8 border-t border-clr-main-1/5 flex justify-between items-center">
                  <span className="text-clr-main-1/40 font-mono text-xs italic">
                    Established 2026 / SERVICTY
                  </span>
                  <div className="w-24 h-px bg-clr-primary-1 reveal" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
