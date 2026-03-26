import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function FunnelHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="container-custom py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#FF4D00,#FF8C00)'}}>
            <span className="text-white font-black text-sm">W</span>
          </div>
          <span className="font-black text-white tracking-tight">webdozitra<span className="text-[#FF4D00]">.cz</span></span>
        </Link>
        <a href="tel:+420777000111" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF4D00] transition-colors">
          <Phone className="w-4 h-4 text-[#FF4D00]" />
          +420 777 000 111
        </a>
      </div>
    </header>
  );
}
