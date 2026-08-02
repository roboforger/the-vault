import { SearchX } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export function EmptyState({ searchQuery, onClearSearch }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center px-4 py-10 text-center">
      <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-2xl">
        <SearchX className="text-muted-foreground h-5 w-5" />
      </div>

      <h3 className="mt-4 text-sm font-semibold">No notes found</h3>

      <p className="text-muted-foreground mt-2 max-w-52 text-sm leading-6">
        We couldn&apos;t find anything matching{' '}
        <span className="text-foreground font-medium">
          &ldquo;{searchQuery}&rdquo;
        </span>
        .
      </p>

      <Button
        variant="outline"
        size="sm"
        className="mt-5"
        onClick={onClearSearch}
      >
        Clear search
      </Button>
    </div>
  );
}
