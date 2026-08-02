'use client';

import { SidebarFooter } from './sidebar-footer';
import { SidebarLogo } from './sidebar-logo';
import { useSidebar } from './sidebar-context';
import { navigation } from './navigation';
import { SidebarItem } from './sidebar-item';

export function SidebarContent() {
  const { expanded, setHovered } = useSidebar();

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border-border bg-card flex h-screen flex-col border-r transition-all duration-300 ease-out ${expanded ? 'w-64' : 'w-20'} `}
    >
      <SidebarLogo />

      <nav className="mt-6 flex-1 space-y-2">
        {navigation.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>

      <SidebarFooter />
    </aside>
  );
}
