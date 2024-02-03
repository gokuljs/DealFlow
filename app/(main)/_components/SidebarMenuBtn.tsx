import Image from 'next/image';
import React from 'react';

const SidebarMenu = () => {
    return (
        <div className='w-[200px] h-12 gap-3 rounded-[20px] flex justify-between items-center border py-4 px-3 hover:bg-[#6470840A] cursor-pointer'>
            <div className='flex items-center gap-3'>
                <Image
                    src='/Avatar.svg'
                    width={24}
                    height={24}
                    alt='Devflow Avatar'
                />
                <p className='font-medium text-15 leading-21'>Dealflow</p>
            </div>
            <div>
                <Image
                    src='/leftarrow.svg'
                    width={16}
                    height={16}
                    alt='Devflow Avatar'
                />
            </div>
        </div>
    );
};

export default SidebarMenu;
