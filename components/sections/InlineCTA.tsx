import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function InlineCTA({ label }: { label: string }) {
  return (
    <div className="py-8 bg-[#050505]">
      <div className="container-custom text-center">
        <Link href="/objednat"
          className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl">
          <Zap className="w-5 h-5" />
          {label}
        </Link>
      </div>
    </div>
  );
}
