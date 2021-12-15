import { useContext, createContext, useState } from "react";

const inputContext = createContext();
const InputProvider = ({children}) => {

    const [input, setInput] = useState([]);

    return (
        <inputContext.Provider value={{input, setInput}}>
            {children}
        </inputContext.Provider>
    )
}

const useInputs = () => {
    const context = useContext(inputContext)
    if(context === undefined) {
        throw new Error("Yoooo, things ain't working with your inputs dawg..")
    } return context
}

export { InputProvider, useInputs }