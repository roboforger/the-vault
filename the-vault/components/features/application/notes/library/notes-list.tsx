'use client';

import { NoteCard } from './note-card';
import { useNotes } from '../context';
import { EmptyState } from './empty-state';
import { NotesSearch } from './search';

export function NotesList() {
  const {
    filteredNotes,
    selectedNoteId,
    selectNote,
    searchQuery,
    setSearchQuery,
  } = useNotes();
  return (
    <aside className="border-border bg-card flex w-80 flex-col border-r">
      <div className="border-border border-b p-5">
        <NotesSearch />
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        {filteredNotes.length > 0 ? (
          <div className="space-y-3">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                title={note.title}
                subject={note.subject}
                updated={note.updatedAt}
                active={selectedNoteId === note.id}
                onClick={() => selectNote(note.id)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery('')}
          />
        )}
      </div>
    </aside>
  );
}
