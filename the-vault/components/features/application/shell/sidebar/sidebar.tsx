'use client';

import { SidebarProvider } from './sidebar-context';
import { SidebarContent } from './sidebar-content';

export function Sidebar() {
  return (
    <SidebarProvider>
      <SidebarContent />
    </SidebarProvider>
  );
}
