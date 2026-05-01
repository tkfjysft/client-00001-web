import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";
import { MarkdownView } from "@/components/MarkdownView";

// 1. 各製品のデータを整理
const PRODUCTS = [
  {
    id: "01",
    title: "Microsoft",
    photo: '/images/products_01.webp',
    description: `Azureのライセンスはもちろんのこと、様々な状況からAzureへの載せ替えに関する技術的支援や実装も行っています。
	
Azureをご検討ならば、ライセンスから実作業まで一気通貫でお応えできる弊社にお任せください。`,
    imgSize: "lg:w-56 lg:h-56", // PC版の画像サイズをここで指定
	link: "products/#microsoft",
  },
  {
    id: "02",
    title: "Oracle",
    photo: '/images/products_02.webp',
    description: "Oracle製品を取り扱っております。データセンタ専用のライセンス（年額利用料方式のライセンス）も取り扱っております。",
    imgSize: "lg:w-32 lg:h-32",
	link: "",
  },
  {
    id: "03",
    title: "各種ハードウェア",
    photo: '/images/products_03.webp',
    description: "",
    imgSize: "lg:w-70 lg:h-70",
	link: "",
	children: [
			{label: "サーバ機器",
				description: `メーカ製のハードウェアはもちろんのこと、お客様の仕様で組み付けることが可能な、いわゆるホワイトボックスも扱っております。`,
			},
			{label: "ネットワーク機器",
				description: `一般的なルータ、SW-HUB、Firewall、UTM、など、多岐にわたり取り扱っています。	
また、少し、特殊な機器としてWANの高速化アプライアンスRapicomも取り扱っています。詳しい説明をご希望される場合は、お問い合せのページよりご連絡下さい。`,
			},
		]
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 md:gap-8 lg:gap-x-8">
            
            {/* 1番目 (7列) */}
            <div className="lg:w-auto lg:col-span-7 pt-10 lg:border-t lg:border-clr-main-1/10">
              <ProductCard product={PRODUCTS[0]} />
            </div>

            {/* 2番目 (5列) */}
            <div className="lg:w-auto lg:col-span-5 pt-10 lg:border-t lg:border-clr-main-1/10">
              <ProductCard product={PRODUCTS[1]} />
            </div>

            {/* 3番目 (9列・オフセット) */}
            <div className="lg:w-auto lg:col-span-9 lg:col-start-3 pt-10 lg:border-t lg:border-clr-main-1/10">
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

<div className="group flex flex-col lg:flex-row gap-8 lg:gap-10 items-start py-8 border-t border-clr-main-1/5 first:border-t-0">
  {/* 写真：枠線を二重にするか、影の代わりに透過色を重ねて奥行きを出す */}
  <div className={`size-[70vw] md:size-60 ${product.imgSize} flex-shrink-0 bg-clr-base-1 relative overflow-hidden reveal shadow-sm`}>
    <div className="absolute inset-0 border border-clr-main-1/10 z-10 pointer-events-none" />
    <img 
      src={product.photo} 
      alt="" 
      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
    />
  </div>
  
  <div className="flex-1 space-y-6">
    <div className="space-y-2">
      {/* IDを強調せず、アクセントとして添える */}
      <div className="flex items-center gap-2">
        <span className="w-4 h-[1px] bg-clr-primary-1/60"></span>
        <span className="text-clr-primary-1 font-mono text-xs tracking-widest uppercase">{product.id}</span>
      </div>
      
      <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-clr-main-1/90 group-hover:text-clr-main-2 transition-colors duration-300">
        {product.title}
      </h3>
    </div>

    <div className="text-clr-main-1/70 tracking-tight leading-relaxed text-base lg:text-lg whitespace-pre-wrap max-w-2xl">
{/* 共通コンポーネントで長文を表示 */}
  <MarkdownView content={product.description} />
    </div>

    {/* 子要素：カード形式にして情報の塊を分ける */}
    {product.children && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {product.children.map((child) => (
          <div key={child.label} className="p-4 border-l-2 border-clr-primary-1/30 bg-clr-base-1/50 hover:bg-clr-base-1 transition-colors">
            <h4 className="font-bold text-sm text-clr-main-1/90 mb-1">{child.label}</h4>
            <p className="text-clr-main-1/60 text-xs leading-extended tracking-wide whitespace-pre-wrap">{child.description}</p>
          </div>
        ))}
      </div>
    )}

    {product.link && (
      <div className="pt-4">
        <ArrowLink href={product.link || "#"} className="text-clr-main-2 hover:text-clr-primary-1 transition-colors" />
      </div>
    )}
  </div>
</div>

  );
}