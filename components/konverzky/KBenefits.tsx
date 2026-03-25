const items = [
  { emoji: '⚡', title: '24 hodin', body: 'Zítra máš web online. Ne za měsíc.' },
  { emoji: '💰', title: 'Jasná cena', body: 'Žádné skryté poplatky. Platíš jednou, předem.' },
  { emoji: '🚫', title: 'Bez schůzek', body: 'Vše online. Neřeš to. My to uděláme.' },
  { emoji: '✅', title: 'Zaplatíš → začínáme', body: 'Okamžitý start po platbě. Žádné čekání.' },
]

export default function KBenefits() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Proč my</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Neřeš to. My to uděláme.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-orange-500/20 transition-colors group">
              <div className="text-3xl mb-3">{i.emoji}</div>
              <h3 className="font-bold text-white mb-1.5 group-hover:text-orange-400 transition-colors">{i.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
