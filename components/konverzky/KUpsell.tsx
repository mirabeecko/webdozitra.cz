'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'

const UPSELLS = [
  {
    id: 'seo',
    emoji: '🔍',
    title: 'SEO boost',
    body: 'Kompletní SEO. Google Search Console. Zákazníci tě najdou.',
    was: 2000,
    now: 990,
  },
  {
    id: 'texty',
    emoji: '✍️',
    title: 'Prodejní texty',
    body: 'Copywriter napíše texty, které prodávají. Ne jen popisují.',
    was: 3000,
    now: 1990,
  },
  {
    id: 'sprava',
    emoji: '🛡️',
    title: 'Správa webu',
    body: 'Technická správa, aktualizace, zálohování. Měsíčně.',
    was: null,
    now: 990,
    unit: '/ měsíc',
  },
  {
    id: 'reklamy',
    emoji: '📣',
    title: 'Google Ads setup',
    body: 'Nastavíme první kampaň. Zákazníci přijdou hned.',
    was: null,
    now: 2500,
  },
]

export default function KUpsell() {
  const [selected, setSelected] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const total = UPSELLS.filter((u) => selected.includes(u.id) && !u.unit)
    .reduce((s, u) => s + u.now, 0)

  const handleConfirm = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="text-center py-20 px-4">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-black text-white mb-3">Perfektní!</h2>
        <p className="text-gray-500 max-w-sm mx-auto">Dostaneš e-mail s přístupovými údaji. Web bude hotový do 24 hodin.</p>
      </div>
    )
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-5">
            <Check size={13} />Platba proběhla úspěšně
          </div>
          <h2 className="text-3xl font-black text-white mb-2">Teď to máš levněji.</h2>
          <p className="text-gray-500 text-sm">Tato nabídka platí <strong className="text-white">pouze nyní</strong>. Pak zmizí.</p>
        </div>

        <div className="space-y-3 mb-7">
          {UPSELLS.map((u) => {
            const picked = selected.includes(u.id)
            return (
              <button key={u.id} onClick={() => toggle(u.id)}
                className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${picked
                  ? 'bg-orange-500/10 border-orange-500/40'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/15'
                }`}
              >
                <span className="text-3xl flex-shrink-0 mt-0.5">{u.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white mb-1">{u.title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{u.body}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-black text-white text-lg">
                      {u.now.toLocaleString('cs-CZ')} Kč{u.unit ? ` ${u.unit}` : ''}
                    </span>
                    {u.was && (
                      <span className="text-gray-600 line-through text-sm">
                        {u.was.toLocaleString('cs-CZ')} Kč
                      </span>
                    )}
                    {u.was && (
                      <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-bold">
                        -{Math.round((1 - u.now / u.was) * 100)}%
                      </span>
                    )}
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-md border flex-shrink-0 mt-1 flex items-center justify-center transition-all ${picked ? 'bg-orange-500 border-orange-500' : 'border-white/20'}`}>
                  {picked && <Check size={11} className="text-black" strokeWidth={3} />}
                </div>
              </button>
            )
          })}
        </div>

        <button onClick={handleConfirm} disabled={loading}
          className="w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-400 disabled:opacity-50 text-black font-black text-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] flex items-center justify-center gap-3"
        >
          {loading ? <Loader2 size={22} className="animate-spin" /> : (
            selected.length > 0
              ? `Přidat za ${total.toLocaleString('cs-CZ')} Kč →`
              : 'Pokračovat bez doplňků →'
          )}
        </button>
        <button onClick={() => setDone(true)}
          className="w-full text-center text-gray-700 hover:text-gray-500 text-xs py-3 transition-colors"
        >
          Ne, nechci slevu
        </button>
      </div>
    </section>
  )
}
