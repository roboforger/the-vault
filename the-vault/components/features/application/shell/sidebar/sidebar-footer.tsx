'use client';

import { cn } from '@/lib/utils';

import { useSidebar } from './sidebar-context';

export function SidebarFooter() {
  const { expanded } = useSidebar();

  return (
    <div className="border-border border-t p-3">
      <button className="hover:bg-muted flex w-full items-center rounded-xl p-2 transition-colors">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-semibold">
          V
        </div>

        <div
          className={cn(
            'ml-3 overflow-hidden transition-all duration-200',
            expanded ? 'max-w-40 opacity-100 delay-100' : 'max-w-0 opacity-0'
          )}
        >
          <p className="font-medium whitespace-nowrap">The Vault</p>

          <p className="text-muted-foreground text-sm whitespace-nowrap">
            v0.1.0
          </p>
        </div>
      </button>
    </div>
  );
}
