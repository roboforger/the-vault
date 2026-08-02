import { FileText } from 'lucide-react';

export function EmptyEditor() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-sm text-center">
        <div className="border-border bg-muted mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border">
          <FileText className="text-muted-foreground h-10 w-10" />
        </div>

        <h2 className="text-2xl font-semibold">Select a note</h2>

        <p className="text-muted-foreground mt-3">
          Choose a note from the library to start editing, or create a new note.
        </p>
      </div>
    </div>
  );
}
