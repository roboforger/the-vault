import { Grid2X2, List, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function NotesHeader() {
  return (
    <header className="border-border bg-card flex items-center justify-between border-b px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notes</h1>

        <p className="text-muted-foreground mt-1 text-sm">
          Organize your knowledge and let AI connect everything.
        </p>
      </div>

      <div className="flex items-center gap-3">

        <Button variant="outline" size="icon">
          <Grid2X2 className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon">
          <List className="h-4 w-4" />
        </Button>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>
    </header>
  );
}
