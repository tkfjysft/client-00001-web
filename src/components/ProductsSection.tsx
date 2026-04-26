// "use client";

import { Container } from "./Container";
import ArrowLink from "@/components/ArrowLink";

export default function ProductsSection() {
  const products = [
    {
      id: "01",
      title: "Enterprise Ecosystem",
	  photo: '/images/products_01.webp',
      description:
        "大規模なビジネス基盤を支える、次世代の統合プラットフォーム。複雑なデータフローを最適化し、意思決定のスピードを劇的に向上させます。",
    },
    {
      id: "02",
      title: "Lightweight Tool",
	  photo: '/images/products_02.webp',
      description:
        "特定の課題に特化した、シンプルで強力なミニマル・ソリューション。",
    },
    {
      id: "03",
      title: "Cloud Native System",
	  photo: '/images/products_03.webp',
      description:
        "スケーラビリティを最優先したクラウドネイティブなプロダクト。変化し続ける市場環境に柔軟に対応できる堅牢な設計を実現しました。",
    },
  ];

  return (
    <>
      <section id="products-section" data-bg="light" className="py-32 w-full bg-clr-base-1 relative"
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
        //   style={{
		// 	clipPath: "polygon(90% 0%, 100% 0%, 100% 100%, 15% 100%)",
        //   }}
        />

        {/* 右側の画像背景（斜めに重なる） */}
		<div className="bg-clr-primary-2 opacity-100 z-3 w-full h-full
			[clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
		  	md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]
		  "
		          style={{
            // clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}>
        <div
          className="absolute inset-0 opacity-8
		  bg-[url('/images/bg_03.webp')]
		  	[clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
		  	md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]
			contrast-150"
          style={{
            // backgroundImage: 'url("/images/bg_03.webp")',
            backgroundSize: "cover",
            // backgroundPosition: "center",
            // clipPath: "polygon(0 0, 90% 0, 15% 100%, 0 100%)",
          }}
        />
		</div>
      </div>


		  {/* 背景にドットのあしらい */}
          <div
            className="fixed inset-0 opacity-[0.1] pointer-events-none z-0 bg-clr-base-1"
            style={{
              backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="mx-auto relative z-10">
            {/* 見出し */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[2px] bg-clr-primary-1 reveal" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-clr-main-1/90">
                Products
              </h2>
              <div className="flex-grow h-[1px] bg-clr-main-1/5" />
            </div>

            {/* グリッドレイアウト 
            - デフォルト（スマホ）: 1列 (grid-cols-1)
            - md以上: 12カラム
        */}
            <div className="grid grid-cols-1 md:grid-cols-[auto_auto] lg:grid-cols-12 gap-y-16 lg:gap-x-8">
              {/* 1番目: PCでは7列、スマホでは共通レイアウト */}
              <div className="md:w-[42vw] lg:w-auto lg:col-span-7 group lg:border-t lg:border-clr-main-1/10 pt-10">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-start">
                  {/* 写真サイズ: スマホでは w-32 (共通) / PCでは w-56 (大) */}
                  <div className="size-[70vw] md:size-60 lg:w-56 lg:h-56 flex-shrink-0 border border-clr-main-1/10 bg-clr-base-1 relative overflow-hidden reveal">
				  	<img src={products[0].photo} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-clr-primary-1 font-mono text-xs">
                        01
                      </span>
                      <h3 className="text-xl font-bold text-clr-main-1/70 group-hover:text-clr-main-2/80 transition-colors">
                        {products[0].title}
                      </h3>
                    </div>
                    <p className="text-clr-main-1/80 leading-relaxed font-light text-justify">
                      {products[0].description}
                    </p>
					<ArrowLink href="https://example.co.jp" />
                  </div>
                </div>
              </div>

              {/* 2番目: PCでは5列、スマホでは共通レイアウト */}
              <div className="md:w-[39vw] lg:w-auto lg:col-span-5 group lg:border-t lg:border-clr-main-1/10 pt-10">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-start">
                  {/* 写真サイズ: 2番目もスマホでは w-32 に統一 */}
                  <div className="size-[70vw] md:size-60 lg:w-32 lg:h-32 flex-shrink-0 border border-clr-main-1/10 bg-clr-base-1 relative overflow-hidden reveal">
				  	<img src={products[1].photo} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-clr-primary-1 font-mono text-xs">
                        02
                      </span>
                      <h3 className="text-xl font-bold text-clr-main-1/70 group-hover:text-clr-main-2/80 transition-colors">
                        {products[1].title}
                      </h3>
                    </div>
                    <p className="text-clr-main-1/80 leading-relaxed font-light text-justify">
                      {products[1].description}
                    </p>
					<ArrowLink href="https://example.co.jp" />
                  </div>
                </div>
              </div>

              {/* 3番目: PCでは8列・右寄せ、スマホでは共通レイアウト */}
              <div className="md:w-[42vw] lg:w-auto lg:col-span-9 lg:col-start-3 group lg:border-t lg:border-clr-main-1/10 pt-10">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-start">
                  {/* 写真サイズ: スマホでは w-32 (共通) / PCでは w-56 (大) */}
                  <div className="size-[70vw] md:size-60 lg:w-70 lg:h-70 flex-shrink-0 border border-clr-main-1/10 bg-clr-base-1 relative overflow-hidden reveal">
				  	<img src={products[2].photo} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-clr-primary-1 font-mono text-xs">
                        03
                      </span>
                      <h3 className="text-xl clr-main-2 font-bold text-clr-main-1/70 group-hover:text-clr-main-2/80 transition-colors">
                        {products[2].title}
                      </h3>
                    </div>
                    <p className="text-clr-main-1/80 leading-relaxed font-light text-justify">
                      {products[2].description}
                    </p>
					<ArrowLink href="https://example.co.jp" />
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
