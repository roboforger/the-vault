import { Card } from '@/components/vault/card';

const tasks = ['Biology Review', 'Complete Lab Report', 'Revise Flashcards'];

export function PreviewTasks() {
  return (
    <Card className="rounded-2xl p-5">
      <h4 className="font-semibold">Today&apos;s Tasks</h4>

      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <label key={task} className="flex items-center gap-3 text-sm">
            <div className="border-border h-4 w-4 rounded-full border-2" />

            {task}
          </label>
        ))}
      </div>
    </Card>
  );
}
