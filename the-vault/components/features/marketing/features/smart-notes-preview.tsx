export function SmartNotesPreview() {
  const notes = [
    {
      title: 'Cell Respiration',
      tag: 'Biology',
      active: true,
    },
    {
      title: 'Organic Chemistry',
      tag: 'Chemistry',
    },
    {
      title: 'Calculus Week 8',
      tag: 'Mathematics',
    },
  ];

  return (
    <div className="bg-background h-80 p-6">
      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.title}
            className={`rounded-3xl border p-4 transition-colors ${
              note.active ? 'border-primary/40 bg-primary/5' : 'border-border'
            }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{note.title}</h4>

              <span className="bg-muted rounded-full px-2 py-1 text-xs">
                {note.tag}
              </span>
            </div>

            <p className="text-muted-foreground mt-2 text-sm">
              Connected to flashcards, tasks, and AI summaries.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
