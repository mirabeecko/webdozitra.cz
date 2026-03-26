import type { Metadata } from 'next';
import FunnelHero from '@/components/sections/FunnelHero';
import Benefits from '@/components/sections/Benefits';
import HowItWorks from '@/components/sections/HowItWorks';
import InlineCTA from '@/components/sections/InlineCTA';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Webdozitra.cz — Web hotový do 24 hodin | od 11 900 Kč',
  description: 'Profesionální web hotový do 24 hodin — garantovaně nebo vracíme zálohu. Od 11 900 Kč.',
};

export default function FunnelPage() {
  return (
    <>
      <FunnelHero />
      <Benefits />
      <InlineCTA label="Chci web — trvá to 5 minut" />
      <HowItWorks />
      <InlineCTA label="Spustit svůj projekt" />
      <Pricing />
      <Testimonials />
      <InlineCTA label="Objednat web do 24 hodin" />
      <FAQ limit={8} />
      <CTASection />
    </>
  );
}
