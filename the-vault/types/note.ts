export type NoteStatus = 'draft' | 'reviewing' | 'mastered';

export interface Note {
  id: string;
  title: string;
  subject: string;

  content: string;

  createdAt: string;
  updatedAt: string;

  status: NoteStatus;

  tags: string[];

  linkedNoteIds: string[];

  aiSummary?: string;
}
