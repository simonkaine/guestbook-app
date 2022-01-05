import { useContext, createContext, useState } from "react";

const InputContext = createContext();
const InputProvider = ({children}) => {

    const [inputs, setInputs] = useState([]);

    return (
        <InputContext.Provider value={{inputs, setInputs}}>
            {children}
        </InputContext.Provider>
    )
}

const useInputs = () => {
    const context = useContext(InputContext)
    if(context === undefined) {
        throw new Error("Yoooo, things ain't working with your 'inputs' dawg..")
    } return context
}

export { InputProvider, useInputs }