import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/vault/button';
import { Card } from '@/components/vault/card';

const updates = [
  'Organized 18 lecture notes',
  'Created 42 flashcards',
  'Scheduled 5 study sessions',
  'Generated a practice quiz',
];

export function PreviewWorkspace() {
  return (
    <div className="space-y-6">
      <Card className="border-border/60 bg-background/80 rounded-3xl border p-8 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm">Good evening 👋</p>

            <h2 className="mt-2 text-3xl font-semibold">
              Workspace Intelligence
            </h2>

            <h3 className="mt-6 text-2xl font-bold tracking-tight">
              Biology Final
            </h3>

            <p className="text-muted-foreground mt-2 text-sm">
              Final exam in 6 days
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            Ready
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {updates.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-5 w-5" />

              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <Button size="sm" className="mt-8 gap-2 rounded-xl">
          Review Study Plan
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    </div>
  );
}
