import type { Note } from '@/types/note';

export const notes: Note[] = [
  {
    id: '1',
    title: 'Cell Respiration',
    subject: 'Biology',
    content:
      'Mitochondria convert glucose into ATP through glycolysis, the Krebs cycle and oxidative phosphorylation.',

    createdAt: '2026-07-01',
    updatedAt: '2 hours ago',

    status: 'reviewing',

    tags: ['ATP', 'Mitochondria', 'Cell Biology'],

    linkedNoteIds: ['2', '3'],

    aiSummary:
      'Cell respiration converts glucose into ATP and is closely related to energy production.',
  },

  {
    id: '2',
    title: 'Photosynthesis',
    subject: 'Biology',
    content:
      'Plants convert light energy into chemical energy using chlorophyll.',

    createdAt: '2026-06-28',
    updatedAt: 'Yesterday',

    status: 'mastered',

    tags: ['Plants', 'Energy'],

    linkedNoteIds: ['1'],

    aiSummary: 'Photosynthesis stores solar energy as glucose.',
  },

  {
    id: '3',
    title: 'ATP Synthesis',
    subject: 'Biology',
    content:
      'ATP synthase generates ATP using a proton gradient across the inner mitochondrial membrane.',

    createdAt: '2026-07-02',
    updatedAt: 'Today',

    status: 'draft',

    tags: ['ATP'],

    linkedNoteIds: ['1'],

    aiSummary:
      'ATP synthase is the molecular machine responsible for ATP production.',
  },

  {
    id: '4',
    title: 'Binary Trees',
    subject: 'Computer Science',
    content:
      'A binary tree is a hierarchical data structure where each node has at most two children.',

    createdAt: '2026-07-04',
    updatedAt: '4 days ago',

    status: 'reviewing',

    tags: ['Trees', 'DSA'],

    linkedNoteIds: [],

    aiSummary:
      'Binary trees are foundational data structures used in searching and sorting.',
  },
];
