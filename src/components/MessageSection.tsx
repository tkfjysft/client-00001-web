"use client";

import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";
import { motion, Variants } from "framer-motion"; // Variantsを追加
import { FadeIn } from "@/components/FadeIn";
import CyberCircleA from "@/components/CyberCircleA";
import CyberCircleB from "@/components/CyberCircleB";
import CyberCircleC from "@/components/CyberCircleC";
import CyberCircleD from "@/components/CyberCircleD";
import CyberCircleE from "@/components/CyberCircleE";
import AnimatedLine from "@/components/AnimatedLine";
import { LogoShiftGate } from "@/components/LogoShiftGate";
import { LogoBinaryOrbit } from "@/components/LogoBinaryOrbit";
import { LogoLogicRefraction } from "@/components/LogoLogicRefraction";
import { FaceSilhouette } from "@/components/FaceSilhouette";


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
  ],
  subText: {
	1: "堅牢な設計による安定した基盤",
    2: "洗練されたインターフェースによる快適な操作性",
    3: "高度な専門性と確かな実装力",
    4: "複雑なビジネス課題を最適なデジタルソリューションへ",
  },


  signature: "Established 2026",
  link: "",
};

const baseDelay = 0.08;
const layouts = {
  class: {
    headline: "",
    catchCopy: "col-start-3  col-end-18  row-start-1  row-end-2   z-20",
    text: "col-start-8 col-end-23  row-start-2  row-end-3  z-20",
    text_2: "col-start-14 col-end-23  row-start-17  row-end-24  z-20",
    shapesA: "col-start-15  col-span-17  row-start-1  row-span-25  z-10",
    shapesB: "col-start-18  col-span-16  row-start-9  row-span-25  z-10",
    shapesC: "col-start-21  col-span-20  row-start-4  row-span-25  z-10",
    shapesD: "",
    shapesE: "",
    subText: "",
  },
  delay: {
    headline:   baseDelay * 1,
    catchCopy:  baseDelay * 2,
    text:       baseDelay * 3,
    text_2:     baseDelay * 4,
    subText:    baseDelay * 5,
    shapesA:   baseDelay * 6,
    shapesB:   baseDelay * 7,
    shapesC:   baseDelay * 8,
    shapesD:   baseDelay * 9,
    shapesE:   baseDelay * 10,
  },
};

interface MessageSectionProps {
  className?: string;
}

export default function MessageSection({ className }: MessageSectionProps) {
  return (
    <section
      id="message-section"
      data-bg="dark"
      className={`relative w-full py-130 overflow-x-clip ${className}`}
    >
      
      {/* --- コンテンツレイヤー --- */}
      <Container>

		{/* 装飾図形 */}
        {/* <div className="relative w-full min-h-[400px]">
            <CyberCircleD className={`absolute -left-140 top-100`} classNameSvg="size-240 text-clr-primary-1/30" />
            <CyberCircleE className={`absolute left-0 top-240`} classNameSvg="size-140 text-clr-primary-1/30" />
        </div> */}

        {/* セクション見出し装飾 */}
        <div className="relative flex items-center gap-4 mb-10" >

			{/* 1. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 w-22 h-[2px] bg-clr-primary-1" />

			<span className="text-clr-base-1 font-mono text-xs tracking-[0.1em] sm:tracking-[0.4em] uppercase">
				{MESSAGE_CONTENT.mission}
			</span>

		  	{/* 2. 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 flex-grow w-1 h-[1px] bg-clr-base-1/30" />

        </div>

        {/* grid */}
        <div className="grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(2,1fr)]
			 w-full gap-0
			 relative">

          {/* キャッチコピー（左側） */}
          <div className={`${layouts.class.catchCopy}`}>
            <h2 className="text-3xl md:text-5xl font-[700] text-clr-base-1/90 !leading-[1.5]">
              {MESSAGE_CONTENT.catchphrase.top}
              <br className="block lg:hidden" />
              {MESSAGE_CONTENT.catchphrase.middle_1}
              <br />
              {MESSAGE_CONTENT.catchphrase.middle_2}
              <span className="text-clr-primary-1">
                {MESSAGE_CONTENT.catchphrase.bottom}
              </span>
            </h2>
          </div>

          {/* 本文（右側） */}
          <div
            className={`relative pt-20 space-y-6 ${layouts.class.text}`}>

			{/* スクロール時、 無から右へ伸びる線のアニメーション*/}
			{/* 1. 左端のドット（アニメーション付き） */}
			{/* 2. 左から伸びる線 */}
			<AnimatedLine classNameDot="absolute z-20 top-[-4px] -left-2 size-[8px] bg-clr-base-1/30" classNameLine="absolute z-20 top-0 left-0 w-full h-[1px] bg-clr-base-1/30" />
				
              <p className={"text-clr-base-1/80 text-xl font-medium md:text-2xl"}>
                {MESSAGE_CONTENT.paragraphs[0]}
              </p>
          </div>


			{/* 装飾図形 */}
            {/* <CyberCircleA className={layouts.class.shapesA} classNameSvg="size-140 text-clr-primary-1/30" />
            <CyberCircleB className={layouts.class.shapesB} classNameSvg="size-100 text-clr-primary-1/30" />
            <CyberCircleC  className={layouts.class.shapesC} classNameSvg="size-200 text-clr-primary-1/30 "/> */}

        </div>

          <div
            className={`relative pt-20 space-y-6`}>


<div className="flex justify-between">
  {[1, 2, 3, 4].map((index) => {
    // オブジェクトから値を取得（もし空なら空文字を返す）
    const text = (MESSAGE_CONTENT.subText as any)[index];

    return (
      <p 
        key={index} 
        className="flex items-center justify-center text-clr-base-1/80 border border-clr-base-1/30  border-[1px] rounded-full size-[14vw] p-10"
      >
        {text}
      </p>
    );
  })}
</div>
              <ArrowLink
                variant="white"
                href={MESSAGE_CONTENT.link || "#"}
                className="mt-20"
              />
          </div>

        {/* 下部の署名 */}
        <div
          className="flex justify-between items-center gap-4 mt-20"
        >
          {/* <div className="flex-grow h-[1px] bg-clr-primary-1/30 " /> */}

			{/* 左から伸びる線 */}
			<AnimatedLine classNameLine="z-20 flex-grow w-22 h-[1px] bg-clr-primary-1/30" />

          <span className="text-clr-base-1 font-mono text-xs italic js-fadein">
            {MESSAGE_CONTENT.signature}
          </span>
        </div>

		{/* <LogoShiftGate className="size-140 text-clr-primary-1" />
		<LogoBinaryOrbit className="size-104 text-clr-primary-1" /> */}
		{/* <LogoLogicRefraction className="size-104 text-clr-primary-1" /> */}

		{/* <img src={'/images/face_left.svg'} />
		<img src={'/images/face_right.svg'} /> */}


      </Container>
    </section>
  );
}
