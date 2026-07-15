import { Container } from '@/components/shared/container';

export function AppPreview() {
  return (
    <Container>
      <div className="relative mt-20">
        <div className="border-border/60 bg-card overflow-hidden rounded-3xl border shadow-2xl">
          <div className="grid h-160 grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="border-border bg-muted/30 border-r" />

            {/* Main */}
            <main className="flex flex-col">
              {/* Header */}
              <header className="border-border h-16 border-b" />

              {/* Content */}
              <div className="bg-background flex-1" />
            </main>
          </div>
        </div>
      </div>
    </Container>
  );
}
