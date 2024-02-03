import React from 'react';
import Sidebar from './_components/SideBar';
import Navbar from './_components/Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className='h-[100vh] w-full flex'>
            <Sidebar />
            <main className='w-full h-full flex flex-col'>
                <Navbar heading={'Company profile'} />
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
