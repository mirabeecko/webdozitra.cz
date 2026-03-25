'use client'

export default function KHero() {
  const scroll = () =>
    document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/[0.07] rounded-full blur-3xl" />
      </div>

      {/* Live badge */}
      <div className="relative mb-10 inline-flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/25 rounded-full px-5 py-2 text-orange-400 text-sm font-semibold tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        Dostupné dnes · Dodání do 24 hodin
      </div>

      {/* Headline */}
      <h1 className="relative text-[clamp(2.8rem,8vw,6rem)] font-black text-white leading-[1.02] tracking-[-0.03em] max-w-4xl">
        Chceš mít svůj web{' '}
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500">
            za 24 hodin?
          </span>
        </span>
      </h1>

      {/* Sub */}
      <p className="relative mt-5 text-xl sm:text-2xl text-gray-400 font-medium">
        Hotovo. Bez schůzek. Bez zdržování.
      </p>

      {/* CTA */}
      <button
        onClick={scroll}
        className="relative mt-10 group flex flex-col items-center gap-2"
      >
        <span className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 active:scale-[0.98] text-black font-black text-xl px-10 py-5 rounded-2xl transition-all duration-150 shadow-[0_0_50px_rgba(249,115,22,0.35)] hover:shadow-[0_0_70px_rgba(249,115,22,0.5)]">
          Začít hned
          <span className="text-2xl">→</span>
        </span>
        <span className="text-gray-600 text-sm">Klikni a za pár minut to máš vyřešené.</span>
      </button>

      {/* Numbers */}
      <div className="relative mt-20 flex items-center gap-12 sm:gap-16">
        {[
          { n: '24h', l: 'Dodání' },
          { n: '0', l: 'Schůzek' },
          { n: '100%', l: 'Online' },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl sm:text-5xl font-black text-white tabular-nums">{s.n}</div>
            <div className="text-xs text-gray-600 uppercase tracking-widest mt-1.5">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
