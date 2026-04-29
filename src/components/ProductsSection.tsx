import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";

// 1. 各製品のデータを整理
const PRODUCTS = [
  {
    id: "01",
    title: "Enterprise Ecosystem",
    photo: '/images/products_01.webp',
    description: "大規模なビジネス基盤を支える、次世代の統合プラットフォーム。複雑なデータフローを最適化し、意思決定のスピードを劇的に向上させます。",
    imgSize: "lg:w-56 lg:h-56" // PC版の画像サイズをここで指定
  },
  {
    id: "02",
    title: "Lightweight Tool",
    photo: '/images/products_02.webp',
    description: "特定の課題に特化した、シンプルで強力なミニマル・ソリューション。",
    imgSize: "lg:w-32 lg:h-32"
  },
  {
    id: "03",
    title: "Cloud Native System",
    photo: '/images/products_03.webp',
    description: "スケーラビリティを最優先したクラウドネイティブなプロダクト。変化し続ける市場環境に柔軟に対応できる堅牢な設計を実現しました。",
    imgSize: "lg:w-70 lg:h-70"
  },
];

export default function ProductsSection() {

  return (
    <>

	<section 
      id="products-section" 
      data-bg="light" 
      className="relative w-full bg-clr-base-1 py-32"
	  style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >

	  {/* 1. 背景ユニット：fixed で画面全体に固定 */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        
        {/* 【最背面】ドット模様：画面全体に敷く */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(var(--color-clr-main-1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* 【前面】写真背景 + 斜めカット：これで下のドットを「隠す」 */}
        <div className="absolute inset-0 bg-clr-primary-2 
          [clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
          md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]">
          
          {/* 背景画像：親の clip-path の範囲内だけに表示される */}
          <div
            className="absolute inset-0 opacity-10 bg-[url('/images/bg_03.webp')] bg-cover
              [background-position:-180px_-30px] md:[background-position:0px_0px]"
          />
        </div>
      </div>

	  {/* --- コンテンツレイヤー --- */}
      <Container>
        <div className="relative z-10 mx-auto">
          {/* 見出し */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-clr-primary-1 reveal" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-clr-main-1/90">Products</h2>
            <div className="flex-grow h-[1px] bg-clr-main-1/5" />
          </div>

          {/* グリッドレイアウト */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto] lg:grid-cols-12 gap-y-16 lg:gap-x-8">
            
            {/* 1番目 (7列) */}
            <div className="md:w-[42vw] lg:w-auto lg:col-span-7 pt-10 lg:border-t lg:border-clr-main-1/10">
              <ProductCard product={PRODUCTS[0]} />
            </div>

            {/* 2番目 (5列) */}
            <div className="md:w-[42vw] lg:w-auto lg:col-span-5 pt-10 lg:border-t lg:border-clr-main-1/10">
              <ProductCard product={PRODUCTS[1]} />
            </div>

            {/* 3番目 (9列・オフセット) */}
            <div className="md:w-[42vw] lg:w-auto lg:col-span-9 lg:col-start-3 pt-10 lg:border-t lg:border-clr-main-1/10">
              <ProductCard product={PRODUCTS[2]} />
            </div>

          </div>
        </div>
      </Container>
      </section>
    </>
  );
}


// --- 内部パーツ：製品カード ---
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  return (
    <div className="group flex flex-col lg:flex-row gap-1 lg:gap-2 items-start">
      {/* 写真：共通のレスポンシブ設定 + データから渡されるPCサイズ */}
      <div className={`size-[70vw] md:size-60 ${product.imgSize} flex-shrink-0 border border-clr-main-1/10 bg-clr-base-1 relative overflow-hidden reveal`}>
        <img src={product.photo} alt="" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="text-clr-primary-1 font-mono text-xs">{product.id}</span>
          <h3 className="text-xl font-bold text-clr-main-1/70 group-hover:text-clr-main-2/80 transition-colors">
            {product.title}
          </h3>
        </div>
        <p className="text-clr-main-1/80 leading-relaxed font-light text-justify">
          {product.description}
        </p>
        <ArrowLink href="https://example.co.jp" />
      </div>
    </div>
  );
}