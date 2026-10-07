"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import Image from "next/image";

const education = [
  { school: "SMA Negeri 2 Babelan", years: "2024–2027" },
  { school: "SMP Negeri 44 Kota Bekasi", years: "2021–2024" },
  { school: "SD Negeri Marga Mulya 6", years: "2019–2021" },
  { school: "MI Arrahmah", years: "2015–2019" }
];

const skills = [
  "Pengembangan Web & Aplikasi Modern (React, Next.js, Node.js)",
  "Manajemen Basis Data & Cloud (Supabase, Firebase)",
  "Integrasi Sistem Pembayaran Digital (Payment Gateway)",
  "Desain Antarmuka & Grafis (Figma, Canva)",
  "Kepemimpinan & Manajemen Proyek",
  "Komunikasi & Pelayanan Konsumen",
  "Manajemen Waktu & Pemecahan Masalah"
];

export default function AboutPage() {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Fade in text elements
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      });
      
      // Reveal line separators
      gsap.from(".reveal-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".reveal-line",
          start: "top 85%",
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-32 pb-32 px-6 md:px-12">
      {/* Top Editorial Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 mb-32">
        {/* Left: Big Photo */}
        <div className="w-full md:w-5/12 reveal-item">
          <div className="relative aspect-[3/4] w-full bg-zinc-900 overflow-hidden group">
            {/* Photo */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 transition-colors duration-700 group-hover:bg-transparent"></div>
            <Image src="/Laksmana.jpg" alt="Laksmana Ibrahim Rino" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          
          {/* Contact Info (Magazine caption style) */}
          <div className="mt-8 flex flex-col gap-4 text-sm font-medium text-zinc-400">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-zinc-500" />
              <p>JL. Baru Perjuangan Nomor 70 RT 01/RW 07, MargaMulya, Bekasi Utara, Kota Bekasi</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0 text-zinc-500" />
              <p>+62852-8269-5970</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 shrink-0 text-zinc-500" />
              <p>generalrino@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 shrink-0 text-zinc-500" />
              <p>laksmana.rinzgroup.web.id</p>
            </div>
          </div>
        </div>

        {/* Right: Typography / Biography */}
        <div className="w-full md:w-7/12 flex flex-col justify-center">
          <h1 className="reveal-item text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Laksmana<br />
            Ibrahim<br />
            <span className="text-blue-600">Rino</span>
          </h1>
          
          <div className="reveal-item text-xl md:text-3xl font-medium leading-snug text-zinc-300 mb-8 max-w-2xl">
            Tech enthusiast dan founder di bidang digital inovasi (Rinz Group Inovasi).
          </div>
          
          <div className="reveal-item text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl space-y-6">
            <p>
              Dengan spesialisasi dalam pengembangan web modern, integrasi gateway pembayaran, dan manajemen produk digital, saya telah memimpin dan merancang ekosistem produk seperti KitaAtur & KitaPay.
            </p>
            <p>
              Saya memiliki rekam jejak dalam kepemimpinan tim, eksekusi proyek berbasis web/PWA, serta komunikasi lintas fungsi yang solid. Siap berkontribusi secara adaptif dan terukur dalam setiap tahap pengembangan ekosistem produk teknologi untuk mencapai hasil yang maksimal.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto h-[1px] bg-zinc-800 mb-32 reveal-line"></div>

      {/* Bottom Editorial Section: Experience, Skills & Education */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        
        {/* Left Column: Work Experience (Spans 7 cols) */}
        <div className="md:col-span-7">
          <h2 className="reveal-item text-3xl font-black uppercase tracking-tight mb-12 flex items-center gap-4">
            <span className="text-blue-600">01.</span> Pengalaman Kerja
          </h2>
          
          <div className="reveal-item group">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                Founder & CEO
              </h3>
              <span className="text-zinc-500 font-bold tracking-widest text-sm mt-2 md:mt-0">
                2026 – Sekarang
              </span>
            </div>
            <h4 className="text-lg text-zinc-300 mb-6 font-medium">Rinz Group Inovasi</h4>
            
            <ul className="list-none space-y-4 text-zinc-400">
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-sm">
                Memimpin arah strategis, legalitas usaha, serta pengembangan lini produk digital dan kemitraan bisnis.
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-sm">
                Merancang dan meluncurkan aplikasi web/PWA (seperti KitaAtur) untuk efisiensi absensi dan pelaporan kas organisasi.
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-sm">
                Mengembangkan arsitektur layanan pembayaran digital (KitaPay) serta integrasi sistem pembayaran daring (payment gateway).
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-sm">
                Mengoordinasikan tim lintas divisi (desain, operasional, dan media) dalam penanganan klien dan proyek komersial.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Skills & Education (Spans 5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-20">
          
          {/* Skills */}
          <div>
            <h2 className="reveal-item text-3xl font-black uppercase tracking-tight mb-10 flex items-center gap-4">
              <span className="text-blue-600">02.</span> Keahlian
            </h2>
            <div className="reveal-item flex flex-col gap-4 text-zinc-400">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:bg-zinc-900/50 transition-colors">
                  <span className="text-blue-600 text-sm font-bold mt-1">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="reveal-item text-3xl font-black uppercase tracking-tight mb-10 flex items-center gap-4">
              <span className="text-blue-600">03.</span> Pendidikan
            </h2>
            <div className="reveal-item border-l border-zinc-800 ml-3 pl-8 flex flex-col gap-8">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-blue-600 rounded-full"></div>
                  
                  <h3 className="text-lg font-bold text-zinc-200 mb-1">{edu.school}</h3>
                  <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">{edu.years}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}
