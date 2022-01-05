import dotenv from 'dotenv';
import { createContext, useState } from 'react';
dotenv.config();

export const authContext = createContext();
export function ProvideAuth({children}) {
    const [user, setUser] = useState(null);


    const login = (username, password) => {
        const loginIsSuccessful = username === process.env.REACT_APP_USERNAME 
        && 
        password === process.env.REACT_APP_PASSWORD;

        if(loginIsSuccessful) setUser({ username });
        return loginIsSuccessful;
    };

    const signout = (callback) => {
        setUser(null);
        callback();
    };

    return (
        <authContext.Provider value={{user, login, signout}}>
            {children}
        </authContext.Provider>
    )
}