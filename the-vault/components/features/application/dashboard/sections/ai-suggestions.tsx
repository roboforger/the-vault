import { ArrowRight, Sparkles } from 'lucide-react';

const suggestions = [
  {
    title: 'Physics exam in 4 days',
    description: 'Generate a practice quiz based on your Thermodynamics notes.',
    action: 'Generate Quiz',
  },
  {
    title: 'Binary Trees need review',
    description: "You haven't revised this topic in almost a week.",
    action: 'Review Notes',
  },
  {
    title: 'Chemistry flashcards',
    description: 'Your latest note could become 28 AI-generated flashcards.',
    action: 'Create Flashcards',
  },
];

export function AISuggestions() {
  return (
    <section className="border-border bg-card rounded-[28px] border p-6">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-2xl">
          <Sparkles className="text-primary h-6 w-6" />
        </div>

        <div>
          <h3 className="text-xl font-semibold">AI Suggestions</h3>

          <p className="text-muted-foreground text-sm">
            Personalized recommendations based on your workspace.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.title}
            className="border-border hover:bg-muted/50 rounded-2xl border p-5 transition-colors hover:shadow-sm"
          >
            <h4 className="font-semibold">{suggestion.title}</h4>

            <p className="text-muted-foreground mt-2 text-sm leading-6">
              {suggestion.description}
            </p>

            <button className="text-primary mt-5 flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80">
              {suggestion.action}

              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
