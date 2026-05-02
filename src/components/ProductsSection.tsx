"use client"

import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";
import { MarkdownView } from "@/components/MarkdownView";
import {
  HardDrive,
  Database,
  Computer,
} from "lucide-react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

const containerRef = useRef(null);
  
  // 1. スクロール監視の設定
// スクロール監視
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"]
});

// 背景：20%のスクロールで素早く白くする
const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

// コンテンツ：30%から開始して、60%でゆっくり完了させる
const contentOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

// 出現位置：500px 下からスタート（画面の下端付近からじわっと出てきます）
const contentY = useTransform(scrollYProgress, [0.7, 1], [900, 0]);

  return (
    <>

<section 
  ref={containerRef} 
  className={`relative w-full ${className}`}
  style={{ height: '500vh' }}
>
  {/* 白い膜 */}
  <motion.div 
    style={{ opacity: bgOpacity }}
    className="absolute inset-0 bg-white pointer-events-none z-40"
  />

  {/* 
      sticky + h-screen + flex items-center
      これにより、どんなにスクロールしても、コンテンツは「画面のど真ん中」に固定されます。
  */}
  <div className="sticky top-0 min-h-screen w-full flex items-center justify-center z-50 overflow-hidden">
    <motion.div 
      style={{ 
        opacity: contentOpacity, 
        y: contentY 
      }}
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
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-clr-primary-1 reveal" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-clr-main-1/90">Products</h2>
            <div className="flex-grow h-[1px] bg-clr-main-1/5" />
          </div>

          {/* グリッドレイアウト */}
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-12">
            
            {/* 1番目 (7列) */}
              <ProductCard product={PRODUCTS[0]} />

            {/* 2番目 (5列) */}
              <ProductCard product={PRODUCTS[1]} />

            {/* 3番目 (9列・オフセット) */}
              <ProductCard product={PRODUCTS[2]} />

          </div>
        </div>
      </Container>

	  </motion.div>

	  </div>
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
	<div className={`group/link relative flex flex-col space-y-4 pointer-events-none
		`}>
	      {/* 左側のホバー線アクセント */}
      		<div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-clr-primary-1 to-transparent opacity-0 transition-opacity group-hover/link:opacity-100" />

		{/* 写真：枠線を二重にするか、影の代わりに透過色を重ねて奥行きを出す */}
		<div className={`aspect-square size-[70vw] md:size-60 lg:w-full lg:h-auto flex-shrink-0 bg-clr-base-1 relative overflow-hidden reveal`}>
			<div className="absolute inset-0 z-10 pointer-events-none" />
			<img 
			src={product.photo} 
			alt="" 
			className="h-full w-full object-cover transition-transform  duration-500 ease-out group-hover/link:scale-110" 
			/>
		</div>
		
		<div className="flex-1 space-y-3">
			<div className="space-y-2">
				{/* IDを強調せず、アクセントとして添える */}
				<div className="flex items-center gap-2">
					<span className="text-clr-primary-1 font-mono text-xs tracking-widest uppercase">{product.id}</span>
					<span className="w-8 h-[1px] bg-clr-primary-1/60"></span>
				</div>
			
				<div className="flex items-center border-b border-clr-primary-1/50 pb-2 ">
					<Icon size={20} strokeWidth={2} className="text-clr-primary-1 mr-2" />
					<h3 className="text-3xl lg:text-2xl font-medium text-clr-main-1/60group-hover/link:text-clr-primary-3 transition-colors duration-300">
						{product.title}
					</h3>
				</div>
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