"use client";

import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";
import { MarkdownView } from "@/components/MarkdownView";
import {
  HardDrive,
  Database,
  Computer,
} from "lucide-react";
import AnimatedLine from "@/components/AnimatedLine";
import { FadeIn_02 } from "@/components/FadeIn_02";


// 1. 各製品のデータを整理
const PRODUCTS = [
  {
    id: "01",
    title: "Microsoft",
	icon: Computer,
    photo: '/images/products_01.webp',
    description: `Azureのライセンスはもちろんのこと、様々な状況からAzureへの載せ替えに関する技術的支援や実装も行っています。
	
Azureをご検討ならば、ライセンスから実作業まで一気通貫でお応えできる弊社にお任せください。`,
    imgSize: "lg:w-70 lg:h-70", // PC版の画像サイズをここで指定
	link: "products/#microsoft",
  },
  {
    id: "02",
    title: "Oracle",
	icon: Database,
    photo: '/images/products_02.webp',
    description: "Oracle製品を取り扱っております。データセンタ専用のライセンス（年額利用料方式のライセンス）も取り扱っております。",
    imgSize: "lg:w-70 lg:h-70",
	link: "",
  },
  {
    id: "03",
    title: "各種ハードウェア",
	icon: HardDrive,
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

interface ProductsSectionProps  {
	className? : string;
}

export default function ProductsSection({
	className
}: ProductsSectionProps) {

  return (
    <>

	<section 
      id="products-section" 
      data-bg="light" 
      className={`relative w-full bg-clr-base-1 py-32 ${className}`}
	//   style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >

	  {/* 1. 背景ユニット：fixed で画面全体に固定 */}
      {/* <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true"> */}
        
        {/* 【最背面】ドット模様：画面全体に敷く */}
        {/* <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(var(--color-clr-main-1) 1px, var(--color-clr-base-1) 1px)`,
            backgroundSize: "20px 20px",
          }}
        /> */}

        {/* 【前面】写真背景 + 斜めカット：これで下のドットを「隠す」 */}
        {/* <div className="absolute inset-0 bg-clr-base-2 
          [clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
          md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]"> */}
          
          {/* 背景画像：親の clip-path の範囲内だけに表示される */}
          {/* <div
            className="absolute inset-0 bg-clr-base-1/50"
          />
        </div> */}

      {/* </div> */}

	  {/* --- コンテンツレイヤー --- */}
      <Container>
        <div className="relative z-10 mx-auto">
          {/* 見出し */}
		  {/* セクション見出し */}
		  <div className="relative flex items-center gap-4 mb-40">
			{/* 1. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 w-8 h-[2px] bg-clr-primary-1" />

			<FadeIn_02>
			<h2 className="text-4xl font-bold tracking-widest  text-clr-main-1/90 md:text-8xl">Products</h2>
			</FadeIn_02>
			
		  </div>



          <div className="space-y-100">


				<div className="flex flex-col items-center">
					<div>

         	 {/* グリッドレイアウト */}
        	 <div className={`grid grid-cols-1 md:grid-cols-2 gap-30 lg:grid-cols-3`}>

				{/* 1番目 (7列) */}
				<ProductCard product={PRODUCTS[0]} />

				{/* 2番目 (5列) */}
				<ProductCard product={PRODUCTS[1]} />

				{/* 3番目 (9列・オフセット) */}
				<ProductCard product={PRODUCTS[2]} />

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


// --- 内部パーツ：製品カード ---
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
	{/* コンポーネントを変数として扱う */}
	const Icon = product.icon;

  return (
	<>
	{/* ArrowLink 以外へのホバーを「無効」にする */}
	<div className={`group/link max-w-[300px] relative flex flex-col space-y-4 pointer-events-none`}>
	      {/* 左側のホバー線アクセント */}
      		<div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-clr-primary-1 to-transparent opacity-0 transition-opacity group-hover/link:opacity-100" />

		{/* 写真：枠線を二重にするか、影の代わりに透過色を重ねて奥行きを出す */}
		<FadeIn_02 className={`relative aspect-square overflow-hidden border border-clr-base-1/10 rounded-full bg-clr-base-1/5 js-fadein size-[70vw] md:size-60 lg:w-full lg:h-auto`}>
			<div className="absolute inset-0 z-10 pointer-events-none" />
			<img 
			src={product.photo} 
			alt="" 
			className="h-full w-full object-cover  transition-transform duration-500 ease-out group-hover/link:scale-110" 
			/>
		</FadeIn_02>
		
		<div className="flex-1 space-y-3">

				<div className="flex items-center justify-center gap-2">
					<span className="w-8 h-[1px] bg-clr-primary-1/60"></span>
					<span className="text-clr-primary-1 font-mono tracking-widest uppercase">{product.id}</span>
					<span className="w-8 h-[1px] bg-clr-primary-1/60"></span>
				</div>


		<div className="flex flex-col items-center text-center"> {/* 1. 親を縦並び・中央揃えに */}
			{/* アイコン */}
			<div className="border border-[1px] border-clr-primary-3 p-5 rounded-full size-16 flex flex-col items-center justify-center mt-2 mb-4
			">
			<Icon size={20} strokeWidth={2} className="text-clr-primary-3 js-fadein" />
			</div>

			{/* タグ名とサービス名 */}
			<h4 className="text-2xl font-bold text-clr-main-1/60 my-2">
				<span className="group-hover/link:text-clr-primary-3 transition-colors duration-300">
				{product.title}
				</span>
			</h4>
		</div>

			{product.description && (
				<>
				{/* 共通コンポーネントで長文を表示 */}
				<MarkdownView content={product.description} />
				</>
			)}

			{/* 子要素：カード形式にして情報の塊を分ける */}
			{product.children && (
			<div>
				{product.children.map((child) => (
				<div key={child.label} className="pb-4">
					<h4 className="font-bold text-sm text-clr-main-1/90 mb-2">{child.label}</h4>
					<MarkdownView content={child.description} />
				</div>
				))}
			</div>
			)}

			{/* ArrowLink だけ pointer-events を復活させる */}
			{product.link && (
			<div className="pt-4 pointer-events-auto">
				<ArrowLink href={product.link || "#"} className="text-clr-main-2 hover:text-clr-primary-1 transition-colors" />
			</div>
			)}
		</div>
	</div>
	</>
  );
}