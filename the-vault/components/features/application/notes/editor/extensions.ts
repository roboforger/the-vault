import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';

export const editorExtensions = [
  StarterKit,

  Placeholder.configure({
    placeholder: 'Start writing your note...',
  }),
];
