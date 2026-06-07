"use client";

import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";
import { motion, Variants } from "framer-motion"; 
import { FadeIn_02 } from "@/components/FadeIn_02";
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
  link: "b/message",
};

const baseDelay = 0.08;
const layouts = {
  class: {
    headline: "",
    catchCopy: "col-start-1   col-end-25  md:col-start-3   md:col-end-23 row-start-1  row-end-2   z-20",
    text:      "col-start-3   col-end-23   md:col-start-6   md:col-end-20 row-start-2  row-end-3  z-20",
    text_2:    "col-start-14  col-end-23   row-start-17 row-end-24  z-20",
    shapesA:   "col-start-15  col-span-17  row-start-1  row-span-25  z-10",
    shapesB:   "col-start-18  col-span-16  row-start-9  row-span-25  z-10",
    shapesC:   "col-start-21  col-span-20  row-start-4  row-span-25  z-10",
    shapesD:   "",
    shapesE:   "",
    subText:   "",
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
      
      <Container>

        <div className="relative flex items-center gap-4 mb-40" >
			<AnimatedLine classNameLine="z-20 w-8 h-[2px] bg-clr-primary-1" />
			<FadeIn_02 className="text-clr-base-1 font-mono text-xs tracking-[0.1em] sm:tracking-[0.4em] uppercase relative z-50">
				{MESSAGE_CONTENT.mission}
			</FadeIn_02>
        </div>

        <div className="grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(2,1fr)]
			 w-full gap-0
			 relative">

          <FadeIn_02 className={`${layouts.class.catchCopy} mb-40`}>
            <h2 className="text-3xl md:text-5xl font-[700] text-clr-base-1/90 text-center !leading-[1.5]">
              {MESSAGE_CONTENT.catchphrase.top}
              <br className="block lg:hidden" />
              {MESSAGE_CONTENT.catchphrase.middle_1}
              <br />
              {MESSAGE_CONTENT.catchphrase.middle_2}
              <span className="text-clr-primary-1">
                {MESSAGE_CONTENT.catchphrase.bottom}
              </span>
            </h2>
          </FadeIn_02>

          <div className={`relative pt-20 space-y-6 ${layouts.class.text}`}>

			<AnimatedLine classNameDot="absolute z-20 top-[-4px] -left-2 size-[8px] bg-clr-base-1/30" classNameLine="absolute z-20 top-0 left-0 w-full h-[1px] bg-clr-base-1/30" />
				
              <p className={"text-clr-base-1/80 text-xl font-medium md:text-2xl"}>
                {MESSAGE_CONTENT.paragraphs[0]}
              </p>
          </div>
        </div>


          <FadeIn_02
            className={`relative pt-20 space-y-6 relative z-50`}>
				<div className="
						grid 
						grid-cols-2      
						md:grid-cols-3   
						lg:grid-cols-4   
						gap-4            
						justify-items-center 
						">
					{[1, 2, 3, 4].map((index) => {
					const text = (MESSAGE_CONTENT.subText as any)[index];

					return (
					<p 
  key={index} 
  className="
    flex items-center justify-center 
    text-clr-base-1/80 
    border border-clr-base-1/30 border-[1px] rounded-full 
    text-base text-left 
    p-5 mb-8

    w-[clamp(170px,14vw,180px)] 
    h-[clamp(170px,14vw,180px)] 

    min-[450px]:w-[clamp(190px,16vw,230px)] 
    min-[450px]:h-[clamp(190px,16vw,230px)]

    md:w-[clamp(200px,15vw,260px)] 
    md:h-[clamp(200px,15vw,260px)]
  "
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
          </FadeIn_02>

        <div
          className="flex justify-between items-center gap-4 mt-20"
        >

			<AnimatedLine classNameLine="z-20 flex-grow w-22 h-[1px] bg-clr-primary-1/30" />

          <span className="text-clr-base-1 font-mono text-xs italic js-fadein relative z-50">
            {MESSAGE_CONTENT.signature}
          </span>
        </div>



      </Container>
    </section>
  );
}
