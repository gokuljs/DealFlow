/* eslint-disable @next/next/no-img-element */
'use client';
import { useDesignStudio } from '@/lib/hooks/useDesignStudioStore';
import Image from 'next/image';
import React from 'react';

const Invoice = (): JSX.Element => {
    const { value } = useDesignStudio();
    return (
        <div className='h-full w-full bg-white rounded-[20px] flex item-center justify-center p-4'>
            <div className='h-full w-full rounded-[20px] flex flex-col justify-between overflow-hidden'>
                <div className='w-full flex flex-col gap-1 relative'>
                    <div className='h-[180px] w-[180px] rounded-full bg-[#C655CE] absolute top-[-80px] left-[-40px]'></div>
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
                    <div className='w-full h-[150px] flex justify-end items-center '>
                        <div className='flex flex-col justify-between pr-8 gap-5'>
                            <div className='text-[#431746] text-4xl font-bold w-full flex justify-end items-center'>
                                Invoice
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex gap-16 justify-between items-center'>
                                    <p className='text-[#431746] font-bold text-sm'>
                                        Invoice no:
                                    </p>
                                    <p>jp-1667-0001</p>
                                </div>
                                <div className='flex gap-6 justify-between items-center'>
                                    <p className='text-[#431746] text-sm font-medium'>
                                        Invoice date:
                                    </p>
                                    <p className='text-[#431746] text-sm font-medium'>
                                        jp-1667-0001
                                    </p>
                                </div>
                                <div className='flex gap-6 justify-between items-center'>
                                    <p className='text-[#431746] text-sm font-medium'>
                                        Due Date:
                                    </p>
                                    <p className='text-[#431746] text-sm font-medium'>
                                        jp-1667-0001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[140px] flex justify-between px-8'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[#431746] text-sm font-medium'>
                                Sid Mudgal Engineering Inc
                            </h1>
                            <p className='text-xs leading-[17px]'>
                                sid@devflow.com
                                <br />
                                street 920/18 <br />
                                Copenhagen Dk <br />
                                +45 2323232323 <br />
                                DK23232323
                            </p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[#431746] text-sm font-medium flex justify-end'>
                                Invoice to
                            </h1>
                            <p className='text-xs leading-[17px] text-right'>
                                Dealflow Aps
                                <br />
                                DK 4266638
                                <br />
                                Applesy Plads 7, Copenhagen Dk <br />
                                1411 Denmark
                                <br />
                                seb@dealFlow@live
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
