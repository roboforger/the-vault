import { Sparkles } from 'lucide-react';

export function AIPreview() {
  return (
    <div className="bg-background h-80 p-6">
      <div className="border-primary/15 bg-primary/5 rounded-3xl border p-5">
        <div className="flex items-center gap-2">
          <Sparkles className="text-primary h-4 w-4" />

          <span className="text-sm font-medium">AI Assistant</span>
        </div>

        <p className="mt-4 text-sm leading-6">
          I noticed your Biology exam is next week.
        </p>

        <div className="mt-5 space-y-3">
          {[
            'Created a revision plan',
            'Generated 42 flashcards',
            'Scheduled study sessions',
          ].map((item) => (
            <div
              key={item}
              className="bg-background flex items-center gap-3 rounded-xl px-3 py-2"
            >
              <div className="bg-primary h-2 w-2 rounded-full" />

              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <button className="bg-primary text-primary-foreground mt-5 rounded-xl px-4 py-2 text-sm font-medium">
          Review Suggestions
        </button>
      </div>
    </div>
  );
}
