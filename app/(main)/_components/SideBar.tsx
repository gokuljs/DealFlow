import React from 'react';
import SidebarMenu from './AvatarMenuBtn';
import AvatarMenuBtn from './AvatarMenuBtn';

const sideBarMenus = [
    {
        image: '/Avatar.svg',
        name: 'Dealflow',
        options: false,
        new: false,
        active: false
    }
];

const Sidebar = () => {
    return (
        <aside className='border h-full w-[240px] border-r  border-borderCustomGrey flex flex-col justify-between p-0'>
            <div className='w-full h-full flex flex-col items-center'>
                <div className='flex items-center justify-center w-full h-16'>
                    <AvatarMenuBtn
                        isActive={true}
                        name='Dealflow'
                        image='/Avatar.svg'
                        options
                    />
                </div>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-end'>
                <div></div>
                <div className='flex items-center justify-center w-full h-16 mb-0.5'>
                    <AvatarMenuBtn
                        isActive={false}
                        name='User'
                        image='/User.svg'
                        options={true}
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
