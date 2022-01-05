import { useContext, createContext, useState } from "react";

const UserContext = createContext();
const UserProvider = ({children}) => {

    const [user, setUser] = useState('');

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    const context = useContext(UserContext)
    if(context === undefined) {
        throw new Error("Yoooo, things ain't working with your 'user' dawg..")
    } return context;
}

export { UserProvider, useUser }