"use client";

import Image from '@/components/CustomImage';
import { Container } from "@/components/Container";
import {
  Monitor,
  Server,
  TrendingUp,
  Activity,
} from "lucide-react";
import { FadeIn_02 } from "@/components/FadeIn_02";
import ArrowLink from "@/components/ArrowLink";
import { FadeIn_01 } from "@/components/FadeIn_01";
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
        icon: Activity, 
        photo: '/images/services_01.webp',
        description: "コンサルティングサービスは、お客様の仕事に内在するムダを見つけ、ムダを排除した効率的な作業ができるよう、お客様と一緒に考えます。",
		link: "b/services/consulting",
      },
      { 
		tag: "",
        name: "プロフェッショナルサービス", 
        icon: Activity, 
        photo: '/images/services_02.webp',
        description: "プロフェッショナルサービスは、業務系システム構築サービス、情報基盤構築サービス、オープンソース活用サービス、等で構成されています。",
		link: "b/services/pro-service",
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
		link: "b/services/spics",
      },
      { 
		tag: "生産管理",
        name: "TPiCS", 
        icon: Monitor, 
        photo: '/images/services_04.webp',
        description: "iOS/あらゆる変化を乗りこなす生産管理システム。",
		link: "b/services/tpics",
      },
      { 
		tag: "生産スケジューラ",
        name: "FLEXSCHE", 
        icon: Monitor, 
        photo: '/images/services_05.webp',
        description: "時間と闘う製造業のために。生産管理をより綿密に実行するためには生産スケジューラが必要です。",
		link: "b/services/flexsche",
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
		link: "b/services/satellite-server",
      },
      { 
		tag: "VSPサービス",
        name: "smart.VPS", 
        icon: Server, 
        photo: '/images/services_07.webp',
        description: "固定グローバルIPアドレス付与UTM標準装備のVPSサービス。",
		link: "b/services/vps",
      },
      { 
		tag: "クラウドストレージサービス",
        name: "satellite.folder", 
        icon: Server, 
        photo: '/images/services_08.webp',
        description: "Windows Server OSで構築されたファイルサーバを定額でご利用いただくサービス。",
		link: "b/services/cloud",
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
          <div className="relative flex items-center gap-4 mb-40">
			{/* 1. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 w-8 h-[2px] bg-clr-primary-1" />

			<FadeIn_02>
			<h2 className="text-lg md:text-4xl font-light tracking-widest text-clr-base-1 uppercase">Services</h2>
			</FadeIn_02>

			{/* 2. 左から伸びる線 */}
			{/* <AnimatedLine classNameLine="z-20 flex-grow w-1 h-[1px] bg-clr-base-1/30" /> */}
          </div>


		  {/* 見出しと写真群を横並びにするコンテナ */}		
          <div className="space-y-100">
            {SERVICE_GROUPS.map((group) => (

				<div key={group.label} className="flex flex-col items-center">
					<div>
						{/* グループ見出し */}
						<div className="relative w-full w-auto">
							<span className="block font-mono text-center tracking-[0.4em] text-clr-primary-3">{group.label}</span>
							<h3 className="text-3xl md:text-5xl text-center font-extralight tracking-widest text-clr-base-1/75">{group.title}</h3>
							{/* 2. 左から伸びる線 */}
							<AnimatedLine classNameDot="absolute z-20 -left-2 size-[8px] bg-clr-base-1/30 my-19" classNameLine="z-20 block h-[1px] bg-clr-base-1/30 my-20" />
						</div>

						{/* サービスグリッド */}
						<div className="w-full z-10">
							<div className={`grid grid-cols-1 md:grid-cols-2 gap-30
							${group.label === "01" ? "lg:grid-cols-2" : "lg:grid-cols-3" }
							`}>
							{group.services.map((service, idx) => (
								<ServiceCard key={idx} service={service}  />
							))}
							{/* {group.services.map((service, idx) => (
								<ServiceCard key={idx} service={service} className={
									idx === 0 ? "mt-0"
									 : idx === 1 ? "mt-20" 
									 	: idx === 2 ? "mt-40" : ""
								} />
							))} */}
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
    <div className={`group/link relative flex flex-col space-y-4 mb-32 pointer-events-none ${className}`}>
      {/* 左側のホバー線アクセント */}
      <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-clr-primary-1 to-transparent opacity-0 transition-opacity group-hover/link:opacity-100" />

      {/* 写真スペース */}
		<FadeIn_02 className="
		mx-auto /* 💡 これを足すだけで、すべての画面幅で左右中央に固定されます！ */
		relative 
		overflow-hidden 
		border border-clr-base-1/10 rounded-full bg-clr-base-1/5 js-fadein 
		aspect-square
            w-[60vw]       md:w-60       lg:w-[clamp(240px,22vw,300px)]
            h-[60vw]       md:h-60       lg:h-[clamp(240px,22vw,300px)]

		">


		<img
  src={`${process.env.__NEXT_BASE_PATH || ''}${service.photo}`} 
  alt="" 
  loading="lazy" 
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover/link:scale-110" 
/>


		</FadeIn_02>
      {/* テキストコンテンツ */}
      <div className="space-y-2">

		<div className="flex flex-col items-center text-center"> {/* 1. 親を縦並び・中央揃えに */}
			{/* アイコン */}
			<div className="border border-[1px] border-clr-primary-3 p-5 rounded-full size-16 flex flex-col items-center justify-center mt-2 mb-4
			shadow-[0_0_6px_var(--color-clr-primary-3),inset_0_0_6px_var(--color-clr-primary-3)]">
			<Icon size={20} strokeWidth={2} className="text-clr-primary-3 js-fadein" />
			</div>

			{/* タグ名とサービス名 */}
			{service.tag && <span className="text-ms text-clr-main-1/80 bg-clr-base-1/80 px-4 rounded-full">{service.tag}</span>}
			<h4 className="text-2xl font-bold text-clr-base-1/90 my-2">
				<span className="group-hover/link:text-clr-primary-3 transition-colors duration-300">
				{service.name}
				</span>
			</h4>
		</div>


        {/* 固定テキストから service.description に変更 */}
        <p className="px-[10vw] md:px-0 font-light text-clr-base-1/80 whitespace-pre-wrap">
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