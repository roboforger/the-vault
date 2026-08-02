interface NotesContentProps {
  children: React.ReactNode;
}

export function NotesContent({ children }: NotesContentProps) {
  return <main className="flex-1 overflow-auto">{children}</main>;
}
