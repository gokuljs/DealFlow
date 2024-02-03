import React from 'react';
import SideBarMenuBtn, { Options } from './SideBarMenuBtn';

interface SideBarMenuItems {
    name: string;
    isActive: boolean;
    image: string;
    options?: Options;
}

const sideBarMenu: SideBarMenuItems[] = [
    {
        name: 'Invoice',
        isActive: false,
        image: '/Add.svg',
        options: Options.NOTIFICATION
    },
    {
        name: 'Pay',
        isActive: false,
        image: '/minus.svg',
        options: Options.NEW
    },
    {
        name: 'Financing',
        isActive: false,
        image: '/Lightning.svg'
    },
    {
        name: 'Contacts',
        isActive: false,
        image: '/Contacts.svg'
    },
    {
        name: 'Plugin',
        isActive: false,
        image: '/hex.svg'
    }
];

const bottomMenuItems: SideBarMenuItems[] = [
    {
        name: 'Chat',
        isActive: false,
        image: '/chat.svg'
    },
    {
        name: 'Notifications',
        isActive: false,
        image: '/bell.svg',
        options: Options.NOTIFICATION
    }
];

const Sidebar = (): JSX.Element => {
    return (
        <aside className='border h-[full] w-[240px] border-r  border-borderCustomGrey flex flex-col justify-between p-0 py-0.5'>
            <div className='w-full h-full flex flex-col items-center'>
                <div className='flex items-center justify-center w-full h-16'>
                    <SideBarMenuBtn
                        isActive={true}
                        name='Dealflow'
                        image='/Avatar.svg'
                        options={Options.OPTIONS}
                        isAvatar={true}
                    />
                </div>
                <div className='h-full w-full flex flex-col items-center gap-3 mt-2'>
                    {sideBarMenu.map((item, index) => (
                        <SideBarMenuBtn
                            key={index}
                            name={item.name}
                            image={item.image}
                            options={item.options}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-end'>
                <div className='flex flex-col items-center gap-3 mt-2'>
                    {bottomMenuItems.map((item, index) => (
                        <SideBarMenuBtn
                            key={index}
                            name={item.name}
                            image={item.image}
                            options={item.options}
                        />
                    ))}
                </div>
                <div className='flex items-center justify-center w-full h-16'>
                    <SideBarMenuBtn
                        isActive={false}
                        name='User'
                        image='/User.svg'
                        options={Options.OPTIONS}
                        isAvatar={true}
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
