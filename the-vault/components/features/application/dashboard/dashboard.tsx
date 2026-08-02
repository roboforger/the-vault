import {
  DashboardHeader,
  FocusCard,
  RecentNotes,
  TodaysTasks,
  AISuggestions,
} from '.';

export function Dashboard() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-8">
      <DashboardHeader />

      <FocusCard />

      <section className="grid gap-8 xl:grid-cols-[1fr_380px]">
        <div className="grid gap-8">
          <RecentNotes />
          <TodaysTasks />
        </div>

        <AISuggestions />
      </section>
    </div>
  );
}
