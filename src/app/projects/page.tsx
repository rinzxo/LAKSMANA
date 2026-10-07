"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "KitaAtur",
    category: "Web Application / PWA",
    description: "Aplikasi web dan PWA yang dirancang untuk efisiensi absensi dan pelaporan kas organisasi. Dilengkapi dengan antarmuka yang modern, cepat, dan mudah digunakan oleh seluruh anggota tim.",
    year: "2026",
    role: "Fullstack Developer",
    image: "/kitaatur.png",
    link: "https://kitatur.rinzgroup.web.id"
  },
  {
    id: 2,
    title: "KitaPay",
    category: "Payment Integration",
    description: "Arsitektur layanan pembayaran digital yang mengintegrasikan berbagai payment gateway daring. Memberikan kemudahan, keamanan, dan kecepatan dalam setiap transaksi komersial.",
    year: "2026",
    role: "Fullstack Developer",
    image: "/kitapay.png",
    link: "https://kitapay.rinzgroup.web.id"
  }
];

export default function ProjectsPage() {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const projectsEl = gsap.utils.toArray(".project-row");
      projectsEl.forEach((el: any) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32 mt-10">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">Selected<br/><span className="text-zinc-500">Works</span></h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
          Eksplorasi ekosistem produk digital dan solusi web modern yang saya kembangkan untuk menjawab berbagai tantangan teknologi.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className={`project-row flex flex-col gap-10 md:gap-20 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 group cursor-pointer">
                <div className="relative aspect-video w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-colors duration-500 group-hover:border-zinc-600 flex items-center justify-center">
                   <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20"></div>
                   {project.image ? (
                     <Image src={project.image} alt={project.title} fill className="object-contain p-2 z-10 grayscale group-hover:grayscale-0 transition-all duration-700" />
                   ) : (
                     <p className="text-zinc-600 font-bold uppercase tracking-widest z-20 group-hover:scale-110 transition-transform duration-500">{project.title} Preview</p>
                   )}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">{project.category}</span>
                  <div className="h-[1px] flex-1 bg-zinc-800"></div>
                  <span className="text-sm font-bold text-zinc-600">{project.year}</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h2>
                
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-2">Peran</h4>
                  <p className="text-zinc-300 font-medium">{project.role}</p>
                </div>
                
                <Link href={project.link || "#"} target="_blank" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors group w-max">
                  Lihat Detail Proyek
                  <div className="bg-white/10 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </main>
  );
}
