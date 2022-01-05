import { useContext } from "react";
import { authContext } from "../Context/ProvideAuth.jsx";

export function useAuth() {
    const context = useContext(authContext);

    if(context === undefined) {
        throw new Error('Whoops! UseAuth must be used within a ProvideAuth context!')
    }
    return context; 
}