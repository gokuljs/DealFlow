'use client';
import { useDesignStudio } from '../../../lib/hooks/useDesignStudioStore';
import React from 'react';
import { HuePicker } from 'react-color';

const ColorPicker = (): JSX.Element => {
    const { value, update } = useDesignStudio();

    return (
        <div className='w-full h-12 flex items-center gap-2'>
            <div className='max-w-[30%] py-3 px-4 flex items-center gap-2 bg-[#6470840A] rounded-[20px] min-w-40'>
                <div
                    className='rounded-full h-6 w-6 block'
                    style={{
                        backgroundColor: value?.themeColor as string
                    }}
                />
                <div className='font-medium min-w-16 flex items-center justify-center text-[#120713] text-[13px]'>
                    {value?.themeColor}
                </div>
                <div className='text-[13px] font-normal	text-[#12071366]'>
                    HEX
                </div>
            </div>
            <div className='w-full h-12 px-8 flex items-center justify-center bg-[#6470840A] rounded-[20px] min-w-[312px]'>
                <HuePicker
                    width='100%'
                    height='8px'
                    className='rounded-full'
                    color={value.themeColor as string}
                    onChange={(color) => {
                        const updatedValue = {
                            ...value,
                            themeColor: color?.hex as string
                        };
                        update(updatedValue);
                    }}
                />
            </div>
        </div>
    );
};

export default ColorPicker;
