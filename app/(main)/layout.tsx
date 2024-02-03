import React from 'react';
import Sidebar from './_components/SideBar';
import Navbar from './_components/Navbar';
import clsx from 'clsx';

interface MainLayoutProps {
    children: React.ReactNode;
}

enum MenuItemOptions {
    GENERAL = 'General',
    DESIGNSTUDIO = 'DesignStudio',
    TEAM = 'Team',
    SUBSCRIPTION = 'Subscription',
    BILLINGANDBANK = 'Billing & bank',
    Ambassador = 'Ambassador'
}
const MenuItemValues = Object.values(MenuItemOptions);

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className='h-[100vh] w-full flex'>
            <Sidebar />
            <main className='w-full h-full flex flex-col'>
                <Navbar heading={'Company profile'} />
                <div className='h-full w-full flex flex-col pl-10 pr-10 pb-10'>
                    <div className='flex w-full h-8 gap-6'>
                        {MenuItemValues.map((item, index) => (
                            <div
                                className={clsx(
                                    'font-semibold  cursor-pointer text-[17px] hover:text-[#120713] transition-all duration-150 ease-in-out',
                                    item === MenuItemOptions.DESIGNSTUDIO
                                        ? 'text-[#120713]'
                                        : 'text-[#12071333]'
                                )}
                                key={index}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
