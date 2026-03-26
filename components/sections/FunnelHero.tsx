import Link from 'next/link';
import { Zap, ShieldCheck, ChevronRight, Star } from 'lucide-react';

export default function FunnelHero() {
  return (
    <section className="relative pt-28 pb-16 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(ellipse, rgba(255,77,0,0.08) 0%, transparent 70%)'}} />

      <div className="container-custom relative z-10 text-center">
        {/* Social proof bar */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FF8C00] text-[#FF8C00]" />)}
          <span className="text-[#606060] text-sm ml-2">100+ spokojených klientů</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{background:'rgba(255,77,0,0.1)', border:'1px solid rgba(255,77,0,0.25)'}}>
          <span className="w-2 h-2 rounded-full bg-[#FF4D00] pulse-dot" />
          <span className="text-[#FF6B2B] text-sm font-bold uppercase tracking-widest">
            Garantováno · Nebo vracíme zálohu
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-black leading-[0.95] tracking-tight mb-6">
          Web hotový<br />
          <span className="gradient-text">do zítřka.</span>
        </h1>

        {/* Sub */}
        <p className="text-xl text-[#909090] leading-relaxed mb-3 max-w-lg mx-auto">
          Ráno odešlete poptávku.<br />
          Zítra ráno máte web online.
        </p>
        <p className="text-sm text-[#404040] mb-10">Platí pro START a BUSINESS balíček. PRO do 48h.</p>

        {/* Main CTA */}
        <Link href="/objednat"
          className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-xl font-black rounded-2xl mb-5 w-full sm:w-auto justify-center">
          <Zap className="w-6 h-6" />
          Chci web do 24 hodin
          <ChevronRight className="w-6 h-6" />
        </Link>

        <div className="flex items-center justify-center gap-2 mb-12">
          <ShieldCheck className="w-4 h-4 text-[#FF4D00]" />
          <span className="text-[#505050] text-sm">Záruka vrácení zálohy · Ceny od 11 900 Kč · 0 skrytých poplatků</span>
        </div>

        {/* Proof numbers */}
        <div className="grid grid-cols-3 gap-4">
          {[
            {v:'24h', l:'Průměrná doba dodání'},
            {v:'100+', l:'Spuštěných webů'},
            {v:'11 900', l:'Kč — vstupní cena'},
          ].map(s => (
            <div key={s.l} className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-white">{s.v}</div>
              <div className="text-[10px] text-[#404040] uppercase tracking-wide mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
