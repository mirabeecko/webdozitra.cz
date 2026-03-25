import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web do 24 hodin | Webdozítra.cz',
  description:
    'Vyplň formulář, zaplať online, web máš druhý den. Žádné schůzky. Žádné čekání. Garantováno.',
  robots: 'noindex', // Funnel page — no SEO indexing
}

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  // Minimal layout — no nav, no footer, no distractions
  return (
    <div className="min-h-screen bg-[#070709] text-white antialiased">
      {/* Subtle top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600" />
      {children}
    </div>
  )
}
