import { Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-20 flex h-16 items-center justify-between border-b px-8 backdrop-blur">
      <div className="border-border bg-background flex items-center gap-3 rounded-xl border px-4 py-2">
        <Search className="text-muted-foreground h-4 w-4" />

        <span className="text-muted-foreground text-sm">
          Search everything...
        </span>

        <kbd className="border-border bg-muted ml-6 rounded-md border px-2 py-0.5 text-xs">
          ⌘K
        </kbd>
      </div>

      <button className="border-border hover:bg-muted rounded-xl border p-2 transition-colors">
        <Bell className="h-5 w-5" />
      </button>
    </header>
  );
}
