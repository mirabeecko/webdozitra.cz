'use client'

import { formatKPrice, calcKPrice, calcKMarketPrice, type KConfig } from '@/lib/konverzky-pricing'

export default function KStickyPrice({ config }: { config: KConfig }) {
  if (!config.webType) return null

  const price = calcKPrice(config)
  const marketPrice = calcKMarketPrice(config)
  const savings = marketPrice - price

  const scroll = () =>
    document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-0 sm:bottom-5 sm:right-5 sm:left-auto">
      <div className="bg-[#0C0C0F]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 sm:p-5 shadow-2xl max-w-xs mx-auto sm:mx-0 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-2xl font-black text-white">{formatKPrice(price)}</span>
            {marketPrice > price && (
              <span className="text-gray-600 line-through text-sm">{formatKPrice(marketPrice)}</span>
            )}
          </div>
          {savings > 0 && (
            <div className="text-green-400 text-xs font-semibold mt-0.5">
              Ušetříš {formatKPrice(savings)}
            </div>
          )}
          <div className="text-gray-600 text-xs mt-0.5">Dnešní cena</div>
        </div>
        <button
          onClick={scroll}
          className="flex-shrink-0 bg-orange-500 hover:bg-orange-400 active:scale-[0.97] text-black font-black px-4 py-3 rounded-xl text-sm transition-all whitespace-nowrap hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        >
          Chci web 🚀
        </button>
      </div>
    </div>
  )
}
