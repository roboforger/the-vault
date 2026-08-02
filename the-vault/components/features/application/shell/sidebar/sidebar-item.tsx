'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { useSidebar } from './sidebar-context';

interface SidebarItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export function SidebarItem({ href, label, icon: Icon }: SidebarItemProps) {
  const pathname = usePathname();

  const { expanded } = useSidebar();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'mx-3 flex h-11 items-center rounded-xl transition-colors',
        active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
      )}
    >
      <div className="flex h-11 w-14 shrink-0 items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>

      {expanded && (
        <span
          className={cn(
            'overflow-hidden whitespace-nowrap transition-all duration-200',
            expanded ? 'max-w-40 opacity-100 delay-100' : 'max-w-0 opacity-0'
          )}
        >
          {label}
        </span>
      )}
    </Link>
  );
}
