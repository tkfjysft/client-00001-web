"use client"

import {
  Cog,
  Orbit,
} from "lucide-react";
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
  catchCopy:  "col-start-3  col-end-18  row-start-2  row-end-8   z-20",
  text:       "col-start-8 col-end-18  row-start-8  row-end-24  z-20",
  text_2:     "col-start-14 col-end-23  row-start-17  row-end-24  z-20",
  bgCircle01: "col-start-15  col-span-25  row-start-7  row-span-20  z-10 opacity-30",
  bgCircle02: "col-start-16 col-end-25  row-start-4  row-end-12  z-0  opacity-20",
  bgCircle03: "col-start-4  col-end-18  row-start-14 row-end-24  z-10 opacity-40",
  gear01:     "col-start-17  col-span-17  row-start-2  row-span-7  z-10",
  gear02:     "col-start-20  col-span-20  row-start-6  row-span-11  z-10",
  gear03:     "col-start-22  col-span-22  row-start-5  row-span-9  z-10",
  gear04:     "col-start-2  col-span-2  row-start-15  row-span-24  z-10",
  gear05:     "col-start-4  col-span-4  row-start-17  row-span-24  z-10",
subText: "",
  },
  delay: {
  headline:   baseDelay * 1,
  catchCopy:  baseDelay * 2,
  text:       baseDelay * 3,
  text_2:     baseDelay * 3,
  bgCircle01: baseDelay * 4,
  bgCircle02: baseDelay * 5,
  bgCircle03: baseDelay * 6,
  subText:    baseDelay * 7,
  gear01:    baseDelay * 7,
  gear02:    baseDelay * 7,
  gear03:    baseDelay * 7,
  gear04:    baseDelay * 7,
  gear05:    baseDelay * 7,
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
		  <FadeIn className="flex items-center gap-4 mb-10" delay={layouts.delay.headline}>
            <div className="w-4 sm:w-12 h-[2px] bg-clr-primary-1" />
            <span className="text-clr-base-1 font-mono text-xs tracking-[0.1em] sm:tracking-[0.4em] uppercase">
              {MESSAGE_CONTENT.mission}
            </span>
            <div className="flex-grow h-[1px] bg-clr-base-1/30" />
		  </FadeIn>


			<div className="grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(24,1fr)]
			 w-full gap-0 min-h-screen
			 relative overflow-hidden">

				{/* キャッチコピー（左側） */}
				<FadeIn className={`
						${layouts.class.catchCopy}`} delay={layouts.delay.catchCopy}>
							<h2 className="text-3xl md:text-5xl font-[700] text-clr-base-1/90 !leading-[1.5]">
								{MESSAGE_CONTENT.catchphrase.top}<br className="block lg:hidden" />
								{MESSAGE_CONTENT.catchphrase.middle_1}<br />
								{MESSAGE_CONTENT.catchphrase.middle_2}
								<span className="text-clr-primary-1">{MESSAGE_CONTENT.catchphrase.bottom}</span>
							</h2>
							{/* <div className="absolute size-full inset-0 bg-clr-main-2 */}
									{/* [clip-path:polygon(0%_0%,5%_0%,0%_5%)]" /> */}
				</FadeIn>



				{/* 本文（右側） */}
				<FadeIn className={`relative pt-20 border-t-[0.1px] border-clr-base-1/30
									after:content-['']
									after:absolute
									after:top-[-4.5px]
									after:-left-2
									after:size-[8px]
									after:bg-clr-base-1/30
									after:rounded-full
				${layouts.class.text}`} delay={layouts.delay.text}>
							<div className="space-y-6">
								{/* {MESSAGE_CONTENT.paragraphs.map((text, i) => ( */}
								{/* <p key={0} className={ */}
								<p className={
									"text-clr-base-1/80 text-xl font-medium md:text-2xl" 
								}>
									{MESSAGE_CONTENT.paragraphs[0]}
								</p>
								{/* ))} */}
							</div>

				</FadeIn>

				<FadeIn className={`relative pt-20 border-t-[0.1px] border-clr-base-1/30
									after:content-['']
									after:absolute
									after:top-[-4.5px]
									after:-left-2
									after:size-[8px]
									after:bg-clr-base-1/30
									after:rounded-full
				${layouts.class.text_2}`} delay={layouts.delay.text_2}>
							<div className="space-y-6">
								{/* {MESSAGE_CONTENT.paragraphs.map((text, i) => ( */}
								{/* <p key={1} className={ */}
								<p className={
									"text-clr-base-1/80 text-lg"
								}>
									{MESSAGE_CONTENT.paragraphs[1]}
								</p>
								{/* ))} */}
								<ArrowLink variant="white" href={MESSAGE_CONTENT.link  || "#"} className="mt-20"/>
							</div>

				</FadeIn>


				{/* 装飾図形（同じセル、あるいは重ねる配置） */}
				{/* <FadeIn className={`
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
				</FadeIn> */}

				<FadeIn className={layouts.class.gear01} delay={layouts.delay.gear01}>
					<Cog 
					strokeWidth={1.5}
					size={200} 
					className="text-clr-main-2-2 animate-spin-slow" 
					/>
				</FadeIn>
				<FadeIn className={layouts.class.gear02} delay={layouts.delay.gear02}>
					<Cog 
					size={120} 
					strokeWidth={1.5}
					className="text-clr-main-2-2 animate-spin-reverse" 
					/>
				</FadeIn>
				<FadeIn className={layouts.class.gear03} delay={layouts.delay.gear03}>
					<Cog 
					size={80} 
					strokeWidth={1.5}
					className="text-clr-main-2-2 animate-spin-slow" 
					/>
				</FadeIn>
				<FadeIn className={layouts.class.gear04} delay={layouts.delay.gear04}>
					<Cog 
					size={180} 
					strokeWidth={1.8}
					className="text-clr-main-2-2 animate-spin-reverse-moreslow" 
					/>
				</FadeIn>
				<FadeIn className={layouts.class.gear05} delay={layouts.delay.gear05}>
					<Cog 
					size={340} 
					strokeWidth={1.2}
					className="text-clr-main-2-2 animate-spin-moreslow" 
					/>
				</FadeIn>
			</div>

			{/* 下部の署名 */}
			<FadeIn className="flex justify-between items-center gap-4 mt-20" delay={layouts.delay.subText}>
                <div className="flex-grow h-[1px] bg-clr-primary-1/30 reveal" />
                <span className="text-clr-base-1 font-mono text-xs italic">
                  {MESSAGE_CONTENT.signature}
                </span>
			</FadeIn>

      </Container>
    </section>
  );
}