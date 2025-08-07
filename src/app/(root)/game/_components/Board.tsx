'use client';
import { useGameStore } from '@/utils/store/game.store';
import Square from './Square';

export default function Board() {
    const squares = useGameStore((state) => state.squares);
    const currentActions = squares.filter((item) => item).length;
    const setSquare = useGameStore((state) => state.setSquare);

    const onSquareClick = (index: number) => {
        const nextAction = currentActions % 2 ? 'O' : 'X';
        setSquare(index - 1, nextAction);
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                width: 'calc(3 * 2.5rem)',
                height: 'calc(3 * 2.5rem)',
                border: '1px solid #999',
            }}
        >
            {squares.map((item, i) => (
                <Square
                    key={i}
                    value={item}
                    onSquareClick={() => onSquareClick(i + 1)}
                />
            ))}
        </div>
    );
}
