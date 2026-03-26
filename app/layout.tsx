import type { Metadata } from 'next';
import './globals.css';
import FunnelHeader from '@/components/layout/FunnelHeader';
import FunnelFooter from '@/components/layout/FunnelFooter';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';

export const metadata: Metadata = {
  title: 'Webdozitra.cz — Web hotový do 24 hodin | od 11 900 Kč',
  description: 'Profesionální web hotový do 24 hodin — garantovaně nebo vracíme zálohu. Od 11 900 Kč.',
  metadataBase: new URL('https://webdozitra.cz'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <FunnelHeader />
        <main>{children}</main>
        <FunnelFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
