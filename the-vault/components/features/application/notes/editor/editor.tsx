'use client';

import { Badge } from '@/components/ui/badge';
import { getLinkedNotes } from '@/lib/notes';
import { useNotes } from '../context';
import { EmptyEditor } from './empty-editor';

export function Editor() {
  const { selectedNote: note } = useNotes();
  if (!note) {
    return <EmptyEditor />;
  }
  const linkedNotes = getLinkedNotes(note);
  return (
    <div className="border-border border-b px-8 py-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{note.subject}</Badge>

        {note.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}

        <div className="ml-auto">
          <Badge variant="secondary">Connected</Badge>
        </div>
      </div>

      <h1 className="mt-6 text-4xl font-bold">{note.title}</h1>

      <p className="text-muted-foreground mt-3 max-w-3xl">{note.content}</p>

      {note.aiSummary && (
        <div className="border-border bg-muted/40 mt-6 rounded-xl border p-4">
          <p className="text-sm font-medium">AI Summary</p>

          <p className="text-muted-foreground mt-2 text-sm">{note.aiSummary}</p>
        </div>
      )}
      <div className="mt-8">
        <p className="text-sm font-medium">Linked Notes</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {linkedNotes.map((linkedNote) => (
            <Badge key={linkedNote.id} variant="outline">
              {linkedNote.title}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
