// preview-header.tsx

import { Bell, Calendar, Search, Settings } from 'lucide-react';

export function PreviewHeader() {
  return (
    <header className="border-border flex h-16 items-center justify-between border-b px-6">
      <div className="border-border bg-background flex items-center gap-3 rounded-xl border px-4 py-2">
        <Search className="text-muted-foreground h-4 w-4" />

        <span className="text-muted-foreground text-sm">
          Search your workspace...
        </span>

        <kbd className="border-border bg-muted ml-8 rounded-md border px-2 py-0.5 text-xs">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="text-muted-foreground h-5 w-5" />
        <Calendar className="text-muted-foreground h-5 w-5" />
        <Settings className="text-muted-foreground h-5 w-5" />
      </div>
    </header>
  );
}

