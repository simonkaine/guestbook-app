import { createContext, useState } from 'react';

export const authContext = createContext();
export function ProvideAuth({children}) {
    const [user, setUser] = useState(null);

    const login = (userName, password) => { 
        const loginIsSuccessful = 
        userName === process.env.AUTH_USERNAME 
        && 
        password === process.env.AUTH_PASSWORD;

        if(loginIsSuccessful) setUser({ userName });
        return loginIsSuccessful;
    };

    const signOut = (callback) => {
        setUser(null);
        callback();
    };

    return (
        <authContext.Provider value={{user, login, signOut}}>
            {children}
        </authContext.Provider>
    )
}