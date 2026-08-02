import { Bold, Italic, List, ListOrdered, Quote } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function Toolbar() {
  return (
    <div className="border-border bg-card flex items-center gap-2 border-b px-6 py-3">
      <Button variant="ghost" size="icon">
        <Bold className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Italic className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <List className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <ListOrdered className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Quote className="h-4 w-4" />
      </Button>
    </div>
  );
}
