const steps = [
  { n: '01', emoji: '🎯', title: 'Vybereš typ webu', body: 'Landing page, firemní web nebo e-shop. Pár kliknutí.' },
  { n: '02', emoji: '⚙️', title: 'Upřesníš pár detailů', body: 'Design, rozsah, doplňky. Cenu vidíš rovnou.' },
  { n: '03', emoji: '🚀', title: 'Do 24 hodin máš hotovo', body: 'Zaplatíš → začínáme. Zítra máš web online.' },
]

export default function KHowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Jak to funguje</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Tři kroky. Hotovo.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="p-7 rounded-3xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-3xl mb-4">{s.emoji}</div>
              <div className="text-orange-500 text-xs font-bold tracking-[0.15em] uppercase mb-2">{s.n}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
