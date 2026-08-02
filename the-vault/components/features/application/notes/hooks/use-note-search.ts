import { useMemo } from 'react';

import type { Note } from '@/types/note';

export function useNoteSearch(notes: Note[], searchQuery: string) {
  return useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return notes;
    }

    return notes.filter((note) => {
      const searchableText = [
        note.title,
        note.subject,
        note.content,
        ...note.tags,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [notes, searchQuery]);
}
