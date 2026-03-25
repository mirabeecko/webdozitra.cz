'use client'

import { ArrowDown } from 'lucide-react'

export default function FunnelHero() {
  const scrollToConfigurator = () => {
    document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Badge */}
      <div className="relative mb-8 inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
        Dodání do 24 hodin garantováno
      </div>

      {/* Headline */}
      <h1 className="relative text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight max-w-4xl">
        Chceš mít svůj web{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          za 24 hodin?
        </span>
      </h1>

      {/* Subheadline */}
      <p className="relative mt-6 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed">
        Žádné schůzky. Žádné čekání týdny. Vyplníš formulář,{' '}
        <span className="text-white font-semibold">zaplatíš online</span>, web máš druhý den.
      </p>

      {/* CTA */}
      <div className="relative mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={scrollToConfigurator}
          className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
        >
          Začít hned
          <span className="text-xl">🚀</span>
        </button>
        <span className="text-gray-600 text-sm">Bez závazku • Cena hned vidíš</span>
      </div>

      {/* Stats */}
      <div className="relative mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
        {[
          { value: '24h', label: 'Dodání' },
          { value: '100%', label: 'Online' },
          { value: '0', label: 'Schůzek' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
        <ArrowDown size={24} />
      </div>
    </section>
  )
}
