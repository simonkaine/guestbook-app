import React from 'react';
// import Guestbook from '../../Components/Guestbook/Guestbook';
import Footer from '../../Components/Layouts/Footer';
import Header from '../../Components/Layouts/Header';

export default function LayoutDesign({children}) {
    return (
        <div>
            <Header />
                <main style={{height: '100vh'}}>
                    {children}
                </main>
            <Footer />
        </div>
    )
}

