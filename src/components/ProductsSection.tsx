"use client";

import Image from '@/components/CustomImage';
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


const PRODUCTS = [
  {
    id: "01",
    title: "Microsoft",
	icon: Computer,
    photo: '/images/products_01.webp',
    description: `Azureのライセンスはもちろんのこと、様々な状況からAzureへの載せ替えに関する技術的支援や実装も行っています。
	
Azureをご検討ならば、ライセンスから実作業まで一気通貫でお応えできる弊社にお任せください。`,
    imgSize: "lg:w-70 lg:h-70", 
	link: "b/products/microsoft",
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
    >

          
      <Container>
        <div className="relative z-10 mx-auto">
		  <div className="relative flex items-center gap-4 mb-40">
			<AnimatedLine classNameLine="z-20 w-8 h-[2px] bg-clr-primary-1" />

			<FadeIn_02>
			<h2 className="text-lg md:text-4xl font-light tracking-widest  text-clr-main-1/90">Products</h2>
			</FadeIn_02>
			
		  </div>



          <div className="space-y-100">


				<div className="flex flex-col items-center">
					<div>

        	 <div className={`grid grid-cols-1 md:grid-cols-2 gap-30 lg:grid-cols-3`}>

				<ProductCard product={PRODUCTS[0]} />

				<ProductCard product={PRODUCTS[1]} />

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


function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
	const Icon = product.icon;

  return (
	<>
	<div className={`group/link relative flex flex-col space-y-4 mb-32 pointer-events-none`}>
      		<div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-clr-primary-1 to-transparent opacity-0 transition-opacity group-hover/link:opacity-100" />

		<FadeIn_02 className={`						
		mx-auto 
		relative 
		overflow-hidden 
		border border-clr-base-1/10 rounded-full bg-clr-base-1/5 js-fadein 
		aspect-square
            w-[60vw]       md:w-60       lg:w-[clamp(240px,22vw,300px)]
            h-[60vw]       md:h-60       lg:h-[clamp(240px,22vw,300px)]
			`}>







					<img
  src={`${process.env.__NEXT_BASE_PATH || ''}${product.photo}`} 
  alt="" 
  loading="lazy" 
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover/link:scale-110" 
/>



		</FadeIn_02>
		
		<div className="flex-1 space-y-3">

				<div className="flex items-center justify-center gap-2">
					<span className="w-8 h-[1px] bg-clr-primary-1/60"></span>
					<span className="text-clr-primary-1 font-mono tracking-widest uppercase">{product.id}</span>
					<span className="w-8 h-[1px] bg-clr-primary-1/60"></span>
				</div>


		<div className="flex flex-col items-center text-center"> 
			<div className="border border-[1px] border-clr-primary-3 p-5 rounded-full size-16 flex flex-col items-center justify-center mt-2 mb-4
			">
			<Icon size={20} strokeWidth={2} className="text-clr-primary-3 js-fadein" />
			</div>

			<h4 className="text-2xl font-bold text-clr-main-1/60 my-2">
				<span className="group-hover/link:text-clr-primary-3 transition-colors duration-300">
				{product.title}
				</span>
			</h4>
		</div>

			{product.description && (
				<>
				<MarkdownView content={product.description} />
				</>
			)}

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