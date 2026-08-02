import { Editor } from '../editor/editor';
import { Toolbar } from '../editor/toolbar';
import { NotesList } from '../library';
import { NotesContent } from './notes-content';

export function NotesWorkspace() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <NotesList />

      <NotesContent>
        <Toolbar />
        <Editor />
      </NotesContent>

    </div>
  );
}
