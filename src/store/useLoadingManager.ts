import { create } from 'zustand';

interface State {
  isFirstLoading: boolean;
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
  toggleFirstLoading: () => void;
}

export const useLoadingManager = create<State>((set, get) => ({
  isFirstLoading: true,
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
  toggleFirstLoading: () => set({ isFirstLoading: false }),
}));
