import { Suspense } from 'react'
import FunnelUpsell from '@/components/funnel/FunnelUpsell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Objednávka potvrzena | Webdozítra.cz',
  robots: 'noindex',
}

function ThankYouHeader() {
  return (
    <div className="text-center px-4 pt-20 pb-12">
      {/* Animated checkmark */}
      <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8 text-4xl">
        ✅
      </div>

      <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
        Platba proběhla úspěšně!
      </h1>
      <p className="text-xl text-gray-400 max-w-lg mx-auto mb-8">
        Tvůj web bude hotový{' '}
        <span className="text-white font-bold">do 24 hodin</span>.
        Sleduj e-mail — pošleme ti odkaz hned jak bude hotovo.
      </p>

      {/* Next steps */}
      <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
        {[
          { emoji: '📬', step: '1.', text: 'Dostaneš potvrzovací e-mail do 5 minut.' },
          { emoji: '🛠️', step: '2.', text: 'Začínáme pracovat na tvém webu okamžitě.' },
          { emoji: '🎉', step: '3.', text: 'Web ti pošleme do 24 hodin od platby.' },
        ].map((item) => (
          <div
            key={item.step}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
          >
            <div className="text-3xl mb-2">{item.emoji}</div>
            <div className="text-orange-400 font-bold text-sm mb-1">{item.step}</div>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      <ThankYouHeader />

      <Suspense fallback={null}>
        <FunnelUpsell />
      </Suspense>

      <footer className="py-12 text-center px-4 border-t border-white/[0.04]">
        <p className="text-gray-600 text-sm">
          Máš otázku? Napiš na{' '}
          <span className="text-orange-400">info@webdozitra.cz</span>
        </p>
      </footer>
    </div>
  )
}
