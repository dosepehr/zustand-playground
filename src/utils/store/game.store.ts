import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

type GameState = {
    squares: (null | 'X' | 'O')[];
};

type GameActions = {
    setSquare: (index: number, value: 'X' | 'O') => void;
};

type GameStore = GameState & GameActions;

export const useGameStore = create<GameStore>()(
    devtools(
        combine<GameState, GameActions>(
            { squares: Array(9).fill(null) },
            (set) => ({
                setSquare: (index, value) =>
                    set((state) => {
                        const newSquares = [...state.squares];
                        newSquares[index] = value;
                        return { squares: newSquares };
                    }),
            }),
        ),
        { name: 'GameStore' },
    ),
);
