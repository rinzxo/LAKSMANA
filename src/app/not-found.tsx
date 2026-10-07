import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        {/* Giant background text */}
        <h1 className="text-[40vw] md:text-[25vw] font-black uppercase tracking-tighter leading-none text-zinc-900 select-none">
          404
        </h1>
        
        {/* Foreground content overlapping the 404 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 bg-black/40 px-6 py-2 backdrop-blur-sm rounded-xl border border-white/5">
            Lost in Space
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-md mx-auto mb-10 bg-black/40 px-6 py-3 backdrop-blur-sm rounded-xl border border-white/5">
            Halaman yang Anda tuju tidak ditemukan, sudah dipindahkan, atau sedang dalam tahap pengembangan.
          </p>
          
          <Link href="/" className="inline-flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group bg-zinc-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800">
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
