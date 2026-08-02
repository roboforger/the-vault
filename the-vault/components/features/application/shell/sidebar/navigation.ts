import {
  BookOpen,
  Brain,
  CalendarDays,
  Home,
  NotebookPen,
  Settings,
} from 'lucide-react';

export const navigation = [
  {
    label: 'Dashboard',
    href: '/app',
    icon: Home,
  },
  {
    label: 'Notes',
    href: '/app/notes',
    icon: NotebookPen,
  },
  {
    label: 'Planner',
    href: '/app/planner',
    icon: CalendarDays,
  },
  {
    label: 'AI',
    href: '/app/ai',
    icon: Brain,
  },
  {
    label: 'Knowledge',
    href: '/app/knowledge',
    icon: BookOpen,
  },
  {
    label: 'Settings',
    href: '/app/settings',
    icon: Settings,
  },
];
