'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

interface SidebarContextValue {
  hovered: boolean;
  pinned: boolean;
  expanded: boolean;

  setHovered: (value: boolean) => void;
  togglePinned: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);

  const expanded = useMemo(() => hovered || pinned, [hovered, pinned]);

  function togglePinned() {
    setPinned((value) => !value);
  }

  return (
    <SidebarContext.Provider
      value={{
        hovered,
        pinned,
        expanded,
        setHovered,
        togglePinned,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used inside SidebarProvider.');
  }

  return context;
}
