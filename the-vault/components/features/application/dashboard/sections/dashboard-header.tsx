import { CalendarDays } from 'lucide-react';

export function DashboardHeader() {
  return (
    <section className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-muted-foreground text-sm font-medium">
          Good evening 👋
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Welcome back, Jonathan.
        </h1>

        <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
          Here&apos;s what&apos;s most important today.
        </p>
      </div>

      <div className="border-border bg-card flex items-center gap-2 rounded-2xl border px-4 py-3">
        <CalendarDays className="text-primary h-5 w-5" />

        <span className="text-sm font-medium">Monday, July 14</span>
      </div>
    </section>
  );
}
