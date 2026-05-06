"use client";

import { Cog, Orbit } from "lucide-react";
import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";
import { motion, Variants } from "framer-motion"; // Variantsを追加
import { FadeIn } from "@/components/FadeIn";
import CyberCircleA from "@/components/CyberCircleA";
import CyberCircleB from "@/components/CyberCircleB";
import CyberCircleC from "@/components/CyberCircleC";
import CyberCircleD from "@/components/CyberCircleD";
import CyberCircleE from "@/components/CyberCircleE";

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
    catchCopy: "col-start-3  col-end-18  row-start-2  row-end-8   z-20",
    text: "col-start-8 col-end-18  row-start-8  row-end-24  z-20",
    text_2: "col-start-14 col-end-23  row-start-17  row-end-24  z-20",
    bgCircle01:
      "col-start-15  col-span-25  row-start-7  row-span-20  z-10 opacity-30",
    bgCircle02:
      "col-start-16 col-end-25  row-start-4  row-end-12  z-0  opacity-20",
    bgCircle03:
      "col-start-4  col-end-18  row-start-14 row-end-24  z-10 opacity-40",
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
    bgCircle01: baseDelay * 5,
    bgCircle02: baseDelay * 5,
    bgCircle03: baseDelay * 6,
    subText:    baseDelay * 5,
    shapes01:   baseDelay * 6,
    shapes02:   baseDelay * 7,
    shapes03:   baseDelay * 8,
    shapes04:   baseDelay * 9,
    shapes05:   baseDelay * 10,
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
      className={`relative w-full py-130 overflow-hidden ${className}`}
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
        <div className="relative w-full min-h-[400px]">
          <FadeIn
            className={`absolute -left-140 top-100`}
            delay={layouts.delay.shapes04}
			speed={0.9}
    		stiffness={100}
          >
            <CyberCircleD className="size-240 text-clr-primary-1/30 animate-spin-D" />
          </FadeIn>
          <FadeIn
            className={`absolute left-0 top-240`}
            delay={layouts.delay.shapes05}
			speed={1.8}
    		stiffness={50}
          >
            <CyberCircleE className="size-140 text-clr-primary-1/30 animate-spin-E" />
          </FadeIn>
        </div>

        {/* セクション見出し装飾 */}
        <div className="relative flex items-center gap-4 mb-10" >

			{/* 2. 左から伸びる線 */}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true, amount: "some" }}
				transition={{ 
				duration: 1.5, 
				ease: [0.22, 1, 0.36, 1], 
				delay: 0.2 // ドットの出現に合わせて開始
				}}
				style={{ originX: 0 }}
				className="z-20 w-22 h-[2px] bg-clr-primary-1 will-change-transform"
			/>




          <span className="text-clr-base-1 font-mono text-xs tracking-[0.1em] sm:tracking-[0.4em] uppercase">
            {MESSAGE_CONTENT.mission}
          </span>

		  	{/* 2. 左から伸びる線 */}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true, amount: "some" }}
				transition={{ 
				duration: 1.5, 
				ease: [0.22, 1, 0.36, 1], 
				delay: 0.2 // ドットの出現に合わせて開始
				}}
				style={{ originX: 0 }}
				className="z-20 flex-grow w-1 h-[1px] bg-clr-base-1/30 will-change-transform"
			/>
        </div>

        {/* grid */}
        <div className="grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(24,1fr)]
			 w-full gap-0 min-h-screen
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
            {/* <div className="absolute size-full inset-0 bg-clr-main-2 */}
            {/* [clip-path:polygon(0%_0%,5%_0%,0%_5%)]" /> */}
          </div>

          {/* 本文（右側） */}
          <div
            className={`relative pt-20 space-y-6 ${layouts.class.text}`}>

			{/* スクロール時、 無から右へ伸びる線のアニメーション*/}
			{/* 1. 左端のドット（アニメーション付き） */}
			<motion.div 
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: "some" }}
				transition={{ 
				duration: 0.5, 
				ease: "easeOut",
				delay: 0.1 // 線が伸び始める直前に出現
				}}
				className="absolute z-20 top-[-4px] -left-2 size-[8px] bg-clr-base-1/30 rounded-full" 
			/>
			{/* 2. 左から伸びる線 */}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true, amount: "some" }}
				transition={{ 
				duration: 1.5, 
				ease: [0.22, 1, 0.36, 1], 
				delay: 0.2 // ドットの出現に合わせて開始
				}}
				style={{ originX: 0 }}
				className="absolute z-20 top-0 left-0 w-full h-[1px] bg-clr-base-1/30 will-change-transform"
			/>

				
              <p className={"text-clr-base-1/80 text-xl font-medium md:text-2xl"}>
                {MESSAGE_CONTENT.paragraphs[0]}
              </p>
          </div>

          <div
            className={`relative pt-20 space-y-6 ${layouts.class.text_2}`}>

			{/* スクロール時、 無から右へ伸びる線のアニメーション*/}
			{/* 1. 左端のドット（アニメーション付き） */}
			<motion.div 
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: "some" }}
				transition={{ 
				duration: 0.5, 
				ease: "easeOut",
				delay: 0.1 // 線が伸び始める直前に出現
				}}
				className="absolute z-20 top-[-4px] -left-2 size-[8px] bg-clr-base-1/30 rounded-full" 
			/>
			{/* 2. 左から伸びる線 */}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true, amount: "some" }}
				transition={{ 
				duration: 1.5, 
				ease: [0.22, 1, 0.36, 1], 
				delay: 0.2 // ドットの出現に合わせて開始
				}}
				style={{ originX: 0 }}
				className="absolute z-20 top-0 left-0 w-full h-[1px] bg-clr-base-1/30 will-change-transform"
			/>

              <p className={"text-clr-base-1/80 text-lg"}>
                {MESSAGE_CONTENT.paragraphs[1]}
              </p>
              <ArrowLink
                variant="white"
                href={MESSAGE_CONTENT.link || "#"}
                className="mt-20"
              />
          </div>

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

          <FadeIn className={layouts.class.shapes01} delay={layouts.delay.shapes01}
			speed={1.6}
			stiffness={70}
			>
            <CyberCircleA className="size-140 text-clr-primary-1/30 animate-spin-A" />
          </FadeIn>

          <FadeIn className={layouts.class.shapes02} delay={layouts.delay.shapes02}
			speed={0.7}
			stiffness={90}
			>
            <CyberCircleB className="size-100 text-clr-primary-1/30 animate-spin-B" />
          </FadeIn>

          <FadeIn className={layouts.class.shapes03} delay={layouts.delay.shapes03}
		  	speed={2}
			stiffness={120}
			>
            <CyberCircleC className="size-200 text-clr-primary-1/30 animate-spin-C" />
          </FadeIn>

        </div>

        {/* 下部の署名 */}
        <div
          className="flex justify-between items-center gap-4 mt-20"
        >
          {/* <div className="flex-grow h-[1px] bg-clr-primary-1/30 " /> */}

		  	{/* 2. 左から伸びる線 */}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true, amount: "some" }}
				transition={{ 
				duration: 1.5, 
				ease: [0.22, 1, 0.36, 1], 
				delay: 0.2 // ドットの出現に合わせて開始
				}}
				style={{ originX: 0 }}
				className="flex-grow z-20 w-22 h-[1px] bg-clr-primary-1/30 will-change-transform"
			/>

          <span className="text-clr-base-1 font-mono text-xs italic js-fadein">
            {MESSAGE_CONTENT.signature}
          </span>
        </div>
      </Container>
    </section>
  );
}
