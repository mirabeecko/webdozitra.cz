import { Suspense } from 'react'
import KUpsell from '@/components/konverzky/KUpsell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Objednávka potvrzena | Webdozítra',
  robots: 'noindex',
}

const nextSteps = [
  { emoji: '📬', n: '1.', text: 'E-mail s potvrzením do 5 minut.' },
  { emoji: '🛠️', n: '2.', text: 'Začínáme pracovat okamžitě.' },
  { emoji: '🚀', n: '3.', text: 'Web do 24 hodin od platby.' },
]

export default function KSuccessPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center px-4 pt-20 pb-12">
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center mx-auto mb-8 text-4xl">
          ✅
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Zaplaceno. Začínáme.
        </h1>
        <p className="text-xl text-gray-400 max-w-md mx-auto">
          Zítra máš web online. Hlídej e-mail —{' '}
          <span className="text-white font-semibold">pošleme odkaz hned jak bude hotovo.</span>
        </p>

        {/* Next steps */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto mt-12 mb-12">
          {nextSteps.map((s) => (
            <div key={s.n} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-center">
              <div className="text-3xl mb-2">{s.emoji}</div>
              <div className="text-orange-500 font-bold text-xs uppercase tracking-wider mb-1">{s.n}</div>
              <p className="text-gray-500 text-sm">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Upsell */}
      <Suspense fallback={null}>
        <KUpsell />
      </Suspense>

      {/* Footer */}
      <footer className="py-10 text-center px-4 border-t border-white/[0.04] mt-8">
        <p className="text-gray-700 text-sm">
          Dotazy? <span className="text-orange-500">info@webdozitra.cz</span>
        </p>
      </footer>
    </div>
  )
}
