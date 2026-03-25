const steps = [
  {
    number: '01',
    emoji: '🎯',
    title: 'Vyber si web',
    description: 'Landing, firemní web nebo e-shop. Nakonfiguruj si přesně to, co potřebuješ.',
  },
  {
    number: '02',
    emoji: '💳',
    title: 'Zaplať online',
    description: 'Bezpečná platba přes Stripe. Kartou nebo Apple Pay. Do minuty.',
  },
  {
    number: '03',
    emoji: '✅',
    title: 'Web za 24h',
    description: 'Hotový web doručíme do 24 hodin. Žádné překvapení. Garantujeme to.',
  },
]

export default function FunnelHowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-4">Jak to funguje</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Tři kroky. To je vše.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/30 transition-colors"
            >
              <div className="text-4xl mb-4">{step.emoji}</div>
              <div className="text-orange-500 font-mono text-sm font-bold mb-3 tracking-widest">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
