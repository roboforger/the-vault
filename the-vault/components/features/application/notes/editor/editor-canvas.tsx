'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import { useNotes } from '../context';
import { editorExtensions } from './extensions';

export function EditorCanvas() {
  const { selectedNote } = useNotes();
  const editor = useEditor({
    extensions: editorExtensions,

    content: selectedNote?.content ?? '',
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto px-8 py-6">
      <EditorContent editor={editor} className="min-h-full outline-none" />
    </div>
  );
}
