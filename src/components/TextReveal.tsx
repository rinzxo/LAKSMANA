"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextReveal() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".reveal-text");
      
      texts.forEach((text: any) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          y: 50,
          opacity: 0,
          rotationX: -45,
          transformOrigin: "0% 50% -50",
          ease: "power2.out",
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full py-32 md:py-64 px-6 md:px-20 bg-black text-white flex flex-col justify-center min-h-screen">
      <div className="max-w-6xl mx-auto text-4xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] flex flex-col">
        <p className="reveal-text">
          Tech <span className="text-blue-600">Enthusiast</span>
        </p>
        <p className="reveal-text">& Founder of</p>
        <p className="reveal-text">
          Rinz Group <span className="text-zinc-500">Inovasi</span>
        </p>
        <p className="reveal-text">Spesialis di</p>
        <p className="reveal-text">Web Modern &</p>
        <p className="reveal-text text-red-500">Produk Digital.</p>
      </div>
      
      <div className="max-w-xl mx-auto mt-32 text-center text-zinc-400 text-lg reveal-text">
        <p>
          Saya Laksmana Ibrahim Rino. Memiliki spesialisasi dalam pengembangan web modern, integrasi gateway pembayaran, dan manajemen produk digital (KitaAtur & KitaPay). Siap berkontribusi dalam pengembangan ekosistem produk teknologi.
        </p>
      </div>
    </section>
  );
}
