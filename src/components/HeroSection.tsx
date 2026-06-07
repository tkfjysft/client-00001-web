"use client";

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { siteConfig } from "@/config/site";
import { useEffect, useRef, useState } from 'react';
import { HeroParticles } from "@/components/HeroParticles";
import { HeroAnimatedChar } from "@/components/HeroAnimatedChar";
import { HeroAnimatedChar_02 } from "@/components/HeroAnimatedChar_02";
import { FaceSilhouette } from "@/components/FaceSilhouette";
import Link from "next/link";
import CyberCircleD from "@/components/CyberCircleD";
import CyberCircleE from "@/components/CyberCircleE";
import CyberCircleF from "@/components/CyberCircleF";
import LogoCI from "@/components/LogoCI";



interface HeroSectionProps  {
	className? : string;
	shouldAnimate: boolean;
  isFirstAccess: boolean;
}



export default function HeroSection ({
	className,
	shouldAnimate,
	isFirstAccess,
}: HeroSectionProps) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isClient, setIsClient] = useState(false);

	useEffect(() => {
    setIsClient(true);
    
    const timer = setTimeout(() => setIsAnimating(false), 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const backgroundImages = siteConfig.heroImages || [
    "/images/hero_cording.webp",
    "/images/hero_meeting.webp",
    "/images/hero_office.webp",
    "/images/hero_ceo.webp",
    "/images/hero_whiteboard.webp",
    "/images/hero_serverroom.webp",
  ];


const [isNarrow, setIsNarrow] = useState(false);
const [isDark, setIsDark] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      if (!isNarrow) setIsNarrow(true);
    } else {
      if (isNarrow) setIsNarrow(false);
    }

    if (latest > 300) {
      if (!isDark) setIsDark(true);
    } else {
      if (isDark) setIsDark(false);
    }
  });



useEffect(() => {
  console.log("現在の状態:", { dark: isDark, narrow: isNarrow });
}, [isDark, isNarrow]);

  const initialAnimation = isFirstAccess
    ? { opacity: 0, y: -100, scale: 0.8, rotateX: -45 } 
    : { opacity: 1, y: 0, scale: 1, rotateX: 0 };       



return (
	<>
  <section data-bg="dark" id="hero-section" className={`relative w-full h-[100svh] flex items-center justify-center overflow-hidden ${className}`}>

    {isClient && (
    <>

<div className="absolute top-4 left-[2vw] sm:top-10 sm:left-[4vw] w-full max-w-[200px] sm:max-w-[300px] flex flex-col items-center pointer-events-auto">
  <Link href="/" className='block w-full h-full relative z-[10001]'>
    <LogoCI className={`text-clr-base-1 overflow-visible`} 
      stroke="currentColor" 
      strokeWidth="0"
	  uniqueId="hero"
    />
  </Link>
</div>

    <div className={`fixed inset-0 top-0 left-0 w-full h-screen -z-10 overflow-hidden bg-bgclr-startup-dark pointer-events-none
		${shouldAnimate && isFirstAccess ? "animate-bg-fadein" : "animate-bg-fadein-fast"}
		`} aria-hidden="true">
	

				<div className="block sm:hidden">
			<CyberCircleE className={`fixed top-[40%] w-fit h-fit`} classNameSvg="size-200 text-clr-primary-1/52 z-20" />
			</div>


	<div className="hidden sm:block">
			<CyberCircleF className={`fixed inset-0 m-auto w-fit h-fit`} className_inner="origin-bottom" classNameSvg="size-200 text-clr-primary-1/52 z-20" />
			</div>


        <div 
          className={`absolute inset-0 bg-clr-main-1 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            isDark ? 'opacity-65' : 'opacity-0'
          }`}
        />
	</div>

    <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden="true">
      {shouldAnimate && isAnimating && isFirstAccess && <HeroParticles />}
    </div>

    <div className="relative z-20 px-6 mt-[-9vh] pointer-events-none">
      <h1 className="text-clr-base-2 tracking-[-1] text-center" aria-label={siteConfig.heroTagline}>
		{(shouldAnimate && isFirstAccess) ? siteConfig.heroTagline.split("").map((char, index) => (
          <HeroAnimatedChar key={index} char={char} index={index} />
        ))
		:
		siteConfig.heroTagline.split("").map((char, index) => (
          <HeroAnimatedChar_02 key={index} char={char} index={index} />
        ))
		}


      </h1>
    </div>
		</>
    )}


  </section>

	  </>
);
};
