'use client';
import Button from '@/components/Button';
import { useBearsStore } from '@/utils/store/bears.store';

export default function Home() {
    const { bears, increasePopulation, removeAllBears, updateBears } =
        useBearsStore((state) => state);
    return (
        <div className='px-10 bg-blue-100'>
            <p className='text-red-500'>{bears}</p>

            <Button onClick={increasePopulation}>increasePopulation</Button>
            <Button onClick={removeAllBears}>removeAllBears</Button>
            <Button onClick={() => updateBears(3)}>updateBears</Button>
        </div>
    );
}
