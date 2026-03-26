import Link from 'next/link';
import { Phone, Mail, Zap } from 'lucide-react';

export default function FunnelFooter() {
  return (
    <footer style={{background:'#030303', borderTop:'1px solid rgba(255,255,255,0.05)'}}>
      <div className="container-custom py-10 flex flex-col items-center gap-6 text-center">
        <Link href="/objednat" className="btn-primary flex items-center gap-2 px-8 py-4 text-base font-bold">
          <Zap className="w-5 h-5" />
          Chci web do 24 hodin
        </Link>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="tel:+420777000111" className="flex items-center gap-2 text-sm text-[#505050] hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-[#FF4D00]" />+420 777 000 111
          </a>
          <a href="mailto:ahoj@webdozitra.cz" className="flex items-center gap-2 text-sm text-[#505050] hover:text-white transition-colors">
            <Mail className="w-4 h-4 text-[#FF4D00]" />ahoj@webdozitra.cz
          </a>
        </div>
        <p className="text-xs text-[#303030]">© 2024 Webdozitra.cz</p>
      </div>
    </footer>
  );
}
