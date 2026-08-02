import { ArrowRight, FileText } from 'lucide-react';

const notes = [
  {
    title: 'Cell Respiration',
    course: 'Biology',
    updated: '2 hours ago',
  },
  {
    title: 'Thermodynamics',
    course: 'Physics',
    updated: 'Yesterday',
  },
  {
    title: 'Binary Trees',
    course: 'Computer Science',
    updated: '3 days ago',
  },
];

export function RecentNotes() {
  return (
    <section className="border-border bg-card flex h-full flex-col rounded-[28px] border p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Recent Notes</h3>

          <p className="text-muted-foreground mt-1 text-sm">
            Continue where you left off.
          </p>
        </div>

        <button className="text-primary flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {notes.map((note) => (
          <div
            key={note.title}
            className="border-border hover:bg-muted/50 flex items-center gap-4 rounded-2xl border p-4 transition-colors hover:shadow-sm"
          >
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
              <FileText className="text-primary h-5 w-5" />
            </div>

            <div className="flex-1">
              <p className="font-medium">{note.title}</p>

              <p className="text-muted-foreground text-sm">{note.course}</p>
            </div>

            <span className="text-muted-foreground text-xs">
              {note.updated}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
