'use client';

import { Pin } from 'lucide-react';

import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';

export function SidebarLogo() {
  const { expanded, pinned, togglePinned } = useSidebar();

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-3">
        <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-xl font-bold">
          V
        </div>

        {expanded && (
          <span
            className={cn(
              'overflow-hidden whitespace-nowrap transition-all duration-200',
              expanded ? 'ml-2 max-w-40 opacity-100' : 'max-w-0 opacity-0'
            )}
          >
            The Vault
          </span>
        )}
      </div>

      {expanded && (
        <button
          onClick={togglePinned}
          className="text-muted-foreground hover:text-foreground"
        >
          <Pin className={`h-4 w-4 ${pinned ? 'fill-current' : ''}`} />
        </button>
      )}
    </div>
  );
}
