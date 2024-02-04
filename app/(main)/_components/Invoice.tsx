/* eslint-disable @next/next/no-img-element */
'use client';
import { useDesignStudio } from '@/lib/hooks/useDesignStudioStore';
import Image from 'next/image';
import React from 'react';

const Invoice = (): JSX.Element => {
    const { value } = useDesignStudio();
    return (
        <div className='h-full w-full bg-white rounded-[20px] flex item-center justify-center p-4'>
            <div className='h-full w-full rounded-[20px] flex flex-col justify-between p-0 border overflow-hidden'>
                <div className='w-full flex flex-col gap-2 p-0 relative '>
                    <div className='h-[180px] w-[180px] rounded-full bg-[#C655CE] absolute top-[-80px] left-[-50px]'></div>
                    <Image
                        src={
                            value?.profileImageUrl
                                ? value?.profileImageUrl
                                : '/Avatar.svg'
                        }
                        width={90}
                        height={90}
                        className='h-[80px] w-[80px] rounded-full object-cover z-10 absolute top-[50px] left-[30px]'
                        alt='profileImage'
                    />
                </div>
            </div>
        </div>
    );
};

export default Invoice;
