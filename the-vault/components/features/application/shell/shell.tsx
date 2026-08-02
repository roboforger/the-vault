'use client';
import { Content } from './content';
import { Header } from './header';
import { Sidebar } from './sidebar';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="bg-background flex h-screen">
      <Sidebar />

      <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
    </div>
  );
}
