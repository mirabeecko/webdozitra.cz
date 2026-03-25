export type WebType = 'landing' | 'web' | 'eshop'
export type DesignType = 'basic' | 'premium'
export type AddonType = 'seo' | 'copywriting' | 'logo'

export interface FunnelConfig {
  webType: WebType | null
  design: DesignType | null
  addons: AddonType[]
}

export interface FunnelContact {
  name: string
  email: string
  phone: string
}

export const PRICING = {
  webType: {
    landing: { label: 'Landing page', emoji: '⚡', description: 'Jedna stránka. Jeden cíl. Maximální výsledek.', price: 4990 },
    web: { label: 'Firemní web', emoji: '🏢', description: '3–5 stránek. Kompletní prezentace firmy.', price: 9990 },
    eshop: { label: 'E-shop', emoji: '🛒', description: 'Základní e-shop s platební bránou.', price: 19990 },
  },
  design: {
    basic: { label: 'Basic', emoji: '✨', description: 'Moderní, čistý design. Funguje skvěle.', price: 0 },
    premium: { label: 'Premium', emoji: '💎', description: 'Unikátní design na míru. Vypadáš jinak než konkurence.', price: 4990 },
  },
  addons: {
    seo: { label: 'SEO optimalizace', emoji: '🔍', description: 'Zákazníci tě najdou na Googlu.', price: 1990 },
    copywriting: { label: 'Texty na web', emoji: '✍️', description: 'Prodejní texty, které konvertují.', price: 2990 },
    logo: { label: 'Logo & branding', emoji: '🎨', description: 'Vizuální identita, na kterou se nezapomíná.', price: 3990 },
  },
} as const

export function calculatePrice(config: FunnelConfig): number {
  let total = 0
  if (config.webType) total += PRICING.webType[config.webType].price
  if (config.design) total += PRICING.design[config.design].price
  config.addons.forEach((addon) => {
    total += PRICING.addons[addon].price
  })
  return total
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0,
  }).format(price)
}

export function getConfigSummary(config: FunnelConfig): string[] {
  const parts: string[] = []
  if (config.webType) parts.push(PRICING.webType[config.webType].label)
  if (config.design === 'premium') parts.push('Premium design')
  config.addons.forEach((a) => parts.push(PRICING.addons[a].label))
  return parts
}
