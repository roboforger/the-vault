import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import { Logo } from '@/components/vault/logo';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export function Navbar() {
  return (
    <header className="border-border/40 bg-background/70 sticky top-0 z-50 border-b backdrop-blur-2xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">FAQ</Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost">Sign In</Button>

            <Button>Get Started</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
