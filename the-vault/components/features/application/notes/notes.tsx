import { NotesHeader } from './layout/notes-header';
import { NotesWorkspace } from './layout/notes-workspace';
import { NotesProvider } from './context';

export function Notes() {
  return (
    <NotesProvider>
      <div className="flex h-full flex-col">
        <NotesHeader />
        <NotesWorkspace />
      </div>
    </NotesProvider>
  );
}
