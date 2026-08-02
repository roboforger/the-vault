import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  actions?: ReactNode;
}

export function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <header className="border-border flex items-center justify-between border-b px-8 py-5">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  );
}
