"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // We use a MatchMedia or simply calculate width to scroll horizontally
    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    // The amount to scroll horizontally
    const scrollAmount = containerWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${containerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    { title: "KitaAtur", type: "Web App / PWA", client: "Internal Product", image: "/kitaatur.png", id: 1, link: "https://kitatur.rinzgroup.web.id" },
    { title: "KitaPay", type: "Payment Gateway", client: "Internal Product", image: "/kitapay.png", id: 2, link: "https://kitapay.rinzgroup.web.id" }
  ];

  return (
    <section ref={sectionRef} className="h-screen w-full bg-zinc-950 overflow-hidden relative flex flex-col justify-center">
      <div className="absolute top-10 left-6 md:left-20 z-10">
        <h2 className="text-zinc-500 uppercase tracking-widest text-sm font-bold">Selected Work</h2>
      </div>
      
      <div ref={containerRef} className="flex flex-row w-max px-6 md:px-20 h-[60vh] gap-8 mt-20 items-center">
        {projects.map((project, idx) => (
          <Link href={project.link || "#"} target="_blank" key={project.id} className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-full flex flex-col group cursor-pointer shrink-0">
            {/* Image Box */}
            <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden mb-6 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20"></div>
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-contain p-2 z-10 grayscale group-hover:grayscale-0 transition-all duration-700" />
              ) : (
                <p className="text-zinc-600 text-sm z-10">Image Preview</p>
              )}
            </div>
            
            {/* Project Info */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-zinc-400 text-sm mb-2">{project.client}</p>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest font-bold">{project.type}</p>
              </div>
              <div className="bg-white text-black p-3 rounded-full opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        ))}

        {/* CTA Card */}
        <div className="w-[85vw] md:w-[40vw] h-full flex flex-col items-center justify-center shrink-0">
          <Link href="/projects" className="group flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
               <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform" />
            </div>
            <span className="text-3xl uppercase tracking-tighter font-bold">See All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
