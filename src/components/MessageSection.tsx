"use client"

import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";
import { motion, Variants } from "framer-motion"; // Variantsを追加
import { FadeIn } from "@/components/FadeIn";

const MESSAGE_CONTENT = {
    mission: "Mission Statement",
    catchphrase: {
      top: "テクノロジーで",
      middle_1: "ビジネスの",
      middle_2: "「次」を",
      bottom: "形にする。",
    },
    paragraphs: [
      "私たちは、単にコードを書く集団ではありません。お客様のビジネスの本質を理解し、最新のテクノロジーを駆使して、真に価値のあるデジタル体験を共創するパートナーです。",
      "堅牢な設計による安定した基盤と、洗練されたインターフェースによる快適な操作性。高度な専門性と確かな実装力をもって、複雑なビジネス課題を最適なデジタルソリューションへと導きます。",
    ],
    signature: "Established 2026",
	link: "",
  };


const baseDelay = 0.08;
const layouts = {
  class: {
  headline: "",
  catchCopy:  "col-start-2  col-end-24  row-start-2  row-end-14   z-20",
  text:       "col-start-6 col-end-25  row-start-10  row-end-24  z-20",
  bgCircle01: "col-start-15  col-span-25  row-start-7  row-span-20  z-10 opacity-30",
  bgCircle02: "col-start-16 col-end-25  row-start-4  row-end-12  z-0  opacity-20",
  bgCircle03: "col-start-4  col-end-18  row-start-16 row-end-24  z-10 opacity-40",
  subText: "",
  },
  delay: {
  headline:   baseDelay * 1,
  catchCopy:  baseDelay * 2,
  text:       baseDelay * 3,
  bgCircle01: baseDelay * 4,
  bgCircle02: baseDelay * 5,
  bgCircle03: baseDelay * 6,
  subText:    baseDelay * 7,
  },
};

interface MessageSectionProps  {
	className? : string;
}

export default function MessageSection({
	className
}: MessageSectionProps) {

  return (
<section 
      id="message-section" 
      data-bg="dark" 
      className={`relative w-full py-320 overflow-hidden ${className}`}
	//   style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >

	  {/* 1. 背景ユニット：fixed で画面全体に固定 */}
      {/* <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true"> */}
        
        {/* 【最背面】ドット模様：画面全体に敷く */}
        {/* <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(var(--color-clr-main-1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        /> */}

        {/* 【前面】写真背景 + 斜めカット：これで下のドットを「隠す」 */}
        {/* <div className="absolute inset-0 bg-clr-primary-2 
          [clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
          md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]"> */}
          
          {/* 背景画像：親の clip-path の範囲内だけに表示される */}
          {/* <div
            className="absolute inset-0 bg-[url('/images/bg_01.webp')] bg-cover
			brightness-[60%] contrast-[160%]
              [background-position:-180px_-30px] md:[background-position:0px_0px]"
          />
        </div>
      </div> */}
	  
      {/* --- コンテンツレイヤー --- */}
      <Container>

          {/* セクション見出し装飾 */}
		  <FadeIn className="flex items-center gap-4 mb-40" delay={layouts.delay.headline}>
            <div className="w-4 sm:w-12 h-[2px] bg-clr-primary-1" />
            <span className="text-clr-base-1 font-mono text-xs tracking-[0.1em] sm:tracking-[0.4em] uppercase">
              {MESSAGE_CONTENT.mission}
            </span>
            <div className="flex-grow h-[1px] bg-clr-base-1/30" />
		  </FadeIn>


			<div className="grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(24,1fr)]
			max-h-[100vh] min-h-[70vh] w-full gap-0 min-h-screen
			 relative overflow-hidden">

				{/* キャッチコピー（左側） */}
				<FadeIn className={`
						${layouts.class.catchCopy}`} delay={layouts.delay.catchCopy}>
							<h2 className="text-3xl md:text-5xl font-[700] text-clr-base-1/90 !leading-[1.5]">
								{MESSAGE_CONTENT.catchphrase.top}<br />
								{MESSAGE_CONTENT.catchphrase.middle_1}
								{MESSAGE_CONTENT.catchphrase.middle_2}<br />
								<span className="text-clr-primary-1">{MESSAGE_CONTENT.catchphrase.bottom}</span>
							</h2>
							{/* <div className="absolute size-full inset-0 bg-clr-main-2 */}
									{/* [clip-path:polygon(0%_0%,5%_0%,0%_5%)]" /> */}
				</FadeIn>



				{/* 本文（右側） */}
				<FadeIn className={`
				${layouts.class.text}`} delay={layouts.delay.text}>
							<div className="space-y-6">
								{MESSAGE_CONTENT.paragraphs.map((text, i) => (
								<p key={i} className={i === 0 
									? "text-clr-base-1/80 text-xl font-medium md:text-2xl" 
									: "text-clr-base-1/80 text-lg"
								}>
									{text}
								</p>
								))}
								<ArrowLink href={MESSAGE_CONTENT.link || "#"} />
							</div>

				</FadeIn>

				{/* 装飾図形（同じセル、あるいは重ねる配置） */}
				<FadeIn className={`
				${layouts.class.bgCircle01}`} delay={layouts.delay.bgCircle01}>
					<div className="size-15 bg-clr-primary-3/[0.3] border border-clr-base-1/10 backdrop-saturate-150 shadow-xl" />
				</FadeIn>

				<FadeIn className={`
				${layouts.class.bgCircle02}`} delay={layouts.delay.bgCircle02}>
					<div className="size-30 bg-clr-primary-3/[0.3] border border-clr-base-1/10 backdrop-saturate-150 shadow-xl" />
				</FadeIn>

				<FadeIn className={`
				${layouts.class.bgCircle03}`} delay={layouts.delay.bgCircle03}>
					<div className="size-40 bg-clr-primary-3/[0.3] border border-clr-base-1/10 backdrop-saturate-150 shadow-xl" />
				</FadeIn>

			</div>

			{/* 下部の署名 */}
			<FadeIn className="flex justify-between items-center gap-4 mt-30" delay={layouts.delay.subText}>
                <div className="flex-grow h-[1px] bg-clr-primary-1/30 reveal" />
                <span className="text-clr-base-1 font-mono text-xs italic">
                  {MESSAGE_CONTENT.signature}
                </span>
			</FadeIn>

      </Container>
    </section>
  );
}