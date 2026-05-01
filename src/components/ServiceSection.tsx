import { Container } from "@/components/Container";
import {
  Monitor,
  Server,
  Lightbulb,
  Code,
  Database,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react";
import ArrowLink from "@/components/ArrowLink";

// --- サービスデータを定義 ---
const SERVICE_GROUPS = [
  {
    label: "01",
    title: "Integration",
    services: [
      { 
		tag: "",
        name: "コンサルティングサービス", 
        icon: <Server />, 
        photo: '/images/services_01.webp',
        description: "コンサルティングサービスは、お客様の仕事に内在するムダを見つけ、ムダを排除した効率的な作業ができるよう、お客様と一緒に考えます。",
		link: "services/#consulting",
      },
      { 
		tag: "",
        name: "プロフェッショナルサービス", 
        icon: <Database />, 
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
        icon: <Monitor />, 
        photo: '/images/services_03.webp',
        description: "弊社が開発した部品加工業向けの生産管理システム。",
		link: "services/#spics",
      },
      { 
		tag: "生産管理",
        name: "TPiCS", 
        icon: <Smartphone />, 
        photo: '/images/services_04.webp',
        description: "iOS/あらゆる変化を乗りこなす生産管理システム。",
		link: "services/#tpics",
      },
      { 
		tag: "生産スケジューラ",
        name: "FLEXSCHE", 
        icon: <Code />, 
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
        icon: <Lightbulb />, 
        photo: '/images/services_06.webp',
        description: "satellite.serverと命名したベアメタルサーバサービスは、まさに、お客様のサテライトとして機能したいという想いを込めました。",
		link: "services/#satellite-server",
      },
      { 
		tag: "VSPサービス",
        name: "smart.VPS", 
        icon: <Cloud />, 
        photo: '/images/services_07.webp',
        description: "固定グローバルIPアドレス付与UTM標準装備のVPSサービス。",
		link: "services/#vps",
      },
      { 
		tag: "クラウドストレージサービス",
        name: "satellite.folder", 
        icon: <Shield />, 
        photo: '/images/services_08.webp',
        description: "Windows Server OSで構築されたファイルサーバを定額でご利用いただくサービス。",
		link: "services/#cloud",
      },
	  
    ],
  },
];

export default function ServiceSection() {
  return (

	<section 
      id="service-section" 
      data-bg="dark" 
      className="relative w-full py-32"
	  style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
		
	  {/* 1. 背景ユニット：fixed で画面全体に固定 */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        
        {/* 【最背面】濃紺背景：画面全体に敷く スクロール時に動かず固定させるために必要 */}
        <div
          className="absolute inset-0 bg-bgclr-startup-dark"
        />

        {/* 【前面】写真背景 + 斜めカット：これで下のドットを「隠す」 */}
        <div className="absolute inset-0 bg-clr-primary-2 
			[clip-path:polygon(0_20%,100%_70%,100%_100%,0_100%)]
		  	md:[clip-path:polygon(90%_0,100%_0,100%_100%,15%_100%)]"
		  >
          
          {/* 背景画像：親の clip-path の範囲内だけに表示される */}
          <div
            className="absolute inset-0 bg-[url('/images/bg_02.webp')] bg-cover
			  brightness-[40%] contrast-[160%]
              [background-position:center]"
          />
        </div>
      </div>



{/* --- コンテンツレイヤー --- */}
      <Container>
        <div className="relative z-10 mx-auto">
          {/* セクション見出し */}
          <div className="flex items-center gap-4 mb-15">
            <div className="w-12 h-[2px] bg-clr-primary-1 reveal" />
            <h2 className="text-4xl font-bold tracking-widest text-clr-base-1/85 md:text-5xl">Services</h2>
            <div className="flex-grow h-[1px] bg-clr-base-1/10" />
          </div>

          <div className="space-y-20">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.label} className="relative">
                {/* グループ見出し */}
                <div className="flex items-baseline gap-6 mb-8 border-b border-clr-base-1/10 pb-2">
                  <span className="font-mono text-xs tracking-[0.4em] text-clr-primary-1">{group.label}</span>
                  <h3 className="text-xl font-light tracking-widest text-clr-base-1/75">{group.title}</h3>
                </div>

                {/* サービスグリッド */}
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-12">
                  {group.services.map((service, idx) => (
                    <ServiceCard key={idx} service={service} />
                  ))}
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
  return (
    <div className="group relative flex flex-col space-y-4">
      {/* 左側のホバー線アクセント */}
      <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-clr-primary-1 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {/* 写真スペース */}
      <div className="relative aspect-square overflow-hidden border border-clr-base-1/10 bg-clr-base-1/5 reveal size-[70vw] md:size-60 lg:w-full">
        <img src={service.photo} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-clr-main-1/20 to-transparent text-clr-base-1">
          <div className="scale-125">{service.icon}</div>
        </div> */}
      </div>

      {/* テキストコンテンツ */}
      <div className="space-y-2">
        <h4 className="text-xl font-bold tracking-tight text-clr-base-1/90 flex flex-col items-start">
		  {service.tag && (
			<>
			<span className="block border-b border-clr-base-1/50 py-1 mr-2 mb-1 text-xs text-clr-base-1/80">{service.tag}</span><br />
			</>
			)}
          <span>{service.name}</span>
        </h4>
        {/* 固定テキストから service.description に変更 */}
        <p className="text-justify tracking-tight font-light leading-[1.8] text-clr-base-1/80 whitespace-pre-wrap">
          {service.description}
        </p>
		{service.link && (
          <ArrowLink href={service.link || "#"} variant="white" />
		)}
      </div>
    </div>
  );
}