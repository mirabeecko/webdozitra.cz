'use client'

import { formatPrice, getConfigSummary, type FunnelConfig } from '@/lib/funnel-pricing'

interface Props {
  config: FunnelConfig
  price: number
}

export default function FunnelStickyPrice({ config, price }: Props) {
  const summary = getConfigSummary(config)
  const hasSelection = config.webType !== null

  const scrollToConfigurator = () => {
    document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!hasSelection) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0 md:bottom-6 md:right-6 md:left-auto">
      <div className="bg-[#0F0F12] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl max-w-sm mx-auto md:mx-0 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-500 mb-1">Aktuální cena</div>
          <div className="text-2xl font-black text-white">{formatPrice(price)}</div>
          {summary.length > 0 && (
            <div className="text-xs text-gray-500 truncate mt-0.5">{summary.join(' + ')}</div>
          )}
        </div>
        <button
          onClick={scrollToConfigurator}
          className="flex-shrink-0 bg-orange-500 hover:bg-orange-400 text-black font-bold px-4 py-3 rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] whitespace-nowrap"
        >
          Chci web 🚀
        </button>
      </div>
    </div>
  )
}
