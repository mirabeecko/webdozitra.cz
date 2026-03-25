'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Check, ChevronLeft, Loader2 } from 'lucide-react'
import {
  PRICING,
  calculatePrice,
  formatPrice,
  getConfigSummary,
  type FunnelConfig,
  type FunnelContact,
  type WebType,
  type DesignType,
  type AddonType,
} from '@/lib/funnel-pricing'

const TOTAL_STEPS = 4

function ProgressBar({ step }: { step: number }) {
  const progress = Math.round(((step + 1) / TOTAL_STEPS) * 100)
  return (
    <div className="w-full mb-10">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">Krok {step + 1} z {TOTAL_STEPS}</span>
        <span className="text-sm font-semibold text-orange-400">{progress}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

function StepWebType({
  value,
  onChange,
  onNext,
}: {
  value: WebType | null
  onChange: (v: WebType) => void
  onNext: () => void
}) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Jaký web potřebuješ?</h2>
      <p className="text-gray-400 mb-10">Vyber jeden typ. Cena se ihned aktualizuje.</p>
      <div className="grid gap-4">
        {(Object.keys(PRICING.webType) as WebType[]).map((key) => {
          const opt = PRICING.webType[key]
          const selected = value === key
          return (
            <button
              key={key}
              onClick={() => { onChange(key); setTimeout(onNext, 300) }}
              className={`w-full flex items-center gap-5 p-5 rounded-2xl border text-left transition-all ${
                selected
                  ? 'bg-orange-500/15 border-orange-500 shadow-[0_0_24px_rgba(249,115,22,0.2)]'
                  : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <span className="text-4xl flex-shrink-0">{opt.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-lg text-white">{opt.label}</div>
                <div className="text-gray-400 text-sm">{opt.description}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-black text-white text-lg">{formatPrice(opt.price)}</div>
                {selected && <Check size={18} className="text-orange-400 ml-auto mt-1" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function StepDesign({
  value,
  onChange,
  onNext,
}: {
  value: DesignType | null
  onChange: (v: DesignType) => void
  onNext: () => void
}) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Jaký design?</h2>
      <p className="text-gray-400 mb-10">Vyber úroveň zpracování.</p>
      <div className="grid gap-4">
        {(Object.keys(PRICING.design) as DesignType[]).map((key) => {
          const opt = PRICING.design[key]
          const selected = value === key
          return (
            <button
              key={key}
              onClick={() => { onChange(key); setTimeout(onNext, 300) }}
              className={`w-full flex items-center gap-5 p-5 rounded-2xl border text-left transition-all ${
                selected
                  ? 'bg-orange-500/15 border-orange-500 shadow-[0_0_24px_rgba(249,115,22,0.2)]'
                  : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <span className="text-4xl flex-shrink-0">{opt.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-lg text-white">{opt.label}</div>
                <div className="text-gray-400 text-sm">{opt.description}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-black text-white text-lg">
                  {opt.price === 0 ? 'Zdarma' : `+${formatPrice(opt.price)}`}
                </div>
                {selected && <Check size={18} className="text-orange-400 ml-auto mt-1" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function StepAddons({
  value,
  onChange,
  onNext,
}: {
  value: AddonType[]
  onChange: (v: AddonType[]) => void
  onNext: () => void
}) {
  const toggle = (key: AddonType) => {
    onChange(value.includes(key) ? value.filter((k) => k !== key) : [...value, key])
  }

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Chceš něco navíc?</h2>
      <p className="text-gray-400 mb-10">Vyber libovolně. Nebo přeskoč — doplnit lze i później.</p>
      <div className="grid gap-4 mb-8">
        {(Object.keys(PRICING.addons) as AddonType[]).map((key) => {
          const opt = PRICING.addons[key]
          const selected = value.includes(key)
          return (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`w-full flex items-center gap-5 p-5 rounded-2xl border text-left transition-all ${
                selected
                  ? 'bg-orange-500/15 border-orange-500 shadow-[0_0_24px_rgba(249,115,22,0.2)]'
                  : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <span className="text-4xl flex-shrink-0">{opt.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-lg text-white">{opt.label}</div>
                <div className="text-gray-400 text-sm">{opt.description}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-black text-white text-lg">+{formatPrice(opt.price)}</div>
                <div className={`w-5 h-5 rounded-md border ml-auto mt-2 flex items-center justify-center transition-all ${
                  selected ? 'bg-orange-500 border-orange-500' : 'border-white/20'
                }`}>
                  {selected && <Check size={12} className="text-black" strokeWidth={3} />}
                </div>
              </div>
            </button>
          )
        })}
      </div>
      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 text-black font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
      >
        {value.length === 0 ? 'Přeskočit →' : 'Pokračovat →'}
      </button>
    </div>
  )
}

function StepContact({
  value,
  onChange,
  onSubmit,
  loading,
  price,
}: {
  value: FunnelContact
  onChange: (v: FunnelContact) => void
  onSubmit: () => void
  loading: boolean
  price: number
}) {
  const set = (field: keyof FunnelContact) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...value, [field]: e.target.value })

  const valid = value.name.trim() && value.email.includes('@') && value.phone.trim()

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Kdo jsi?</h2>
      <p className="text-gray-400 mb-10">Poslední krok. Pak jdeš rovnou na platbu.</p>

      <div className="space-y-4 mb-8">
        {[
          { label: 'Jméno a příjmení', field: 'name' as const, type: 'text', placeholder: 'Jan Novák' },
          { label: 'E-mail', field: 'email' as const, type: 'email', placeholder: 'jan@firma.cz' },
          { label: 'Telefon', field: 'phone' as const, type: 'tel', placeholder: '+420 777 000 000' },
        ].map(({ label, field, type, placeholder }) => (
          <div key={field}>
            <label className="block text-sm font-semibold text-gray-300 mb-2">{label}</label>
            <input
              type={type}
              value={value[field]}
              onChange={set(field)}
              placeholder={placeholder}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 focus:bg-white/[0.08] transition-all text-lg"
            />
          </div>
        ))}
      </div>

      <button
        onClick={onSubmit}
        disabled={!valid || loading}
        className="w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-black text-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] flex items-center justify-center gap-3"
      >
        {loading ? (
          <Loader2 size={24} className="animate-spin" />
        ) : (
          <>
            Chci web do 24h 🚀
            <span className="font-black">{formatPrice(price)}</span>
          </>
        )}
      </button>

      <p className="text-center text-gray-600 text-xs mt-4">
        Kliknutím přejdeš na bezpečnou platbu přes Stripe. Údaje nejsou nikam prodávány.
      </p>
    </div>
  )
}

export default function FunnelConfigurator({
  config,
  setConfig,
}: {
  config: FunnelConfig
  setConfig: React.Dispatch<React.SetStateAction<FunnelConfig>>
}) {
  const [step, setStep] = useState(0)
  const [contact, setContact] = useState<FunnelContact>({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const price = calculatePrice(config)

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
          configSummary: getConfigSummary(config).join(' + '),
          name: contact.name,
          email: contact.email,
        }),
      })
      const checkoutData = await checkoutRes.json()
      if (!checkoutRes.ok) throw new Error(checkoutData.error)

      window.location.href = checkoutData.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Něco se pokazilo. Zkus to znovu.')
      setLoading(false)
    }
  }

  const steps = [
    <StepWebType
      key="webtype"
      value={config.webType}
      onChange={(v) => setConfig((c) => ({ ...c, webType: v }))}
      onNext={() => setStep(1)}
    />,
    <StepDesign
      key="design"
      value={config.design}
      onChange={(v) => setConfig((c) => ({ ...c, design: v }))}
      onNext={() => setStep(2)}
    />,
    <StepAddons
      key="addons"
      value={config.addons}
      onChange={(v) => setConfig((c) => ({ ...c, addons: v }))}
      onNext={() => setStep(3)}
    />,
    <StepContact
      key="contact"
      value={contact}
      onChange={setContact}
      onSubmit={handleSubmit}
      loading={loading}
      price={price}
    />,
  ]

  return (
    <section id="konfigurator" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-4">Konfigurátor</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Nastav si web na míru.</h2>
        </div>

        <div
          ref={topRef}
          className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-6 sm:p-10 scroll-mt-8"
        >
          <ProgressBar step={step} />

          {/* Animated step content */}
          <div key={step} className="animate-in">
            {steps[step]}
          </div>

          {/* Back button */}
          {step > 0 && (
            <button
              onClick={goBack}
              className="mt-6 flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
            >
              <ChevronLeft size={16} />
              Zpět
            </button>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
