"use client";

import { useEffect } from "react";

export const useAutoAnimate = () => {
  useEffect(() => {
    const selector = "h1, h2, h3, h4, p, span, li, a, .js-fadein, .c-visual-box, .c-section-title";
    
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);

        visibleEntries.forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          if (element.classList.contains("is-visible")) return;

          element.style.transitionDelay = `${index * 0.1}s`;
          
          requestAnimationFrame(() => {
            element.classList.add("is-visible");
          });

          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -100px 0px", 
        threshold: 0,
      }
    );

    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(`main ${selector}`);
      targets.forEach((t) => {
	
        const isInsideHero = t.closest("#hero-section"); 
  		const isInsideHeader = t.closest("#header-section");
  		const isInsideFooter = t.closest("#footer-section");

        if (isInsideHero || isInsideHeader || isInsideFooter) {
        } else {
          observer.observe(t);
        }

	});  
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []); 
};