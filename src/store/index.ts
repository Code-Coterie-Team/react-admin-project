import { create } from 'zustand'

interface StoreState {
    menuBar: boolean;
    toggleMenuBar: () => void;
  }
  

export const useStore = create<StoreState>((set) => ({
    menuBar: false,
    toggleMenuBar:() => set((state) => ({ menuBar: !state.menuBar })),
 
}))