import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web do 24 hodin | Webdozítra',
  description: 'Zítra máš web online. Bez schůzek. Bez zdržování. Zaplatíš → začínáme.',
  robots: 'noindex',
}

export default function KLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#040406] text-white antialiased">
      <div className="h-[3px] w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600" />
      {children}
    </div>
  )
}
