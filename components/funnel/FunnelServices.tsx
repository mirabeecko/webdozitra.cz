'use client'

const services = [
  {
    emoji: '⚡',
    title: 'Landing page',
    price: 'od 4 990 Kč',
    description: 'Jedna stránka. Jeden cíl. Maximální konverze.',
    best: false,
  },
  {
    emoji: '🏢',
    title: 'Firemní web',
    price: 'od 9 990 Kč',
    description: '3–5 stránek. Profesionální prezentace tvé firmy.',
    best: true,
  },
  {
    emoji: '🛒',
    title: 'E-shop',
    price: 'od 19 990 Kč',
    description: 'Základní e-shop s platební bránou. Prodávej online.',
    best: false,
  },
  {
    emoji: '📞',
    title: 'Konzultace po telefonu',
    price: '490 Kč / 30 min',
    description: 'Poradíme, co přesně potřebuješ. Bez závazku.',
    best: false,
    isConsultation: true,
  },
]

export default function FunnelServices() {
  const scrollToConfigurator = () => {
    document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-4">Co nabízíme</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Vyber si. Zaplať. Hotovo.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative p-6 rounded-3xl border flex flex-col ${
                s.best
                  ? 'bg-orange-500/10 border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.15)]'
                  : 'bg-white/[0.03] border-white/[0.06]'
              }`}
            >
              {s.best && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  NEJOBLÍBENĚJŠÍ
                </div>
              )}
              <div className="text-3xl mb-4">{s.emoji}</div>
              <h3 className={`text-lg font-bold mb-1 ${s.best ? 'text-orange-400' : 'text-white'}`}>{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{s.description}</p>
              <div className="text-xl font-black text-white mb-4">{s.price}</div>
              <button
                onClick={scrollToConfigurator}
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                  s.best
                    ? 'bg-orange-500 hover:bg-orange-400 text-black'
                    : 'bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/10'
                }`}
              >
                {s.isConsultation ? 'Rezervovat' : 'Začít'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
