'use client'

import { useState } from 'react'
import KHero from '@/components/konverzky/KHero'
import KHowItWorks from '@/components/konverzky/KHowItWorks'
import KBenefits from '@/components/konverzky/KBenefits'
import KServices from '@/components/konverzky/KServices'
import KConfigurator from '@/components/konverzky/KConfigurator'
import KStickyPrice from '@/components/konverzky/KStickyPrice'
import { type KConfig } from '@/lib/konverzky-pricing'

export default function KonverzkyPlusPage() {
  const [config, setConfig] = useState<KConfig>({
    webType: null,
    delivery: null,
    rozsah: null,
    design: null,
    addons: [],
  })

  return (
    <>
      <KHero />
      <KHowItWorks />
      <KBenefits />
      <KServices />

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      <KConfigurator config={config} setConfig={setConfig} />

      <footer className="py-10 text-center px-4 border-t border-white/[0.04]">
        <p className="text-gray-700 text-sm mb-1">
          © {new Date().getFullYear()} Webdozítra.cz
        </p>
        <p className="text-gray-800 text-xs">
          Bezpečná platba zajištěna Stripe
        </p>
      </footer>

      <KStickyPrice config={config} />
    </>
  )
}
