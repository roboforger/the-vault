import { Background } from '@/components/vault/background';
import { FeaturesSection } from './features/features-section';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from './hero';

export function LandingPage() {
  return (
    <Background>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
    </Background>
  );
}
