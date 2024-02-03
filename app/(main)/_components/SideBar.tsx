import React from 'react';
import SidebarMenu from './SidebarMenuBtn';

const Sidebar = () => {
    return (
        <aside className='border h-full w-[240px] border-r  border-borderCustomGrey flex flex-col justify-between p-0'>
            <div className='w-full h-full flex flex-col items-center'>
                <div className='flex items-center justify-center w-full h-16'>
                    <SidebarMenu />
                </div>
            </div>
            <div>bottom</div>
        </aside>
    );
};

export default Sidebar;
