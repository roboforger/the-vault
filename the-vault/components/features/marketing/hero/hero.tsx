import { ArrowRight, Play } from 'lucide-react';

import { Button } from '@/components/vault/button';
import { Container } from '@/components/vault/container';

import { HeroPreview } from './hero-preview';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="border-border bg-background/70 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur">
            ✨ Built for modern students
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Everything you learn.
            <br />
            <span className="text-primary">Finally connected.</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg leading-8">
            Capture notes, manage tasks, organize lectures, plan exams, and work
            alongside an AI that understands your entire workspace.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        <HeroPreview />
      </Container>
    </section>
  );
}
