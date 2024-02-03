import Image from 'next/image';
import React from 'react';

export interface NavBarProps {
    heading: string;
}

const Navbar = ({ heading }: NavBarProps): JSX.Element => {
    return (
        <div className='w-full h-[88px] py-5 px-10 flex justify-between items-center'>
            <h1 className='text-[27px] font-bold'>{heading}</h1>

            <Image
                className='cursor-pointer'
                src='/Search.svg'
                height={16}
                width={16}
                alt='search'
            />
        </div>
    );
};

export default Navbar;
