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
import AnimatedLine from "@/components/AnimatedLine";


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
      className={`relative w-full py-32 overflow-x-clip ${className}`}
    >


{/* --- コンテンツレイヤー --- */}
      <Container>
        <div className="relative z-10 mx-auto">

          {/* セクション見出し */}
          <div className="relative flex items-center gap-4 mb-15">
			{/* 1. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 w-22 h-[2px] bg-clr-primary-1" />

			<h2 className="text-4xl font-bold tracking-widest text-clr-base-1/60 md:text-7xl">Services</h2>

			{/* 2. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 flex-grow w-1 h-[1px] bg-clr-base-1/30" />
          </div>


          <div className="space-y-20">
            {SERVICE_GROUPS.map((group) => (
			
			<div key={group.label} className="relative">

				<div className="flex flex-col items-end mb-40">
					{/* 見出しと写真群を横並びにするコンテナ */}
					<div className={`w-full flex flex-col 
					${group.label === "01" || group.label === "03" ? "lg:flex-row" : "lg:flex-row-reverse" }
					items-end lg:items-start gap-12 mb-40`}>            
						{/* グループ見出し */}
						<div className="relative mb-8 w-full lg:w-auto lg:min-w-[280px] shrink-0">
						

							<span className="font-mono text-sm tracking-[0.4em] text-clr-primary-3">{group.label}</span>
							<h3 className="text-3xl md:text-4xl font-extralight tracking-widest text-clr-base-1/75">{group.title}</h3>
									{/* 2. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 block w-full h-[1px] bg-clr-base-1/30 mt-2" />

							{/* 装飾図形 */}
							${group.label === "01" ? (
							<CyberCircleA className="absolute -top-160 -left-100" classNameSvg={`size-200 text-clr-primary-1/30`} />
							) : (group.label === "02" ? (
								<>
								<CyberCircleB className={`absolute -top-160 left-10`} classNameSvg="size-150 text-clr-primary-1/30" />
								<CyberCircleD className={`absolute -top-50 left-20`} classNameSvg="size-80 text-clr-primary-1/30" />
								<CyberCircleE className={`absolute top-10 -left-50`} classNameSvg="size-100 text-clr-primary-1/30" />
								</>
							) : (
								<>
								<CyberCircleC className={`absolute -top-75 left-0`} classNameSvg="size-120 text-clr-primary-1/30" />
								<CyberCircleA  className={`absolute top-10 -left-100`} classNameSvg="size-200 text-clr-primary-1/30" />
								</>
							))}

						</div>

						{/* サービスグリッド */}
						<div className="w-full z-10">
							<div className={`grid grid-cols-1 md:grid-cols-2 gap-16
							${group.label === "01" ? "lg:grid-cols-2" : "lg:grid-cols-3" }
							`}>
							{group.services.map((service, idx) => (
								<ServiceCard key={idx} service={service} className={
									idx === 0 ? "mt-0"
									 : idx === 1 ? "mt-20" 
									 	: idx === 2 ? "mt-40" : ""
								} />
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
function ServiceCard({ className, service }: { className?:string, service: typeof SERVICE_GROUPS[0]["services"][0] }) {
	{/* コンポーネントを変数として扱う */}
	const Icon = service.icon;

  return (
	<>
	{/* ArrowLink 以外へのホバーを「無効」にする */}
    <div className={`}group/link relative flex flex-col space-y-4 pointer-events-none ${className}`}>
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
		<Icon size={20} strokeWidth={2} className="text-clr-primary-3 mr-2 js-fadein" />
		)}
        <h4 className="text-xl font-bold text-clr-base-1/90 flex flex-col items-start">
		  {service.tag && (
			<>
			<div className="flex items-center">
				<Icon size={20} strokeWidth={2} className="text-clr-primary-3 mr-2" />
				<span className="blockmr-2 text-xs text-clr-base-1/80">{service.tag}</span><br />
			</div>
			{/* 2. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 w-full h-[1px] bg-clr-base-1/50 mt-2" />
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