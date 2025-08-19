import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
        </div>
    );
};

export default Layout;