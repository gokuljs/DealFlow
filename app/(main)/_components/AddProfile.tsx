/* eslint-disable @next/next/no-img-element */
'use client';
import { useDesignStudio } from '@/lib/hooks/useDesignStudioStore';
import Image from 'next/image';
import { useRef } from 'react';

const AddProfile = (): JSX.Element => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { value, update } = useDesignStudio();
    const handleUploadClick = (): void => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const updateValue = {
                    ...value,
                    profileImageUrl: reader.result as String
                };
                update(updateValue);
            };
            reader.readAsDataURL(file);
        }
    };
    console.log(value);
    return (
        <div className='w-full h-[88px]  bg-[#6470840A] gap-8 rounded-[20px] p-4 flex'>
            {/* use of normal image is temporary */}
            {value.profileImageUrl && (
                <div
                    className={`h-14 w-14 flex items-center justify-center border border-[${value.themeColor}] rounded-full`}
                >
                    <img
                        src={value.profileImageUrl as string}
                        alt='Profile'
                        className='h-12 w-12 rounded-full object-cover'
                    />
                </div>
            )}

            <div>
                <div
                    onClick={handleUploadClick}
                    className='h-14 w-14 rounded-full flex items-center justify-center border-2 border-white cursor-pointer'
                >
                    <input
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        accept='image/*' // Accept only images
                    />
                    <Image
                        src='/Plus.svg'
                        width={10}
                        height={10}
                        alt='PLus image'
                    />
                </div>
            </div>
        </div>
    );
};

export default AddProfile;
