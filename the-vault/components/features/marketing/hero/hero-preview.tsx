import { Card } from '@/components/vault/card';

import { PreviewHeader } from './preview-header';
import { PreviewSidebar } from './preview-sidebar';
import { PreviewWorkspace } from './preview-workspace';
import { PreviewNotes } from './preview-notes';
import { PreviewTasks } from './preview-tasks';

export function HeroPreview() {
  return (
    <div className="mt-20">
      <div className="mb-6 text-center">
        <p className="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">
          Inside The Vault
        </p>
      </div>
      <Card className="border-border/60 bg-background/90 overflow-hidden rounded-[36px] border shadow-2xl backdrop-blur">
        <div className="grid aspect-16/10 grid-cols-[240px_1fr]">
          <PreviewSidebar />

          <main className="flex flex-col">
            <PreviewHeader />

            <div className="space-y-6 p-8">
              <PreviewWorkspace />

              <div className="grid grid-cols-2 gap-6">
                <PreviewNotes />
                <PreviewTasks />
              </div>
            </div>
          </main>
        </div>
      </Card>
    </div>
  );
}
