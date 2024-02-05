/* eslint-disable @next/next/no-img-element */
'use client';
import { useDesignStudio } from '../../../lib/hooks/useDesignStudioStore';
import Image from 'next/image';
import React from 'react';

const Invoice = (): JSX.Element => {
    const { value } = useDesignStudio();
    return (
        <div className='h-full w-full bg-white rounded-[20px] flex item-center justify-center p-4'>
            <div className='h-full w-full rounded-[20px] flex flex-col justify-between overflow-hidden relative'>
                <div className='w-full flex flex-col gap-1 relative z-20'>
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
                    <div className='flex flex-col'>
                        <h1 className='text-[#431746] text-xl font-bold w-full flex items-center px-8'>
                            DKK 3,200 due on 14, October 2023
                        </h1>
                        <p className='text-xs px-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error at eligendi explicabo esse reprehenderit
                            explicabo esse reprehenderit.
                        </p>
                    </div>
                    <div className='flex flex-col gap-1 px-8 pt-2'>
                        <div className='flex gap-1 item-center justify-between border-b-2 h-[34px]'>
                            <div className='w-[50%] text-[#431746] flex items-center justify-start'>
                                Description
                            </div>
                            <div className='w-[10%] text-[#431746] flex items-center justify-center'>
                                Qty
                            </div>
                            <div className='w-[20%] text-[#431746] flex items-center justify-start'>
                                Rate
                            </div>
                            <div className='w-[10%] text-[#431746] flex items-center justify-center'>
                                Tax
                            </div>
                            <div className='w-[20%] text-[#431746] flex justify-end items-center'>
                                Total
                            </div>
                        </div>
                        <div className='flex  item-center justify-between h-[34px]'>
                            <div className='w-[50%] text-xs flex items-center'>
                                Co-founding 24/7,jokes included
                            </div>
                            <div className='w-[10%] text-xs flex items-center justify-center'>
                                42
                            </div>
                            <div className='w-[20%] text-xs flex items-center justify-start border-b-2'>
                                Dkk 420k
                            </div>
                            <div className='w-[10%] text-xs flex items-center justify-center border-b-2'>
                                25%
                            </div>
                            <div className='w-[20%] text-xs justify-end flex items-center border-b-2'>
                                Dkk 420k
                            </div>
                        </div>
                        <div className='flex  item-center justify-between h-[34px]'>
                            <div className='w-[50%] text-xs flex items-center'></div>
                            <div className='w-[10%] text-xs flex items-center justify-center'></div>
                            <div className='w-[20%] text-xs flex items-center justify-start border-b-2'>
                                Dkk 420k
                            </div>
                            <div className='w-[10%] text-xs flex items-center justify-center border-b-2'>
                                25%
                            </div>
                            <div className='w-[20%] text-xs justify-end flex items-center border-b-2'>
                                Dkk 420k
                            </div>
                        </div>{' '}
                        <div className='flex  item-center justify-between h-[34px]'>
                            <div className='w-[50%] text-xs flex items-center'></div>
                            <div className='w-[10%] text-xs flex items-center justify-center'></div>
                            <div className='w-[20%] text-xs flex items-center justify-start border-b-2'>
                                Dkk 420k
                            </div>
                            <div className='w-[10%] text-xs flex items-center justify-center border-b-2'>
                                25%
                            </div>
                            <div className='w-[20%] text-xs justify-end flex items-center border-b-2'>
                                Dkk 420k
                            </div>
                        </div>{' '}
                        <div className='flex  item-center justify-between h-[34px]'>
                            <div className='w-[50%] text-xs flex items-center'></div>
                            <div className='w-[10%] text-xs flex items-center justify-center'></div>
                            <div className='w-[20%] text-xs flex items-center justify-start border-b-2'>
                                Dkk 420k
                            </div>
                            <div className='w-[10%] text-xs flex items-center justify-center border-b-2'>
                                25%
                            </div>
                            <div className='w-[20%] text-xs justify-end flex items-center border-b-2'>
                                Dkk 420k
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[250px] w-[250px] bg-[#f1d0f491] rounded-full absolute z-0 right-[-190px] bottom-[10%]'></div>
                <div className='h-[180px] w-[180px] rounded-full bg-custom-gradient absolute bottom-[-90px] left-[-60px]'></div>

                <div className='w-full flex flex-col justify-end px-8 gap-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-[#431746] text-2xl'>
                            Pay instruction (Pay online)
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-xs flex justify-between'>
                                <p className='text-xs'>Bank:</p>
                                <p className='text-xs'>Revolut Bank UAB</p>
                            </div>
                            <div className='text-xs flex justify-between'>
                                <p className='text-xs'>Bank Address:</p>
                                <p className='text-xs'>
                                    Revolut Bank UAB sas sa sa sasas
                                </p>
                            </div>
                            <div className='text-xs flex justify-between'>
                                <p className='text-xs'>Account name:</p>
                                <p className='text-xs'>
                                    Account name:Dealflow aps
                                </p>
                            </div>
                            <div className='text-xs flex justify-between'>
                                <p className='text-xs'>IBAN:</p>
                                <p className='text-xs'>lwqwqwl222121212</p>
                            </div>
                            <div className='text-xs flex justify-between'>
                                <p className='text-xs'>BIC:</p>
                                <p className='text-xs'>Revolut</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center relative  w-full z-20 py-2 border-t-2'>
                        <div className='z-10 flex flex-col gap-1 w-[65%]'>
                            <p className='text-xs text-[#431746]'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium debitis cumque,
                                suscipit cupiditate magnam impedit accusantium
                                qui obcaecati itaque porro voluptates officiis
                            </p>
                            <div className='text-xs text-[#431746]'>
                                Page 1 of 1
                            </div>
                        </div>
                        <div className=' flex flex-col justify-end gap-1 z-20'>
                            <p className='text-xs text-[#C655CE] font-bold flex justify-end'>
                                invoicing Powered by
                            </p>
                            <h1 className='text-xl font-bold bg-clip-text text-transparent bg-text-gradient flex justify-end'>
                                Dealflow
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
