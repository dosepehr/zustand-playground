import { FC } from 'react';

export type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
};

const Square: FC<SquareProps> = ({ value, onSquareClick }) => {
    const handleClick = () => {
        if (value) {
            alert('no');
        } else {
            onSquareClick();
        }
    };
    return (
        <button
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                backgroundColor: '#fff',
                border: '1px solid red',
                outline: 0,
                borderRadius: 0,
                fontSize: '1rem',
                fontWeight: 'bold',
            }}
            onClick={handleClick}
        >
            {value || '-'}
        </button>
    );
};

export default Square;
