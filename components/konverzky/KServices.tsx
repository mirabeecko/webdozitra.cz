'use client'

const services = [
  { emoji: '⚡', title: 'Landing page', price: 'od 4 990 Kč', body: 'Jedna stránka. Jeden cíl. Maximální konverze.', hot: false },
  { emoji: '🏢', title: 'Firemní web', price: 'od 9 990 Kč', body: '3–5 stránek. Profesionální prezentace.', hot: true },
  { emoji: '🛒', title: 'E-shop', price: 'od 14 990 Kč', body: 'Základní e-shop s platební bránou.', hot: false },
  { emoji: '📞', title: 'Konzultace', price: '490 Kč / 30 min', body: 'Poradíme co přesně potřebuješ. Bez závazku.', hot: false, isConsult: true },
]

export default function KServices() {
  const scroll = () =>
    document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Služby</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Vyber. Zaplať. Hotovo.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative flex flex-col p-6 rounded-2xl border ${s.hot
                ? 'bg-orange-500/10 border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.12)]'
                : 'bg-white/[0.03] border-white/[0.05]'
              }`}
            >
              {s.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[10px] font-black px-3 py-1 rounded-full tracking-wide uppercase">
                  Nejoblíbenější
                </div>
              )}
              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className={`font-bold text-lg mb-1 ${s.hot ? 'text-orange-400' : 'text-white'}`}>{s.title}</h3>
              <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">{s.body}</p>
              <div className="font-black text-white text-lg mb-4">{s.price}</div>
              <button
                onClick={scroll}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${s.hot
                  ? 'bg-orange-500 hover:bg-orange-400 text-black'
                  : 'bg-white/[0.06] hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {s.isConsult ? 'Rezervovat' : 'Začít →'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
