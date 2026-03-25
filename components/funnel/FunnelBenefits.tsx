const benefits = [
  { emoji: '⚡', title: 'Do 24 hodin', description: 'Ne za 3 měsíce. Ne za 3 týdny. Do 24 hodin.' },
  { emoji: '💰', title: 'Fixní cena', description: 'Žádné skryté poplatky. Cenu vidíš předem. Platíš jednou.' },
  { emoji: '📱', title: 'Mobilní first', description: 'Funguje perfektně na každém zařízení. Testováno.' },
  { emoji: '🚫', title: 'Nula schůzek', description: 'Celý proces online. Bez zbytečných hovorů a emailů.' },
]

export default function FunnelBenefits() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-4">Proč my</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Bez omáčky. Jen výsledky.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-3xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-orange-500/20 transition-all group"
            >
              <div className="text-4xl mb-4">{b.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
