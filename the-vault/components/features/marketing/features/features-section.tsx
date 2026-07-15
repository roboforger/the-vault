import { Container } from '@/components/vault/container';
import {
  AIPreview,
  FeatureCard,
  KnowledgePreview,
  PlannerPreview,
  SmartNotesPreview,
} from '.';
import {
  BrainCircuit,
  NotebookPen,
  Sparkles,
  CalendarDays,
} from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Everything stays connected.
          </h2>

          <p className="text-muted-foreground mt-6 text-lg">
            Notes, tasks, calendars, AI, and your knowledge all work together
            inside one intelligent workspace.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <FeatureCard
            icon={<NotebookPen className="h-7 w-7" />}
            title="Smart Notes"
            description="Your notes become living documents connected to tasks, AI, lectures, and revision."
            preview={<SmartNotesPreview />}
            footer="✨ All your notes. All connected."
          />
          <FeatureCard
            icon={<Sparkles className="h-7 w-7" />}
            title="AI Workspace"
            description="Your personal academic assistant understands your notes, deadlines, and learning goals."
            preview={<AIPreview />}
            footer="✨ Proactive. Personalized. Always learning."
          />
          <FeatureCard
            icon={<CalendarDays className="h-7 w-7" />}
            title="Planner"
            description="Turn your deadlines into clear daily plans that adapt as your schedule changes."
            preview={<PlannerPreview />}
            footer="📅 Stay ahead of every deadline."
          />
          <FeatureCard
            icon={<BrainCircuit className="h-7 w-7" />}
            title="Knowledge Graph"
            description="See how your notes, lectures, and ideas connect across every subject."
            preview={<KnowledgePreview />}
            footer="🧠 Discover connections automatically."
          />
          <div className="border-border rounded-3xl border border-dashed" />
        </div>
      </Container>
    </section>
  );
}
