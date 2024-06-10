import { create } from 'zustand';

interface State {
  cursorAction: 'drag' | 'hover' | 'default';
  setCurrentCursorAction: (cursorAction: 'drag' | 'hover' | 'default') => void;
}

export const useCursor = create<State>((set) => ({
  cursorAction: 'default',
  setCurrentCursorAction: (cursorAction) => set({ cursorAction }),
}));
