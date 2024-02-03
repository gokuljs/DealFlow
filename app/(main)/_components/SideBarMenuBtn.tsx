import Image from 'next/image';
import React from 'react';
import { clsx } from 'clsx';

export enum Options {
    OPTIONS = 'OPTIONS',
    NOTIFICATION = 'NOTIFICATION',
    NEW = 'NEW'
}

interface AvatarMenuProps {
    isActive?: boolean;
    image: string;
    name: string;
    options: Options;
    isAvatar?: boolean;
}

const SideBarMenuBtn: React.FC<AvatarMenuProps> = ({
    isActive,
    image,
    name,
    options,
    isAvatar
}) => {
    const handleIcons = (option: Options): string | null => {
        switch (option) {
            case Options.OPTIONS:
                return '/leftarrow.svg';
            default:
                return null;
        }
    };
    return (
        <div
            className={clsx(
                'w-[200px] h-12 gap-3 rounded-[20px] flex justify-between items-center py-4 px-3 hover:bg-[#6470840A] cursor-pointer',
                isActive && 'bg-[#6470840A]'
            )}
        >
            <div className='flex items-center gap-3'>
                <Image
                    src={image}
                    width={isAvatar ? 24 : 20}
                    height={isAvatar ? 24 : 20}
                    alt='Devflow Avatar'
                />
                <p
                    className={clsx(
                        'font-medium  leading-21',
                        !isAvatar && 'text-[#12071366] text-[13px]',
                        isAvatar && 'text-[#120713] text-[15px]'
                    )}
                >
                    {name}
                </p>
            </div>
            <div>
                {handleIcons(options) && (
                    <Image
                        src={handleIcons(options) as string}
                        width={16}
                        height={16}
                        alt='Devflow Avatar'
                    />
                )}
            </div>
        </div>
    );
};

export default SideBarMenuBtn;
