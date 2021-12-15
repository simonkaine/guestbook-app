import React from 'react';
import { useUser } from '../../Context-Hooks/UserContext';

export default function Header() {
    const { user } = useUser();

    return (
        <header>
            <div style={{height: '100px', border: '1px solid black', display: 'flex', justifyContent: 'flex-end'}}>
            {user ? (
                <h1 style={{margin: '0 20px 0 0'}}>Hello, {user}!</h1>
            ) : ( 
                <h1 style={{margin: '0 20px 0 0'}}>Welcome to Hotel california!</h1>
            )}
            </div>
        </header>
    )
}

