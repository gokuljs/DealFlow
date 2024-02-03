import Image from 'next/image';
import React from 'react';
import { clsx } from 'clsx';

interface AvatarMenuProps {
    isActive?: boolean;
    image: string;
    name: string;
    options?: boolean;
}

const AvatarMenuBtn: React.FC<AvatarMenuProps> = ({
    isActive,
    image,
    name,
    options
}) => {
    return (
        <div
            className={clsx(
                'w-[200px] h-12 gap-3 rounded-[20px] flex justify-between items-center border py-4 px-3 hover:bg-[#6470840A] cursor-pointer',
                isActive && 'bg-[#6470840A]'
            )}
        >
            <div className='flex items-center gap-3'>
                <Image
                    src={image}
                    width={24}
                    height={24}
                    alt='Devflow Avatar'
                />
                <p className='font-medium text-15 leading-21 text-[#120713]'>
                    {name}
                </p>
            </div>
            <div>
                {options && (
                    <Image
                        src='/leftarrow.svg'
                        width={16}
                        height={16}
                        alt='Devflow Avatar'
                    />
                )}
            </div>
        </div>
    );
};

export default AvatarMenuBtn;
