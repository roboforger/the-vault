import { ArrowRight, Clock3 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function FocusCard() {
  return (
    <section className="border-border bg-card overflow-hidden rounded-[28px] border">
      <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
            <Clock3 className="h-4 w-4" />
            Focus Today
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Biology Final
          </h2>

          <p className="text-muted-foreground mt-2 text-lg">
            Final exam in{' '}
            <span className="text-foreground font-semibold">6 days</span>. Stay
            on track with today&apos;s study plan.
          </p>

          <Button className="mt-8 gap-2">
            Review Study Plan
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="border-border bg-background grid w-full max-w-sm gap-4 rounded-3xl border p-6">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">Progress</span>

            <span className="text-sm font-medium">68%</span>
          </div>

          <div className="bg-muted h-2 overflow-hidden rounded-full">
            <div className="bg-primary h-full w-[68%] rounded-full" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-2xl font-bold">18</p>

              <p className="text-muted-foreground text-xs">Notes Reviewed</p>
            </div>

            <div>
              <p className="text-2xl font-bold">42</p>

              <p className="text-muted-foreground text-xs">Flashcards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
