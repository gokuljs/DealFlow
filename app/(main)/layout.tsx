import React from 'react';
import Sidebar from './_components/SideBar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className='h-[100vh] w-full flex'>
            <Sidebar />
            {children}
        </div>
    );
};

export default MainLayout;
