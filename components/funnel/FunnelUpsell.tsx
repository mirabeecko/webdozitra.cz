'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'

const upsells = [
  {
    id: 'seo-pro',
    emoji: '🔍',
    title: 'SEO Pro balíček',
    description: 'Kompletní SEO nastavení, Google Search Console, sitemap a strukturovaná data. Zákazníci tě najdou.',
    originalPrice: 3990,
    discountPrice: 1990,
    badge: '50% sleva',
  },
  {
    id: 'copywriting',
    emoji: '✍️',
    title: 'Profesionální texty',
    description: 'Prodejní texty psané copywriterem. Konvertují. Zákazníci čtou. Nakupují.',
    originalPrice: 4990,
    discountPrice: 2990,
    badge: '40% sleva',
  },
  {
    id: 'management',
    emoji: '🛡️',
    title: 'Správa webu na 3 měsíce',
    description: 'Technická správa, aktualizace, zálohování. Nic tě nepřekvapí. My hlídáme.',
    originalPrice: 5970,
    discountPrice: 2990,
    badge: '50% sleva',
  },
  {
    id: 'ads',
    emoji: '📣',
    title: 'Google Ads start',
    description: 'Nastavíme první kampaň na Google. Zákazníci přijdou okamžitě, ne za měsíce.',
    originalPrice: 5990,
    discountPrice: 2990,
    badge: 'Akce',
  },
]

export default function FunnelUpsell() {
  const [selected, setSelected] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const total = upsells
    .filter((u) => selected.includes(u.id))
    .reduce((sum, u) => sum + u.discountPrice, 0)

  const handleConfirm = async () => {
    if (selected.length === 0) { setDone(true); return }
    setLoading(true)
    // In a real implementation: call /api/create-checkout with upsell items
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="text-center py-16 px-4">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-black text-white mb-4">Vše je zajištěno!</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Tvůj web bude hotový do 24 hodin. Dostaneš e-mail s přístupovými údaji.
        </p>
      </div>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm font-medium mb-6">
            <Check size={14} />
            Platba proběhla úspěšně
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Jen pro tebe — speciální nabídka
          </h2>
          <p className="text-gray-400">
            Tyto doplňky jsou dostupné se slevou <strong className="text-white">pouze nyní</strong>. Po odchodu zmizí.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {upsells.map((u) => {
            const picked = selected.includes(u.id)
            return (
              <button
                key={u.id}
                onClick={() => toggle(u.id)}
                className={`w-full flex items-start gap-5 p-5 rounded-2xl border text-left transition-all ${
                  picked
                    ? 'bg-orange-500/10 border-orange-500/50'
                    : 'bg-white/[0.03] border-white/[0.07] hover:border-white/20'
                }`}
              >
                <span className="text-3xl flex-shrink-0 mt-0.5">{u.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white">{u.title}</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-semibold">
                      {u.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{u.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-black text-white text-lg">
                      {u.discountPrice.toLocaleString('cs-CZ')} Kč
                    </span>
                    <span className="text-gray-600 line-through text-sm">
                      {u.originalPrice.toLocaleString('cs-CZ')} Kč
                    </span>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-lg border flex-shrink-0 mt-1 flex items-center justify-center transition-all ${
                  picked ? 'bg-orange-500 border-orange-500' : 'border-white/20'
                }`}>
                  {picked && <Check size={14} className="text-black" strokeWidth={3} />}
                </div>
              </button>
            )
          })}
        </div>

        <div className="space-y-3">
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-400 disabled:opacity-50 text-black font-black text-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] flex items-center justify-center gap-3"
          >
            {loading ? (
              <Loader2 size={24} className="animate-spin" />
            ) : (
              <>
                {selected.length > 0
                  ? `Přidat za ${total.toLocaleString('cs-CZ')} Kč →`
                  : 'Pokračovat bez doplňků →'}
              </>
            )}
          </button>
          <button
            onClick={() => setDone(true)}
            className="w-full text-center text-gray-600 hover:text-gray-400 text-sm py-2 transition-colors"
          >
            Ne díky, nechci slevu
          </button>
        </div>
      </div>
    </section>
  )
}
