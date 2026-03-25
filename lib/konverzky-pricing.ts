export type KWebType = 'landing' | 'web' | 'eshop'
export type KDelivery = '24h' | '3days' | 'flexible'
export type KRozsah = '1' | '3to5' | '6plus'
export type KDesign = 'basic' | 'premium'
export type KAddon = 'seo' | 'texty' | 'logo'

export interface KConfig {
  webType: KWebType | null
  delivery: KDelivery | null
  rozsah: KRozsah | null
  design: KDesign | null
  addons: KAddon[]
}

export interface KContact {
  name: string
  email: string
  phone: string
}

export const K_PRICING = {
  webType: {
    landing: {
      label: 'Landing page',
      emoji: '⚡',
      description: 'Jedna stránka. Jeden cíl. Okamžitý výsledek.',
      price: 4990,
      marketPrice: 7990,
    },
    web: {
      label: 'Firemní web',
      emoji: '🏢',
      description: '3–5 stránek. Kompletní online prezentace.',
      price: 9990,
      marketPrice: 14990,
    },
    eshop: {
      label: 'E-shop',
      emoji: '🛒',
      description: 'Prodávej online. Platební brána v ceně.',
      price: 14990,
      marketPrice: 22990,
    },
  },
  delivery: {
    '24h': { label: 'Do 24 hodin', emoji: '⚡', description: 'Zítra máš web online.', highlight: true },
    '3days': { label: 'Do 3 dnů', emoji: '📅', description: 'Standardní dodání.', highlight: false },
    flexible: { label: 'Neřeším', emoji: '🙂', description: 'Domluvíme se.', highlight: false },
  },
  rozsah: {
    '1': {
      label: '1 stránka',
      emoji: '📄',
      description: 'Vše na jednom místě.',
      price: 0,
      marketPrice: 0,
    },
    '3to5': {
      label: '3–5 stránek',
      emoji: '📋',
      description: 'Úvod, O nás, Služby, Kontakt...',
      price: 3000,
      marketPrice: 4500,
    },
    '6plus': {
      label: '6+ stránek',
      emoji: '📚',
      description: 'Kompletní web s podstránkami.',
      price: 6000,
      marketPrice: 9000,
    },
  },
  design: {
    basic: {
      label: 'Basic',
      emoji: '✨',
      description: 'Čistý, moderní design. Funguje skvěle.',
      price: 0,
      marketPrice: 0,
    },
    premium: {
      label: 'Premium',
      emoji: '💎',
      description: 'Unikátní design. Vynikneš.',
      price: 4000,
      marketPrice: 6000,
    },
  },
  addons: {
    seo: {
      label: 'SEO optimalizace',
      emoji: '🔍',
      description: 'Google tě najde.',
      price: 2000,
      marketPrice: 3500,
    },
    texty: {
      label: 'Prodejní texty',
      emoji: '✍️',
      description: 'Texty, které konvertují.',
      price: 3000,
      marketPrice: 5000,
    },
    logo: {
      label: 'Logo & branding',
      emoji: '🎨',
      description: 'Vizuální identita na míru.',
      price: 2500,
      marketPrice: 4000,
    },
  },
} as const

export function calcKMarketPrice(config: KConfig): number {
  let total = 0
  if (config.webType) total += K_PRICING.webType[config.webType].marketPrice
  if (config.rozsah) total += K_PRICING.rozsah[config.rozsah].marketPrice
  if (config.design) total += K_PRICING.design[config.design].marketPrice
  config.addons.forEach((a) => { total += K_PRICING.addons[a].marketPrice })
  return total
}

export function calcKPrice(config: KConfig): number {
  let total = 0
  if (config.webType) total += K_PRICING.webType[config.webType].price
  if (config.rozsah) total += K_PRICING.rozsah[config.rozsah].price
  if (config.design) total += K_PRICING.design[config.design].price
  config.addons.forEach((a) => { total += K_PRICING.addons[a].price })
  return total
}

export function calcKMarketPrice(config: KConfig): number {
  let total = 0
  if (config.webType) total += K_PRICING.webType[config.webType].marketPrice
  if (config.rozsah) total += K_PRICING.rozsah[config.rozsah].marketPrice
  if (config.design) total += K_PRICING.design[config.design].marketPrice
  config.addons.forEach((a) => { total += K_PRICING.addons[a].marketPrice })
  return total
}

export function formatKPrice(price: number): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0,
  }).format(price)
}

export function getKSummary(config: KConfig): Array<{ label: string; price: number }> {
  const items: Array<{ label: string; price: number }> = []
  if (config.webType) {
    const t = K_PRICING.webType[config.webType]
    items.push({ label: t.label, price: t.price })
  }
  if (config.rozsah && config.rozsah !== '1') {
    const r = K_PRICING.rozsah[config.rozsah]
    items.push({ label: r.label, price: r.price })
  }
  if (config.design === 'premium') {
    items.push({ label: 'Premium design', price: K_PRICING.design.premium.price })
  }
  config.addons.forEach((a) => {
    items.push({ label: K_PRICING.addons[a].label, price: K_PRICING.addons[a].price })
  })
  return items
}
