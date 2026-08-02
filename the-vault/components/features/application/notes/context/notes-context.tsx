'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { getNoteById, getNotes } from '@/lib/notes';
import { useNoteSearch } from '../hooks';

interface NotesContextValue {
  notes: ReturnType<typeof getNotes>;
  filteredNotes: ReturnType<typeof getNotes>;

  selectedNoteId: string | null;
  selectedNote: ReturnType<typeof getNoteById>;
  selectNote: (id: string | null) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const NotesContext = createContext<NotesContextValue | null>(null);

interface NotesProviderProps {
  children: ReactNode;
}

export function NotesProvider({ children }: NotesProviderProps) {
  const notes = getNotes();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredNotes = useNoteSearch(notes, searchQuery);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  const selectedNote = useMemo(() => {
    if (!selectedNoteId) {
      return undefined;
    }

    return getNoteById(selectedNoteId);
  }, [selectedNoteId]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        filteredNotes,

        selectedNoteId,
        selectedNote,
        selectNote: setSelectedNoteId,

        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error('useNotes must be used inside NotesProvider.');
  }

  return context;
}
