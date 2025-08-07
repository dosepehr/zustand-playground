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
            <Square value={squares[0]} onSquareClick={() => onSquareClick(1)} />
            <Square value={squares[1]} onSquareClick={() => onSquareClick(2)} />
            <Square value={squares[2]} onSquareClick={() => onSquareClick(3)} />
            <Square value={squares[3]} onSquareClick={() => onSquareClick(4)} />
            <Square value={squares[4]} onSquareClick={() => onSquareClick(5)} />
            <Square value={squares[5]} onSquareClick={() => onSquareClick(6)} />
            <Square value={squares[6]} onSquareClick={() => onSquareClick(7)} />
            <Square value={squares[7]} onSquareClick={() => onSquareClick(8)} />
            <Square value={squares[8]} onSquareClick={() => onSquareClick(9)} />
        </div>
    );
}
