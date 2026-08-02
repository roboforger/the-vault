import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';

const tasks = [
  {
    title: 'Review Thermodynamics',
    course: 'Physics',
    completed: false,
  },
  {
    title: 'Practice Flashcards',
    course: 'Biology',
    completed: true,
  },
  {
    title: 'Finish Lab Report',
    course: 'Chemistry',
    completed: false,
  },
];

export function TodaysTasks() {
  return (
    <section className="border-border bg-card rounded-[28px] border p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Today&apos;s Tasks</h3>

          <p className="text-muted-foreground mt-1 text-sm">
            Stay focused on what matters most.
          </p>
        </div>

        <button className="text-primary flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80">
          Planner
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="border-border hover:bg-muted/50 flex items-center gap-4 rounded-2xl border p-4 transition-colors hover:shadow-sm"
          >
            {task.completed ? (
              <CheckCircle2 className="text-primary h-6 w-6" />
            ) : (
              <Circle className="text-muted-foreground h-6 w-6" />
            )}

            <div className="flex-1">
              <p
                className={
                  task.completed
                    ? 'font-medium line-through opacity-70'
                    : 'font-medium'
                }
              >
                {task.title}
              </p>

              <p className="text-muted-foreground text-sm">{task.course}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
