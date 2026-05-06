"use client";

import { Container } from "@/components/Container";
import {
  Monitor,
  Server,
  TrendingUp,
} from "lucide-react";
import ArrowLink from "@/components/ArrowLink";
import { FadeIn } from "@/components/FadeIn";
import CyberCircleA from "@/components/CyberCircleA";
import CyberCircleB from "@/components/CyberCircleB";
import CyberCircleC from "@/components/CyberCircleC";
import CyberCircleD from "@/components/CyberCircleD";
import CyberCircleE from "@/components/CyberCircleE";

// --- サービスデータを定義 ---
const SERVICE_GROUPS = [
  {
    label: "01",
    title: "Integration",
    services: [
      { 
		tag: "",
        name: "コンサルティングサービス", 
        icon: TrendingUp, 
        photo: '/images/services_01.webp',
        description: "コンサルティングサービスは、お客様の仕事に内在するムダを見つけ、ムダを排除した効率的な作業ができるよう、お客様と一緒に考えます。",
		link: "services/#consulting",
      },
      { 
		tag: "",
        name: "プロフェッショナルサービス", 
        icon: TrendingUp, 
        photo: '/images/services_02.webp',
        description: "プロフェッショナルサービスは、業務系システム構築サービス、情報基盤構築サービス、オープンソース活用サービス、等で構成されています。",
		link: "services/#pro-service",
      },
    ],
  },
  {
    label: "02",
    title: "Solutions",
    services: [
      { 
		tag: "生産管理",
        name: "SPiCS", 
        icon: Monitor, 
        photo: '/images/services_03.webp',
        description: "弊社が開発した部品加工業向けの生産管理システム。",
		link: "services/#spics",
      },
      { 
		tag: "生産管理",
        name: "TPiCS", 
        icon: Monitor, 
        photo: '/images/services_04.webp',
        description: "iOS/あらゆる変化を乗りこなす生産管理システム。",
		link: "services/#tpics",
      },
      { 
		tag: "生産スケジューラ",
        name: "FLEXSCHE", 
        icon: Monitor, 
        photo: '/images/services_05.webp',
        description: "時間と闘う製造業のために。生産管理をより綿密に実行するためには生産スケジューラが必要です。",
		link: "services/#flexsche",
      },
    ],
  },
  {
    label: "03",
    title: "as a Service",
    services: [
      { 
		tag: "ベアメタルサーバサービス",
        name: "satellite.server", 
        icon: Server, 
        photo: '/images/services_06.webp',
        description: "satellite.serverと命名したベアメタルサーバサービスは、まさに、お客様のサテライトとして機能したいという想いを込めました。",
		link: "services/#satellite-server",
      },
      { 
		tag: "VSPサービス",
        name: "smart.VPS", 
        icon: Server, 
        photo: '/images/services_07.webp',
        description: "固定グローバルIPアドレス付与UTM標準装備のVPSサービス。",
		link: "services/#vps",
      },
      { 
		tag: "クラウドストレージサービス",
        name: "satellite.folder", 
        icon: Server, 
        photo: '/images/services_08.webp',
        description: "Windows Server OSで構築されたファイルサーバを定額でご利用いただくサービス。",
		link: "services/#cloud",
      },
	  
    ],
  },
];

const baseDelay = 0.08;
const layouts = {
  class: {
    headline: "",
    catchCopy: "col-start-3  col-end-18  row-start-2  row-end-8   z-20",
    text: "col-start-8 col-end-18  row-start-8  row-end-24  z-20",
    text_2: "col-start-14 col-end-23  row-start-17  row-end-24  z-20",
    shapes01: "col-start-15  col-span-17  row-start-1  row-span-25  z-10",
    shapes02: "col-start-18  col-span-16  row-start-9  row-span-25  z-10",
    shapes03: "col-start-21  col-span-20  row-start-4  row-span-25  z-10",
    shapes04: "col-start--1  col-span-2  row-start-2  row-span-25  z-10",
    shapes05: "col-start-2  col-span-4  row-start-15  row-span-25  z-10",
    subText: "",
  },
  delay: {
    headline:   baseDelay * 1,
    catchCopy:  baseDelay * 2,
    text:       baseDelay * 3,
    text_2:     baseDelay * 4,
    subText:    baseDelay * 5,
    shapes01:   baseDelay * 6,
    shapes02:   baseDelay * 7,
    shapes03:   baseDelay * 8,
    shapes04:   baseDelay * 9,
    shapes05:   baseDelay * 10,
  },
};


interface ServiceSectionProps  {
	className? : string;
}

export default function ServiceSection({
	className
}: ServiceSectionProps) {

  return (
	<section 
      id="service-section" 
      data-bg="dark" 
      className={`relative w-full py-32 overflow-hidden ${className}`}
	//   style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
		
	  {/* 1. 背景ユニット：fixed で画面全体に固定 */}
      {/* <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true"> */}
        
        {/* 【最背面】濃紺背景：画面全体に敷く スクロール時に動かず固定させるために必要 */}
        {/* <div
          className="absolute inset-0 bg-bgclr-startup-dark"
        /> */}

        {/* 【前面】写真背景 + 斜めカット：これで下のドットを「隠す」 */}
        {/* <div className="absolute inset-0 bg-clr-primary-2 
			[clip-path:polygon(0_20%,100%_70%,100%_100%,0_100%)]
		  	md:[clip-path:polygon(90%_0,100%_0,100%_100%,15%_100%)]"
		  > */}
          
          {/* 背景画像：親の clip-path の範囲内だけに表示される */}
          {/* <div
            className="absolute inset-0 bg-[url('/images/bg_02.webp')] bg-cover
			  brightness-[40%] contrast-[160%]
              [background-position:center]"
          />
        </div>
      </div> */}



{/* --- コンテンツレイヤー --- */}
      <Container>
        <div className="relative z-10 mx-auto">
          {/* セクション見出し */}
          <div className="flex items-center gap-4 mb-15">
            <div className="w-12 h-[2px] bg-clr-primary-1 js-fadein" />
            <h2 className="text-4xl font-bold tracking-widest text-clr-base-1/35 md:text-9xl">Services</h2>
            <div className="flex-grow h-[1px] bg-clr-base-1/10" />
          </div>

          <div className="space-y-20">
            {SERVICE_GROUPS.map((group) => (
			
			<div key={group.label} className="relative">



				<div className="flex flex-col items-end mb-40">
					{/* 見出しと写真群を横並びにするコンテナ */}
					<div className={`w-full flex flex-col 
					${group.label === "01" || group.label === "03" ? "lg:flex-row" : "lg:flex-row-reverse" }
					items-end lg:items-center gap-12 mb-40`}>            
						{/* グループ見出し */}
						<div className="relative flex items-baseline gap-6 mb-8 border-b border-clr-base-1/10 pb-2 w-full lg:w-auto lg:min-w-[280px] shrink-0">


							<span className="font-mono text-sm tracking-[0.4em] text-clr-primary-3">{group.label}</span>
							<h3 className="text-3xl md:text-4xl font-extralight tracking-widest text-clr-base-1/75">{group.title}</h3>

							{/* 巨大な装飾図形：見出し側に大きくはみ出させる */}
							${group.label === "01" ? (
							<FadeIn className={`layouts.class.shapes01
							absolute -top-160 -left-100
							`} delay={layouts.delay.shapes01}
							speed={1.6}      // 少し速く、大きく動く
							stiffness={70}   // 少し重厚なバネ
							>
								<CyberCircleA className="size-200 text-clr-primary-1/30 animate-spin-A" />
							</FadeIn>
							) : (group.label === "02" ? (
								<>
								<FadeIn className={`layouts.class.shapes01
								absolute -top-160 left-10`} delay={layouts.delay.shapes01}
								speed={0.7}
								stiffness={90}							
								>
									<CyberCircleB className="size-150 text-clr-primary-1/30 animate-spin-B" />
								</FadeIn>
								<FadeIn className={`layouts.class.shapes01
								absolute -top-50 left-20`} delay={layouts.delay.shapes01}
								speed={0.9}
								stiffness={100}								
								>
									<CyberCircleD className="size-80 text-clr-primary-1/30 animate-spin-D" />
								</FadeIn>
								<FadeIn className={`layouts.class.shapes01
								absolute top-10 -left-50`} delay={layouts.delay.shapes01}
								speed={1.8}
    							stiffness={50}
								>
									<CyberCircleE className="size-100 text-clr-primary-1/30 animate-spin-E" />
								</FadeIn>

								</>
							) : (
								<>
								<FadeIn className={`layouts.class.shapes01
								absolute -top-75 left-0`} delay={layouts.delay.shapes01}
								speed={2}
								stiffness={120}								
								>
									<CyberCircleC className="size-120 text-clr-primary-1/30 animate-spin-C" />
								</FadeIn>
								<FadeIn className={`layouts.class.shapes01
								absolute top-10 -left-100`} delay={layouts.delay.shapes01}
								speed={1.6}
								stiffness={70}
								>
									<CyberCircleA className="size-200 text-clr-primary-1/30 animate-spin-A" />
								</FadeIn>
								</>
							))}


						</div>

						{/* サービスグリッド */}
						<div className="w-full">
							<div className={`grid grid-cols-1 md:grid-cols-2 gap-16
							${group.label === "01" ? "lg:grid-cols-2" : "lg:grid-cols-3" }
							`}>
							{group.services.map((service, idx) => (
								<ServiceCard key={idx} service={service} />
							))}
							</div>
						</div>
					</div>
				</div>
			</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- 内部パーツ：サービスカード ---
function ServiceCard({ service }: { service: typeof SERVICE_GROUPS[0]["services"][0] }) {
	{/* コンポーネントを変数として扱う */}
	const Icon = service.icon;

  return (
	<>
	{/* ArrowLink 以外へのホバーを「無効」にする */}
    <div className="group/link relative flex flex-col space-y-4 pointer-events-none">
      {/* 左側のホバー線アクセント */}
      <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-clr-primary-1 to-transparent opacity-0 transition-opacity group-hover/link:opacity-100" />

      {/* 写真スペース */}
      <div className="relative aspect-square overflow-hidden border border-clr-base-1/10 bg-clr-base-1/5 js-fadein size-[70vw] md:size-60 lg:w-full lg:h-auto">
        <img src={service.photo} alt="" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/link:scale-110" />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-clr-main-1/20 to-transparent text-clr-base-1">
          <div className="scale-125">{service.icon}</div>
        </div> */}
      </div>

      {/* テキストコンテンツ */}
      <div className="space-y-2">
		<div className="flex items-center">
		{!service.tag && (
		<Icon size={20} strokeWidth={2} className="text-clr-primary-3 mr-2" />
		)}
        <h4 className="text-xl font-bold text-clr-base-1/90 flex flex-col items-start">
		  {service.tag && (
			<>
			<div className="flex items-center border-b border-clr-base-1/30 py-1 mb-1">
				<Icon size={20} strokeWidth={2} className="text-clr-primary-3 mr-2" />
				<span className="blockmr-2 text-xs text-clr-base-1/80">{service.tag}</span><br />
			</div>
			</>
			)}
          <span className="group-hover/link:text-clr-primary-3 transition-colors duration-300">{service.name}</span>
        </h4>
		</div>
        {/* 固定テキストから service.description に変更 */}
        <p className="font-light text-clr-base-1/80 whitespace-pre-wrap">
          {service.description}
        </p>
		
		{/* ArrowLink だけ pointer-events を復活させる */}
		{service.link && (
			<div className="pointer-events-auto">
          		<ArrowLink href={service.link || "#"} variant="white" />
		  	</div>
		)}
      </div>
    </div>
	</>
  );
}