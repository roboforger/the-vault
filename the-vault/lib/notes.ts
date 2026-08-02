import { notes } from '@/data/notes';
import type { Note } from '@/types/note';

export function getNotes(): Note[] {
  return notes;
}

export function getNoteById(id: string): Note | undefined {
  return notes.find((note) => note.id === id);
}

export function getLinkedNotes(note: Note): Note[] {
  return note.linkedNoteIds
    .map((id) => getNoteById(id))
    .filter((linkedNote): linkedNote is Note => linkedNote !== undefined);
}
