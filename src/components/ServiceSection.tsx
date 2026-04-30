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
    title: "Core Infrastructure",
    services: [
      { 
        name: "Webシステム開発", 
        icon: <Server />, 
        photo: '/images/services_01.webp',
        description: "最適な技術スタックを選定し、ビジネスの課題をシンプルかつ堅牢な解決策へと導きます。",
		link: "",
      },
      { 
        name: "基幹システム構築", 
        icon: <Database />, 
        photo: '/images/services_02.webp',
        description: "既存資産を活かしつつ、将来の拡張性を見据えたセキュアな基幹システムを構築します。",
		link: "",
      },
    ],
  },
  {
    label: "02",
    title: "Experience Design",
    services: [
      { 
        name: "UI/UXデザイン", 
        icon: <Monitor />, 
        photo: '/images/services_03.webp',
        description: "ユーザー視点を徹底的に追求し、直感的で心地よいデジタル体験をデザインします。",
		link: "",
      },
      { 
        name: "モバイルアプリ開発", 
        icon: <Smartphone />, 
        photo: '/images/services_04.webp',
        description: "iOS/Android両プラットフォームにおいて、パフォーマンスと操作性に優れたアプリを提供します。",
		link: "",
      },
      { 
        name: "フロントエンド開発", 
        icon: <Code />, 
        photo: '/images/services_05.webp',
        description: "最新のフレームワークを活用し、高速でアクセシビリティの高い画面実装を実現します。",
		link: "",
      },
    ],
  },
  {
    label: "03",
    title: "Consulting & Security",
    services: [
      { 
        name: "DXコンサルティング", 
        icon: <Lightbulb />, 
        photo: '/images/services_06.webp',
        description: "デジタル技術を活用したビジネスモデルの変革を、戦略立案から実行まで伴走支援します。",
		link: "",
      },
      { 
        name: "クラウド移行支援", 
        icon: <Cloud />, 
        photo: '/images/services_07.webp',
        description: "オンプレミスからクラウドへのスムーズな移行により、運用コストの削減と柔軟性を両立させます。",
		link: "",
      },
      { 
        name: "セキュリティ診断", 
        icon: <Shield />, 
        photo: '/images/services_08.webp',
        description: "潜在的な脆弱性を特定し、ビジネスを脅威から守るための強固な防御策を提案・実装します。",
		link: "",
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
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
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
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-clr-main-1/20 to-transparent text-clr-base-1">
          <div className="scale-125">{service.icon}</div>
        </div>
      </div>

      {/* テキストコンテンツ */}
      <div className="space-y-2">
        <h4 className="text-xl font-bold tracking-tight text-clr-base-1/90">
          {service.name}
        </h4>
        {/* 固定テキストから service.description に変更 */}
        <p className="text-justify font-light leading-relaxed text-clr-base-1/80">
          {service.description}
        </p>
        <ArrowLink href={service.link || "#"} variant="white" />
      </div>
    </div>
  );
}