import { useContext, createContext, useState } from "react";

const userContext = createContext();
const UserProvider = ({children}) => {

    const [user, setUser] = useState([]);

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

const useUser = () => {
    const context = useContext(userContext)
    if(context === undefined) {
        throw new Error("Yoooo, things ain't working with your user dawg..")
    } return context
}

export { UserProvider, useUser }