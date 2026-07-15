import { Card } from '@/components/vault/card';

const notes = ['Cell Respiration', 'Organic Chemistry', 'Calculus Week 8'];

export function PreviewNotes() {
  return (
    <Card className="rounded-2xl p-5">
      <h4 className="font-semibold">Recent Notes</h4>

      <div className="mt-4 space-y-3">
        {notes.map((note) => (
          <div key={note} className="bg-muted/40 rounded-xl p-3">
            <p className="text-sm font-medium">📄 {note}</p>

            <p className="text-muted-foreground mt-1 text-xs">Edited 2h ago</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
