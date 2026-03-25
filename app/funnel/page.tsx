'use client'

import { useState } from 'react'
import FunnelHero from '@/components/funnel/FunnelHero'
import FunnelHowItWorks from '@/components/funnel/FunnelHowItWorks'
import FunnelBenefits from '@/components/funnel/FunnelBenefits'
import FunnelServices from '@/components/funnel/FunnelServices'
import FunnelConfigurator from '@/components/funnel/FunnelConfigurator'
import FunnelStickyPrice from '@/components/funnel/FunnelStickyPrice'
import { calculatePrice, type FunnelConfig } from '@/lib/funnel-pricing'

export default function FunnelPage() {
  // Lifted state so StickyPrice can react to configurator changes
  const [config, setConfig] = useState<FunnelConfig>({
    webType: null,
    design: null,
    addons: [],
  })
  const price = calculatePrice(config)

  return (
    <>
      <FunnelHero />
      <FunnelHowItWorks />
      <FunnelBenefits />
      <FunnelServices />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <FunnelConfigurator config={config} setConfig={setConfig} />

      {/* Footer — minimal */}
      <footer className="py-12 text-center px-4 border-t border-white/[0.04]">
        <p className="text-gray-600 text-sm mb-2">
          © {new Date().getFullYear()} Webdozítra.cz — Web do 24 hodin
        </p>
        <p className="text-gray-700 text-xs">
          Bezpečná platba zajištěna Stripe • Vaše data jsou v bezpečí
        </p>
      </footer>

      <FunnelStickyPrice config={config} price={price} />
    </>
  )
}
