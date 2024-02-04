'use client';
import React from 'react';
import AddProfile from '../_components/AddProfile';
import ColorPicker from '../_components/ColorPicker';
import ToggleBox from '../_components/ToggleBox';
import { useDesignStudio } from '@/lib/hooks/useDesignStudioStore';

const Page = (): JSX.Element => {
    const { value: data, update } = useDesignStudio();
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
                        <div className='w-full h-[281px] px-8 flex flex-col gap-4'>
                            <AddProfile />
                            <ColorPicker />
                            <div className='w-full flex flex-col gap-px'>
                                <ToggleBox
                                    name='Display personal name'
                                    value={data.displayPersonalName}
                                    themeColor={data.themeColor}
                                    roundedType='TOP'
                                    onChange={(value) => {
                                        update({
                                            ...data,
                                            displayPersonalName: value
                                        });
                                    }}
                                />
                                <ToggleBox
                                    name='Display company name'
                                    value={data.displayCompanyName}
                                    themeColor={data.themeColor}
                                    roundedType='BOTTOM'
                                    onChange={(value) => {
                                        update({
                                            ...data,
                                            displayCompanyName: value
                                        });
                                    }}
                                />
                            </div>
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

export default Page;
