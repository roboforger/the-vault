import { FileText } from 'lucide-react';

interface NoteCardProps {
  title: string;
  subject: string;
  updated: string;
  active?: boolean;
  onClick?: () => void;
}

export function NoteCard({
  title,
  subject,
  updated,
  active = false,
  onClick,
}: NoteCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition-all ${
        active
          ? 'border-primary bg-primary/5'
          : 'border-border hover:bg-muted/50'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 mt-1 rounded-lg p-2">
          <FileText className="text-primary h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium">{title}</h3>

          <p className="text-muted-foreground mt-1 text-sm">{subject}</p>

          <p className="text-muted-foreground mt-2 text-xs">
            Updated {updated}
          </p>
        </div>
      </div>
    </button>
  );
}
