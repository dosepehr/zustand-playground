import React from 'react';
import { TableType } from './table.types';
const Table = ({ headData, children }: TableType) => {
    return (
        <div className='mx-auto w-full max-w-5xl'>
            <div className='overflow-x-auto rounded-t-3xl border border-[#B9B9B9] rounded-b-lg'>
                <table className='table overflow-hidden rounded-t-3xl bg-white'>
                    <thead className='rounded-t-3xl bg-yellow-1'>
                        <tr>
                            {headData.map((data, i) => (
                                <th
                                    className='text-lg font-light'
                                    key={i}
                                >
                                    {data}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {children}
                </table>
            </div>
        </div>
    );
};

export default Table;

