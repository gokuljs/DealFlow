import React from 'react';

const page = (): JSX.Element => {
    return (
        <div className='h-full w-full flex justify-between mt-4'>
            <div className='flex-1 flex items-center justify-center pr-4'>
                <div className='h-full w-full bg-white rounded-[20px]'></div>
            </div>
            <div className='flex-1 flex items-center justify-center pl-4'>
                <div className='h-full w-full bg-white rounded-[20px]'></div>
            </div>
        </div>
    );
};

export default page;
