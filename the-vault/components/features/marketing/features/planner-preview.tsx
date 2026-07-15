import { CheckCircle2, Circle } from 'lucide-react';

const tasks = [
  {
    title: 'Review Biology',
    done: true,
  },
  {
    title: 'Complete Lab Report',
    done: false,
  },
  {
    title: 'Practice Flashcards',
    done: true,
  },
  {
    title: 'Math Assignment',
    done: false,
  },
];

export function PlannerPreview() {
  return (
    <div className="bg-background h-80 p-6">
      <div className="border-border bg-card rounded-3xl border p-5">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Today&apos;s Plan</h4>

          <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
            2 / 4 Complete
          </span>
        </div>

        <div className="mt-5 space-y-4">
          {tasks.map((task) => (
            <div key={task.title} className="flex items-center gap-3">
              {task.done ? (
                <CheckCircle2 className="text-primary h-5 w-5" />
              ) : (
                <Circle className="text-muted-foreground h-5 w-5" />
              )}

              <span
                className={
                  task.done ? 'text-sm' : 'text-muted-foreground text-sm'
                }
              >
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
