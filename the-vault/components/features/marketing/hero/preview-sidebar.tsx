import { Brain, Calendar, Folder, Home, Library } from 'lucide-react';
import { LogoMark } from '@/components/vault/logo';
const items = [
  {
    icon: Home,
    label: 'Home',
  },
  {
    icon: Brain,
    label: 'AI',
  },
  {
    icon: Library,
    label: 'Knowledge',
  },
  {
    icon: Calendar,
    label: 'Planner',
  },
  {
    icon: Folder,
    label: 'Library',
  },
];

export function PreviewSidebar() {
  return (
    <aside className="border-border bg-muted/30 border-r">
      <div className="flex h-full flex-col">
        <div className="border-border border-b p-6">
          <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-2xl">
            <LogoMark className="h-5 w-5" />
          </div>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {items.map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
        </nav>

        <div className="border-border border-t p-4">
          <div className="bg-muted h-10 rounded-xl" />
        </div>
      </div>
    </aside>
  );
}
