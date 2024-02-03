import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
    return <div>{children}</div>;
};

export default MainLayout;
