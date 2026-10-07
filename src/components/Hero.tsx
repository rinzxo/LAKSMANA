"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    // GSAP animation for text and images
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".hero-card", {
        y: 150,
        rotation: 10,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.5)",
        delay: 0.6,
        stagger: 0.2,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20">
      
      {/* Foreground Layer (Flex container for mobile flow) */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-between px-4 md:px-12 pb-12 pt-4 md:pt-0 md:justify-center">
        
        {/* Mobile: Top Text */}
        <h1 className="md:hidden w-full flex items-center justify-center text-[24vw] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap drop-shadow-2xl">
          <span className="hero-text block leading-[0.8]">RINZ</span>
        </h1>

        {/* Center Photos Layer (Flow on mobile, Absolute on desktop) */}
        <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-0 w-[200px] md:w-[280px] h-[300px] md:h-[400px] pointer-events-none opacity-90 my-auto md:my-0 md:-mt-4 md:-ml-12">
          {/* Card 2 (Background card) */}
          <div className="hero-card absolute inset-0 bg-blue-900 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 translate-x-3 md:translate-x-8 z-0 border border-zinc-800">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300 text-xs md:text-sm font-bold bg-zinc-900/80">Photo 2</div>
          </div>
          {/* Card 1 (Foreground card) */}
          <div className="hero-card absolute inset-0 bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 z-10 border border-zinc-700">
              <Image src="/Laksmana.jpg" alt="Laksmana" fill className="object-cover" />
          </div>
        </div>

        {/* Desktop Text */}
        <h1 className="hidden md:flex w-full max-w-7xl items-center justify-center text-[20vw] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap drop-shadow-2xl pointer-events-none">
          <span className="hero-text block leading-[0.8] pointer-events-auto">RI</span>
          <div className="w-[380px] shrink-0"></div>
          <span className="hero-text block leading-[0.8] pointer-events-auto">NZ</span>
        </h1>

        {/* Bottom Text */}
        <div className="max-w-md text-center relative z-30 mt-0 md:mt-16">
          <p className="hero-text text-sm md:text-base text-zinc-300 font-medium leading-relaxed px-4 drop-shadow-md">
            I connect the right ideas to the right execution at the right time to create unparalleled experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
