import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
type BearsStore = {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
};

export const useBearsStore = create<BearsStore>()(
    devtools((set, get) => ({
        bears: 0,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        updateBears: (newBears) => set({ bears: newBears + get().bears }),
    })),
);
