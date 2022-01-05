import React from 'react';
import Footer from '../../Components/Layouts/Footer.jsx';
import Header from '../../Components/Layouts/Header.jsx';

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

