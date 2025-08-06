import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayout;

