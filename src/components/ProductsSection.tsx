"use client";

import { Container } from "./Container";

export default function ProductsSection() {
  const products = [
    {
      id: "01",
      title: "Enterprise Ecosystem",
      description:
        "大規模なビジネス基盤を支える、次世代の統合プラットフォーム。複雑なデータフローを最適化し、意思決定のスピードを劇的に向上させます。",
    },
    {
      id: "02",
      title: "Lightweight Tool",
      description:
        "特定の課題に特化した、シンプルで強力なミニマル・ソリューション。",
    },
    {
      id: "03",
      title: "Cloud Native System",
      description:
        "スケーラビリティを最優先したクラウドネイティブなプロダクト。変化し続ける市場環境に柔軟に対応できる堅牢な設計を実現しました。",
    },
  ];

  return (
    <>
      <section id="products-section" data-bg="light" className="py-24 w-full bg-clr-base-1 relative"
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
		<div className="bg-clr-base-1 opacity-100 z-3 w-full h-full"
		          style={{
            clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/images/bg_03.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}
        />
		</div>
      </div>


		  {/* 背景にドットのあしらい */}
          <div
            className="absolute inset-0 opacity-[0.1] pointer-events-none z-0 bg-clr-base-1"
            style={{
              backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="max-w-6xl mx-auto relative px-6 z-10">
            {/* 見出し */}
            <div className="flex items-center gap-4 mb-20">
              <div className="w-12 h-[2px] bg-clr-primary-1 reveal" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-clr-main-1">
                Selected Products
              </h2>
              <div className="flex-grow h-[1px] bg-clr-main-1/5" />
            </div>

            {/* グリッドレイアウト 
            - デフォルト（スマホ）: 1列 (grid-cols-1)
            - md以上: 12カラム
        */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
              {/* 1番目: PCでは7列、スマホでは共通レイアウト */}
              <div className="md:col-span-7 group border-t border-clr-main-1/10 pt-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* 写真サイズ: スマホでは w-32 (共通) / PCでは w-56 (大) */}
                  <div className="w-32 h-32 md:w-56 md:h-56 flex-shrink-0 rounded-full border border-clr-main-1/10 bg-clr-base-1 relative overflow-hidden reveal">
                    <div className="absolute inset-0 bg-gradient-to-tr from-clr-base-1 to-clr-main-1/5 flex items-center justify-center">
                      <span className="text-clr-primary-1/10 font-mono text-4xl">
                        01
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-clr-primary-1 font-mono text-xs">
                        01
                      </span>
                      <h3 className="text-2xl font-bold text-clr-main-1 group-hover:text-clr-main-2/80 transition-colors">
                        {products[0].title}
                      </h3>
                    </div>
                    <p className="text-clr-main-1/70 text-lg leading-relaxed font-light">
                      {products[0].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2番目: PCでは5列、スマホでは共通レイアウト */}
              <div className="md:col-span-5 group border-t border-clr-main-1/10 pt-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* 写真サイズ: 2番目もスマホでは w-32 に統一 */}
                  <div className="w-32 h-32 md:w-32 md:h-32 flex-shrink-0 rounded-full border border-clr-main-1/10 bg-clr-base-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-clr-base-1 to-clr-main-1/5 flex items-center justify-center">
                      <span className="text-clr-primary-1/10 font-mono text-2xl">
                        02
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-clr-primary-1 font-mono text-xs">
                        02
                      </span>
                      <h3 className="text-2xl md:text-xl font-bold text-clr-main-1 group-hover:text-clr-main-2/80 transition-colors">
                        {products[1].title}
                      </h3>
                    </div>
                    <p className="text-clr-main-1/60 text-lg md:text-sm leading-relaxed font-light">
                      {products[1].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3番目: PCでは8列・右寄せ、スマホでは共通レイアウト */}
              <div className="md:col-span-8 md:col-start-5 group border-t border-clr-main-1/10 pt-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* 写真サイズ: スマホでは w-32 (共通) / PCでは w-56 (大) */}
                  <div className="w-32 h-32 md:w-56 md:h-56 flex-shrink-0 rounded-full border border-clr-main-1/10 bg-clr-base-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-clr-base-1 to-clr-main-1/5 flex items-center justify-center">
                      <span className="text-clr-main-1/10 font-mono text-4xl">
                        03
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-clr-primary-1 font-mono text-xs">
                        03
                      </span>
                      <h3 className="text-2xl clr-main-2 font-bold text-clr-main-1 group-hover:text-clr-main-2/80 transition-colors">
                        {products[2].title}
                      </h3>
                    </div>
                    <p className="text-clr-main-1/60 text-lg leading-relaxed font-light">
                      {products[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
