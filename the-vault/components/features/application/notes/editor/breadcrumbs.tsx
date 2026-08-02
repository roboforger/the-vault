import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  return (
    <div className="border-border text-muted-foreground flex items-center gap-2 border-b px-8 py-3 text-sm">
      <Home className="h-4 w-4" />

      <ChevronRight className="h-4 w-4" />

      <span>Notes</span>

      <ChevronRight className="h-4 w-4" />

      <span className="text-foreground font-medium">Cell Respiration</span>
    </div>
  );
}
