interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main className="flex-1 overflow-y-auto">{children}</main>;
}
