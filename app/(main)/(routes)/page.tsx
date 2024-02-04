import React from 'react';
import AddProfile from '../_components/AddProfile';

const page = (): JSX.Element => {
    return (
        <div className='h-full w-full flex justify-between mt-4'>
            <div className='flex-1 flex items-center justify-center pr-4'>
                <div className='h-full w-full bg-white rounded-[20px] flex flex-col gap-4'>
                    <div className='w-full h-[73px] pt-8 pr-8 pb-4 pl-8'>
                        <h1 className='text-[#120713] font-bold text-[21px]'>
                            Choose your style
                        </h1>
                    </div>
                    <div className='h-full w-full flex flex-col'>
                        <div className='w-full h-[281px] px-8 gap-4'>
                            <AddProfile />
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center pl-4'>
                <div className='h-full w-full bg-white rounded-[20px]'></div>
            </div>
        </div>
    );
};

export default page;
