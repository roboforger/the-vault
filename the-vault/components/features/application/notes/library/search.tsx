'use client';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

import { useNotes } from '../context';

export function NotesSearch() {
  const { searchQuery, setSearchQuery } = useNotes();

  return (
    <div className="relative">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

      <Input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search notes..."
        className="pl-9"
      />
    </div>
  );
}
