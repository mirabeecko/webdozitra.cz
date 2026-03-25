'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Check, ChevronLeft, Loader2 } from 'lucide-react'
import {
  K_PRICING,
  calcKPrice,
  calcKMarketPrice,
  formatKPrice,
  getKSummary,
  type KConfig,
  type KContact,
  type KWebType,
  type KDelivery,
  type KRozsah,
  type KDesign,
  type KAddon,
} from '@/lib/konverzky-pricing'

const TOTAL_STEPS = 7

// ─── Progress bar ─────────────────────────────────────────────────────────────
function KProgressBar({ step }: { step: number }) {
  const pct = Math.round(((step + 1) / TOTAL_STEPS) * 100)
  return (
    <div className="mb-9">
      <div className="flex justify-between text-xs text-gray-600 mb-2">
        <span>Krok {step + 1} z {TOTAL_STEPS}</span>
        <span className="text-orange-500 font-semibold">{pct} %</span>
      </div>
      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

// ─── Step 0: Web type ─────────────────────────────────────────────────────────
function StepWebType({ value, onChange, onNext }: {
  value: KWebType | null
  onChange: (v: KWebType) => void
  onNext: () => void
}) {
  return (
    <div>
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">Krok 1</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Co chceš vytvořit?</h2>
      <p className="text-gray-500 mb-8 text-sm">Vyber jeden typ. Cena se ihned ukáže.</p>
      <div className="grid gap-3">
        {(Object.keys(K_PRICING.webType) as KWebType[]).map((key) => {
          const o = K_PRICING.webType[key]
          const sel = value === key
          return (
            <button key={key} onClick={() => { onChange(key); setTimeout(onNext, 250) }}
              className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all active:scale-[0.99] ${sel
                ? 'bg-orange-500/12 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)]'
                : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
              }`}
            >
              <span className="text-4xl flex-shrink-0">{o.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-base">{o.label}</div>
                <div className="text-gray-500 text-sm truncate">{o.description}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-black text-white">{formatKPrice(o.price)}</div>
                <div className="text-gray-600 text-xs line-through">{formatKPrice(o.marketPrice)}</div>
              </div>
              {sel && <Check size={16} className="text-orange-400 flex-shrink-0" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 1: Delivery ─────────────────────────────────────────────────────────
function StepDelivery({ value, onChange, onNext }: {
  value: KDelivery | null
  onChange: (v: KDelivery) => void
  onNext: () => void
}) {
  return (
    <div>
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">Krok 2</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Jak rychle to potřebuješ?</h2>
      <p className="text-gray-500 mb-8 text-sm">Zvol termín dodání.</p>
      <div className="grid gap-3">
        {(Object.keys(K_PRICING.delivery) as KDelivery[]).map((key) => {
          const o = K_PRICING.delivery[key]
          const sel = value === key
          return (
            <button key={key} onClick={() => { onChange(key); setTimeout(onNext, 250) }}
              className={`relative flex items-center gap-4 p-5 rounded-2xl border text-left transition-all active:scale-[0.99] ${sel
                ? 'bg-orange-500/12 border-orange-500'
                : o.highlight
                  ? 'bg-orange-500/[0.06] border-orange-500/30 hover:border-orange-500/50'
                  : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
              }`}
            >
              {o.highlight && (
                <div className="absolute -top-2.5 left-4 bg-orange-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  Doporučujeme
                </div>
              )}
              <span className="text-3xl flex-shrink-0">{o.emoji}</span>
              <div className="flex-1">
                <div className={`font-bold text-base ${o.highlight ? 'text-orange-300' : 'text-white'}`}>{o.label}</div>
                <div className="text-gray-500 text-sm">{o.description}</div>
              </div>
              {sel && <Check size={16} className="text-orange-400" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 2: Rozsah ───────────────────────────────────────────────────────────
function StepRozsah({ value, onChange, onNext }: {
  value: KRozsah | null
  onChange: (v: KRozsah) => void
  onNext: () => void
}) {
  return (
    <div>
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">Krok 3</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Kolik stránek?</h2>
      <p className="text-gray-500 mb-8 text-sm">Vyber rozsah webu.</p>
      <div className="grid gap-3">
        {(Object.keys(K_PRICING.rozsah) as KRozsah[]).map((key) => {
          const o = K_PRICING.rozsah[key]
          const sel = value === key
          return (
            <button key={key} onClick={() => { onChange(key); setTimeout(onNext, 250) }}
              className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all active:scale-[0.99] ${sel
                ? 'bg-orange-500/12 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.12)]'
                : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
              }`}
            >
              <span className="text-3xl flex-shrink-0">{o.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-white">{o.label}</div>
                <div className="text-gray-500 text-sm">{o.description}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-black text-white">
                  {o.price === 0 ? 'V ceně' : `+${formatKPrice(o.price)}`}
                </div>
                {o.marketPrice > 0 && (
                  <div className="text-gray-600 text-xs line-through">+{formatKPrice(o.marketPrice)}</div>
                )}
              </div>
              {sel && <Check size={16} className="text-orange-400 flex-shrink-0" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 3: Design ───────────────────────────────────────────────────────────
function StepDesign({ value, onChange, onNext }: {
  value: KDesign | null
  onChange: (v: KDesign) => void
  onNext: () => void
}) {
  return (
    <div>
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">Krok 4</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Jaký design?</h2>
      <p className="text-gray-500 mb-8 text-sm">Vyber úroveň zpracování.</p>
      <div className="grid gap-3">
        {(Object.keys(K_PRICING.design) as KDesign[]).map((key) => {
          const o = K_PRICING.design[key]
          const sel = value === key
          return (
            <button key={key} onClick={() => { onChange(key); setTimeout(onNext, 250) }}
              className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all active:scale-[0.99] ${sel
                ? 'bg-orange-500/12 border-orange-500'
                : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
              }`}
            >
              <span className="text-3xl flex-shrink-0">{o.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-white">{o.label}</div>
                <div className="text-gray-500 text-sm">{o.description}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-black text-white">
                  {o.price === 0 ? 'Zdarma' : `+${formatKPrice(o.price)}`}
                </div>
                {o.marketPrice > 0 && (
                  <div className="text-gray-600 text-xs line-through">+{formatKPrice(o.marketPrice)}</div>
                )}
              </div>
              {sel && <Check size={16} className="text-orange-400 flex-shrink-0" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 4: Addons ───────────────────────────────────────────────────────────
function StepAddons({ value, onChange, onNext }: {
  value: KAddon[]
  onChange: (v: KAddon[]) => void
  onNext: () => void
}) {
  const toggle = (k: KAddon) =>
    onChange(value.includes(k) ? value.filter((x) => x !== k) : [...value, k])

  return (
    <div>
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">Krok 5</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Chceš něco navíc?</h2>
      <p className="text-gray-500 mb-8 text-sm">Multivýběr — nebo přeskoč.</p>
      <div className="grid gap-3 mb-7">
        {(Object.keys(K_PRICING.addons) as KAddon[]).map((key) => {
          const o = K_PRICING.addons[key]
          const sel = value.includes(key)
          return (
            <button key={key} onClick={() => toggle(key)}
              className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all active:scale-[0.99] ${sel
                ? 'bg-orange-500/12 border-orange-500'
                : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
              }`}
            >
              <span className="text-3xl flex-shrink-0">{o.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-white">{o.label}</div>
                <div className="text-gray-500 text-sm">{o.description}</div>
              </div>
              <div className="text-right flex-shrink-0 mr-2">
                <div className="font-black text-white">+{formatKPrice(o.price)}</div>
                <div className="text-gray-600 text-xs line-through">+{formatKPrice(o.marketPrice)}</div>
              </div>
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${sel ? 'bg-orange-500 border-orange-500' : 'border-white/20'}`}>
                {sel && <Check size={11} className="text-black" strokeWidth={3} />}
              </div>
            </button>
          )
        })}
      </div>
      <button onClick={onNext}
        className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 text-black font-black text-lg transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
      >
        {value.length === 0 ? 'Přeskočit →' : `Pokračovat (${value.length} vybráno) →`}
      </button>
    </div>
  )
}

// ─── Step 5: Summary ──────────────────────────────────────────────────────────
function StepSummary({ config, price, marketPrice, onNext }: {
  config: KConfig
  price: number
  marketPrice: number
  onNext: () => void
}) {
  const items = getKSummary(config)
  const savings = marketPrice - price

  return (
    <div>
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">Krok 6</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Tvůj výběr</h2>
      <p className="text-gray-500 mb-8 text-sm">Zkontroluj a pokračuj k objednávce.</p>

      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 mb-6 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between items-center text-sm">
            <span className="text-gray-300">{item.label}</span>
            <span className="font-bold text-white">{item.price === 0 ? 'Zdarma' : formatKPrice(item.price)}</span>
          </div>
        ))}
        <div className="pt-3 border-t border-white/[0.07]">
          {marketPrice > price && (
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-gray-500">Běžná cena</span>
              <span className="text-gray-500 line-through">{formatKPrice(marketPrice)}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="font-black text-white text-lg">Dnešní cena</span>
            <span className="font-black text-orange-400 text-2xl">{formatKPrice(price)}</span>
          </div>
          {savings > 0 && (
            <div className="text-right text-xs text-green-400 mt-1">Ušetříš {formatKPrice(savings)}</div>
          )}
        </div>
      </div>

      <button onClick={onNext}
        className="w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-400 text-black font-black text-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]"
      >
        Pokračovat k objednávce →
      </button>
    </div>
  )
}

// ─── Step 6: Contact ──────────────────────────────────────────────────────────
function StepContact({ value, onChange, onSubmit, loading, price }: {
  value: KContact
  onChange: (v: KContact) => void
  onSubmit: () => void
  loading: boolean
  price: number
}) {
  const set = (f: keyof KContact) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...value, [f]: e.target.value })
  const valid = value.name.trim() && value.email.includes('@') && value.phone.trim()

  return (
    <div>
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">Krok 7</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Kdo jsi?</h2>
      <p className="text-gray-500 mb-8 text-sm">Pak jdeš rovnou na platbu.</p>

      <div className="space-y-4 mb-8">
        {[
          { label: 'Jméno a příjmení', field: 'name' as const, type: 'text', placeholder: 'Jan Novák' },
          { label: 'E-mail', field: 'email' as const, type: 'email', placeholder: 'jan@firma.cz' },
          { label: 'Telefon', field: 'phone' as const, type: 'tel', placeholder: '+420 777 000 000' },
        ].map(({ label, field, type, placeholder }) => (
          <div key={field}>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{label}</label>
            <input
              type={type}
              value={value[field]}
              onChange={set(field)}
              placeholder={placeholder}
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-orange-500/60 focus:bg-white/[0.07] transition-all text-base"
            />
          </div>
        ))}
      </div>

      <button
        onClick={onSubmit}
        disabled={!valid || loading}
        className="w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-black text-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] flex items-center justify-center gap-3"
      >
        {loading
          ? <Loader2 size={22} className="animate-spin" />
          : <><span>Spustit můj web 🚀</span><span className="opacity-70 text-lg">{formatKPrice(price)}</span></>
        }
      </button>
      <p className="text-center text-gray-700 text-xs mt-4">
        Bezpečná platba přes Stripe · Vaše data jsou v bezpečí
      </p>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function KConfigurator({
  config,
  setConfig,
}: {
  config: KConfig
  setConfig: React.Dispatch<React.SetStateAction<KConfig>>
}) {
  const [step, setStep] = useState(0)
  const [contact, setContact] = useState<KContact>({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const price = calcKPrice(config)
  const marketPrice = calcKMarketPrice(config)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step])

  const goBack = () => setStep((s) => Math.max(0, s - 1))

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)
    try {
      const leadRes = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: config, price, ...contact }),
      })
      const leadData = await leadRes.json()
      if (!leadRes.ok) throw new Error(leadData.error)

      const checkoutRes = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId: leadData.leadId,
          price,
          configSummary: config.webType
            ? K_PRICING.webType[config.webType].label
            : 'Web',
          name: contact.name,
          email: contact.email,
        }),
      })
      const checkoutData = await checkoutRes.json()
      if (!checkoutRes.ok) throw new Error(checkoutData.error)

      window.location.href = checkoutData.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Chyba. Zkus to znovu.')
      setLoading(false)
    }
  }

  const steps = [
    <StepWebType key="wt" value={config.webType}
      onChange={(v) => setConfig((c) => ({ ...c, webType: v }))}
      onNext={() => setStep(1)} />,
    <StepDelivery key="dl" value={config.delivery}
      onChange={(v) => setConfig((c) => ({ ...c, delivery: v }))}
      onNext={() => setStep(2)} />,
    <StepRozsah key="rz" value={config.rozsah}
      onChange={(v) => setConfig((c) => ({ ...c, rozsah: v }))}
      onNext={() => setStep(3)} />,
    <StepDesign key="ds" value={config.design}
      onChange={(v) => setConfig((c) => ({ ...c, design: v }))}
      onNext={() => setStep(4)} />,
    <StepAddons key="ad" value={config.addons}
      onChange={(v) => setConfig((c) => ({ ...c, addons: v }))}
      onNext={() => setStep(5)} />,
    <StepSummary key="sm" config={config} price={price} marketPrice={marketPrice}
      onNext={() => setStep(6)} />,
    <StepContact key="ct" value={contact} onChange={setContact}
      onSubmit={handleSubmit} loading={loading} price={price} />,
  ]

  return (
    <section id="konfigurator" className="py-24 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Konfigurátor</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Nastav si web.</h2>
          <p className="text-gray-500 mt-3 text-sm">Cena se počítá realtime. Žádné překvapení.</p>
        </div>

        <div ref={topRef} className="bg-white/[0.025] border border-white/[0.06] rounded-3xl p-6 sm:p-9 scroll-mt-6">
          <KProgressBar step={step} />
          <div key={step} className="animate-in">{steps[step]}</div>

          {step > 0 && (
            <button onClick={goBack}
              className="mt-6 flex items-center gap-1.5 text-gray-600 hover:text-gray-300 transition-colors text-sm"
            >
              <ChevronLeft size={14} />Zpět
            </button>
          )}
          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
