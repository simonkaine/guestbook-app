import { useState } from 'react';

export function useForm(inputs ={}) {
    const [theFormState, setTheFormState] = useState(inputs);

    const handleFormStateChange = (e) => {
        const { name, value } = e.target;

        setTheFormState((previousState) => {
            return {...previousState, [name]: value}
        })
    }
    return { theFormState, handleFormStateChange };
}